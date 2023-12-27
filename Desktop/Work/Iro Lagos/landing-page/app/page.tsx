"use client";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { AnimatePresence, motion } from "framer-motion";
import { CursorContext } from "@/context/stateContext";
import { useContext } from "react";
import Timeline from "@/components/timeline";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Doodles from "@/components/doodles";
import Faq from "@/components/faq";

export default function Home() {
  const { x, y, cursorVariant } = useContext(CursorContext)!;

  const variants = {
    default: {
      x: x - 16,
      y: y - 16,
      transition: { type: "tween", ease: "backOut" },
    },
    text: {
      height: 150,
      width: 150,
      x: x - 75,
      y: y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  return (
    <AnimatePresence mode="wait">
      <div className="relative w-full">
        <Doodles />
        <div className="">
          <Navbar />
          {/* <Navbar /> */}
          <Hero />
          <Timeline items={timelineItems} />
          <Gallery />
          {/* <Faq /> */}
          <Contact />
          <Footer />
        </div>
        <motion.div
          className="cursor z-50"
          //@ts-ignore
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    </AnimatePresence>
  );
}

const timelineItems = [
  {
    date: "2010-01-06",
    title: "Company Started",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-building"
        viewBox="0 0 16 16"
      >
        {/* Building icon path */}
      </svg>
    ),
    imgSrc: "/assets/logo-mini.jpg",
  },
  {
    date: "2013-10-03",
    title: "Website Launched",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-globe"
        viewBox="0 0 16 16"
      >
        {/* Globe icon path */}
      </svg>
    ),
    imgSrc: "/assets/logo-mini.jpg",
  },
  {
    date: "2018-05-20",
    title: "Made 100+ Themes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        {/* Code Slash icon path */}
      </svg>
    ),
    imgSrc: "/assets/logo-mini.jpg",
  },
  {
    date: "2020-07-04",
    title: "Launch Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        {/* Clock icon path */}
      </svg>
    ),
    imgSrc: "/assets/logo-mini.jpg",
  },
];
