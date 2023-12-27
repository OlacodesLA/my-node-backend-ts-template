"use client";

import React, { useContext, useState } from "react";
import Navbar from "./navbar";
import useMousePosition from "@/utils/useMousePosition";
import { CursorContext } from "@/context/stateContext";
import Balls from "./doodles/balls";
import Reveal from "./Animations/Reveal";
import ShuffleGrid from "./shuffle";
// import Doodles from "./doodles";

const Hero = () => {
  const { setCursorVariant } = useContext(CursorContext)!;

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="bg-gray-10 w-full h-full overflow-hidden" id="hero">
      <div className="w-full relative flex lg:justify-between lg:flex-row flex-col justify-center lg:items-start items-center rounded-br-[8%] bg-gradient-to-b from-[#F3ECDC] to-white font-bold px-2 md:px-10 py-48">
        {/* Doodles */}
        <div className="lg:hidden block absolute top-0 right-0 w-[200px] ">
          <div className="relative w-full">
            <img
              src="/assets/ball-5.png"
              className="absolute top-0  w-[100px]  object-cover"
              alt=""
            />
            <img
              src="/assets/ball-2.png"
              className="absolute top-0 left-[30px] w-[100px]  object-cover"
              alt=""
            />
            <img
              src="/assets/ball-3.png"
              className="absolute top-0 left-[70px] w-[100px]  object-cover"
              alt=""
            />
            <img
              src="/assets/ball-4.png"
              className="absolute top-0 left-[100px] w-[100px]  object-cover"
              alt=""
            />
            <img
              src="/assets/ball-1.png"
              className="absolute top-0 left-[130px] w-[100px]  object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Left  */}
        <div className="w-fit overflow-hidden">
          <div className="flex lg:justify-start justify-center">
            <Reveal>
              <div className="lg:text-start text-center px-4 lg:text-base text-sm font-bold py-1 rounded-full inline-flex bg-green-50/30 border border-green-800">
                Creative | Curated | Comfort
              </div>
            </Reveal>
          </div>
          <div className="flex lg:justify-start justify-center">
            <Reveal delay={0.4}>
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="lg:text-start text-center  w-full lg:text-[55px] text-3xl leading-tight py-4 font-bold"
              >
                Lorem ipsum dolor sit <br /> amet consectetur. <br />
                <span className="font-christmas text-green-900 text-3xl lg:text-[60px]">
                  Christmas!
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.8} className="lg:text-start text-center lg:w-1/2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa a
              dicta assumenda saepe accusamus sequi doloribus officiis libero
              modi iste, quidem nisi.
            </p>
          </Reveal>
          <Reveal
            delay={1.2}
            className="flex w-full lg:justify-start justify-center"
          >
            <button
              type="button"
              className="mt-3 relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium text-green-800 border-2 border-green-800 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-green-800 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-4 ease">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Shop Now</span>
            </button>
          </Reveal>
        </div>
        {/* Right */}
        <div className="relative z-30 w-full lg:pt-0 pt-10 lg:overflow-visible overflow-hidden">
          <ShuffleGrid />
          <div className="lg:block hidden absolute -top-40 right-5 w-[400px]">
            <div className="relative w-full">
              <img
                src="/assets/ball-5.png"
                className="absolute top-0  w-[150px]  object-cover"
                alt=""
              />
              <img
                src="/assets/ball-2.png"
                className="absolute top-0 left-[70px] w-[150px]  object-cover"
                alt=""
              />
              <img
                src="/assets/ball-3.png"
                className="absolute top-0 left-[140px] w-[150px]  object-cover"
                alt=""
              />
              <img
                src="/assets/ball-4.png"
                className="absolute top-0 left-[210px] w-[150px]  object-cover"
                alt=""
              />
              {/* <img
                src="/assets/ball-1.png"
                className="absolute top-0 left-[280px] w-[150px]  object-cover"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
