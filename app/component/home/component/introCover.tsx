"use client";
import Image from "next/image";
import RevealRight from "../../revealRight";
interface IntroCoverImage {
  image: any;
}

const IntroCoverImage: React.FC<IntroCoverImage> = ({ image }) => {
  return (
    <RevealRight className="">
      <div
        className="flex flex-row items-center xl:justify-end lg:justify-end justify-center 
    "
      >
        {" "}
        <Image
          alt="MobileDev"
          src={image}
          className="lg:w-[100%] md:w-[100%] w-[100%]"
        />
      </div>
    </RevealRight>
  );
};

export default IntroCoverImage;
