import { useState } from "react"
import BouncingSquares from "../../animations/BouncingSquare"
import DivisionAccordionList from "./DivisionAccordionList"
import { accordionMobile, group1, group2 } from "@/data/divisions"

export default function DivisionSection() {
    const [activeGroup1, setActiveGroup1] = useState<number | null>(1)
    const [activeGroup2, setActiveGroup2] = useState<number | null>(2)
    const [activeAccordionMobile, setActiveAccordionMobile] = useState<number | null>(1)

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start my-32">
            {/* decorative components */}
            <BouncingSquares size="lg" isMobile={false} isFlip className="left-36 top-5" />
            <BouncingSquares size="md" isMobile={false} isFlip={false} className="right-36 top-42" />
            <img src={'/icons/star.svg'} alt="star.svg" width={20} height={20} className="absolute animate-spin right-5 top-5 md:hidden" />

            {/* mobile section only */}
            <div className="flex md:hidden flex-col px-5 space-y-6 mb-10">
                <h1 className="font-medium text-4xl leading-tight">Let&apos;s Dive In Deeper</h1>
                <p className="w-full max-w-4xl text-base text-balance">ENT is the Journalism and Network Team responsible for managing the official media accounts of Politeknik Elektronika Negeri Surabaya (PENS). It has the posibility to work for content, news, and video needs. We can help in terms of brainstorming, technical execution, to marketing publications.</p>
            </div>

            <div className="realtive md:hidden px-5 my-20">
                {/* decorative components */}
                <div className="absolute right-5 w-[140px] h-[87px]">
                    <img src={'/icons/rafa.svg'} alt="rafa.svg" className="object-cover rounded-full rounded-br-none" />
                </div>
                <h1 className="text-6xl font-medium text-pretty leading-none">Where Learning Spirit And Passion Meet</h1>
            </div>

            {/* title section */}
            <div className="flex max-md:px-5 flex-col items-center space-y-6 md:space-y-10">
                {/* title */}
                <h1 className="font-medium max-md:hidden text-6xl md:text-center leading-snug">Let&apos;s Dive In Deeper <br />Get To Know The Divisions</h1>
                {/* title mobile resolution */}
                <h1 className="font-medium text-4xl leading-tight md:hidden">Get To Know The Divisions</h1>
                <p className="w-full max-w-4xl md:text-center text-base md:text-lg">
                    To support the needs, in the ENT student unit there are divisions that will work according to their expert fields. What divisions are there in ENT? Let&apos;s find out!
                </p>
            </div>

            {/* accordion view */}
            <div className="mt-24 flex max-md:hidden justify-center items-center w-full gap-5">
                {/* group1 */}
                <DivisionAccordionList 
                    items={group1}
                    activeId={activeGroup1}
                    onToggle={(id) => setActiveGroup1(activeGroup1 === id ? null : id)}
                />

                {/* group2 */}
                <DivisionAccordionList 
                    items={group2}
                    activeId={activeGroup2}
                    onToggle={(id) => setActiveGroup2(activeGroup2 === id ? null : id)}
                />
            </div>

            {/* accordion mobile */}
            <div className="mt-24 flex md:hidden flex-col justify-center items-center w-full gap-5">
                <DivisionAccordionList 
                    items={accordionMobile}
                    activeId={activeAccordionMobile}
                    onToggle={(id) => setActiveAccordionMobile(activeAccordionMobile === id ? null : id)}
                />
            </div>
        </section>
    )
}