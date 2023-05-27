import logoImg from "@/assets/images/logo-lite.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface LogoLiteProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

export function LogoLite({
  img = logoImg,
  imgLight = logoImg,
  className = "flex-shrink-0",
}: LogoLiteProps) {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {img ? (
        <Image
          className={`block h-max w-max p-2 bg-[#2A7692] rounded-md ${
            imgLight ? "dark:hidden" : ""
          }`}
          src={img}
          alt="Logo"
          sizes="100px"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden h-auto w-auto dark:block p-2 bg-[#2A7692] rounded-md"
          src={imgLight}
          alt="Logo-Light"
          sizes="100px"
          priority
        />
      )}
    </Link>
  );
}
