"use client";

import { ButtonPrimary } from "./ui/buttonprimary";
import { Next } from "./ui/next";
import { Prev } from "./ui/prev";
import backgroundLineSvg from "@/assets/images/Moon.svg";
import imageRightPng2 from "@/assets/images/hero-right-2.jpg";
import imageRightPng3 from "@/assets/images/hero-right-3.jpg";
import imageRightPng from "@/assets/images/hero-right.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useBoolean from "react-use/lib/useBoolean";
import useInterval from "react-use/lib/useInterval";

interface HeroDataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: any;
}
export interface SectionHeroProps {
  className?: string;
}

const DATA: HeroDataType[] = [
  {
    image: imageRightPng2,
    heading: "Thiết Kế Và Xây Dựng Nhà Phố",
    subHeading: "BEConcept chuyên thiết kế, thi công, sửa chữa, xây dựng nhà phố chuyên nghiệp uy tín, hoàn thiện nhà thô với hàng ngàn mẫu nhà từ  cổ điển đến hiện đại, tô điểm mái ấm gia đình bạn.",
    btnText: "Xem Thêm",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Thiết Kế Và Xây Dưng Căn Hộ",
    subHeading: "Khâu hoàn thiện nhà vô cùng quan trọng trong việc quyết định công năng cũng như tính thẩm mỹ của ngôi nhà bạn về sau, lựa chọn đúng đơn vị thi công có thể tránh lãng phí thời gian, tiền bạc và công sức.",
    btnText: "Xem Thêm",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Thi Công Hoàn Thiện",
    subHeading: "In this season, find the best 🔥",
    btnText: "Xem Thêm",
    btnLink: "/",
  },
];
let TIME_OUT: NodeJS.Timeout | null = null;

export function SectionHero({ className = "" }: SectionHeroProps) {
  // =================
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      handleAutoNext();
    },
    isRunning ? null : 5500
  );
  //

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 1000);
  };
  // =================

  const renderItem = (index: number) => {
    const isActive = indexActive === index;
    const item = DATA[index]!;
    if (!isActive) {
      return null;
    }
    return (
      <div
        className={`nc-SectionHero2Item nc-SectionHero2Item--animation flex flex-col-reverse min-h-screen lg:flex-col relative overflow-hidden ${className}`}
        key={index}
      >
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          {DATA.map((_, index) => {
            const isActive = indexActive === index;
            return (
              <div
                key={index}
                onClick={() => {
                  setIndexActive(index);
                  handleAfterClick();
                }}
                className={`relative px-1 py-1.5 cursor-pointer`}
              >
                <div
                  className={`relative w-20 h-1 shadow-sm rounded-md bg-white`}
                >
                  {isActive && (
                    <div
                      className={`nc-SectionHero2Item__dot absolute inset-0 bg-slate-900 rounded-md ${isActive ? " " : " "
                        }`}
                    ></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <Prev
          className="absolute left-1 sm:left-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-white"
          btnClassName="w-12 h-12"
          svgSize="w-6 h-6"
          onClickPrev={handleClickPrev}
        />
        <Next
          className="absolute right-1 sm:right-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-white"
          btnClassName="w-12 h-12"
          svgSize="w-6 h-6"
          onClickNext={handleClickNext}
        />

        <div className="relative container pb-0 pt-14 sm:pt-20 lg:py-60">
          <div className={`relative z-[1] w-full max-w-3xl nc-SectionHero2Item__left`}>
            <div className="space-y-5 sm:space-y-6 py-2">
              <h2 className="nc-SectionHero2Item__heading font-semibold text-2xl sm:text-3xl md:text-4xl !leading-[100%] text-slate-900">
                {item.heading}
              </h2>
              <span className="nc-SectionHero2Item__subheading block text-base md:text-xl text-slate-900 font-medium">
                {item.subHeading}
              </span>
            </div>
            <Link href={item?.btnLink}>
              <ButtonPrimary
                className="nc-SectionHero2Item__button dark:bg-slate-900"
                sizeClass="py-3 px-6 sm:py-5 sm:px-9"
              >
                <span>{item.btnText}</span>
                <span>
                  <svg
                    className="w-5 h-5 ml-2.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 22L20 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:absolute right-0 bottom-0 top-0 w-full">
          <Image
            fill
            sizes="(max-width: 1920px) 100vw, 50vw"
            className="w-full h-full object-cover object-center nc-SectionHero2Item__image"
            src={item.image}
            alt={item.heading}
            priority
          />
        </div>
      </div>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
}
