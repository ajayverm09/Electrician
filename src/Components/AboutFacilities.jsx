import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const CounterSection = ({ controls }) => {
  return (
    <section id="counter-section" className="py-12 md:py-20 bg-black px-4 md:px-10 w-full overflow-hidden">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full"
        initial="hidden"
        animate={controls}
        variants={{ hidden: {}, visible: {} }}
      >
        {/* Left Image */}
        <motion.div 
          className="w-full md:w-[45%] h-[50vh] md:h-[70vh] overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.pexels.com/photos/16442679/pexels-photo-16442679.jpeg"
            alt="Electrical Work"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-[55%] space-y-4 md:space-y-6">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-[#FFD700] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Electrical</span> Facilities Management
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Modern electrical systems are complex and safety standards are critical.
          </motion.p>

          <motion.p
            className="text-sm md:text-base text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From rewiring to lighting installations, we ensure safe and reliable solutions
            for homes and businesses.
          </motion.p>

          {/* Animated Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 text-center mt-8 md:mt-10">
            {[
              { number: 15, label: "Years Experience" },
              { number: 500, label: "Projects Completed" },
              { number: 300, label: "Satisfied Customers" },
            ].map(({ number, label }, idx) => (
              <motion.div
                key={idx}
                className="p-3 md:p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3 className="text-3xl md:text-5xl text-[#FFD700] font-bold">
                  <CountUp start={0} end={number} duration={2} suffix="+" enableScrollSpy />
                </h3>
                <p className="text-gray-300 mt-1 md:mt-2 text-sm md:text-base">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CounterSection;