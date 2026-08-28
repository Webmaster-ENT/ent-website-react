import { useState, useRef } from "react";

export default function MagazineSection() {
    const [activeTab, setActiveTab] = useState<'digital' | 'ar'>('digital');
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleFullscreen = () => {
        if (iframeRef.current) {
            if (iframeRef.current.requestFullscreen) {
                iframeRef.current.requestFullscreen();
            } else if ((iframeRef.current as any).webkitRequestFullscreen) {
                (iframeRef.current as any).webkitRequestFullscreen();
            } else if ((iframeRef.current as any).msRequestFullscreen) {
                (iframeRef.current as any).msRequestFullscreen();
            }
        }
    };

    return (
        <section
            className="relative w-full flex flex-col items-center justify-start py-20 lg:py-32"
            id="magazine"
            style={{
                backgroundImage: "url(/pattern.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* title section */}
                <div className="flex flex-col items-center space-y-4 md:space-y-6 mb-12 text-center">
                    <h1 className="font-medium text-4xl md:text-6xl text-[#134679] leading-tight">
                        Magazine & Experiences
                    </h1>
                    <p className="w-full max-w-2xl text-base md:text-lg text-gray-600">
                        Stay up-to-date with the latest news, campus stories, and developments around PENS through our interactive digital magazine and immersive AR experiences.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex space-x-2 md:space-x-4 mb-10 bg-white/60 backdrop-blur-md p-2 rounded-full shadow-sm border border-gray-100 overflow-x-auto max-w-full">
                    <button
                        onClick={() => setActiveTab('digital')}
                        className={`whitespace-nowrap px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                            activeTab === 'digital'
                                ? 'bg-[#134679] text-white shadow-lg shadow-blue-900/20'
                                : 'text-gray-500 hover:text-[#134679] hover:bg-white/80'
                        }`}
                    >
                        Digital Magazine
                    </button>
                    <button
                        onClick={() => setActiveTab('ar')}
                        className={`whitespace-nowrap px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                            activeTab === 'ar'
                                ? 'bg-[#134679] text-white shadow-lg shadow-blue-900/20'
                                : 'text-gray-500 hover:text-[#134679] hover:bg-white/80'
                        }`}
                    >
                        AR Experience
                    </button>
                </div>

                {/* Content Area */}
                <div className="w-full max-w-6xl relative mt-4">
                    {activeTab === 'digital' ? (
                        // --- DIGITAL MAGAZINE LAYOUT (Two Columns) ---
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Column: Text & Button */}
                            <div className="lg:col-span-6 flex flex-col space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1 items-center lg:items-start">
                                <div className="text-center lg:text-justify">
                                    <h2 className="text-4xl md:text-5xl font-bold text-[#134679] leading-snug">
                                        Capturing Movement. <span className="text-[#f4cb01]">Spotlighting</span> Impact.
                                    </h2>
                                    <p className="text-lg md:text-xl font-medium text-[#134679] mt-2 opacity-80">
                                        Issue XI | January–July 2026
                                    </p>
                                </div>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-justify">
                                    Ideas evolve. Creativity takes shape. Collaborations spark change. At PENS, there’s always a story in motion.
                                    <br></br><br></br>
                                    In Issue XI, Coremagz brings those stories to the forefront which highlighting the ideas, works, and innovations shaped by students, and turning campus moments into stories worth experiencing, sharing, and remembering.
                                </p>
                                <div className="pt-2">
                                    <a href="https://online.fliphtml5.com/nxabo/COREMAGZ-EDISI-XI-JANUARI-JULI-2026/#p=1" className="inline-block">
                                        <button className="group flex items-center justify-center px-6 py-3 bg-[#134679] text-white rounded-xl font-medium hover:bg-blue-900 transition-all duration-300 shadow-lg shadow-blue-900/20">
                                            <span>Read More</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-0 h-5 group-hover:w-5 group-hover:ml-2 transition-all duration-300 opacity-0 group-hover:opacity-100 overflow-hidden">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Viewer Placeholder */}
                            <div className="lg:col-span-6 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#134679] to-cyan-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] bg-white rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                                    <img src="magazines/CoverCoremagzXI.png" alt="" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        // --- AR EXPERIENCE LAYOUT (Two Columns) ---
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Column: Text & Button */}
                            <div className="lg:col-span-6 flex flex-col space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1 items-center lg:items-start">
                                <div className="text-center lg:text-justify">
                                    <h2 className="text-4xl md:text-5xl font-bold text-[#134679] leading-snug">
                                        ENT  <span className="text-[#f4cb01]">AR</span> EXPERIENCE
                                    </h2>
                                    <p className="text-lg md:text-xl font-medium text-[#134679] mt-2 opacity-80">
                                        More Than a Page. An Experience.
                                    </p>
                                </div>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-justify">
                                    What if a page could do more than tell a story?
                                    <br></br><br></br>
                                    Through Augmented Reality, ENT transforms Coremagz into an interactive experience where stories come to life, visuals go beyond the page, and technology becomes part of the story.
                                </p>
                                <div className="pt-2">
                                    <a href="https://online.fliphtml5.com/nxabo/COREMAGZ-EDISI-XI-JANUARI-JULI-2026/#p=1" className="inline-block">
                                        <button className="group flex items-center justify-center px-6 py-3 bg-[#134679] text-white rounded-xl font-medium hover:bg-blue-900 transition-all duration-300 shadow-lg shadow-blue-900/20">
                                            <span>Read More</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-0 h-5 group-hover:w-5 group-hover:ml-2 transition-all duration-300 opacity-0 group-hover:opacity-100 overflow-hidden">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Viewer Placeholder */}
                            <div className="lg:col-span-6 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#134679] to-cyan-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                
                                <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] bg-black rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                                    <iframe
                                        ref={iframeRef}
                                        src="https://2kpv9.zappar-us.io/4038639736034260939/"
                                        width="100%"
                                        height="100%"
                                        className="w-full h-full border-none"
                                        allow="camera; microphone; fullscreen; autoplay" 
                                        allowFullScreen>
                                    </iframe>
                                    
                                    {/* Fullscreen Button Overlay */}
                                    <button 
                                        onClick={handleFullscreen}
                                        className="absolute bottom-6 right-6 p-3 bg-black/60 hover:bg-black/90 backdrop-blur-md text-white rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl border border-white/10 z-10"
                                        title="Enter Fullscreen"
                                        aria-label="Enter fullscreen"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
