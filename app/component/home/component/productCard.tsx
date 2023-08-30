"use client";

import Image from "next/image";
import React from "react";
import Reveal from "../../reveal";

interface Props {
  product: any;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="group border-[1px] relative lg:w-[100%] md:w-[100%] w-[100%] bg-white overflow-hidden rounded-2xl hover:rounded-2xl hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-200 hover:text-white text-black">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <div className="p-5 w-full">
        <Reveal className="">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        </Reveal>
        <Reveal className="">
        <p className="">{product.description}</p>
        </Reveal>
      </div>
      <div className="pb-3 w-full flex flex-row justify-center items-center">
        <button className="text-center font-semibold shadow-sm h-[40px] w-[60%] mt-5 rounded-lg bg-transparent border-[1px] group-hover:border-none group-hover:bg-secondaryColor bg-primaryColor text-black group-hover:text-white">
        <Reveal className="">
        <p className="text-sm">View Detail</p>
        </Reveal>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
