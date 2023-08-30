'use client';
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

interface RevealProps {
  children: JSX.Element | any;
  className: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  const revealRef = useRef(null);
  const isInView = useInView(revealRef, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log("isInView", isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={revealRef} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        className={className}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left : 0 , 
          right : 0 ,
          backgroundColor:"#5FD1BD",
          zIndex: 20,
        }}
      /> */}
    </div>
  );
};

export default Reveal;
