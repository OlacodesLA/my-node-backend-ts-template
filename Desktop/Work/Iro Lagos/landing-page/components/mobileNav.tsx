import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./Animations/Anim";
import Link from "./link";
import Curve from "./curve";

const navItems = [
  {
    title: "Home",
    href: "hero",
  },
  {
    title: "About",
    href: "about",
    offset: -120,
  },
  {
    title: "Season Events",
    href: "season-event",
    offset: -120,
  },
  {
    title: "Contact",
    href: "contact",
    offset: -120,
  },
];

export default function MobileNav({ setIsActive }: any) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu bg-gray-950 w-full h-full"
    >
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav flex w-full h-full justify-center items-center gap-10 flex-col"
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                setIsActive={setIsActive}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <div className="menu-footer">
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
