"use client";

import { Transition, Dialog } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import NavMobile from "./navmobile";
import { i18n } from "@/i18n-config";
import { NavItemType } from "./navigation-item";
import { NAVIGATION_EN, NAVIGATION_VI } from "@/config/marketing";

export interface MenuBarProps { }

export function MenuBar({ lang }: any) {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="fixed left-0 top-0 bottom-0 w-full max-w-md md:w-auto z-max outline-none focus:outline-none">
            <React.Fragment>
              <Transition.Child
                as={Fragment}
                enter="transition duration-100 transform"
                enterFrom="opacity-0 -translate-x-14"
                enterTo="opacity-100 translate-x-0"
                leave="transition duration-150 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-14"
              >
                <div className="z-20 relative">
                  {i18n.locales.map((locale) => {
                    let navigationItems: NavItemType[] = [];
                    switch (locale) {
                      case 'en':
                        navigationItems = NAVIGATION_EN;
                        break;
                      case 'vi':
                        navigationItems = NAVIGATION_VI;
                        break;
                      // Add cases for other supported languages

                      default:
                        break; // Handle unsupported languages
                    }

                    if (locale === lang) {
                      return (
                        <NavMobile onClickClose={handleCloseMenu} data={navigationItems} />
                      );
                    }
                    return null;
                  })}

                </div>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter=" duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave=" duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
              </Transition.Child>
            </React.Fragment>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {renderContent()}
    </>
  );
}
