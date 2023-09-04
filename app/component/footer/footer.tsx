"use client";

import styles from "@/style";
import Container from "../Container";
import Logo from "../navbar/Logo";
import { FOOTER_ICONS, FOOTER_LINKS } from "@/app/common/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faLocationPin,faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
import IndianFlag from "../../../public/images/india.png";
import LocationPin from "../../../public/images/location.png"
import { FaIconComponent } from "..";

const AppFooter = () => {
  return (
    <div className="border-t-[1px]">
      <Container>
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
          <div
            className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
          >
            <div className="flex-1 flex flex-col justify-start mr-10">
              <div className="w-[50%] flex-col flex items-start justify-start">
                <div className="w-full flex flex-row items-center justify-start py-3">
                  <Image
                    alt="sdasd"
                    src={IndianFlag}
                    className="w-[38px] h-[30px] shadow-lg"
                  />
                  <p
                    className={`max-w-[100%] text-lg font-bold text-black ml-3`}
                  >
                    INDIA
                  </p>
                </div>
                <div className="w-full flex flex-row items-start justify-start py-3">
                  <Image
                    alt="location Pin"
                    src={LocationPin}
                    className="w-[20px] h-[20px] shadow-sm mt-1"
                  />
                  <p
                    className={`max-w-[100%] text-md font-normal text-gray-400 ml-2`}
                  >
                    Phase-8B Ind. Area. Mohali, Punjab, India. Pin- 160055
                  </p>
                </div>
                <div className="w-full flex flex-row items-start justify-start py-3">
                  <FaIconComponent
                   iconName={faEnvelope}
                   iconStyle={{
                     color: "black",
                     width: "20px",
                     height: "20px",
                     marginTop:0
                   }}
                   className={`
             cursor-pointer
             `}
                  />
                  <p
                    className={`max-w-[100%] text-md font-normal text-gray-400 ml-2`}
                  >
                    contact@codingzonesoutions.in
                  </p>
                </div>
                <div className="w-full flex flex-row items-start justify-start py-3">
                  <FaIconComponent
                    iconName={faPhone}
                    iconStyle={{
                      color: "black",
                      width: "20px",
                      height: "20px",
                    }}
                    className={`
              cursor-pointer
              `}
                  />
                  <p
                    className={`max-w-[100%] text-md font-normal text-gray-400 ml-2`}
                  >
                    8360308065
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex-[1.5]
       w-full 
       flex 
       flex-row
       justify-between
       flex-wrap
       md:mt-0
       mt-10

       "
            >
              {FOOTER_LINKS.map((footerlink, idx) => (
                <div
                  className="
            flex
            flex-col
            ss:my-0
            my-4
            min-w-[150px]
            "
                  key={idx}
                >
                  <h4
                    className="
               font-medium
               text-[18px]
               leading-[27px]
               text-black 
               "
                  >
                    {footerlink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {footerlink.links.map((link, idx) => (
                      <li
                        className={`
                       font-normal 
                       text-[16px] 
                       leading-[24px]
                       text-gray-500
                       hover:text-secondaryColor
                       cursor-pointer
                       ${idx !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}
                        `}
                        key={idx}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex w-full justify-between items-center
        
        md:flex-row flex-col pt-6 p-4 border-t-[1px]"
          >
            <p
              className="
               font-normal
               text-[18px]
               leading-[27px]
               text-gray-300 
               text-center
               "
            >
              @2023 CodingZone Solutions. All Rights Reserved.
            </p>
            <div className="flex flex-row md:mt-0 mt-4">
              {FOOTER_ICONS.map((icon, idx) => (
                <div
                  className={`
             w-[50px] h-[50px]
             flex
             flex-row
             justify-center
             items-center
             object-contain cursor-pointer
             rounded-full
             shadow-2xl
             bg-primaryColor
             hover:bg-secondaryColor
             overflow-hidden
             transition
        ease-in-out 
        delay-200
        hover:-translate-y-1 
        hover:scale-110 
        duration-300
             ${idx !== FOOTER_ICONS.length - 1 ? "mr-6" : "mr-0"}
             `}
                >
                  <FontAwesomeIcon
                    icon={icon.icon}
                    style={{ color: "white", width: "25px", height: "25px" }}
                    className={`
              cursor-pointer
              `}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AppFooter;
