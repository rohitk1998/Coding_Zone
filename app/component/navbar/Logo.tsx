"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
    <Image
      alt="Coding_Zone"
      className="md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/CodingZoneLogo.png"
    />
    </Link>
    
  );
};

export default Logo;
