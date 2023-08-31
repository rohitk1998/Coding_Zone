"use client";

import Container from "../../Container";
import IntroCoverImage from "./introCover";
import ContactImage from "../../../../public/images/contactimage.jpg";
import Reveal from "../../reveal";
import { useState } from "react";
import { CommonModal } from "../..";
import { useForm } from "react-hook-form";

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
    defaultValues : {
      name : "" , 
      email  : "" , 
      phone : "" , 
      message : ""
    }
  });

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
              handleQuery();
              reset({
                name : "" , 
                email  : "" , 
                phone : "" , 
                message : ""
              })
            })}
          >
            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="text-md font-normal text-gray-600">Name</label>
              <input
                className="outline-none text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                {...register("name", {
                  required: true,
                })}
                value={getValues("name")}
              />
              {errors.name && (
                <p className="text-red-600">Please enter your name</p>
              )}
            </div>
            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="text-md font-normal text-gray-600">Email</label>
              <input
                className="outline-none text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                {...register("email", {
                  required: true,
                  maxLength: 10,
                })}
                value={getValues("email")}
              />
              {errors.email && (
                <p className="text-red-600">Please enter your email</p>
              )}
            </div>
            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="text-md font-normal text-gray-600">
                Phone Number
              </label>
              <input
                className="outline-none text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                {...register("phone", {
                  required: true,
                })}
                value={getValues("phone")}
              />
              {errors.phone && (
                <p className="text-red-600">Please enter your phone number</p>
              )}
            </div>

            <div className="w-[100%] flex flex-col items-start justify-start pt-5 px-4 mb-1">
              <label className="text-md font-normal text-gray-600">
                Your Message
              </label>
              <textarea
                className="outline-none text-black h-[35px] w-full pl-2 rounded-sm shadow-sm border-b-[1px] border-gray-400"
                {...register("message", {
                  required: true,
                })}
                value={getValues("message")}
              />
              {errors.message && (
                <p className="text-red-600">Please enter your message</p>
              )}
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
       justify-center items-center rounded-b-lg pt-4
       mt-4
       "
        >
          <h1 className="text-xl text-green-600 mb-5 ml-10">
            Congratulations !! <br />
            Your Query has been successfully submitted
          </h1>
        </div>
      </CommonModal>
    </Container>
  );
};

export default OurProcess;
