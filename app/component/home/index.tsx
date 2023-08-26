"use client";
import Container from "../Container";
import Overview from "./component/overview";
import IntroCoverImage from "./component/introCover";
import IntroBadgeContainer from "./component/IntroBadgeComponent";
import FeaturedProduct from "./component/featuredProduct";
import MobileDev from "../../../public/images/mobiledev.jpg";
import OurProcess from "./component/ourProcess";

export default function Home() {
  return (
    <>
      {/* Intro Section End */}
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
          <IntroCoverImage image={MobileDev} />
          <IntroBadgeContainer />
        </div>
        {/* Intro Section End */}
      </Container>
      {/* Company Overview Section Start */}
      <Container>
      <Overview />
      </Container>
      {/* Company Overview Section End */}
      {/* Our Products Start */}
      <div className="flex w-[100%] bg-white">
        <FeaturedProduct />
      </div>
      {/* Our Products End */}
      {/* Our Process Start */}
      <OurProcess />
      {/* Our Process End */}
      {/* Tetimonial Start */}
      <Container>
      <div className="lg:mt-[-100px] md:mt-[-100px] sm:mt-[0px] mt-[0px] w-full mx-auto py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="w-[100%] relative isolate overflow-hidden bg-primaryColor px-6 pt-16 sm:rounded-3xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-10 lg:pt-0 items-center justify-center">
      <div className="
      w-full
      grid 
      xl:grid-cols-2
      lg:grid-cols-2
      md:grid-cols-2
      sm:grid-cols-1
      grid-cols-1
      ">
       <div className="w-full flex flex-row items-start justify-end  px-7 py-10">
        <div className="w-[60%] flex flex-col items-start justify-start">
        <h2 className="xl:text-6xl lg:text-6xl font-bold tracking-tight text-white sm:text-3xl text-3xl">What our clients say</h2>
        <p className="mt-3 text-lg leading-8 text-gray-100">Testimonials</p>
        </div>
      </div>
      <div className="w-full flex flex-row items-start justify-end  px-7 py-10" >
      <div
      className={`w-[90%] sm:h-[150px] lg:h-[200px]
       xl:h-[200px] md:h-[200px] h-[200px] lg:w-[90%]
        px-3 py-3 mx-auto flex flex-col items-start
         justify-center border-[1px] rounded-[20px]
          shadow-lg hover:text-white transition
           ease-in-out delay-50
           bg-white 
           hover:-translate-y-1 hover:scale-100 hover:bg-primaryColor duration-300`}
    >
      <h6 className="mb-1 text-md font-bold dark:text-white hover:text-white md:text-xl lg:text-xl ml-2">
        Carter
      </h6>
      <p className="mb-1 text-gl font-normal text-gray-500 hover:text-white md:text-lg lg:text-lg ml-2">
      CodingZone was great! I would definitely use again. Great communication & got the job done in a timely manner. Well priced, good value for money. Would recommend.
      </p>
    </div>
      </div>
      </div>
    </div>
  </div>
      </Container>
      {/* Testimonial End */}
    </>
  );
}
