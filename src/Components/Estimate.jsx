import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Estimate = () => {
  const stats = [
    {
      number: 85,
      suffix: '%',
      text: 'Electrical issues caused by outdated or faulty wiring in homes',
    },
    {
      number: 150,
      suffix: '$',
      text: 'Average monthly savings from upgrading to energy-efficient lighting',
    },
    {
      number: 24,
      suffix: '/7',
      text: 'Emergency electrician support to restore power and ensure safety',
    },
  ];

  // Intersection observer to trigger animations
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Heading animation controller
  const headingControls = useAnimation();

  useEffect(() => {
    if (inView) {
      headingControls.start('visible');
    }
  }, [inView, headingControls]);

  const headingLines = ['Regular', 'electrical care', 'keeps your home safe & efficient'];

  return (
    <div className="font-sans">
      {/* CTA Section */}
      <section className="bg-black flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-12 py-10 text-white text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-[#F5AA21]">
          Need an estimate for your electrical work?
        </h1>
        <a href="tel:1234567890">
          <button className="uppercase cursor-pointer bg-[#F5AA21] text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition">
            Request Job Estimate
          </button>
        </a>
      </section>

      {/* Stats Section */}
      <section
        ref={ref}
        className="relative bg-black bg-cover bg-center min-h-screen flex flex-col justify-center text-white py-20 px-6"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/electrician-working-with-wires_23-2149335879.jpg')",
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.85)',
        }}
      >
        {/* Heading Animation */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate={headingControls}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
            hidden: {},
          }}
        >
          {headingLines.map((line, i) => (
            <motion.h1
              key={i}
              className={`text-3xl md:text-5xl font-bold leading-tight ${
                i === 1 ? 'text-[#F5AA21]' : 'text-white'
              }`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {line}
            </motion.h1>
          ))}
        </motion.div>

        {/* Stat Cards */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8 w-full max-w-6xl mx-auto px-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="text-center md:text-left max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8, type: 'spring' }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#F5AA21]">
                {inView && (
                  <CountUp end={item.number} duration={2} suffix={item.suffix} />
                )}
              </h2>
              <p className="text-white text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Estimate;
