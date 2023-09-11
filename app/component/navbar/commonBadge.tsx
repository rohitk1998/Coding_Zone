"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CommonBadgeProps {
    icon : any , 
    heading : string , 
    description : string ,
    clickable : boolean  , 
    url : string ;
}

const CommonBadge : React.FC<CommonBadgeProps> = ({ icon , heading, description , clickable , url }) => {
  return (
    <div className={`block p-2`}>
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
          <h3 className="text-md font-normal color text-secondaryColor">
            {heading}
          </h3>
          <h4 
          className={`text-sm font-normal text-gray-400 ${clickable ? "cursor-pointer" : ""}`}
          onClick={()=> {
            if(clickable){
              window.open(url)
            }
          }}
          >{description ? description : ""}</h4>
        </div>
      </div>
    </div>
  );
};

export default CommonBadge;
