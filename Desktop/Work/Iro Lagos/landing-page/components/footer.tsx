import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "Sales Event", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Christmas Sale", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "#",
      icon: Youtube,
    },
  ],
};

export default function Example() {
  return (
    <footer className="relative bg-gradient-to-r overflow-hidden from-[#0b0f24] to-[#0a0b10] pb-5 px-6  lg:px-8">
      <img
        src="/assets/horse-1.png"
        className="absolute left-0 -z-0 bottom-0 opacity-10 lg:w-40 w-20"
        alt=""
      />
      <img
        src="/assets/tree-1.png"
        className="absolute right-0 -z-0 bottom-0 opacity-10 lg:w-40 w-20"
        alt=""
      />
      {/* <div className="w-[1px] h-[1px] absolute "></div> */}
      <div className="flex z-10 text-white flex-col py-10 text-xl items-center font-bold">
        <span className="leading-3">Iro</span>
        <span>Lagos</span>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden ">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-md leading-6 font-bold text-white hover:text-white"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-200"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-300">
          &copy; 2023 Iro Lagos, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
