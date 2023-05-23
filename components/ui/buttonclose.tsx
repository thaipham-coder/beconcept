import { twFocusClass } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

export interface ButtonCloseProps {
  className?: string;
  IconclassName?: string;
  onClick?: () => void;
}

export function ButtonClose({
  className = "",
  IconclassName = "w-5 h-5",
  onClick = () => {},
}: ButtonCloseProps) {
  return (
    <button
      className={
        `w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${className} ` +
        twFocusClass()
      }
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <XMarkIcon className={IconclassName} />
    </button>
  );
}
