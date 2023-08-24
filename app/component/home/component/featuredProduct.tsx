"use client";

import IntroBadgeContainer from "./IntroBadgeComponent";
import ProductSection from "./productCrousal";
import ProductCrousal from "./productCrousal";

const FeaturedProduct = () => {
  return (
    <div
      className="w-full
       lg:mt-[30px]
       md:mt-[30px]
       sm:mt-[60px]
       mt-[30px]
       px-4
       py-10
      "
    >
      <div className="w-[75%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
        <h1 className="mb-4 text-3xl font-bold text-black md:text-3xl lg:text-4xl ml-2">
          Produced Product
        </h1>
        <h1 className="mb-4 text-xl font-normal text-black md:text-2xl lg:text-2xl ml-2 text-center">
          Our Case Studies
        </h1>
      </div>
      <div
        className="
        flex flex-row items-center xl:justify-center lg:justify-center justify-center
        w-[100%] p-9 mx-auto
           "
      >
        <ProductSection />
        {/* <ProductCrousal /> */}
      </div>
    </div>
  );
};

export default FeaturedProduct;
