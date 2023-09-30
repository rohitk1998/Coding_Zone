"use client";
import React from "react";
import Image from "next/image";
import AboutUs from "../../public/images/aboutus.jpg";
import AboutUsWorking from "../../public/images/aboutOurWorkings.jpg";
import TeamMembers from "./component/teamMembers";
import { Reveal } from "../component";
import LastSaying from "./component/lastSaying";

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
      <Image
        alt="about-us"
        src={AboutUs}
        className="w-[100%] h-[300px] object-cover"
      />

      <div
        className="
            grid
            xl:grid-cols-2
            lg:grid-cols-2
            md:grid-cols-2
            sm:grid-cols-1
            grid-cols-1
            w-[100%]
            justify-center
            items-start
            "
      >
        <Image
          alt="about-us"
          src={AboutUsWorking}
          className="lg:w-[100%] md:w-[100%] w-[100%]"
          // className="w-[100%] max-h-[800px] h-auto object-contain"
        />
        <div
          className="
              xl:w-[80%]
              lg:w-[90%]
              md:w-[90%]
              sm:w-[90%]
              w-[90%]
              mx-auto
              rounded-md
              xl:mt-[16%]
              lg:mt-[8%]
              md:mt-[8%]
              sm:mt-[8%]
              mt-[8%]
              flex
              flex-cols
              justify-center
              items-center
              xl:mb-0
              lg:mb-6
              md:mb-5
              mb-5
              "
        >
          <div
            className="grid grid-rows-3 p-0 mx-auto w-[100%] bg-primaryColor
            md:max-h-[400px]
            lg:max-h-[700px]
            xl:max-h-[600px]
            sm:max-h-[600px]
            max-h-[600px]
            xl:h-[500px]
            "
          >
            <div
              className="flex flex-row justify-start items-center
            w-[70%]
            mx-auto"
            >
              <Reveal className="">
                <h1 className="xl:text-4xl lg:text-3xl md:text-xl sm:text-xl text-xl text-white font-bold">
                  Coding Zone
                </h1>
              </Reveal>
            </div>
            <div
              className="flex flex-row justify-center items-center
            w-[70%]
            mx-auto
            "
            >
              <Reveal className="">
                <h1 className="xl:text-md lg:text-md md:text-[16px] sm:text-sm text-sm text-white font-normal">
                  who want to know more about your business. About Us pages are
                  where you showcase your history, what is unique about your
                  work, your company’s values, and who you serve. The design,
                  written content, and visual or video elements together tell an
                  important story about who you are and why you do it.
                </h1>
              </Reveal>
            </div>
            <div
              className="flex flex-row justify-end items-center
            w-[70%]
            mx-auto
            "
            >
              <Reveal className="">
                <h1 className="xl:text-md lg:text-md md:text-md sm:text-sm text-white font-normal">
                  Coding Zone Solutions.
                </h1>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <TeamMembers />
      <LastSaying/>
    </div>
  );
};

export default About;
