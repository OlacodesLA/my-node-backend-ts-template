import { useInView, useAnimation, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direct?: boolean;
}

const Direction = ({ children, direct, className, delay }: Props) => {
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
    <div ref={ref} className={` relative w-fit  ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: direct ? 100 : -100 },
          visible: { opacity: 1, x: direct ? 0 : 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: delay ? delay : 0.25 }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Direction;
