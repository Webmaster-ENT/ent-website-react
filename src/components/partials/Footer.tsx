import { useState } from "react"
import { Button } from "../ui/button"
import { Plus, X } from "lucide-react"
import { AnimatePresence, motion } from 'motion/react'
import AddressCard from "./AddressCard"

export default function Footer() {
    const [isAddressCardVisible, setIsAddressCardVisible] = useState<boolean>(false)

    return (
        <footer className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
            <video loop muted playsInline autoPlay disableRemotePlayback className="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/videos/footer.mp4" type="video/mp4" />
            </video>
            <div className="relative z-20 bg-black/45 h-full px-4 py-8 sm:px-8 sm:py-12 md:px-20 md:py-24">
                <div className="z-40 h-full flex justify-between">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight self-center translate-y-16">
                        Live Your Day With <br />Dicipline And Creativity
                    </h1>
                </div>
            </div>
            {/* plus button */}
            <Button
                onClick={() => setIsAddressCardVisible(!isAddressCardVisible)}
                className="absolute z-40 right-4 bottom-4 sm:right-8 sm:bottom-8 md:right-20 md:bottom-24 rounded-full bg-white text-blue-500 cursor-pointer hover:bg-slate-100"
                size={'icon'}
            >
                <AnimatePresence mode="wait">
                    {isAddressCardVisible ? (
                        <motion.div
                            key="x"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <X />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={'plus'}
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
                initial={{ y: 0 }}
                animate={isAddressCardVisible ? { y: 0 } : { y: 500 }}
                transition={{ duration: 0.75, ease: 'linear' }}
                className="absolute z-30 bottom-16 right-4 left-4 sm:bottom-20 sm:right-8 sm:left-auto md:bottom-28 md:right-24 w-auto sm:w-fit"
            >
                <AddressCard />
            </motion.div>
        </footer>
    )
}