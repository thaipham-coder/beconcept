import LocaleSwitcher from "./locale-switcher";
import { LogoLite } from "./ui/logo-lite";
import { CustomLink } from "@/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Getting started",
    menus: [
      { href: "#", label: "Release Notes" },
      { href: "#", label: "Upgrade Guide" },
      { href: "#", label: "Browser Support" },
      { href: "#", label: "Dark Mode" },
    ],
  },
  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "#", label: "Prototyping" },
      { href: "#", label: "Design systems" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Security" },
    ],
  },
  {
    id: "2",
    title: "Resources",
    menus: [
      { href: "#", label: "Best practices" },
      { href: "#", label: "Support" },
      { href: "#", label: "Developers" },
      { href: "#", label: "Learn design" },
    ],
  },
];

export function SiteFooter() {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-md">
        <h2 className="font-bold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-sm font-semibold text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="nc-Footer relative pt-10 lg:pt-20 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 lg:grid-cols-4 md:gap-x-10 ">
        <div className="grid gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-1 flex gap-1">
            <div className="flex-inital">
              <LogoLite />
            </div>
            {" "}
            <div className="text-sm font-bold">
              Công Ty TNHH Trang Trí Nội Thất BEConcept
              <br />
              {'(viết tắt BECONCEPT CO. LTD)'}
            </div>
          </div>
          <div className="col-span-1 flex items-center md:col-span-3 text-sm font-semibold">
            Lầu 6, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, khu phố 1, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>

      <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 sm:flex-row sm:gap-2 sm:px-0">
          <p className="text-center text-sm font-bold leading-loose md:text-left">
            {'Copyright © 2023 '}{" "}
            BECONCEPT CO.,LTD
            .
            {" "}
            All rights reserved.
          </p>
        </div>
        <LocaleSwitcher />
      </div>
    </footer>
  );
}
