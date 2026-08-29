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
                    <h1 className="font-medium text-4xl md:text-6xl text-black leading-tight">
                        Magazine & Experiences
                    </h1>
                    <p className="w-full max-w-2xl text-base md:text-lg text-black">
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
                            </div>

                            {/* Right Column: Viewer Placeholder */}
                            <div className="lg:col-span-6 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none relative group">
                                <a href="https://online.fliphtml5.com/nxabo/COREMAGZ-EDISI-XI-JANUARI-JULI-2026/#p=1" target="_blank" rel="noopener noreferrer" className="block relative cursor-pointer">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#134679] to-cyan-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] bg-white rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden shadow-2xl group-hover:shadow-[#134679]/30 transition-shadow duration-300">
                                        <img src="magazines/CoverCoremagzXI.jpg" alt="Cover Coremagz XI" className="w-full h-full object-cover" />
                                        
                                        {/* Hover Overlay - Call to Action */}
                                        <div className="absolute inset-0 bg-[#134679]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 mb-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                            </svg>
                                            <span className="text-xl font-bold">Read Digital Magazine</span>
                                            <span className="text-sm text-white/80 mt-1">Click to open</span>
                                        </div>
                                    </div>
                                </a>
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
                                <div className="pt-4 flex justify-center lg:justify-start w-full">
                                    <div className="group flex items-center gap-5 bg-white pl-4 pr-6 py-3 rounded-2xl shadow-[0_4px_20px_-4px_rgba(19,70,121,0.1)] border border-[#134679]/10 hover:border-[#134679]/30 hover:shadow-[0_8px_30px_-4px_rgba(19,70,121,0.15)] transition-all duration-300">
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#134679] text-white rounded-xl shadow-md shadow-[#134679]/20 group-hover:scale-105 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="font-semibold text-[#134679] text-base md:text-lg">Scan the Magazine</span>
                                            <span className="text-sm text-gray-500 font-medium leading-tight mt-0.5">Allow camera access to bring pages to life</span>
                                        </div>
                                    </div>
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
