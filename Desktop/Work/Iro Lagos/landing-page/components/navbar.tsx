"use client";
import React, { useContext, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CursorContext } from "@/context/stateContext";
import MobileNav from "./mobileNav";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const { setCursorVariant } = useContext(CursorContext)!;

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <nav className="fixed w-screen top-0 left-0 md:px-10 px-4 my-4 flex z-40">
      <div className="w-full flex justify-center py-3 px-5 bg-green-50/70 rounded-[50px] border border-green-900">
        <div className="flex w-full flex-row justify-center lg:justify-between items-center gap-5">
          {/* <div className="flex flex-col ml-3  items-center font-bold">
            <span className="leading-3">Iro</span>
            <span>Lagos</span>
          </div> */}
          <img src="/assets/logo.png" className="w-12" alt="" />
          <ul className="lg:flex hidden items-center font-bold gap-x-10">
            <li
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="cursor-pointer"
            >
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="season-event"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Season Event
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="relative lg:inline-block items-center justify-start hidden px-5 py-2 overflow-hidden font-medium transition-all bg-black rounded-full hover:bg-white group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full inline-flex text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              Contact
              <Phone className="ml-2 w-4" />
            </span>
          </button>
          <div className="header">
            <div className="bg-green-900 p-2 rounded-full">
              {isActive ? (
                <X
                  onClick={() => setIsActive(!isActive)}
                  className="text-white"
                />
              ) : (
                <Menu
                  onClick={() => setIsActive(!isActive)}
                  className="text-white"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <MobileNav setIsActive={setIsActive} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
