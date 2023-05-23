import { NavigationItem } from "./navigation-item";
import { NAVIGATION_DEMO_2 } from "@/config/marketing";
import React from "react";

export function Navigation() {
  return (
    <ul className="nc-Navigation flex items-center">
      {NAVIGATION_DEMO_2.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}
