import logoLightImg from "@/assets/images/logo-light.svg";
import logoImg from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

export function Logo({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <Image
          className={`block h-8 sm:h-10 w-auto ${
            imgLight ? "dark:hidden" : ""
          }`}
          src={img}
          alt="Logo"
          sizes="200px"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden h-8 sm:h-10 w-auto dark:block"
          src={imgLight}
          alt="Logo-Light"
          sizes="200px"
          priority
        />
      )}
    </Link>
  );
}
