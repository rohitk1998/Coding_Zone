"use client";

import Container from "../../Container";


const Testimonial = ()=> {
    return(
        <Container>
      <div className="w-full mx-auto mb-10 mt-[30px]">
    <div className="w-[100%] relative isolate overflow-hidden bg-primaryColor px-6 pt-16 sm:rounded-3xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-10 lg:pt-0 items-center justify-center">
      <div className="
      w-full
      grid 
      xl:grid-cols-2
      lg:grid-cols-2
      md:grid-cols-1
      sm:grid-cols-1
      grid-cols-1
      ">
       <div className="w-full flex flex-row lg:items-start lg:justify-end md:items-start md:justify-center items-center justify-center px-7 py-10">
        <div className="lg:w-[60%] md:w-[60%] flex flex-col items-start justify-start">
        <h2 className="xl:text-6xl lg:text-6xl font-bold tracking-tight text-white sm:text-4xl text-4xl">What our clients say</h2>
        <p className="mt-3 text-lg leading-8 text-gray-100">Testimonials</p>
        </div>
      </div>
      <div className="w-full xl:w-[60%] flex flex-row items-center justify-end py-10" >
      <div
      className={`flex flex-col items-start
         justify-center rounded-[20px]
          shadow-lg
           bg-white
           px-4
           py-10
           `}
    >
      <h6 className="mb-1 text-md font-bold text-black hover:text-white md:text-xl lg:text-xl ml-2">
        Carter
      </h6>
      <p className="mb-1 text-gl font-normal text-gray-500 md:text-lg lg:text-lg ml-2">
      CodingZone was great! I would definitely use again. Great communication & got the job done in a timely manner. Well priced, good value for money. Would recommend.
      </p>
    </div>
      </div>
      </div>
    </div>
  </div>
      </Container>
    )
}

export default Testimonial;