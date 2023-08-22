"use client";

import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  return (
    <Image
      alt="Coding Zone"
      className="md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/CodingZoneLogo.png"
    />
  );
};

export default Logo;
