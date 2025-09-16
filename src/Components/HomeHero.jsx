import React from 'react';
import { MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <div
      className="relative bg-black text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg')",
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-24">
        
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#F5AA21]">
            <div className="flex flex-wrap">
              {["The", " ", "Electrician", " ", "You"].map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: wordIndex * 0.3 + charIndex * 0.05,
                        type: 'spring',
                        stiffness: 100,
                      }}
                      className={char === ' ' ? 'w-2' : ''}
                    >
                      {char}
                    </motion.span>
                  ))}
                  &nbsp;
                </React.Fragment>
              ))}
            </div>
            <div>
              {"Deserve".split('').map((char, index) => (
                <motion.span
                  key={`deserve-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2 + index * 0.05,
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Subtext */}
          <p className="uppercase text-sm tracking-widest text-[#F5AA21]">
            POWER OUTAGE OR ELECTRICAL ISSUE?{" "}
            <strong className="text-white">CALL OUR 24/7 EMERGENCY SERVICE.</strong>
          </p>

          {/* Phone Info */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-black font-semibold text-lg bg-[#F5AA21]">
              <MdPhone size={40} className="text-black bg-white p-2 rounded-full" />
              <span className="text-2xl md:text-3xl">1-800-555-284</span>
            </div>
          </div>

          {/* CTA Button */}
          <a href="tel:1234567890">
            <motion.button
              className="bg-[#F5AA21] cursor-pointer hover:bg-yellow-600 px-6 py-4 md:px-8 md:py-6 text-black font-semibold uppercase rounded-md text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Request Free Estimate
            </motion.button>
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg"
            alt="Electrician"
            className="w-[250px] md:w-[450px] h-auto rounded-lg shadow-lg border-2 border-[#F5AA21]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
