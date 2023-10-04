"use client";

import { Container } from "@/app/component";
import Reveal from "../../component/reveal";
import { employees } from "./data";
import MemberCard from "./memberCard";
import { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamMembers = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isLess,setIsLess] = useState(employees.length - 1 );

  const updateWindowSize = () => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    // Add event listener to listen for window resize events
    window.addEventListener("resize", updateWindowSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);


  useEffect(()=>{ 
   if(typeof window !== "undefined"){
    if(window.innerWidth <= 767){
      setIsLess(2)
    }
   }
  },[windowSize])

  return (
    <Container>
      <div
        className="
        mt-[80px]
        w-full
        grid 
        grid-row-1 
        sm:grid-row-1 
        md:grid-row-1 
        lg:grid-row-2
        xl:grid-row-2
        2xl:grid-row-2
        "
      >
        <div className="w-[100%] mx-auto flex flex-col items-center xl:justify-center lg:justify-cetner justify-center rounded-[20px]">
          <Reveal className="w-full">
            <h1 className="mb-4 text-3xl font-bold text-black md:text-3xl lg:text-5xl ml-2">
              Meet Our Team
            </h1>
          </Reveal>
        </div>
        <div
          className="w-full
        grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-3
        xl:grid-cols-3
        gap-11
        mt-[30px]
        "
        >
          {windowSize.width > 767
            ? employees.map((employee) => {
                return (
                  <MemberCard
                    key={employee.image}
                    image={employee.image}
                    designation={employee.designation}
                    name={employee.name}
                    socialLink=""
                  />
                );
              })
            : employees
                .map((employee) => {
                  return (
                    <MemberCard
                      key={employee.image}
                      image={employee.image}
                      designation={employee.designation}
                      name={employee.name}
                      socialLink=""
                    />
                  );
                })
                .slice(0, isLess)}
        </div>
      </div>

      {windowSize.width <= 767 && isLess == 2 ? (
        <div className="flex justify-center items-center w-[100%] mt-[35px]">
          <button
            className="font-semibold shadow-sm h-[40px] w-[200px] mt-[20px] rounded-lg bg-transparent border-[1px] group-hover:border-none group-hover:bg-secondaryColor bg-primaryColor text-gray-400 group-hover:text-white
            mx-auto
            "
            onClick={()=> setIsLess(14)}
          >
            <Reveal className="flex flex-row items-center justify-center gap-3">
              <FontAwesomeIcon
                icon={faPlus}
                style={{ width: "18px", height: "18px" }}
                className={`
              cursor-pointer
              text-gray-400
              `}
              />
              <p className="lg:text-md font-semibold md:text-md text-sm">
                More Members
              </p>
            </Reveal>
          </button>
        </div>
      ) : null }
    </Container>
  );
};

export default TeamMembers;
