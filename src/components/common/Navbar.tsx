'use client';

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const navNameOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const navNameX = useTransform(scrollY, [0, 50], [100, 0]);
  const navNameY = useTransform(scrollY, [0, 50], [25, 0]);

  return (
    <motion.nav 
      className={`fixed w-full z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'border-b border-border' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            style={{ 
              opacity: navNameOpacity,
              x: navNameX,
              y: navNameY,
              transformOrigin: 'left center'
            }}
          >
            <Link href="/">
              <div className="text-xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent bg-blend-darken">
                Satyam Srivastava
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <button
              className="text-foreground/80 border rounded-md bg-white text-black px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              Download CV <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </div>

          <button className="md:hidden">
            {/* Add mobile menu button here */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 