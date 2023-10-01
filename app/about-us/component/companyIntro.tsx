'use client';

import Image from "next/image";
import { Container, Reveal } from "@/app/component";
import AboutUsWorking from "../../../public/images/aboutOurWorkings.jpg";

const CompanyIntro = ()=> {
    return(
       <Container>
         <div
        className="
            grid
            xl:grid-cols-2
            lg:grid-cols-2
            md:grid-cols-2
            sm:grid-cols-1
            grid-cols-1
            w-[100%]
            "
      >
        <Image
          alt="about-us"
          src={AboutUsWorking}
        //   className="lg:w-[100%] md:w-[80%] w-[100%]"
          className="w-[100%] max-h-[800px] h-auto object-contain"
          loading="lazy"
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
              md:mt-[3%]
              sm:mt-[2%]
              mt-[2%]
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
            w-[90%]
            mx-auto"
            >
              <Reveal className="">
              <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-4xl lg:text-4xl xl:text-6xl ml-2 text-start">
              Where It All Started
      </h1>
              </Reveal>
            </div>
            <div
              className="flex flex-row justify-start items-center
            w-[90%]
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
       </Container>
    )
}

export default CompanyIntro;