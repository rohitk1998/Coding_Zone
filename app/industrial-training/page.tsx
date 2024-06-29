'use client';
import { useEffect, useState } from 'react';
import { TESTIMONIAL_SLIDES } from '../common/constants';
import { RevealRight } from '../component';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AndroidDevelopment from '../../public/images/androidDevelopment.svg';
import IosDevelpoment from '../../public/images/iosDevelopment.svg';
import reactNativeDevelopment from '../../public/images/react-development-icon.svg';
import FlutterDevelopment from '../../public/images/flutter.svg';
import Image from 'next/image';
import IndustrialTrainingImg from '../../public/images/industrialtraining.svg';

let timeoutId: any = null;

const data = [
  {
    id: 0,
    serviceTitle: 'Android Development ',
    description:
      'Once you complete the course successfully you can start building Android apps and we are here to give you utmost support. We are here to help you and you can thus comprehend why to join our online Android course. Once you complete the course successfully you can apply for better jobs that give you the confidence to go ahead. You can now start working as an expert Android developer and its time to achieve success. Once you join our course you can learn why we come up as one of the top institutes.',
    image: AndroidDevelopment,
  },
  {
    id: 1,
    serviceTitle: 'IOS Development',
    description:
      'Get access to a highly qualified iOS app development team that has more than 4 years of experience in developing enterprise iOS apps. Our iPhone app development company follows an agile methodology for enterprise iOS app development.',
    image: IosDevelpoment,
  },
  {
    id: 2,
    serviceTitle: 'React Native Development',
    description:
      'You have probably heard about React Native and how its the contemporary and greatest generation for developing mobile apps. Perhaps you need to learn React Native to strengthen your profession as a software program engineer or to reinforce your fee as a freelance developer. The potentials of React Native are infinite, but to comprehend them, you must first understand how to build an app with it. The most effective method is to receive instruction from specialists with actual-world expertise. It would be best to consider pursuing React Native training. In this section, we will explore the key benefits of learning React Native from industry professionals so you can take your skills to the next level and start building amazing apps.',
    image: reactNativeDevelopment,
  }
];

export default function IndustrialTraining() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    }, 7000);
  };

  const goToSlide = (slideIndex: any) => {
    clearSliderTimer();
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    startSlider();
  }, [currentIndex]);

  return (
    <div
      className="
  lg:pt-[160px]
  xl:pt-[160px]
  md:pt-[40px]
  sm:pt-[60px]
  pt-[80px]
  flex flex-col items-center justify-center
  "
    >
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-full mx-auto flex-row items-center justify-center gap-0 py-5 relative mt-[100px]">
        <div className="w-[100%] px-10 py-3 justify-end items-end md:justify-center md:items-center flex">
          <Image alt="" src={IndustrialTrainingImg} />
        </div>
        <div className="flex flex-col 2xl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center justify-center w-[80%] mx-auto">
          <p className="text-[33px] text-black font-semibold mt-2 p-2">
            Our Mission
          </p>
          <p className="text-md text-gray-400 font-medium mt-2 p-2 xl:w-[70%] lg:w-[70%] md:w-[100%] sm:w-[100%] w-[100%]">
            "At Coding Zone Solutions, we are the architects of tech dreams,
            dedicated to nurturing the next generation of digital innovators.
            Our mission is to empower young tech enthusiasts across India with
            expert training in Android, iOS, Flutter, and React Native. Whether
            you're stepping into the dynamic world of app development or
            enhancing your skills, we provide a professional learning
            environment where creativity meets proficiency. Join us on a journey
            where cutting-edge technology meets hands-on expertise, paving the
            way for a future where your code transforms ideas into reality. At
            Coding Zone Solutions, we don't just train, we inspire the tech
            leaders of tomorrow."
          </p>
        </div>
      </div>
      <p className="text-[33px] text-black font-semibold xl:mr-20 lg:mr-20 md:mr-0 sm:mr-0 mr-0">
        Training Overview
      </p>
      <div className="group w-full xl:w-[50%] flex flex-col items-center justify-center mr-20 relative h-[900px]">
        <div
          className={`flex flex-col items-center
         justify-center
           px-2
           py-6
           w-[100%]
           lg:h-[400px] xl:h-[400px] md:h-[400px]
           h-[400px]
           `}
        >
          {data.map((slide, idx) => {
            return (
              <>
                {idx === currentIndex && (
                  <div
                    className={`w-[80%] flex flex-col justify-center items-center`}
                  >
                    <RevealRight className="w-[100%] bg-white p-10 border-[1px] min-h-[500px] rounded-xl flex flex-col justify-center items-center">
                      <Image
                        alt=""
                        src={slide?.image}
                        className="w-[200px] h-[200px] justify-center"
                      />
                      <div className="w-full flex flex-row items-center justify-start px-2">
                        <h6 className="mb-0 text-md font-semibold text-black md:text-lg lg:text-lg">
                          {slide?.serviceTitle}
                        </h6>
                      </div>
                      <div className="w-full flex flex-row items-center justify-start mt-3 px-2">
                        <p className="mb-0 lg:text-md md:text-md sm:text-sm text-xs font-normal text-gray-400 ">
                          {slide?.description.slice(0, 250) + '. . .'}
                        </p>
                      </div>
                      <div className="w-full flex flex-row items-center justify-start mt-5 px-2">
                        <p className="mb-0 lg:text-md md:text-md sm:text-sm text-xs font-semibold text-black bg-white border-[1px] shadow-md px-5 py-3 rounded-full">
                          3-6 Months
                        </p>
                        <p className="mb-0 lg:text-md md:text-md sm:text-sm text-xs font-semibold ml-2 text-black bg-white border-[1px] shadow-md px-5 py-3 rounded-full">
                          Expertise guidance
                        </p>
                      </div>
                    </RevealRight>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div
          className="sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl rounded-full text-black cursor-pointer"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="lightgray" />
        </div>
        <div
          className="sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 text-black cursor-pointer"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faArrowRight} color="lightgray" />
        </div>
        <div className="flex mt-[100px] justify-center py-2">
          {data.map((slide, slideIndex) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <div
                className={`w-[10px] h-[10px] rounded-full ${
                  currentIndex === slideIndex
                    ? 'bg-orange-400'
                    : 'bg-white border-[1px]'
                } ml-4`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
