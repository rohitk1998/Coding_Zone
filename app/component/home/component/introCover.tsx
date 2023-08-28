"use client";

import Image from "next/image";

interface IntroCoverImage {
  image : any
}
const IntroCoverImage : React.FC<IntroCoverImage> = ({ image  }) => {
  return (
    <div className="flex flex-row items-center xl:justify-end lg:justify-end justify-center 
    transition
        ease-in-out 
        delay-200
        hover:-translate-y-1 
        hover:scale-110 
        duration-300
    ">
      <Image
        alt="MobileDev"
        src={image}
        className="lg:w-[100%] md:w-[90%] w-[100%]"
      />
    </div>
  );
};

export default IntroCoverImage;
