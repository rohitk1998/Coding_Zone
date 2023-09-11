"use client";

import styles from "@/style";
import Container from "../Container";
import {
  FOOTER_ICONS,
  FOOTER_LINKS,
  GOOGLE_MAP_URL,
} from "@/app/common/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import IndianFlag from "../../../public/images/india.png";
import LocationPin from "../../../public/images/location.png";
import { FaIconComponent } from "..";
import Link from "next/link";

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
                    className={`max-w-[100%] lg:text-md md:text-md text-sm xl:text-lg font-bold text-black ml-3`}
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
                    onClick={() => window.open(GOOGLE_MAP_URL)}
                    className={`cursor-pointer max-w-[100%] lg:text-md md:text-md text-sm font-normal text-gray-400 ml-2`}
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
                      marginTop: 0,
                    }}
                    className={`
             cursor-pointer
             `}
                  />
                  <p
                    className={`max-w-[100%] lg:text-md md:text-md text-sm font-normal text-gray-400 ml-2 cursor-pointer`}
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/u/0/#inbox?compose=new"
                      );
                    }}
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
                    className={`max-w-[100%] lg:text-md md:text-md text-sm font-normal text-gray-400 ml-2`}
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
                  key={footerlink.id}
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
                        lg:text-md md:text-md text-sm
                        font-normal text-gray-400
                       leading-[24px]
                       hover:text-secondaryColor
                       cursor-pointer
                       ${idx !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}
                        `}
                        key={link.id}
                      >
                        <Link href={link.link !== "" ? `${link.link}` : ""}>
                          {link.name}
                        </Link>
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
              lg:text-md md:text-md text-sm
               font-normal text-gray-400
               text-center
               "
            >
              @2023 CodingZone Solutions. All Rights Reserved.
            </p>
            <div className="flex flex-row md:mt-0 mt-4">
              {FOOTER_ICONS.map((icon, idx) => (
                <div key={icon.id} onClick={() => window.open(icon.link)}>
                  <div
                    className={`
             w-[40px] h-[40px]
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
        hover:-translate-y-1 
        hover:scale-110 
        duration-100
             ${idx !== FOOTER_ICONS.length - 1 ? "mr-6" : "mr-0"}
             `}
                  >
                    <FontAwesomeIcon
                      icon={icon.icon}
                      style={{ color: "white", width: "18px", height: "18px" }}
                      className={`
              cursor-pointer
              `}
                    />
                  </div>
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
