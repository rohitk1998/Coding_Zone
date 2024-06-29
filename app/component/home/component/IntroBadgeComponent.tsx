"use client";
import IntroHeading from "./introHeading";
import { WORK_OVERVIEW } from "@/app/common/constants";
import RoundedCard from "./roundedcard";

const IntroBadgeContainer = () => {
  return (
    <div className="flex flex-row items-center justify-start">
      <div
        className="
        grid 
        grid-row-1 
        sm:grid-row-1 
        md:grid-row-1 
        lg:grid-row-2
        xl:grid-row-2
        2xl:grid-row-2
        "
      >
        <IntroHeading />
        <div className="flex flex-row items-center justify-center w-[100%]">
          <div
            className="
        grid 
        grid-row-1 
        sm:grid-row-1 
        md:grid-row-1 
        lg:grid-row-2
        xl:grid-row-2
        2xl:grid-row-2
        "
          >
            <div className="flex flex-row items-center justify-between w-[100%]">
              <div
                className="
        grid 
        grid-cols-1
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-2
        xl:grid-cols-2
        2xl:grid-cols-2
        p-3
        w-full  
        gap-3
        xl:gap-6
        lg:gap-6 
        "
              >
                {WORK_OVERVIEW.map((item, idx) => {
                  console.log(item,"iteem------->")
                  return (
                    <RoundedCard
                      key={item.id}
                      index={idx}
                      icon={item.icon}
                      mainHeading={item.mainHeading}
                      paragraph={item.description}
                    />
                  );
                }).slice(0, 2)}
              </div>
            </div>
            <div className="flex flex-row items-start justify-center w-[100%]">
              <div
                className="
                grid 
                grid-cols-1
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-2
                xl:grid-cols-2
                2xl:grid-cols-2
                p-3
                w-full  
                gap-3
                xl:gap-6
                lg:gap-6 

        "
              >
                {WORK_OVERVIEW.map((item, idx) => {
                  return (
                    <RoundedCard
                      key={idx}
                      index={idx}
                      icon={item.icon}
                      mainHeading={item.mainHeading}
                      paragraph={item.description}
                    />
                  );
                }).slice(2, 6)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBadgeContainer;
