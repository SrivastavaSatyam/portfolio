'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

const Socials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/SrivastavaSatyam',
      icon: <FaGithub className="w-12 h-12" />,
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/satyam-srivastava-089622325',
      icon: <FaLinkedin className="w-12 h-12" />,
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/srivastava8815',
      icon: <FaInstagram className="w-12 h-12" />,
    },
    {
      platform: 'Twitter',
      url: 'https://x.com/satyamsri1712',
      icon: <FaXTwitter className="w-12 h-12" />,
    },
  ];

  return (
    <div id="socials">
      <section className="w-full  bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              transition: 'opacity 0.5s, transform 0.5s'
            }}
          >
            <h2 className="text-5xl text-center text-white mb-3">
              Socials
            </h2>
            <div className="text-center mb-4">
              <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-orange-500 inline-block text-sm text-transparent bg-clip-text">
                CONNECT WITH ME
              </span>
              <hr className="w-24 mx-auto mt-2 shadow-[0_0_10px_rgba(168,85,247,0.4)] border-purple-500" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  className="group"
                >
                  <div className="rounded-xl p-8 backdrop-blur-sm border border-gray-800 shadow-[0_0_10px_rgba(255,255,255,0.3)] 
                                 hover:border-purple-500/50 transition-all duration-300 
                                 flex flex-col items-center justify-center gap-4
                                 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                    <h3 className="text-xl text-purple-500 font-semibold">{social.platform}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Socials; 