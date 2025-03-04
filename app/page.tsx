import React from 'react';
import Hero from '@/src/components/home/Hero/Hero';
import Experience from '@/src/components/home/Experience/Experience';
import Testimonials from '@/src/components/home/Testimonials/Testimonials';
import TechStack from '@/src/components/home/TechStack/TechStack';
import Projects from '@/src/components/home/Projects/Projects'
import Socials from '@/src/components/home/Socials';
import Recognition from '@/src/components/home/Recognitions';
export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <Recognition />
      <TechStack />
      {/* <Testimonials /> */}
      <Socials />
    </div>
  );
} 