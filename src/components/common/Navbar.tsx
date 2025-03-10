'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getImagePath } from "@/src/utils/imageLoader";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollProgress(Math.min(window.scrollY / 50, 1));
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navNameOpacity = scrollProgress;
  const navNameX = 100 * (1 - scrollProgress);
  const navNameY = 25 * (1 - scrollProgress);

  return (
    <nav 
      className={`fixed w-full z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'border-b border-border' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            style={{ 
              opacity: navNameOpacity,
              transform: `translate(${navNameX}px, ${navNameY}px)`,
              transformOrigin: 'left center',
              transition: 'opacity 0.3s, transform 0.3s'
            }}
          >
            <Link href="/">
              <div className="text-xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent bg-blend-darken">
                Satyam Srivastava
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a
              href={getImagePath("/downloadCv/satyam-srivastava-resume.pdf")}
              download="satyam-srivastava-resume.pdf"
              className="text-foreground/80 border rounded-md bg-white text-black px-4 py-2 hover:bg-gray-100 transition-colors inline-flex items-center"
              aria-label="Download CV"
            >
              Download CV <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>

          <a
            href={getImagePath("/downloadCv/satyam-srivastava-resume.pdf")}
            download="satyam-srivastava-resume.pdf"
            className="md:hidden text-foreground/80 border rounded-md bg-white text-black px-4 py-2 hover:bg-gray-100 transition-colors inline-flex items-center"
            aria-label="Download CV"
          >
            Download CV <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 