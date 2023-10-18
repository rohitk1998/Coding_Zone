"use client";

import { WORK_OVERVIEW } from "@/app/common/constants";
import ServiceSection from "./component/serviceSection";
import { Container, Reveal } from "../component";

const ServiceComponent = () => {
  return (
    <div className="w-[100%]">
        <div className="flex flex-row items-center justify-center
        lg:pt-[200px]
        md:pt-[100px]
        sm:pt-[80px]
        pt-[80px]
        mb-[100px]
        ">
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
      <div className="w-[100%] lg:mt-[20px] md:mt-[40px] mt-[20px] mx-auto flex flex-row items-center xl:justify-center lg:justify-center justify-center rounded-[20px]">
      <Reveal className="">
      <h1 className="mb-4 text-3xl font-extrabold text-black dark:text-white md:text-4xl lg:text-4xl xl:text-6xl ml-2 text-center">
        Our Services
      </h1>
      </Reveal>
    </div>
        <div className="flex flex-row items-center justify-center w-[100%]">
            <div className="flex flex-row items-center justify-between w-[100%]">
              <div
                className="
        grid 
        grid-cols-1
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-4
        p-10
        w-full  
        gap-10
        "
              >
                {WORK_OVERVIEW.map((item, idx) => {
                  return (
                    <ServiceSection
                      key={item.id}
                      index={idx}
                      icon={item.icon}
                      mainHeading={item.mainHeading}
                      paragraph={item.description}
                    />
                  );
                })}
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceComponent;
