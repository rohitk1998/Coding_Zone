"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface InfoBadgeProps {
  item1: number;
  valueIn : string ;
  item2: string;
}

interface AnimatedValueProps {
  value : number ; 
}

const AnimatedValue : React.FC<AnimatedValueProps> = ({ value } )=> {
   const ref : any  = useRef(null);

   const motionValue = useMotionValue(0);
   const springValue = useSpring(motionValue , { duration : 3000 })

   const isInView = useInView(ref);


   useEffect(()=>{
    if(isInView){
      motionValue.set(value)
    }
   },[isInView , value , motionValue])

   useEffect(()=>{
     springValue.on("change" , (latest)=> {
      console.log("value", latest);
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
      
     })
   },[springValue,value])


   return <span ref={ref}></span>
} 

const InfoBadge: React.FC<InfoBadgeProps> = ({ item1, item2 , valueIn }) => {
  return (
      <div className="p-2 mx-auto flex flex-col items-start xl:justify-center lg:justify-cetner justify-start lg:mt-0 md:mt-0 sm:mt-5 mt-5">
      <h1 className="text-lg font-bold text-white md:text-3xl lg:text-4xl">
       <AnimatedValue value={item1} />{valueIn}
      </h1>
      <p className="mb-1 text-white lg:text-md md:text-md text-sm font-normal md:text-lg lg:text-lg">
        {item2}
      </p>
    </div>
  );
};

export default InfoBadge;
