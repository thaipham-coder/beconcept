import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

export interface NcImageProps extends ImageProps {
  containerClassName?: string;
}

export function NcImage({
  containerClassName,
  alt = "nc-imgs",
  className = "object-cover w-full h-full",
  ...args
}: NcImageProps) {
  return (
    <div className={containerClassName}>
      <Image className={className} alt={alt} {...args} />
    </div>
  );
};
