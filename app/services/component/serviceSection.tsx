"use client";

import React from "react";
import Image from "next/image";
import Reveal from "../../component/reveal";

interface ServiceSectionProps {
  mainHeading: string;
  paragraph: string;
  index: number;
  icon: any;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  mainHeading,
  paragraph,
  index,
  icon,
}) => {
  return (
    <Reveal className="">
      <div
        className="
        mx-auto 
        flex 
        flex-col 
        items-start
        justify-start 
        border-[1px] 
        rounded-[20px]
        transition
        ease-in-out 
        delay-50
        hover:-translate-y-1 
        hover:scale-[100%] 
        hover:bg-primaryColor 
        duration-200
        p-4
        w-[220px] lg:w-[280px] xl:w-[340px]
        xl:h-[200px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[200px] 
        group
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
            className="w-[20%] xl:ml-0 ml-1 mb-1"
          />
          <h6 className="w-[60%] text-md font-semibold text-black group-hover:text-white md:text-md lg:text-lg xl:text-2xl ml-6">
            {mainHeading}
          </h6>
        </div>
        <div className="mt-3 w-full items-start justify-start flex flex-row">
          <p className="mb-1 lg:text-md md:text-md text-sm font-normal text-gray-400 group-hover:text-white md:text-md lg:text-md ml-2">
            {paragraph}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default ServiceSection;
