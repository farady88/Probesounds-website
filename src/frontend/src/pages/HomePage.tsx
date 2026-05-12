import { useEffect, useState } from "react";
import { SiInstagram, SiSpotify, SiTiktok, SiYoutube } from "react-icons/si";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const logoPath = "/assets/Probe%20Logo.jpeg";
  const fallbackLogoPath = "/assets/Probe%20Logo-1.jpeg";

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-black to-black animate-pulse-slow pointer-events-none" />

      {/* Logo - Fixed top-left on desktop (mirrors info icon), hidden on mobile (shown in flow) */}
      <div
        className={`hidden md:block fixed top-6 left-6 z-50 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-36 lg:w-[10.5rem] overflow-hidden">
          <img
            src={imageError ? fallbackLogoPath : logoPath}
            alt="Probe Logo"
            className="w-full h-auto scale-[1.35] filter drop-shadow-2xl"
            onError={() => setImageError(true)}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo - Mobile only (centered, in flow). Desktop logo is fixed top-left above. */}
        <div
          className={`md:hidden w-full mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center animate-fade-in-smooth">
            <div className="w-64 overflow-hidden">
              <img
                src={imageError ? fallbackLogoPath : logoPath}
                alt="Probe Logo"
                className="w-full h-auto scale-[1.35] filter drop-shadow-2xl"
                onError={() => setImageError(true)}
              />
            </div>
          </div>
        </div>

        {/* Content - Always centered */}
        <div className="w-full flex justify-center">
          <div
            className={`space-y-8 md:space-y-10 lg:space-y-12 flex flex-col items-center text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tagline */}
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.35em] text-white animate-fade-in-delay-1 uppercase"
              style={{ animationDelay: "0.4s" }}
            >
              Seek. Serve. Produce.
            </h2>

            {/* Established */}
            <p
              className="text-xs md:text-sm tracking-widest text-gray-400 animate-fade-in-delay-2"
              style={{ animationDelay: "0.6s" }}
            >
              EST 2025
            </p>

            {/* Main Message */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] text-white animate-fade-in-delay-3 uppercase"
              style={{ animationDelay: "0.8s" }}
            >
              Content
              <br />
              <span className="text-gray-400">Coming Soon</span>
            </h1>

            {/* Social Media Links */}
            <div
              className="flex gap-8 md:gap-12 animate-fade-in-delay-4"
              style={{ animationDelay: "1.0s" }}
            >
              <a
                href="https://instagram.com/probesounds"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-all duration-500"
                aria-label="Follow us on Instagram"
              >
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-gray-700 group-hover:border-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/10">
                  <SiInstagram className="w-9 h-9 text-gray-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white transition-colors duration-500 tracking-wider font-light">
                  @probesounds
                </span>
              </a>

              <a
                href="https://tiktok.com/@probe_sounds"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-all duration-500"
                aria-label="Follow us on TikTok"
              >
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-gray-700 group-hover:border-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/10">
                  <SiTiktok className="w-9 h-9 text-gray-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white transition-colors duration-500 tracking-wider font-light">
                  @probe_sounds
                </span>
              </a>

              <a
                href="https://youtube.com/@Probe_Sounds"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-all duration-500"
                aria-label="Follow us on YouTube"
              >
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-gray-700 group-hover:border-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/10">
                  <SiYoutube className="w-9 h-9 text-gray-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white transition-colors duration-500 tracking-wider font-light">
                  @Probe_Sounds
                </span>
              </a>

              <a
                href="https://open.spotify.com/user/31q6ra54242pmjhv7hk7giyxzyou?si=73f52051bfe64167"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-all duration-500"
                aria-label="Follow us on Spotify"
                data-ocid="spotify.link"
              >
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-gray-700 group-hover:border-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/10">
                  <SiSpotify className="w-9 h-9 text-gray-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white transition-colors duration-500 tracking-wider font-light">
                  @probesounds
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2025 Probe & Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
