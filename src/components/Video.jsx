const Video = () => {
  const scrollToMain = () => {
    const mainSection = document.querySelector('.main-section');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
      >
        <source src="/main-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>

      {/* Content over video */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
        <div className="text-center text-white max-w-5xl">
          <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tight text-[#E6C85D] text-shadow-strong">
            NORI
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-[#E6C85D] to-transparent mx-auto mb-6"></div>
          <p className="font-inter text-xl md:text-3xl font-medium tracking-[0.3em] text-[#F6E27A] text-shadow-strong drop-shadow-xl">
            AUTHENTIC ASIAN EXPERIENCE
          </p>
        </div>

        {/* Scroll button */}
        <button
          onClick={scrollToMain}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 group cursor-pointer"
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-white/70 text-sm font-light tracking-wider group-hover:text-white transition-colors">
              SCROLL
            </span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-white/70 transition-all">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll-mouse"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Beautiful bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
        <svg
          className="w-full h-32 md:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-black"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Video;