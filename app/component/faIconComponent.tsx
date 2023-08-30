'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FaIconProps {
  iconName: any;
  iconStyle: object | any;
  className: string;
}

const FaIconComponent : React.FC<FaIconProps> = ({ iconName, iconStyle, className }) => {
  return (
    <FontAwesomeIcon icon={iconName} style={iconStyle} className={className} />
  );
};

export default FaIconComponent ; 
