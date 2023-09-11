"use client";

import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CommonBadge from "./commonBadge";
import { GOOGLE_MAP_URL } from "@/app/common/constants";

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
        clickable={true}
        url={GOOGLE_MAP_URL}
      />
      <CommonBadge
        url="https://mail.google.com/mail/u/0/#inbox?compose=new"
        icon={faEnvelope}
        heading="Mail Us On"
        description="contact@codingzonesolutions.in"
        clickable={true}
      />
    </div>
  );
};

export default InfoBadge;
