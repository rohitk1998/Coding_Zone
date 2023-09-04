"use client";

import React from "react";
import Reveal from "../../reveal";
import Image from "next/image";

interface Props {
  product: any;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="group relative lg:w-[100%] md:w-[100%] w-[100%] rounded-2xl hover:rounded-2xl hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-200 hover:text-white text-black overflow-hidden"
    >
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 border-[1px]"
      />
      <div className="p-5 w-full">
        <Reveal className="">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        </Reveal>
        <Reveal className="">
        <p className="text-md font-medium text-gray-700 group-hover:text-white mt-4">{product.description}</p>
        </Reveal>
      </div>
      <div className="pb-3 w-full flex flex-row justify-center items-center">
        <button className="text-center font-semibold shadow-sm h-[40px] w-[60%] mt-5 rounded-lg bg-transparent border-[1px] group-hover:border-none group-hover:bg-secondaryColor bg-primaryColor text-black group-hover:text-white"
        onClick={()=> window.open(product.link)}
        >
        <Reveal className="">
        <p className="text-sm">View Detail</p>
        </Reveal>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
