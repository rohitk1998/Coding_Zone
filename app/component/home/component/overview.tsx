"use client";
import { COMPANY_INFORMATION } from "@/app/common/constants";
import InfoBadge from "./infoBadge";
import OverviewHeading from "./overviewHeading";
import Reveal from "../../reveal";

const Overview = () => {
  return (
    <div
      className="w-full
      xl:mt-[100px]
       lg:mt-[40px]
       md:mt-[20px]
       sm:mt-[60px]
       mt-[30px]
       px-4
       py-12
       bg-secondaryColor
       rounded-3xl
      "
    >
      <OverviewHeading />
      <Reveal className="w-full">

      <div
        className="
           grid 
           grid-cols-4
           sm:grid-cols-4 
           md:grid-cols-4 
           lg:grid-cols-4
           xl:grid-cols-4
           2xl:grid-cols-4
           "
      >

        {COMPANY_INFORMATION.map((item, index) => {
          return (
             <InfoBadge
              item1={item.totalYr}
              item2={item.description}
              key={index}
            />
           
          )
        })}
      </div>
      </Reveal>

    </div>
  );
};

export default Overview;
