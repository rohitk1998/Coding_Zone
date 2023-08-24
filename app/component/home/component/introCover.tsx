"use client";

import Image from "next/image";

interface IntroCoverImage {
  image : any
}
const IntroCoverImage : React.FC<IntroCoverImage> = ({ image  }) => {
  return (
    <div className="flex flex-row items-center xl:justify-end lg:justify-end justify-center">
      <Image
        alt="MobileDev"
        src={image}
        className="lg:w-[90%] md:w-[90%] w-[100%]"
      />
    </div>
  );
};

export default IntroCoverImage;
