import Button, { ButtonProps } from "./button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

export function ButtonPrimary({ className = "", ...args }: ButtonPrimaryProps) {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl ${className}`}
      {...args}
    />
  );
}
