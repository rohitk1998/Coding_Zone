"use client";

import Container from "../../Container";
import IntroCoverImage from "./introCover";
import ContactImage from "../../../../public/images/contactimage.jpg";
import Reveal from "../../reveal";


const OurProcess = () => {
  return (
    <Container>
      <div className="w-[75%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
       <Reveal className="">
       <h1 className="mb-4 text-4xl font-bold text-black md:text-4xl lg:text-6xl ml-2 text-center">
        Lets talk about your project
        </h1>
       </Reveal>
        <Reveal className="">
        <h1 className="mb-4 text-xl font-normal text-gray-500 md:text-2xl lg:text-2xl ml-2 text-center">
          Asking a query is the first step towards building your prototype.
        </h1>
        </Reveal>
      </div>
      <div className="w-[95%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-2 p-4 bg-white md:grid-cols-2">
       <IntroCoverImage image={ContactImage}/>
<div className="isolate bg-transparent mt-[30px]">
  <form action="#" method="POST" className="xl:mx-[0px] lg:mx-[0px] md:mx-[0px] mx-auto max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" className="block w-full rounded-md outline-none px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" className="block w-full outline-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phonenumber" className="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
        <div className="mt-2.5">
          <input type="text" name="phonenumber" id="number" className="block w-full outline-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" className="block w-full outline-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primaryColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-secondaryColor px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
    </div>
  </form>
</div>
      </div>

       </div>
    </Container>
  );
};

export default OurProcess;
