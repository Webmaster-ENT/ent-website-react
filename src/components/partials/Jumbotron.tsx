import { useState } from "react";
import { Link } from "react-router";
import BouncingSquares from "../animations/BouncingSquare";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { REGISTRATION_CONFIG } from "@/constants/config";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { AlertCircle } from "lucide-react";

export default function Jumbotron() {
  const [isNewsHovered, setIsNewsHovered] = useState<boolean>();
  const [isNetworkHovered, setIsNetworkHovered] = useState<boolean>();
  const [isClosedModalOpen, setIsClosedModalOpen] = useState<boolean>(false);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (!REGISTRATION_CONFIG.isOpen) {
      e.preventDefault();
      setIsClosedModalOpen(true);
    }
  };

  return (
    <div className="flex relative md:items-center items-start max-sm:px-6 flex-col justify-evenly min-h-screen max-h- w-full select-none" id="home">
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
        className="rounded-full text-xl relative inline-flex gap-5 justify-center items-center px-12 py-6 overflow-hidden bg-[#134679] group hover:bg-[#134179] hover:translate-y-1 transition-all ease-in-out cursor-pointer"
        asChild
        onClick={handleCtaClick}
      >
        <Link to={"/guidebook"} className="md:mx-auto">
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

      {/* Registration Closed Dialog */}
      <Dialog open={isClosedModalOpen} onOpenChange={setIsClosedModalOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3">
              <AlertCircle className="w-7 h-7" />
            </div>
            <DialogHeader className="text-center sm:text-center">
              <DialogTitle className="text-xl font-bold text-gray-900">
                {REGISTRATION_CONFIG.title}
              </DialogTitle>
              <DialogDescription className="text-gray-600 mt-2 text-base">
                {REGISTRATION_CONFIG.message}
              </DialogDescription>
            </DialogHeader>
          </div>
          <DialogFooter className="sm:justify-center mt-4">
            <Button
              variant="default"
              className="bg-[#134679] hover:bg-[#134179] w-full sm:w-auto px-8"
              onClick={() => setIsClosedModalOpen(false)}
            >
              Tutup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

