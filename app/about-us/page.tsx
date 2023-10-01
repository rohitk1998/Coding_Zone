"use client";
import React from "react";
import Image from "next/image";
import TeamMembers from "./component/teamMembers";
import LastSaying from "./component/lastSaying";
import CompanyIntro from "./component/companyIntro";
import TeamVector from "../../public/images/teamVector.svg";
import { Reveal, RevealRight } from "../component";

const About = () => {
  return (
    <div
      className="
        lg:pt-[140px]
        xl:pt-[140px]
        md:pt-[60px]
        sm:pt-[60px]
        pt-[55px]
        w-full
        flex
        flex-col
        justify-start
        items-start
        "
    >
      <div className="bg-secondaryColor w-[100%] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="w-[70%] h-[300px] mx-auto justify-end items-start flex flex-col my-auto">
         <RevealRight className="">
         <h1 className="text-sm font-semibold text-white text-center mb-5">
            ABOUT
          </h1>
         </RevealRight >
         <RevealRight className="">
         <p className="mb-4 text-3xl font-bold text-white md:text-3xl lg:text-5xl">
            Coding Zone is creative, reliable and fast.
          </p>
         </RevealRight>
        </div>
        <div className="w-[100%] h-[400px] mx-auto justify-end items-start flex flex-col">
          <Image
            alt="about-us"
            src={TeamVector}
            className="w-[100%] h-[500px] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <CompanyIntro />

      <TeamMembers />
      <LastSaying />
    </div>
  );
};

export default About;
