import Button, { ButtonProps } from "./button";
import React from "react";

export interface ButtonSecondaryProps extends ButtonProps {}

export function ButtonSecondary({
  className = " border border-slate-300 dark:border-slate-700 ",
  ...args
}: ButtonSecondaryProps) {
  return (
    <Button
      className={`ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 ${className}`}
      {...args}
    />
  );
}
