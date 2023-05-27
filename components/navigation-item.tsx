"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import CardCategory3 from "@/components/CardCategories/CardCategory3";
import React, { Fragment, useState } from "react";

export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "none";
  isNew?: boolean;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

export function NavigationItem({ menuItem }: NavigationItemProps) {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);
    if (!menu.children) {
      return null;
    }
    return (
      <Popover
        as="li"
        className="menu-item flex-shrink-0 menu-megamenu menu-megamenu--large"
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menu)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-300 delay-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-300 delay-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="invisible sub-menu absolute top-full inset-x-0 transform z-50"
              >
                <div className="bg-white dark:bg-neutral-900 shadow-lg">
                  <div className="container">
                    <div className="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14">
                      <div className="flex-1 grid grid-cols-4 gap-6 xl:gap-8 pr-6 xl:pr-8">
                        {menu.children?.map((item, index) => {
                          if (item.type) {
                            return renderDropdownMenuNavlinkHasChild(item);
                          } else {
                            return (
                              <div key={index}>
                                <p className="font-bold text-base text-slate-900 dark:text-neutral-200">
                                  {item.name}
                                </p>
                                <ul className="grid space-y-4 mt-4">
                                  {item.children?.map(renderMegaMenuNavlink)}
                                </ul>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <div className="w-[40%] xl:w-[35%]">{`<CardCategory3 />`}</div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      // <li
      //   className={`menu-item flex-shrink-0 menu-megamenu menu-megamenu--large`}
      // >
      //   {renderMainItem(menu)}

      //   <div className="invisible sub-menu absolute top-full inset-x-0 transform z-50">
      //     <div className="bg-white dark:bg-neutral-900 shadow-lg">
      //       <div className="container">
      //         <div className="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14">
      //           <div className="flex-1 grid grid-cols-4 gap-6 xl:gap-8 pr-6 xl:pr-8">
      //             {menu.children.map((item, index) => (
      //               <div key={index}>
      //                 <p className="font-bold text-base text-slate-900 dark:text-neutral-200">
      //                   {item.name}
      //                 </p>
      //                 <ul className="grid space-y-4 mt-4">
      //                   {item.children?.map(renderMegaMenuNavlink)}
      //                 </ul>
      //               </div>
      //             ))}
      //           </div>
      //           <div className="w-[40%] xl:w-[35%]">{`<CardCategory3 />`}</div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </li>
    );
  };

  const renderMegaMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id} className={`${item.isNew ? "menuIsNew" : ""}`}>
        <Link
          className="font-semibold text-base text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
          href={{
            pathname: item.href || undefined,
          }}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  // ===================== MENU DROPDOW =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);
    return (
      <Popover
        as="li"
        className="menu-item menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menuDropdown)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-300 delay-100"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-300 delay-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute transform z-10 w-56 top-full left-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {menuDropdown.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlinkHasChild = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as="li"
        key={item.id}
        className="menu-item menu-dropdown relative px-2"
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMouseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderDropdownMenuNavlink(item)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute z-10 w-56 left-full pl-2 top-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {item.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlink = (item: NavItemType) => {
    return (
      <Link
        className="flex items-center  font-bold text-base text-neutral-6000 dark:text-neutral-400 py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        href={{
          pathname: item.href || undefined,
        }}
      >
        {item.name}
        {item.type && (
          <ChevronDownIcon
            className="ml-2 h-4 w-4 text-neutral-500"
            aria-hidden="true"
          />
        )}
      </Link>
    );
  };

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return (
      <div className="h-20 flex-shrink-0 flex items-center">
        <Link
          className="inline-flex items-center text-sm lg:text-base font-bold text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          href={{
            pathname: item.href || undefined,
          }}
        >
          {item.name}
          {item.type && (
            <ChevronDownIcon
              className="ml-1 -mr-1 h-4 w-4 text-slate-400"
              aria-hidden="true"
            />
          )}
        </Link>
      </div>
    );
  };

  switch (menuItem.type) {
    case "dropdown":
      return renderDropdownMenu(menuItem);
    case "megaMenu":
      return renderMegaMenu(menuItem);
    default:
      return (
        <li className="menu-item flex-shrink-0">{renderMainItem(menuItem)}</li>
      );
  }
}
