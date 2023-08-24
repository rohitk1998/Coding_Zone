'use client';

import React from "react";

interface RoundedCardProps {
  mainHeading: string;
  paragraph: string;
  index: number;
}

const RoundedCard: React.FC<RoundedCardProps> = ({
  mainHeading,
  paragraph,
  index,
}) => {
  return (
    <div
      className={`w-[90%] sm:h-[150px] lg:h-[200px]
       xl:h-[200px] md:h-[200px] h-[200px] lg:w-[200px]
        px-3 py-3 mx-auto flex flex-col items-start
         justify-center border-[1px] rounded-[20px]
          shadow-lg hover:text-white transition
           ease-in-out delay-150
            ${
        index == 1 || index == 2 ? "bg-gray-100" : "bg-white"
      } hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-300`}
    >
      <h6 className="mb-1 text-lg font-extrabold dark:text-white hover:text-white md:text-md lg:text-lg ml-2">
        {mainHeading}
      </h6>
      <p className="mb-1 text-sm font-normal dark:text-white hover:text-white md:text-sm lg:text-sm ml-2">
        {paragraph}
      </p>
    </div>
  );
};

export default RoundedCard;
