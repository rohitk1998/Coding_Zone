"use client";

import Container from "../../Container";
import React, { useEffect, useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let timeoutId: any = null;

const Testimonial = () => {
  const Slides = [
    {
      id: 0,
      name: "Eleanor",
      message:
        "Just wanted to express how grateful I am to be working with such an amazing team! The synergy and positivity here are a constant source of joy. Keep up the fantastic work, everyone!",
    },
    {
      id: 1,
      name: "Jackson",
      message:
        "Every day feels like a new adventure with this team! Your dedication and creativity inspire me to give my best. Here's to more successful collaborations and happy moments together!",
    },
    {
      id: 2,
      name: "Sophia",
      message:
        "Finding joy in my work has never been easier, thanks to this wonderful group. The support we provide one another and the innovative projects we handle make me excited to come in each day. Cheers to a truly fulfilling work environment!",
    },
    {
      id: 3,
      name: "Oliver",
      message:
        "Hey team, I just wanted to let you all know that your camaraderie and the positive vibe you bring to the table are incredibly uplifting. It's not every day you get to work with people who make work feel like a joyous adventure!",
    },
    {
      id: 4,
      name: "Ava",
      message:
        "To my colleagues, thank you for making work feel less like a chore and more like a delightful journey. Your dedication to excellence and the fun we have along the way are the perfect recipe for happiness!",
    },
    {
      id: 5,
      name: "Liam",
      message:
        "Shoutout to the team for fostering an environment where I genuinely look forward to clocking in. The innovative projects and the sense of unity here are a constant source of happiness and motivation!",
    },
    {
      id: 6,
      name: "Emma",
      message:
        "Just a quick note to express my gratitude for being a part of this incredible team. The collaborative spirit and the inspiring work we do make me excited to start my day. Let's keep spreading positivity and achieving great things together!",
    },
    {
      id: 7,
      name: "Noah",
      message:
        "Kudos to my colleagues for creating an environment that turns work into a source of happiness. Your dedication and the seamless teamwork we exhibit truly make each day something to look forward to!",
    },
    {
      id: 8,
      name: "Isabella",
      message:
        "I wanted to take a moment to appreciate this team for making work a truly enjoyable experience. Your professionalism, combined with the friendly atmosphere, remind me every day how fortunate I am to be a part of this!",
    },
    {
      id: 9,
      name: "William",
      message:
        "To my awesome coworkers, your hard work and positivity have made a significant impact on my work life. The collaborative projects and the laughter we share have turned this into a place where happiness thrives. Keep being amazing!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    clearTimeout(timeoutId);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    clearTimeout(timeoutId);
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const startSlider = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    timeoutId = setTimeout(() => {
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 2000);
  };

  const goToSlide = (slideIndex: any) => {
    clearTimeout(timeoutId);
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    startSlider();
  }, [currentIndex]);

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
            <div className="w-full flex flex-row lg:items-start lg:justify-end md:items-start md:justify-center items-center justify-center px-7 py-10">
              <div className="lg:w-[70%] md:w-[60%] flex flex-col items-start justify-start">
                <h2 className="xl:text-6xl lg:text-6xl font-bold tracking-tight text-white sm:text-4xl text-4xl">
                  What our clients say
                </h2>
                <p className="mt-3 text-lg leading-8 text-gray-100">
                  Testimonials
                </p>
              </div>
            </div>
            <div className="group w-full xl:w-[80%] flex flex-col items-center justify-end py-10 relative mt-6">
              <div
                className={`flex flex-col items-center
         justify-center rounded-[20px]
          shadow-lg
           bg-white
           px-2
           py-6
           `}
              >
                {Slides.map((slide, idx) => {
                  return (
                    <>
                      {idx === currentIndex && (
                        <div
                          className={`lg:h-[180px] xl:h-[180px] md:h-[180px] h-[180px] w-[80%] 
                       `}
                        >
                          <h6 className="mb-1 text-md font-bold text-black md:text-xl lg:text-xl ml-2">
                            {slide.name}
                          </h6>
                          <p className="mb-1 text-sm font-normal text-gray-500 md:text-lg lg:text-lg ml-2">
                            {slide.message}
                          </p>
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
                <FontAwesomeIcon icon={faArrowLeft} color="black" />
              </div>
              {/* Right Arrow */}
              <div
                className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-black cursor-pointer"
                onClick={nextSlide}
              >
                <FontAwesomeIcon icon={faArrowRight} color="black" />
              </div>
              <div className="flex top-4 justify-center py-2">
                {Slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
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
    </Container>
  );
};

export default Testimonial;
