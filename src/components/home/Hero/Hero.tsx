"use client";

import React, { useRef, useEffect, useState } from "react";
import { HeroProps } from "./types/types";
import Image from "next/image";
import { getImagePath } from "@/src/utils/imageLoader";

/**
 * Hero section component for the landing page
 * @component
 */
const Hero: React.FC<HeroProps> = ({ name = "Satyam Srivastava" }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8 md:gap-12 items-center">
          <div
            className={`relative mx-auto md:mx-0 w-48 sm:w-56 md:w-full transition-all duration-800 ease-out ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative rounded-full overflow-hidden">
              <Image
                src={getImagePath("/images/MetaPerson-avatar.png")}
                alt="Developer Avatar"
                width={300}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <div 
              className={`text-base sm:text-lg text-white/90 mb-1 transition-all duration-800 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Hello! I&apos;m{" "}
              <span className="relative inline-block">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  {name}
                </span>
              </span>
            </div>

            <div
              className={`space-y-3 md:space-y-4 transition-all duration-800 ease-out ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <p className="text-lg sm:text-xl text-white/80">A Software Engineer</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                passionate about building{" "}
                <span className="text-purple-400 relative inline-block group">
                  exceptional
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400/50 transform origin-left transition-transform duration-300 ease-out group-hover:scale-x-110"></span>
                </span>{" "}
                digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
