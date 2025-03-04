'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/imageLoader';

const technologies = [
  { name: 'Figma', icon: '/images/techstack/figma.png' },
  { name: 'React', icon: '/images/techstack/react.png' },
  { name: 'Node.js', icon: '/images/techstack/node-js.png' },
  { name: 'Redux', icon: '/images/techstack/redux.png' },
  { name: 'Ionic', icon: '/images/techstack/ionic.png' },
  { name: 'JavaScript', icon: '/images/techstack/js.png' },
  { name: 'TypeScript', icon: '/images/techstack/ts.png' },
  { name: 'Tailwind CSS', icon: '/images/techstack/tailwind.png' },
  { name: 'CSS3', icon: '/images/techstack/css.png' },
  { name: 'HTML5', icon: '/images/techstack/html.png' },
  { name: 'Next.js', icon: '/images/techstack/nextjs.png' },
  { name: 'Nest.js', icon: '/images/techstack/nestjs.png' },
  { name: 'MongoDB', icon: '/images/techstack/mongodb.png' },
  { name: 'MySQL', icon: '/images/techstack/mysql.png' },
  { name: 'Python', icon: '/images/techstack/python.png' },
];

const TechStack = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animationDuration = 20000; // 20 seconds
    let startTime: number;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = ((timestamp - startTime) % animationDuration) / animationDuration;
      setPosition(-50 * progress); // Move from 0% to -50%
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-[#0A0A0F]">
      <div className="container mx-auto ">
        {/* Heading Section */}
        <h2 className="text-5xl text-center text-white mb-3">
          Tech Stack
        </h2>
        <div className="text-center">
          <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-orange-500 inline-block text-transparent bg-clip-text">
            MY TECH ARSENAL
          </span>
        </div>
        <div className="text-center mb-4">
          <hr className="w-24 mx-auto mt-2 shadow-[0_0_10px_rgba(168,85,247,0.4)] border-purple-500" />
        </div>

        {/* Infinite Scroll Container */}
        <div className="overflow-hidden py-10">
          <div
            className="flex gap-8 w-fit"
            style={{
              transform: `translateX(${position}%)`,
              transition: 'transform linear',
              willChange: 'transform'
            }}
          >
            {/* First set of icons */}
            {technologies.map((tech) => (
              <div
                key={`first-${tech.name}`}
                className="flex-shrink-0 relative group"
              >
                <div className="w-16 h-16 rounded-full bg-[#cfcfd2] flex items-center justify-center p-3">
                  <Image
                    src={getImagePath(tech.icon)}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech) => (
              <div
                key={`second-${tech.name}`}
                className="flex-shrink-0 relative group"
              >
                <div className="w-16 h-16 rounded-full bg-[#cfcfd2] flex items-center justify-center p-3">
                  <Image
                    src={getImagePath(tech.icon)}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 