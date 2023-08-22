"use client";

import Container from "../component/Container";
import Image from "next/image";
import SoftwareDevelopment from "../../public/images/softwaredevelopemnt.jpg";
import MobileDev from "../../public/images/mobiledev.jpg";

export default function Home() {
  return (
    <>
      <Container>
        <div
          className="
            lg:pt-[160px]
            md:pt-[10px]
            sm:pt-[40px]
            pt-[60px]
            grid 
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-1 
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-2"
        >
          <div className="flex flex-row items-center xl:justify-end lg:justify-end justify-center">
            <Image
              alt="MobileDev"
              src={MobileDev}
              className="lg:w-[90%] md:w-[90%] w-[100%]"
            />
          </div>
          <div className="flex flex-row items-center justify-start">
            <div
              className="
            grid 
            grid-row-1 
            sm:grid-row-1 
            md:grid-row-1 
            lg:grid-row-2
            xl:grid-row-2
            2xl:grid-row-2
            "
            >
              <div className="w-[90%] mx-auto flex flex-row items-center xl:justify-end lg:justify-end justify-center rounded-[20px]">
                <h1 className="mb-4 text-3xl font-serif font-extrabold text-black dark:text-white md:text-4xl lg:text-6xl ml-2 text-center">
                  From Concept to Code, We Turn Ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-orange-500">
                    Intuitive and Impactful
                  </span>{" "}
                  Software.
                </h1>
              </div>
              <div className="flex flex-row items-center justify-center w-[100%]">
                <div
                  className="
            grid 
            grid-row-1 
            sm:grid-row-1 
            md:grid-row-1 
            lg:grid-row-2
            xl:grid-row-2
            2xl:grid-row-2
            "
                >
                  <div className="flex flex-row items-center justify-center w-[100%]">
                    <div
                      className="
            grid 
            grid-cols-1
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-2
            p-3
            w-full  
            gap-6 
            "
                    >
                      <div className="w-[90%] sm:h-[150px] lg:h-[200px] xl:h-[200px] md:h-[200px] h-[200px] lg:w-[200px] px-3 py-3 mx-auto flex flex-col items-start justify-center border-[1px] rounded-[20px] shadow-lg hover:text-white transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-300">
                        <h6 className="mb-1 text-lg font-extrabold dark:text-white hover:text-white md:text-md lg:text-lg ml-2">
                          ANDROID App Development
                        </h6>
                        <p className="mb-1 text-sm font-normal dark:text-white hover:text-white md:text-sm lg:text-sm ml-2">
                          We create mobile applications using Native Stacks,
                          Android Studio and Flutter.
                        </p>
                      </div>
                      <div className="w-[90%] sm:h-[150px] lg:h-[200px] xl:h-[200px] md:h-[200px] h-[200px] lg:w-[200px] px-3 py-3 mx-auto flex flex-col items-start justify-center border-[1px] rounded-[20px] shadow-lg hover:text-white transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-300">
                        <h6 className="mb-1 text-lg font-extrabold dark:text-white hover:text-white md:text-md lg:text-lg ml-2">
                          WEB App Development
                        </h6>
                        <p className="mb-1 text-sm font-normal dark:text-white hover:text-white md:text-sm lg:text-sm ml-2">
                          We have build sevral Apps, using Reactjs and Nextjs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-center w-[100%]">
                    <div
                      className="
                    grid 
                    grid-cols-1
                    sm:grid-cols-2 
                    md:grid-cols-2 
                    lg:grid-cols-2
                    xl:grid-cols-2
                    2xl:grid-cols-2
                    p-3
                    w-full  
                    gap-6
            "
                    >
                      <div className="w-[90%] sm:h-[150px] lg:h-[200px] xl:h-[200px] md:h-[200px] h-[200px] lg:w-[200px] px-3 py-3 mx-auto flex flex-col items-start justify-center border-[1px] rounded-[20px] shadow-lg hover:text-white transition ease-in-out delay-150 bg-white  hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-300">
                        <h6 className="mb-1 text-lg font-extrabold dark:text-white hover:text-white md:text-md lg:text-lg ml-2">
                          IOS App Development
                        </h6>
                        <p className="mb-1 text-sm font-normal dark:text-white hover:text-white md:text-sm lg:text-sm ml-2">
                          We create mobile applications using Native Stacks,
                          Xcode.
                        </p>
                      </div>
                      <div className="w-[90%] sm:h-[150px] lg:h-[200px] xl:h-[200px] md:h-[200px] h-[200px] lg:w-[200px] px-3 py-3 mx-auto flex flex-col items-start justify-center border-[1px] rounded-[20px] shadow-lg hover:text-white transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-primaryColor duration-300">
                        <h6 className="mb-1 text-lg font-extrabold dark:text-white hover:text-white md:text-md lg:text-lg ml-2">
                          UI/UX
                        </h6>
                        <p className="mb-1 text-sm font-normal dark:text-white hover:text-white md:text-sm lg:text-sm ml-2">
                          We have provided best pixel prefect designs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Intro Section End */}
      </Container>
      {/* Company Overview Section Start */}
      <div
        className="w-full
       lg:mt-[55px]
       md:mt-[30px]
       sm:mt-[60px]
       mt-[30px]
       px-4
       py-10
       bg-secondaryColor
      "
      >
        <div className="w-[75%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-3xl lg:text-4xl ml-2">
            Our Team
          </h1>
          <h1 className="mb-4 text-xl font-normal text-white md:text-2xl lg:text-2xl ml-2 text-center">
            We solve complex business challenges through agility and innovation.
          </h1>
        </div>
        <div
          className="
           grid 
           grid-cols-4
           sm:grid-cols-4 
           md:grid-cols-4 
           lg:grid-cols-4
           xl:grid-cols-4
           2xl:grid-cols-4
           "
        >
          <div className="p-2 mx-auto flex flex-col items-start xl:justify-center lg:justify-cetner justify-center lg:mt-0 md:mt-0 sm:mt-5 mt-5">
            <h1 className="text-3xl font-bold text-white md:text-3xl lg:text-4xl">
              1+
            </h1>
            <p className="mb-1 text-sm font-normal text-white md:text-sm lg:text-sm">
              Year In Buisness
            </p>
          </div>
          <div className="p-2 mx-auto flex flex-col items-start xl:justify-center lg:justify-cetner justify-center lg:mt-0 md:mt-0 sm:mt-5 mt-5">
            <h1 className="text-3xl font-bold text-white md:text-3xl lg:text-4xl">
              20+
            </h1>
            <p className="mb-1 text-sm font-normal text-white md:text-sm lg:text-sm">
              Product Delivered
            </p>
          </div>
          <div className="p-2 mx-auto flex flex-col items-start xl:justify-center lg:justify-cetner justify-center lg:mt-0 md:mt-0 sm:mt-5 mt-5">
            <h1 className="text-3xl font-bold text-white md:text-3xl lg:text-4xl">
              20+
            </h1>
            <p className="mb-1 text-sm font-normal text-white md:text-sm lg:text-sm">
              Satisfied Client
            </p>
          </div>
          <div className="p-2 mx-auto flex flex-col items-start xl:justify-center lg:justify-cetner justify-center lg:mt-0 md:mt-0 sm:mt-5 mt-5">
            <h1 className="text-3xl font-bold text-white md:text-3xl lg:text-4xl">
              10+
            </h1>
            <p className="mb-1 text-sm font-normal text-white md:text-sm lg:text-sm">
              Team Members
            </p>
          </div>
        </div>
      </div>
      {/* Company Overview Section End */}
      {/* Our Products Start */}
      <div className="flex w-full h-[100vh] bg-white"></div>
      {/* Our Products End */}
    </>
  );
}
