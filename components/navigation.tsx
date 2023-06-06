import { NavItemType, NavigationItem } from "./navigation-item";
import { NAVIGATION_EN, NAVIGATION_VI } from "@/config/marketing";
import { i18n } from "@/i18n-config";
import React from "react";

export function Navigation({ lang }: any) {

  return (
    <ul className="nc-Navigation flex items-center">
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
            <React.Fragment key={locale}>
              {navigationItems.map((item) => (
                <NavigationItem key={item.id} menuItem={item} />
              ))}
            </React.Fragment>
          );
        }
        return null;
      })}
    </ul>
  );
}
