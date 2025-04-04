"use client";
import ProductCard from "./productCard";
import { PRODUCED_APPS } from "@/app/common/constants";

const ProductSection = () => {
  return (
    <div className="flex flex-row items-center justify-around w-[100%] p-0 mt-[50px]">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 justify-center">
            {PRODUCED_APPS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
