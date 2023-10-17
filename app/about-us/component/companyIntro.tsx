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
            md:max-h-[900px]
            lg:max-h-[700px]
            xl:max-h-[800px]
            sm:max-h-[600px]
            max-h-[900px]
            xl:h-[800px]
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
                <h1 className="xl:text-md lg:text-md md:text-[16px] sm:text-sm text-sm text-white font-seminbold">
                Coding Zone Solutions. embarked on its journey into the world of mobile app development just six months ago. Founded in April 2023, our company was born out of a collective passion for technology and a vision to make a significant impact in the mobile application space. Since our inception, we've worked tirelessly to establish ourselves as a dynamic and innovative force in the industry, specializing in Android and iOS app development. Over the past half-year, we've assembled a talented team, conducted extensive market research, and adopted the latest technologies to ensure our clients receive the highest quality solutions. Our commitment to excellence has already resulted in the successful completion of projects spanning various sectors, and we're excited to continue pushing the boundaries of innovation in the months and years ahead.
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
                <h1 className="xl:text-lg lg:text-lg md:text-md sm:text-sm text-white font-bold">
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