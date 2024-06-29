"use client";

import Reveal from "../../reveal";

const OverviewHeading = () => {
  return (
    <div className="w-[75%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
      <Reveal className="w-full">
      <h1 className="mb-4 text-3xl font-bold text-white md:text-3xl lg:text-5xl ">
        Our Team
      </h1>
      </Reveal>
      <Reveal className="w-full">
      <h1 className="mb-4 text-md font-normal text-white md:text-2xl lg:text-2xl text-center">
        We solve complex business challenges through agility and innovation.
      </h1>
      </Reveal>
    </div>
  );
};

export default OverviewHeading;
