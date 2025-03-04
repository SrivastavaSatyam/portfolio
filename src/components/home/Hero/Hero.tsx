"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroProps } from "./types/types";
import Image from "next/image";

/**
 * Hero section component for the landing page
 * @component
 */
const Hero: React.FC<HeroProps> = ({ name = "Satyam Srivastava" }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }
  }, []);

  // Only apply scroll transforms if not on mobile
  const nameOpacity = useTransform(scrollY, [imageHeight * 0.25, imageHeight * 0.75], [1, isMobile ? 1 : 0]);
  const nameX = useTransform(scrollY, [imageHeight * 0.25, imageHeight * 0.75], [0, isMobile ? 0 : -200]);
  const nameY = useTransform(scrollY, [imageHeight * 0.25, imageHeight * 0.75], [0, isMobile ? 0 : -50]);
  const nameScale = useTransform(scrollY, [imageHeight * 0.25, imageHeight * 0.75], [1, isMobile ? 1 : 0.8]);
  const staticNameOpacity = useTransform(scrollY, [imageHeight * 0.25, imageHeight * 0.75], [0, isMobile ? 0 : 0.3]);

  return (
    <div ref={heroRef} className="min-h-screen bg-black flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl w-full mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8 md:gap-12 items-center">
          {/* Avatar Section */}
          <motion.div
            ref={imageRef}
            initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8
            }}
            className="relative mx-auto md:mx-0 w-48 sm:w-56 md:w-full"
          >
            <div className="relative rounded-full">
              <Image
                src="/images/MetaPerson-avatar.png"
                alt="Developer Avatar"
                width={300}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left space-y-4 md:space-y-6"
          >
            <div className="text-base sm:text-lg text-white/90 mb-1">
              Hello! I&apos;m{" "}
              <span className="relative inline-block">
                {!isMobile && (
                  <motion.span
                    style={{ opacity: staticNameOpacity }}
                    className="absolute inset-0 z-0"
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent opacity-30">
                      {name}
                    </span>
                  </motion.span>
                )}
                <motion.span 
                  style={isMobile ? {} : { 
                    opacity: nameOpacity,
                    x: nameX,
                    y: nameY,
                    scale: nameScale
                  }}
                  className="relative z-10 inline-block origin-left"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                    {name}
                  </span>
                  {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400/50"></span> */}
                </motion.span>
              </span>
            </div>

            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 md:space-y-4"
            >
              <p className="text-lg sm:text-xl text-white/80">A Software Engineer</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                passionate about building{" "}
                <span className="text-purple-400 relative inline-block">
                  exceptional
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400/50"></span>
                </span>{" "}
                digital experiences
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-8 sm:pt-12 md:pt-16 text-center md:text-left max-w-3xl mx-auto"
        > */}
          {/* <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
            >
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. Passionate about creating beautiful and functional user
              experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
            >
              I make meaningful and delightful digital products that create an
              equilibrium between user needs and business goals. My focus is on
              delivering high-quality solutions that exceed expectations.
            </motion.p>
          </div> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
