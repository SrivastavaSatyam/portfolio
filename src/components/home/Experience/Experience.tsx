'use client';

import React from 'react';

interface Position {
  title: string;
  duration: string;
  subtitle?: string;
  description: string;
  technologies: string[];
}

interface ExperienceProps {
  company: string;
  location: string;
  positions?: Position[];
  // For single position experiences
  title?: string;
  subtitle?: string;
  duration?: string;
  description?: string;
  technologies?: string[];
}

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2 top-[10px] shadow-[0_0_10px_rgba(168,85,247,0.4)]" />
);

const Experience: React.FC = () => {
  const experienceData: ExperienceProps[] = [
    {
      company: "Paytm(One97 Communications)",
      location: "Noida, Uttar Pradesh",
      positions: [
        {
          title: "Software Engineer",
          subtitle: "Full-time",
          duration: "JUN 2023 - PRESENT",
          description: "Designed and developed the revamped version of Paytm Insurance (Motor Insurance), leading the migration of the existing codebase to the new platform and integrating new features. Successfully implemented the complete KYC verification module for the updated version.",
          technologies: ["React", "TypeScript", "NodeJS", "NextJs", "MySQL", "Tailwind CSS"]
        },
        {
          title: "Software Engineer Intern",
          subtitle: "Internship",
          duration: "JAN 2023 - JUN 2023",
          description: "Engaged in all embedded projects, ensuring code quality and conducting thorough testing before deployment. Developed API automation scripts and contributed to the framework for web automation. Designed the end-to-end automation flow for applications across all products.",
          technologies: ["Java", "Automation", "Selenium", "JavaScript", "TestNG", "Cucumber","Version Control","Newman Report(Postman)"]
        }
      ]
    },
    {
      company: "DigiLocker",
      location: "New Delhi, Delhi",
      title: "Full Stack Developer",
      subtitle: "Internship",
      duration: "MAR 2022 - JAN 2023",
      description: "Involved in DigiLocker project as Full Stack Developer building Restfull APIs for user login/registration and backend jobs for authorizing/authenticating users data using JWT tokens and has worked on encryption/decryption of the data and providing better suggestion filter for better search",
      technologies: ["Python", "Django", "Ionic", "Typescript", "NestJS", "JWT"]
    },
    {
      company: "Google Developer Student Clubs (ABESIT)",
      location: "Ghaziabad, Uttar Pradesh",
      title: "Tech Team Core Member",
      duration: "JUN 2021 - AUG 2021",
      description: "As a core member of the tech team, managed the technical aspects of events, including theme selection and overseeing technical implementation. Led workshops and training sessions for participants, covering web development, app development, and hackathons for college students.",
      technologies: ["Community Building", "Team Management", "Leadership", "Problem Solving", "Event Management", "Public Speaking"]
    }
  ];

  const TechnologyTags = ({ technologies }: { technologies: string[] }) => (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="px-4 py-2 rounded-full text-sm border border-purple-500/30 bg-purple-500/10 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-shadow"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="animate-fade-in opacity-0 translate-y-5 animate-[fade-in_0.5s_ease-in-out_forwards]"
        >
          <h2 className="text-5xl text-center text-white mb-3">
            Experience
          </h2>
          <div className="text-center mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-orange-500 inline-block text-transparent bg-clip-text">
            SEE MY WORK IN ACTION
            </span>
            <hr className="w-24 mx-auto mt-2 shadow-[0_0_10px_rgba(168,85,247,0.4)] border-purple-500" />
          </div>

          {experienceData.map((experience, index) => (
            <div key={index} className="relative mb-8">
              <div className="mt-12 rounded-xl p-8 backdrop-blur-sm border border-gray-800 shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {experience.positions ? (
                  // Grouped experience card
                  <>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div className="text-2xl font-semibold">{experience.company}</div>
                      <div className="flex flex-col items-end">
                        <div className="text-lg font-regular">{experience.location}</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.2)]" />
                      
                      {experience.positions.map((position, posIndex) => (
                        <div key={posIndex} className="relative pl-8">
                          <TimelineDot />
                          
                          {posIndex !== 0 && (
                            <div className="border-t border-gray-800 my-6 mx-auto w-3/4" />
                          )}
                          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-semibold leading-none">{position.title}</h4>
                              {position.subtitle && (
                                <p className="text-gray-400 text-sm mt-1">{position.subtitle}</p>
                              )}
                            </div>
                            <div className="text-gray-400 mt-2 md:mt-0">
                              {position.duration}
                            </div>
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {position.description}
                          </p>
                          <TechnologyTags technologies={position.technologies} />
                        </div>
                      ))}
                      
                    </div>
                  </>
                ) : (
                  // Single experience card
                  <>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div>
                        <div className="text-2xl font-semibold mb-1">{experience.company}</div>
                        <h3 className="text-xl font-semibold text-purple-400">{experience.title}</h3>
                        {experience.subtitle && (
                          <p className="text-gray-400 text-sm mt-1">{experience.subtitle}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end mt-2 md:mt-0">
                        <div className="text-lg font-regular text-gray-300">{experience.location}</div>
                        <div className="text-gray-400 mt-1">{experience.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    <TechnologyTags technologies={experience.technologies || []} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-gray-400 italic">
          * Download CV for a more detailed overview of my professional experience
        </div>
      </div>
    </section>
  );
};

export default Experience; 