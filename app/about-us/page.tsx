"use client";

import Image from "next/image";
import AboutUs from "../../public/images/aboutus.jpg";
import AboutUsWorking from "../../public/images/aboutOurWorkings.jpg";

const About = () => {
  return (
    <div
      className="
        lg:pt-[140px]
        xl:pt-[140px]
        md:pt-[40px]
        sm:pt-[60px]
        pt-[80px]
        h-[100vh]
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
        className="w-[100%] h-[400px] object-cover"
      />

      <div
        className="
            grid
            grid-cols-2
            w-[100%]
            h-[100vh]
            mt-3
        justify-center
        items-center
            "
      >
        <div
          className="
              bg-rose-300
              w-[100%]
              h-auto
              "
        >
          <Image
            alt="about-us"
            src={AboutUsWorking}
            className="w-[100%] h-[600px] object-cover"
          />
        </div>
        <div
          className="
              bg-gray-100
              w-[90%]
              h-[auto]
              rounded-lg
              p-5
              "
        >
         <div className="grid grid-rows-3">
            <div className="flex flex-shrink flex-row justify-center items-center">
                <h1 className="text-4xl text-black font-bold">
                    Coding Zone
                </h1>
            </div>
            <div className="flex flex-row justify-center items-center
            w-[70%]
            m-auto
            ">
                <h1 className="text-sm text-gray-500 font-normal">
                who want to know more about your business. About Us pages are where you showcase your history, what is unique about your work, your company’s values, and who you serve. The design, written content, and visual or video elements together tell an important story about who you are and why you do it.
                </h1>
            </div>
            <div className="flex flex-row justify-end items-end
            w-[70%]
            m-auto
            ">
                <h1 className="text-xs text-gray-400 font-normal">
            Coding Zone Solutions.
            </h1>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;
