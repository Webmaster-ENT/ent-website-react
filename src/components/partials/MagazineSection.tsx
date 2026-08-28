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
                            <div className="lg:col-span-6 flex flex-col space-y-6 text-left order-2 lg:order-1">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#134679] leading-snug">
                                    COREMAGZ<br/>Edisi Terbaru
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    Majalah kampus kami selalu berupaya untuk memahami dan mendokumentasikan peran mahasiswa dalam proses inovasi yang terus berkembang di kampus ini. Kami berkomitmen untuk menjadi jendela yang memberikan wawasan tentang cerita-cerita inspiratif, ide cemerlang, serta berita terbaru seputar PENS.
                                </p>
                                <div className="pt-2">
                                    <iframe src=""></iframe>
                                    <a href="https://online.fliphtml5.com/nxabo/COREMAGZ-EDISI-XI-JANUARI-JULI-2026/#p=1">
                                        <button className="px-6 py-3 bg-[#134679] text-white rounded-xl font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
                                            Baca Selengkapnya
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
                            <div className="lg:col-span-6 flex flex-col space-y-6 text-left order-2 lg:order-1">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#134679] leading-snug">
                                    ENT AR Experience<br/>Interactive WebGL
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    Jelajahi karya inovatif dan cerita interaktif dari ENT langsung dari browser Anda. Pengalaman Augmented Reality (AR) ini dapat dimainkan tanpa perlu instalasi tambahan. Uncover secrets and dive into our immersive world.
                                </p>
                                {/* <div className="pt-2">
                                    <button className="px-6 py-3 bg-[#134679] text-white rounded-xl font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
                                        Mainkan Sekarang
                                    </button>
                                </div> */}
                            </div>

                            {/* Right Column: Viewer Placeholder */}
                            <div className="lg:col-span-6 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#134679] to-cyan-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                
                                <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] bg-black rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden shadow-2xl border border-gray-100/10">
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
