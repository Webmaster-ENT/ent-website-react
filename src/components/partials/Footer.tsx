import { useState } from "react"
import { Button } from "../ui/button"
import { Plus, X } from "lucide-react"
import { AnimatePresence, motion } from 'motion/react'
import AddressCard from "./AddressCard"

export default function Footer() {
    const [isButtonPlusClicked, setIsButtonClicked] = useState<boolean>(false)

    return (
        <footer className="relative w-full h-[500px] overflow-hidden">
            <video loop muted playsInline autoPlay disableRemotePlayback className="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/videos/footer.mp4" type="video/mp4" />
            </video>
            <div className="relative z-20 bg-black/45 h-full md:px-20 md:py-24">
                <div className="z-40 h-full flex items-end justify-between">
                    <h1 className="text-5xl text-white">Live Your Day With <br />Dicipline And Creativity</h1>
                </div>
            </div>
            {/* plus button */}
            <Button onClick={() => setIsButtonClicked(!isButtonPlusClicked)} className="absolute z-40 right-20 bottom-24 rounded-full bg-white text-blue-500 cursor-pointer hover:bg-slate-100" size={'icon'}>
                <AnimatePresence mode="wait">
                    {isButtonPlusClicked ? (
                        <motion.div
                            key="plus"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <X />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={'x'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <Plus />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
            {/* card */}
            <motion.div
                initial={{ y: 500 }}
                animate={isButtonPlusClicked ? { y: 0 } : { y: 500 }}
                transition={{ duration: 0.75, ease: 'linear' }}
                className="absolute z-30 bottom-28 right-24 w-fit"
            >
                <AddressCard />
            </motion.div> 
        </footer>
    )
}