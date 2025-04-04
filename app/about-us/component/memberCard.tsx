"use client";

import Image from "next/image";
import React from "react";
import { Reveal } from "@/app/component";

interface MemeberCardProps {
  name: string;
  image:  any ;
  designation: string;
  socialLink: string;
  key: any ;
}

const MemberCard: React.FC<MemeberCardProps> = ({
  name,
  image,
  designation,
  socialLink,
  key,
}) => {
  return (
    <div
      className="
      bg-rose-60
      flex
    justify-start
    items-center
    flex-col
    bg-rose-40
    gap-7
    "
    >
      <Reveal className="">
      <Image
        alt=""
        src={image}
        className="
        xl:w-[150px] xl:h-[150px]
        lg:w-[100px] lg:h-[100px]
        md:w-[100px] md:h-[100px]
        sm:w-[100px] sm:h-[100px]
        w-[100px] h-[100px]
        rounded-full text-center object-cover shadow-md"
        loading="lazy"
        width={200}
        height={200}
      />
      </Reveal>
     <div>
     <Reveal className="">
     <h2 className="text-md font-semibold text-black text-center">{name}</h2>
     </Reveal>
     <Reveal className="">
     <h2 className="text-[13px] font-normal text-gray-400 text-center">
        {designation}
      </h2>
     </Reveal>
     </div>
    </div>
  );
};

export default MemberCard;
