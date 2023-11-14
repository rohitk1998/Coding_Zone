"use client";

import Container from "../../Container";
import IntroCoverImage from "./introCover";
import ContactImage from "../../../../public/images/contactimage.jpg";
import Reveal from "../../reveal";
import { useState } from "react";
import { CommonModal } from "../..";
import { useForm } from "react-hook-form";
import { REGEX_PATTERN } from "@/app/common/constants";
import { contactFormValidation } from "@/app/common/validation";
import { yupResolver } from '@hookform/resolvers/yup';

const OurProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuery = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset
  } = useForm({
    resolver : yupResolver(contactFormValidation)
  });

  return (
    <Container>
      <div className="w-[75%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center pt-[60px]">
        <Reveal className="">
          <h1 className="mb-4 text-4xl font-bold text-black md:text-4xl lg:text-6xl ml-2 text-center">
            Lets talk about your project
          </h1>
        </Reveal>
        <Reveal className="">
          <h1 className="mb-4 text-md font-normal text-gray-500 md:text-lg lg:text-lg ml-2 text-center">
            Asking a query is the first step towards building your prototype.
          </h1>
        </Reveal>
      </div>
      <div className="w-[95%] mb-10 mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-2 p-4 bg-white md:grid-cols-2">
          <IntroCoverImage image={ContactImage} />
          <form

            className="xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[100%] w-[100%] flex flex-col 
            xl:justify-center xl:items-start
            lg:justify-center lg:items-start
            md:justify-center md:items-center
            sm:justify-center sm:items-center
            justify-center items-center
            
            "
            onSubmit={handleSubmit((data) => {
              console.log("data",data);
              
              handleQuery();

              reset({
                name : "" , 
                email : "" , 
                phoneNumber : "" , 
                message : ""
              })
            })}
          >
            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="lg:text-md md:text-md text-sm font-normal text-gray-500">Name</label>
              <input
              className="outline-none lg:text-md md:text-md text-sm text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                type="text"
                id="name"
                placeholder="Enter name"
                {...register("name")}
              />
                <p className="text-red-400">{errors.name?.message}</p>
            </div>
            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="lg:text-md md:text-md text-sm font-normal text-gray-500">Email</label>
              <input
              className="outline-none lg:text-md md:text-md text-sm text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                type="text"
                id="email"
                placeholder="Enter email"
                {...register("email")}
              />
             <p className="text-red-400">{errors.email?.message}</p>
            </div>
            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="lg:text-md md:text-md text-sm font-normal text-gray-500">
                Phone Number
              </label>
              <input
              placeholder="Enter phone number"
                className="outline-none lg:text-md md:text-md text-sm text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                {...register("phoneNumber")}
              />
             <p className="text-red-400">{errors.phoneNumber?.message}</p>
            </div>

            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="lg:text-md md:text-md text-sm font-normal text-gray-500">
                Your Message
              </label>
              <textarea
              placeholder="Enter your message"
                className="outline-none lg:text-md md:text-md text-sm text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                {...register("message")}
              />
             <p className="text-red-400">{errors.message?.message}</p>
            </div>
            <button
              className="block w-[100%] mt-10 rounded-md bg-secondaryColor px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              type="submit"
            >
              Lets's Talk
            </button>
          </form>
        </div>
      </div>
      <CommonModal isVisible={isModalOpen} onClose={onClose} modalTitle="">
        <div
          className="w-full min-w-full xl:overflow-hidden
        lg:overflow-y-scroll md:overflow-y-scroll
         overflow-y-scroll bg-white flex flex-row 
       justify-center items-center rounded-lg pt-4
       mt-4
       "
        >
          <h1 className="text-lg text-green-600 mb-5 ml-10">
            Congratulations !<br />
            Your query has been successfully emailed to us
            <br/>
            Thanks.
          </h1>
        </div>
      </CommonModal>
    </Container>
  );
};

export default OurProcess;
