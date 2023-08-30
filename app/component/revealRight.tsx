"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealRightProps {
    className : string  ;
    children : JSX.Element | any 
}

const RevealRight : React.FC<RevealRightProps> = ({ className , children }) => {
  const revealRef = useRef(null);
  const isInView = useInView(revealRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    console.log("isInView", isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={revealRef}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealRight;
