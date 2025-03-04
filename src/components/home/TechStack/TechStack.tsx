'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <section className="py-20 bg-[#0A0A0F]">
      <div className="container mx-auto px-4">
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
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            className="flex gap-8 w-fit"
          >
            {/* First set of icons */}
            {technologies.map((tech) => (
              <motion.div
                key={`first-${tech.name}`}
                className="flex-shrink-0 relative group"
              >
                <div className="w-16 h-16 rounded-full bg-[#cfcfd2] flex items-center justify-center p-3">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {tech.name}
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech) => (
              <motion.div
                key={`second-${tech.name}`}
                className="flex-shrink-0 relative group"
              >
                <div className="w-16 h-16 rounded-full bg-[#cfcfd2] flex items-center justify-center p-3">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 