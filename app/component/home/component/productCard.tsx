"use client";

import React from "react";

interface Props {
  product: any;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="lg:w-[100%] md:w-[100%] w-[200px] bg-white shadow-xl overflow-hidden rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-300 hover:text-white text-gray-600">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <div className="p-5 w-full">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="">{product.description}</p>
        <button className="bg-gray-200 h-[40px] w-[80%] mt-5 rounded-lg">
          <p className="">View More</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
