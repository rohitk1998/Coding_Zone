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
import { useState, useEffect } from "react";
import SecondMenuBar from "./secondMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

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
    <div
      className={`fixed w-full z-10 lg:border-none border-b-[1px] lg:shadow-sm shadow-sm ${
        scrollY > 30 || openMenu
          ? "bg-white"
          : "bg-transparent z-10 opacity-[0.8]"
      }`}
    >
      <div className="py-1">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <Logo />
            {scrollY > 30 ? <SecondMenuBar scrollY={scrollY} /> : <InfoBadge />}

            <div className="lg:hidden w-full flex flex-row items-center justify-end">
              <MenuButton onBtnClick={handleOpenMenu} />
            </div>
          </div>
          {scrollY < 30 && <SecondMenuBar scrollY={scrollY} />}
          {openMenu && (
            <div className="block lg:hidden flex-row items-center justify-between">
              <Menu isOpen={openMenu} />
              <CommonBadge
                icon={faPaperPlane}
                heading="Get A Quote"
                description=""
                clickable={false}
              />
              <CommonBadge
                icon={faLocationDot}
                heading="Coding Zone Solutions"
                description="Phase 8B sector 74 Mohali"
                clickable={false}
              />
              <CommonBadge
                icon={faEnvelope}
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
