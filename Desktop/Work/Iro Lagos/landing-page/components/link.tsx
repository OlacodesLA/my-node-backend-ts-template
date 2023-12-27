import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "./Animations/Anim";
import { Link as ScrollLink } from "react-scroll";

export default function Index({
  setIsActive,
  data,
  isActive,
  setSelectedIndicator,
}: any) {
  const { title, href, index, offset } = data;

  const handleSetActive = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      className=""
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
      ></motion.div>
      <div className="text-3xl">
        <ScrollLink
          to={href}
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
          onClick={handleSetActive}
        >
          {title}
        </ScrollLink>
      </div>
    </motion.div>
  );
}
