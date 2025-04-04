"use client";

import Container from "../../Container";
import React, { useEffect, useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-stars";
import { TESTIMONIAL_SLIDES } from "../../../common/constants";
import RevealRight from "../../revealRight";
import Reveal from "../../reveal";
import { CommonModal } from "../..";
import ClientReviewModal from "./clientReviewModal";

let timeoutId: any = null;

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisble] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const isLastSlide = (() => currentIndex === TESTIMONIAL_SLIDES.length - 1)();

  const clearSliderTimer = () => clearTimeout(timeoutId);

  const newIndex = isLastSlide ? 0 : currentIndex + 1;

  const prevSlide = () => {
    clearSliderTimer();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? TESTIMONIAL_SLIDES.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    clearSliderTimer();
    setCurrentIndex(newIndex);
  };

  const startSlider = () => {
    timeoutId = setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 5000);
  };

  const goToSlide = (slideIndex: any) => {
    clearSliderTimer();
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    startSlider();
  }, [currentIndex]);

  const onClose = () => {
    setModalContent({});
    setIsModalVisble(false);
  };

  const onOpen = (obj: object) => {
    setModalContent(obj);
    setIsModalVisble(true);
  };

  return (
    <Container>
      <div className="w-full mx-auto mb-10 mt-[30px]">
        <div className="w-[100%] relative isolate overflow-hidden bg-primaryColor px-6 pt-16 sm:rounded-3xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-10 lg:pt-0 items-center justify-center">
          <div
            className="
      w-full
      grid 
      xl:grid-cols-2
      lg:grid-cols-2
      md:grid-cols-1
      sm:grid-cols-1
      grid-cols-1
      "
          >
            <div className="w-full flex flex-row lg:items-center lg:justify-start md:items-start md:justify-center items-center justify-center px-6 py-0">
              <div className="lg:w-[70%] md:w-[60%] flex flex-col items-start justify-start">
                <Reveal className="">
                  <h2 className="xl:text-6xl lg:text-6xl font-bold tracking-tight text-white sm:text-4xl text-4xl">
                    What People Talk About Us
                  </h2>
                </Reveal>
                <Reveal className="">
                  <p className="mt-3 text-lg font-extrabold leading-8 text-gray-100">
                    Reviews.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="group w-full xl:w-[80%] flex flex-col items-center justify-end py-5 relative mt-6">
              <div
                className={`flex flex-col items-center
         justify-center rounded-[20px]
          shadow-lg
           bg-white
           px-2
           py-6
           w-[100%]
           `}
              >
                {TESTIMONIAL_SLIDES.map((slide, idx) => {
                  return (
                    <>
                      {idx === currentIndex && (
                        <div
                          className={`lg:h-[180px] xl:h-[180px] md:h-[180px] w-[70%] h-[180px] flex flex-col justify-center items-start`}
                        >
                          <RevealRight className="w-[100%] bg-white">
                            <div className="w-full flex flex-row items-center justify-start px-2">
                              {/* <Image
                                alt="sdasd"
                                src={slide.clientImage}
                                width={40}
                                height={40}
                                className="w-[50px] h-[50px] shadow-lg rounded-full object-cover"
                              /> */}
                              <h6 className="mb-0 text-md font-semibold text-black md:text-lg lg:text-lg">
                                {slide?.clientName}
                              </h6>
                            </div>
                            <div className="w-full flex flex-row items-center justify-start mt-3 px-2">
                              <p className="mb-0 lg:text-md md:text-md sm:text-sm text-xs font-normal text-gray-400 ">
                                {slide?.messageTitle}
                                <button
                                  className="bg-secondaryColor rounded-md text-white px-2 ml-1 shadow-md text-[10px] mb-1"
                                  onClick={() => onOpen(slide)}
                                >
                                  more
                                </button>
                              </p>
                            </div>
                            <div className="w-full flex flex-row items-center justify-start">
                              <ReactStars
                                count={slide.ratingCount}
                                size={24}
                                color1="#ffd700"
                              />
                            </div>
                          </RevealRight>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
              {/* Left Arrow */}
              <div
                className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full text-black cursor-pointer"
                onClick={prevSlide}
              >
                <FontAwesomeIcon icon={faArrowLeft} color="lightgrey" />
              </div>
              {/* Right Arrow */}
              <div
                className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-black cursor-pointer"
                onClick={nextSlide}
              >
                <FontAwesomeIcon icon={faArrowRight} color="lightgrey" />
              </div>
              <div className="flex top-4 justify-center py-2">
                {TESTIMONIAL_SLIDES.map((slide, slideIndex) => (
                  <div
                    key={slide.id}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <div
                      className={`w-[10px] h-[10px] rounded-full ${
                        currentIndex === slideIndex
                          ? "bg-orange-400"
                          : "bg-white"
                      } ml-4`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        isVisible={isModalVisible}
        onClose={onClose}
        modalTitle="Client's Review"
      >
        <ClientReviewModal reviewObj={modalContent} />
      </CommonModal>
    </Container>
  );
};

export default Reviews;
