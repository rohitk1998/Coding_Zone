"use client";

import Image from "next/image";
import MobileDev from "../../../../public/images/mobiledev.jpg";

const IntroCoverImage = () => {
  return (
    <div className="flex flex-row items-center xl:justify-end lg:justify-end justify-center">
      <Image
        alt="MobileDev"
        src={MobileDev}
        className="lg:w-[90%] md:w-[90%] w-[100%]"
      />
    </div>
  );
};

export default IntroCoverImage;
