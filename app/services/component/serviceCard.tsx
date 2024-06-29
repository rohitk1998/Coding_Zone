'use client';

import Image from 'next/image';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ item }: { item: any }) => {
  const [isOverview, setIsOverview] = useState(false);

  return (
    <div
      className={`
        hover:bg-secondaryColor
        w-[100%]
        h-[350px]
        flex
        flex-col
        justify-center
        transition
        items-center
        hover:text-white text-black
        `}
      onMouseEnter={() => setIsOverview(true)}
      onMouseLeave={() => setIsOverview(false)}
    >
      {isOverview ? (
        <div
          className="
        w-[100%] 
        h-[350px] 
        flex
        flex-col
        justify-center
        items-start 
        px-10 
        py-3
        hover:text-white text-black
        "
        >
          <AnimatePresence>
            <motion.div
              // key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg font-medium">{item.serviceTitle}</p>
              <p className="text-[12px] font-normal">
               {item.description}
              </p>
              <button className="bg-transparent border-[1px] rounded-md h-[35px] w-[150px] mt-3">
                <p className="text-[12px] font-normal">view more</p>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div
          className="
        w-[100%]
        flex
        flex-col
        justify-center
        items-center 
        "
        >
          <Image
            src={item.image}
            alt=""
            width={110}
            height={150}
            className="mb-5"
          />
          <p className="text-lg font-medium text-center">{item.serviceTitle}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
