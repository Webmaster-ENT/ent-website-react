import { useState } from "react";
import { Link } from "react-router";
import BouncingSquares from "../animations/BouncingSquare";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function Jumbotron() {
  const [isNewsHovered, setIsNewsHovered] = useState<boolean>();
  const [isNetworkHovered, setIsNetworkHovered] = useState<boolean>();

  return (
    <div className="flex relative md:items-center items-start max-sm:px-6 flex-col justify-evenly min-h-screen max-h- w-full select-none">
      {/* decorative elements */}
      <BouncingSquares
        isFlip={false}
        isMobile={false}
        size={"lg"}
        className="left-20 bottom-80"
      />
      <BouncingSquares
        isFlip={true}
        isMobile={false}
        size={"lg"}
        className="right-20 top-32"
      />

      {/* mobile decorative elements */}
      <BouncingSquares
        isFlip={true}
        isMobile
        size={"sm"}
        className="right-6 top-36"
      />
      <BouncingSquares
        isFlip={true}
        isMobile
        size={"sm"}
        className="right-6 bottom-36"
      />
      <div className="font-medium text-6xl md:text-6xl lg:text-8xl max-w-4xl md:text-center max-sm:space-y-5">
        <div
          className="group flex max-sm:flex-col md:justify-center md:items-center gap-5"
          onMouseEnter={() => setIsNewsHovered(true)}
          onMouseLeave={() => setIsNewsHovered(false)}
        >
          <h1>EEPIS</h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={isNewsHovered ? { x: 40 } : { x: 0 }}
            transition={{
              duration: 0.25,
              type: "spring",
              damping: 15,
              stiffness: 300,
            }}
          >
            NEWS
          </motion.h1>
        </div>
        <h1>AND</h1>
        <div
          className="group flex max-sm:flex-col md:justify-center md:items-center gap-5"
          onMouseEnter={() => setIsNetworkHovered(true)}
          onMouseLeave={() => setIsNetworkHovered(false)}
        >
          <motion.h1
            initial={{ x: 0 }}
            animate={isNetworkHovered ? { x: -40 } : { x: 0 }}
            transition={{
              duration: 0.25,
              type: "spring",
              damping: 15,
              stiffness: 300,
            }}
          >
            NETWORK
          </motion.h1>
          <h1>TEAM</h1>
        </div>
      </div>
      {/* cta button */}
      <Button
        size={"lg"}
        className="rounded-full text-xl relative inline-flex gap-5 justify-center items-center px-12 py-6 overflow-hidden bg-[#134679] group hover:bg-[#134179] hover:translate-y-1 transition-all ease-in-out"
        asChild
      >
        <Link to={"/registration"} className="md:mx-auto">
          Be Part of ENT
          <span className="absolute right-4 translate-x-[10px] opacity-0 font-bold group-hover:translate-x-0 group-hover:block group-hover:opacity-100 transition-all ease-in-out duration-500">
            <img
              src={"/arrow-right.png"}
              alt="arrow-right.png"
              width={12}
              height={12}
            />
          </span>
        </Link>
      </Button>
    </div>
  );
}
