"use client";
import Container from "../Container";
import Logo from "./Logo";
import InfoBadge from "./InfoBadge";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import {
  faPaperPlane,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import CommonBadge from "./commonBadge";
import { useState, useEffect, useRef } from "react";
import SecondMenuBar from "./secondMenu";
import { GOOGLE_MAP_URL } from "@/app/common/constants";
import { useAppContext } from "@/app/context/context";

function useOutsideClick(ref: any, callback: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

const Navbar = () => {
  const { setIsMenuOpen, isMenuOpen } = useAppContext();
  const [scrollY, setScrollY] = useState(0);
  const divRef = useRef(null);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use the custom hook with the dropdownRef and closeDropdown callback
  useOutsideClick(divRef, () => setIsMenuOpen(false));

  console.log("isMenuOpen", isMenuOpen);

  return (
    <div
      className={`fixed w-full z-10 lg:border-none lg:shadow-sm shadow-sm ${
        scrollY > 30 || isMenuOpen
          ? "bg-white"
          : "bg-transparent z-10 opacity-[0.8]"
      }`}
    >
      <div className="py-1" ref={divRef}>
        <Container>
          <div className="flex flex-row items-center justify-between">
            <Logo />
            {(() =>
              scrollY > 30 ? (
                <SecondMenuBar scrollY={scrollY} />
              ) : (
                <InfoBadge />
              ))()}
            <div className="lg:hidden w-full flex flex-row items-center justify-end">
              <MenuButton onBtnClick={handleOpenMenu} />
            </div>
          </div>
          {(() => scrollY < 30 && <SecondMenuBar scrollY={scrollY} />)()}
          {isMenuOpen && (
            <div
              className="block lg:hidden flex-row items-center justify-between
            "
            >
              <Menu isOpen={isMenuOpen} />
              <CommonBadge
                url=""
                icon={faPaperPlane}
                heading="Get A Quote"
                description=""
                clickable={false}
              />
              <CommonBadge
                icon={faLocationDot}
                heading="Coding Zone Solutions"
                description="Phase 8B sector 74 Mohali"
                clickable={true}
                url={GOOGLE_MAP_URL}
              />
              <CommonBadge
                icon={faEnvelope}
                url="https://mail.google.com/mail/u/0/#inbox?compose=new"
                heading="Mail Us On"
                description="contact@codingzonesolutions.in"
                clickable={true}
              />
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
