'use client';

import { Reveal } from '../component';
import ServiceCard from './component/serviceCard';
import AndroidDevelopment from '../../public/images/androidDevelopment.svg';
import IosDevelpoment from "../../public/images/iosDevelopment.svg";
import UiUxDevelopment from "../../public/images/ui_ux.jpg";
import WebDevelopment from "../../public/images/webDevelopment.png"
import reactNativeDevelopment from "../../public/images/react-development-icon.svg"
import FlutterDevelopment from "../../public/images/flutter.svg"


const data = [
  {
    id: 0,
    serviceTitle: 'Android Development',
    description : 'Navigate the Android landscape with confidence our development team crafts cutting-edge solutions for a mobile future.',
    image : AndroidDevelopment , 
  },
  {
    id: 1,
    serviceTitle: 'IOS Development',
    description : 'Elevate your iOS presence with our bespoke development services, ensuring your app stands out in the Apple ecosystem.',
    image : IosDevelpoment , 
  },
  {
    id: 2,
    serviceTitle: 'Web Development',
    description : "Web development that speaks your brand's language, paired with UI/UX designs that resonate with your audience the perfect online symphony.",
    image : WebDevelopment
  },
  {
    id: 3,
    serviceTitle: 'UI/UX Design',
    description:'We weave digital dreams into reality with our bespoke web development and UI/UX design where innovation meets pixel perfection',
    image:UiUxDevelopment
  },
  {
    id: 4,
    serviceTitle: 'React Native Development',
    description:
      'Experience the best of both worlds with our React Native development expertise building apps that run smoothly on both Android and iOS platforms.',
      image : reactNativeDevelopment
  },
  {
    id: 5,
    serviceTitle: 'Fultter Development',
    description : 'Transform your ideas into stunning, user-friendly apps with our top-notch Flutter development services.',
    image : FlutterDevelopment
  },
];

const ServiceComponent = () => {
  return (
    <div
      className="
    w-[100%] 
    2xl:pt-[140px]
    xl:pt-[140px]
    lg:pt-[140px]
    md:pt-[50px]
    sm:pt-[50px]
    pt-[50px]
    "
    >
      <div className="w-[100%]">
        <div className="w-[100%] py-11 mx-auto flex flex-row items-center xl:justify-center lg:justify-center justify-center rounded-[20px]">
          <Reveal className="">
            <h1 className="xl:mb-4 lg:mb-4 md:mb-4 mb-0 text-4xl font-bold text-black md:text-4xl lg:text-6xl xl:ml-2 lg:ml-2 md:ml-2 ml-0 text-center">
              Services
            </h1>
            <p className="text-sm mx-auto w-[80%] font-normal text-black md:text-lg lg:text-lg text-center">Unlock the power of seamless mobile experiences with our expert mobile development services, tailored to your unique needs.</p>
          </Reveal>
        </div>
        <div className="w-[100%] mx-auto">
          <div className="2xl:w-[50%] 2xl:gap-0 xl:gap-0 md:gap-0 sm:gap-9 gap-9  xl:w-[70%] lg:w-[90%] min-w-[50%] md:w-[100%] w-[100%] flex flex-wrap mb-4 p-10 mx-auto">
            {data.map((service) => {
              return (
                <div
                  className="w-full min-w-1/3 2xl:w-1/3 md:w-1/3 sm:w-full border-[1px] border-gray-100
                   h-[350px]"
                >
                  <ServiceCard item={service} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
