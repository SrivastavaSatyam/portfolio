import React from 'react';
import Hero from '@/components/home/Hero/Hero';
import Experience from '@/components/home/Experience/Experience';
import Testimonials from '@/components/home/Testimonials/Testimonials';
import TechStack from '@/components/home/TechStack/TechStack';
import Projects from '@/components/home/Projects/Projects'
import Socials from '@/components/home/Socials';
import Recognition from '@/components/home/Recognitions';
export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <Recognition />
      <TechStack />
      <Testimonials />
      <Socials />
    </div>
  );
} 