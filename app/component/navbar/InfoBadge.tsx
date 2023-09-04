"use client";

import { faLocationDot,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CommonBadge from "./commonBadge";

const InfoBadge = () => {
  return (
    <div
      className="
      hidden
      lg:flex
      flex-row
      items-center 
      justify-end
      gap-3
      "
    >
      <CommonBadge
        icon={faLocationDot}
        heading="Coding Zone Solutions"
        description="Phase 8B sector 74 Mohali"
        clickable={false}
      />
      <CommonBadge
        icon={faEnvelope}
        heading="Mail Us On"
        description="contact@codingzonesolutions.in"
        clickable={true}
      />
    </div>
  );
};

export default InfoBadge;
