"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CommonBadgeProps {
    icon : any , 
    heading : string , 
    description : string 
}

const CommonBadge : React.FC<CommonBadgeProps> = ({ icon , heading, description }) => {
  return (
    <div className="block p-2 cursor-pointer">
      <div
        className="
  flex
  flex-row
  items-center 
  justify-start
  gap-5
  "
      >
        <div
          className="
    flex
    flex-row
    items-center 
    justify-center
    border-[1px] 
    p-3 
    rounded-[10px]
    bg-primaryColor
    "
        >
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "white", width: "20px", height: "20px" }}
          />
        </div>
        <div
          className="
        inline-block"
        >
          <h3 className="text-xl font-medium color text-secondaryColor">
            {heading}
          </h3>
          <h4 className="text-sm-100 font-normal text-gray-400">{description ? description : ""}</h4>
        </div>
      </div>
    </div>
  );
};

export default CommonBadge;
