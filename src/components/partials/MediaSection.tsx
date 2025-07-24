const MediaSection = () => {
  return (
    <section
      className="lg:py-42 sm:py-32"
      style={{
        backgroundImage: "url(/pattern.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          <div
            className="relative rounded-3xl p-6 mb-24 md:p-8 lg:p-6 flex flex-col lg:flex-row items-center justify-between overflow-visible"
            style={{ backgroundColor: '#134679' }} // Ganti warna latar belakang di sini
          >
            <div className="lg:w-2/3 text-white py-12 lg:ml-28">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4 leading-tight">
                Want To See Our Work?
                <br />
                Follow Our Social Media!
              </h2>
              <p className="text-gray-200 mb-8">
                Don't forget to share, like, and subscribe to our YouTube channel
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full transition-transform transform hover:scale-110">
                  <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full transition-transform transform hover:scale-110">
                  <img src="/icons/youtube.svg" alt="YouTube" className="h-6 w-6" />
                </a>
                <a href="https://www.tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full transition-transform transform hover:scale-110">
                  <img src="/icons/tiktok.svg" alt="TikTok" className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 mt-12 lg:mt-0 justify-center lg:pl-12 relative hidden lg:block">
              <div className="absolute w-80 h-[37rem] transform rotate-6 -top-70">
                <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] border-[14px] border-black">
                  <div className="absolute left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-lg"></div>
                  <video className="w-full h-full object-cover rounded-[2.5rem]" controls autoPlay muted>
                    <source src="/videos/media.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
  