"use client";

import React from "react";
import { MENU_ITEMS } from "../../common/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Divider = () => {
  return (
    <div
      className="
      mx-[5px]
      flex
        flex-row
        items-center 
        justify-between"
    >
      <h3 className="text-2xl font-large text-gray-300">|</h3>
    </div>
  );
};

const Menu: React.FC<any> = ({ isOpen }) => {
  const pathname = usePathname();
  return (
    <>
      {!isOpen && (
        <div
          className="
      flex
      flex-row
      items-center 
      justify-between
      "
        >
          {MENU_ITEMS.map((menu, index) => (
            <div
             key={menu.id}
              className="
        flex
        flex-row
        items-center 
        justify-between
        gap-10
        p-5
        "
            >
              <Link
                className={`cursor-pointer text-lg font-large gap-10 hover:text-primaryColor ${
                  pathname == menu.path
                    ? "text-primaryColor"
                    : "text-secondaryColor"
                }`}
                href={menu.path}
              >
                {menu.menuItem}
              </Link>
              {index < MENU_ITEMS.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className="
        flex
        flex-col
        items-start 
        justify-center
        gap-6
        p-5
        border-t-[1px]
        mt-4
        "
        >
          {MENU_ITEMS.map((menu, index) => (
            <div
            key={index}
              className="
        flex
        flex-col
        items-start 
        justify-between
        "
            >
              <h3
                className={`text-lg font-large gap-5 hover:text-primaryColor ${
                  pathname == menu.path
                    ? "text-primaryColor"
                    : "text-secondaryColor"
                }`}
              >
                {menu.menuItem}
              </h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
