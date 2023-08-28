"use client";
import { COMPANY_INFORMATION } from "@/app/constants/constants";
import InfoBadge from "./infoBadge";
import OverviewHeading from "./overviewHeading";

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
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
