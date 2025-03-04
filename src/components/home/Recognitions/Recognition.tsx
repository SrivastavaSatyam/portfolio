'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface RecognitionProps {
  title: string;
  imageUrl: string;
  date?: string;
  organization?: string;
}

const RecognitionCard: React.FC<RecognitionProps> = ({ title, imageUrl, date, organization }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" border-2 border-gray-800 shadow-[0_0_10px_rgba(168,85,247,0.4)] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-[300px]"
    >
      <div className="flex flex-col h-full">
        <div className="relative w-[220px] h-[220px] mx-auto">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="px-6 pb-6 flex-1 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            {title}
          </h3>
          {organization && (
            <p className="text-md text-blue-400 mb-2">
              {organization}
            </p>
          )}
          {date && (
            <p className="text-md text-gray-400">
              {date}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Recognition: React.FC = () => {
  const recognitionData: RecognitionProps[] = [
    {
      title: "ROCKSTAR OF THE MONTH",
      imageUrl: "/images/awards/rockstar.png",
      date: "Q2 24-25",
      organization: "Paytm(One97 Communications)",
    },
    {
      title: "RISING STAR OF THE MONTH",
      imageUrl: "/images/awards/risingstar.png",
      date: "Q2 23-24",
      organization: "Paytm(One97 Communications)",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl text-center text-white mb-3">
            Awards & Recognition
          </h2>
          <div className="text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 via-purple-700 to-orange-500 inline-block text-transparent bg-clip-text">
              ACHIEVEMENTS
            </span>
            <hr className="w-24 mx-auto mt-2 shadow-[0_0_10px_rgba(168,85,247,0.4)] border-purple-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center w-full max-w-3xl">
            {recognitionData.map((recognition, index) => (
              <RecognitionCard key={index} {...recognition} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recognition; 