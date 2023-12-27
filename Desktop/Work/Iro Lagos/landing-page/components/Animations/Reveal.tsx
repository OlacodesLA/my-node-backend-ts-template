import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  change?: boolean;
  className?: string;
  delay?: number;
}

const Reveal = ({
  children,
  width = "fit-content",
  change,
  className,
  delay,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`overflow-hidden relative w-fit  ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: delay ? delay : 0.25 }}
        className=""
      >
        {children}
      </motion.div>
      <motion.div
        className={`absolute top-4 bottom-4 left-0 right-0  z-20 h-full ${
          change ? " bg-white" : "bg-black"
        }`}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          delay: delay ? delay : 0,
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
