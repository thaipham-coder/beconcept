import facebook from "@/assets/images/socials/facebook.svg";
import telegram from "@/assets/images/socials/telegram.svg";
import twitter from "@/assets/images/socials/twitter.svg";
import youtube from "@/assets/images/socials/youtube.svg";
import Image from "next/image";
import React, { FC } from "react";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
}

const socialsDemo = [
  { name: "Facebook", icon: facebook, href: "#" },
  { name: "Twitter", icon: twitter, href: "#" },
  { name: "Youtube", icon: youtube, href: "#" },
  { name: "Telegram", icon: telegram, href: "#" },
];

export function SocialsList({
  className = "",
  itemClass = "block w-6 h-6",
}: SocialsListProps) {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
    >
      {socialsDemo.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <Image sizes="40px" src={item.icon} alt="" />
        </a>
      ))}
    </nav>
  );
}
