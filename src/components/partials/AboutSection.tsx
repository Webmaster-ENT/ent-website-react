import { motion } from 'motion/react'
import BubbleChat from '../ui/bubble-chat'
import Carousel from './Carousel'

export type AboutCard = {
    id: number
    photo: string
    alt: string
    description: string
    isMiddle?: boolean
}

const aboutCardData: AboutCard[] = [
    {
        id: 1,
        photo: '/about/card-1.svg',
        alt: 'card-1.svg',
        description: 'ENT Members Covering The Robot Competitions',
        isMiddle: false
    },
    {
        id: 2,
        photo: '/about/card-2.svg',
        alt: 'card-2.svg',
        description: 'Shooting For Social Media Contents',
        isMiddle: true
    },
    {
        id: 3,
        photo: '/about/card-3.svg',
        alt: 'card-3.svg',
        description: 'Perform Journalist Activities For News Updates',
        isMiddle: false
    }
]

export default function AboutSection() {
    return (
        <div className="relative py-5 md:py-12 w-full flex flex-col md:items-center md:justify-evenly" id='about'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'backInOut' }}
                className='space-y-5 select-none max-md:hidden'
            >
                <h1 className='font-medium text-6xl text-center leading-snug'>Somebody Said <br />&quot;Tak Kenal Maka Tak Sayang&quot;</h1>
            </motion.div>
            {/* decorative bubble chat */}
            <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -5 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 500, damping: 10 }}
                className='absolute top-5 right-60 origin-bottom-left max-sm:hidden'
            >
                <BubbleChat isReceiver>
                    So Let&apos;s Get <br />To Know About <span className='font-semibold'>ENT</span>
                </BubbleChat>
            </motion.div>

            {/* card */}
            <div className='grid grid-cols-3 gap-10 mt-32'>
                {aboutCardData.map((card) => (
                    <motion.div 
                        key={card.id}
                        initial={{ x:0, y:0, opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        whileHover={{ x:-5, y:-5 }}
                        transition={{ duration: 0.15  }}
                        className={`w-fit relative group rounded-4xl hover:shadow-xl transition-all duration-75 ease-in-out ${card.isMiddle && 'bottom-10'}`}
                    >
                        <img src={card.photo} alt={card.alt} width={350} height={455} className='max-sm:hidden rounded-4xl' />
                        <div className='text-white text-xl select-none rounded-4xl w-full h-full bg-gradient-to-t from-black/85 to-transparent hidden group-hover:flex flex-col justify-end gap-3 absolute top-0 left-0 right-0 bottom-0 px-5 py-5'>
                            <p className='font-medium'>{card.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* carousel for mobile */}
            <Carousel cards={aboutCardData} />
        </div>
    )
}