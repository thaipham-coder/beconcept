import facebook from "@/assets/images/socials/facebook.svg";
import telegram from "@/assets/images/socials/telegram.svg";
import twitter from "@/assets/images/socials/twitter.svg";
import youtube from "@/assets/images/socials/youtube.svg";
import { SocialType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: "Facebook", icon: facebook, href: "#" },
  { name: "Youtube", icon: youtube, href: "#" },
  { name: "Telegram", icon: telegram, href: "#" },
  { name: "Twitter", icon: twitter, href: "#" },
];

export function SocialsList1({ className = "space-y-3" }: SocialsList1Props) {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
        <div className="flex-shrink-0 w-5 ">
          <Image sizes="40px" src={item.icon} alt="" />
        </div>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
}
