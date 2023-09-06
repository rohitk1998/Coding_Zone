'use client';

import Menu from "./Menu";
import CommonBadge from "./commonBadge";
import {
    faPaperPlane,
  } from "@fortawesome/free-solid-svg-icons";

interface SecondMenuBarProps {
    scrollY : number ;
}

const SecondMenuBar : React.FC<SecondMenuBarProps>  = ({ scrollY })=> {
    
    return(
        <div className={`hidden ${scrollY > 30 ? "w-[70%]" : "w-full"} lg:flex flex-row items-center justify-between`}>
              <Menu scrollY={scrollY} />
              <CommonBadge
                icon={faPaperPlane}
                heading="Get A Quote"
                description=""
                clickable={false}
              />
            </div>
    )
  }

  export default SecondMenuBar ;