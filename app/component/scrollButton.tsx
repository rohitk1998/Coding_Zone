"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollUpButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {scrollY > 800 && (
        <div
          className="
        mx-auto
        p-2
        w-[55px]
        h-[55px]
        bg-secondaryColor
        hover:bg-primaryColor
        rounded-full
        flex
        flex-row
        justify-center
        items-center
        fixed
        bottom-[100px]
        right-[40px]
        cursor-pointer
        shadow-2xl
        transition
        ease-in-out 
        delay-200
        hover:-translate-y-1 
        hover:scale-110 
        duration-300
      "
      onClick={() => window.scrollTo({ top : 0 , behavior : "smooth" })}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{ color: "white", width: "20px", height: "20px" }}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default ScrollUpButton;
