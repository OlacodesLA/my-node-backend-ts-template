import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Direction from "./Animations/Direction";
import { MoveDown } from "lucide-react";

type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  alignRight?: boolean;
  imgSrc?: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  icon,
  imgSrc,
  alignRight,
}) => {
  const positionClass = alignRight ? "lg:right-10 lg:left-auto" : "";

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(
    mouseXSpring,
    [alignRight ? -0.5 : 0.5, alignRight ? 0.5 : -0.5],
    [alignRight ? "80%" : "20%", alignRight ? "20%" : "80%"]
  );

  const handleMouseMove = (e: any) => {
    //@ts-ignore
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      ref={ref}
      initial="initial"
      whileHover="whileHover"
      className="relative flex flex-col items-center"
    >
      <Direction direct={alignRight}>
        <div
          className={`flex items-center justify-${
            alignRight ? "end" : "start"
          } w-full mx-auto`}
        >
          <div
            className={`w-full lg:w-1/2 ${alignRight ? "lg:pl-8" : "lg:pr-8"}`}
          >
            <div
              className={`relative flex-1 mb-16 lg:mx-0 mx-2 ${
                alignRight ? "bg-yellow-50" : "bg-purple-50"
              } bg-white rounded-md shadow lg:mb-8 `}
            >
              <div
                className={`absolute inline-block w-4 overflow-hidden -translate-y-1/2 ${
                  alignRight ? "top-7 -left-4" : "top-3 -right-4"
                }`}
              >
                <div
                  className={`hidden h-10 origin-${
                    alignRight ? "top-right" : "bottom-left"
                  } transform -rotate-45 bg-green-800 lg:block drop-shadow-lg`}
                ></div>
              </div>
              <div className="relative z-20 p-6">
                <div
                  className={`absolute -top-4 ${positionClass} inline-block px-2 py-2 bg-black lg:rounded-bl-md lg:rounded-tr-md`}
                >
                  <span className="text-xs text-gray-100">{date}</span>
                </div>
                <motion.p
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: -16 },
                  }}
                  transition={{
                    type: "spring",
                    staggerChildren: 0.075,
                    delayChildren: 0.25,
                  }}
                  className={`mt-4 mb-2 text-2xl font-bold text-gray-600 text-${
                    alignRight ? "end" : "start"
                  } lg:text-${alignRight ? "end" : "start"}`}
                >
                  {title.split("").map((l, i) => (
                    <motion.span
                      variants={{
                        initial: { x: 0 },
                        whileHover: { x: 16 },
                      }}
                      transition={{ type: "spring" }}
                      className="inline-block"
                      key={i}
                    >
                      {l}
                    </motion.span>
                  ))}
                </motion.p>
                <p
                  className={`text-gray-700 text-${
                    alignRight ? "end" : "start"
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Direction>
      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-24 md:w-32"
        alt={`Image representing a link for ${title}`}
      />

      <div
        className={`absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-100 border border-green-800 rounded-full -700  left-1/2 sm:translate-y-0`}
      >
        <span className="text-green-800">
          <img src="/assets/bow.png" className="w-5 " alt="" />
        </span>
      </div>
    </motion.div>
  );
};

type TimelineProps = {
  items: TimelineItemProps[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section
      id="season-event"
      className="group relative py-16 bg-gradient-to-b mx-2 lg:mx-10 from-green-100 to-green-200 lg:py-20 font-poppins rounded-3xl"
    >
      <div className="inverted-radius ">
        <div className="flex justify-center items-center w-full h-full">
          <MoveDown
            size={40}
            className="group-hover:animate-bounce transition-all"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="relative font-christmas font-bold text-green-800 lg:text-6xl text-4xl h-fit w-fit text-center mb-16">
          SEASON EVENTS{" "}
          <img
            src="/assets/hat.png"
            className="w-14 absolute -right-8 -top-2 rotate-6"
            alt=""
          />
        </h2>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="w-full mx-auto lg:max-w-4xl">
          <div className="relative w-full">
            <div className="absolute block w-px h-full transform -translate-x-1/2 bg-green-800 lg:block left-1/2"></div>
            <div className="space-y-2 lg:space-y-4 w-full">
              {items.map((item, index) => (
                <TimelineItem
                  key={index}
                  {...item}
                  alignRight={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
