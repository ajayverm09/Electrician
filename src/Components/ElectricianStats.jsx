import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Icons
import { FaBolt, FaLightbulb, FaPlug, FaTools } from "react-icons/fa";

const rawStats = [
  { value: 95, label: "Customer satisfaction with our electrical work", icon: <FaBolt /> },
  { value: 85, label: "Average energy savings with efficient upgrades", icon: <FaLightbulb /> },
  { value: 70, label: "Emergency calls resolved within the first hour", icon: <FaPlug /> },
  { value: 60, label: "Homeowners upgrading to smart electrical systems", icon: <FaTools /> },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ElectricianStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="bg-cover py-20 sm:py-32 bg-center min-h-screen flex items-center justify-center px-6 sm:px-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/33706880/pexels-photo-33706880.jpeg')",
      }}
    >
      <div className="bg-black/70 p-8 sm:p-16 rounded-lg w-full max-w-7xl text-white text-center">
        {/* Heading */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-sm uppercase text-gray-300 tracking-widest">
            Why Choose Us
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 leading-tight">
            We Provide{" "}
            <span className="text-[#FFD700]">Safe & Reliable</span>
            <br />
            Electrical Solutions
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {rawStats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="relative w-36 h-36 sm:w-40 sm:h-40">
                {/* Progress Bar */}
                <CircularProgressbar
                  value={inView ? stat.value : 0}
                  styles={buildStyles({
                    pathColor: "#FFD700",
                    trailColor: "#2c2c2c",
                    textColor: "#ffffff",
                    pathTransitionDuration: 0.5,
                  })}
                />

                {/* Center content (icon + countup) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[#FFD700] text-2xl sm:text-3xl mb-1">
                    {stat.icon}
                  </span>
                  <span className="text-lg font-bold">
                    {inView ? (
                      <CountUp start={0} end={stat.value} duration={2} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </span>
                </div>
              </div>

              {/* Label */}
              <p className="mt-6 text-sm sm:text-base font-medium w-10/12 sm:w-3/4 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectricianStats;