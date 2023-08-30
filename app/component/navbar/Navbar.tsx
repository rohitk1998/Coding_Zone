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
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="fixed w-full bg-transparent z-10 bg-white lg:border-none border-b-[1px] lg:shadow-sm shadow-sm">
      <div className="py-1">
        <Container>
          <div className="flex flex-row items-center justify-between ">
            <Logo />
            <InfoBadge />
            <div className="lg:hidden w-full flex flex-row items-center justify-end">
              <MenuButton onBtnClick={handleOpenMenu} />
            </div>
          </div>
          <div className="hidden w-full lg:flex flex-row items-center justify-between">
            <Menu />
            <CommonBadge
              icon={faPaperPlane}
              heading="Get A Quote"
              description=""
            />
          </div>
          {openMenu && (
            <div className="block lg:hidden flex-row items-center justify-between">
              <Menu isOpen={openMenu} />
              <CommonBadge
                icon={faPaperPlane}
                heading="Get A Quote"
                description=""
              />
              <CommonBadge
                icon={faLocationDot}
                heading="Coding Zone Solutions"
                description="Phase 8B sector 74 Mohali"
              />
              <CommonBadge
                icon={faEnvelope}
                heading="Mail Us On"
                description="contact@codingzonesolutions.in"
              />
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
