"use client";

import React from "react";
import Image from "next/image";

interface RoundedCardProps {
  mainHeading: string;
  paragraph: string;
  index: number;
  icon: any;
}

const RoundedCard: React.FC<RoundedCardProps> = ({
  mainHeading,
  paragraph,
  index,
  icon,
}) => {
  return (
    <div
      className="
        mx-auto 
        flex 
        flex-col 
        items-center
        justify-center 
        border-[1px] 
        rounded-[20px]
        shadow-lg 
        hover:text-white 
        transition
        ease-in-out 
        delay-50
        hover:-translate-y-1 
        hover:scale-100 
        hover:bg-primaryColor 
        duration-200
        p-4
        w-[90%] lg:w-[230px] xl:w-[280px]
        xl:h-[200px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[200px] 
        "
    >
      <div
        className="
      w-full 
      items-center 
      xl:justify-start
      lg:justify-start 
      md:justify-start
      justify-start
      flex 
      flex-row
      "
      >
        <Image
          src={icon}
          alt="android icon"
          className="w-[60px] h-[60px] xl:ml-0 ml-1 mb-1"
        />
        <h6 className="text-lg font-extrabold dark:text-white hover:text-white md:text-md lg:text-lg ml-6">
          {mainHeading}
        </h6>
      </div>
      <div className="mt-3 w-full items-start justify-start flex flex-row">
        <p className="mb-1 text-sm font-normal dark:text-white hover:text-white md:text-sm lg:text-sm ml-2">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default RoundedCard;
