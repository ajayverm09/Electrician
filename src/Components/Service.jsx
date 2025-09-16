import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaLightbulb, FaPlug, FaTools } from "react-icons/fa";

const ServiceSection = ({ imageUrl, title }) => {
  // Optional: Split title for highlight effect
  const [firstPart, ...rest] = title.split(/(?=Services|Project|Solutions|Buy)/i);
  const highlightedText = rest.join(" ");

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Electrician Services
  const services = [
    {
      icon: <FaBolt className="text-[#FFD700] text-3xl" />,
      heading: "Emergency Repairs",
      description: "Fast and reliable electrical repair services available 24/7 to keep your home and business safe.",
    },
    {
      icon: <FaLightbulb className="text-[#FFD700] text-3xl" />,
      heading: "Lighting Installation",
      description: "From LED upgrades to smart lighting systems, we brighten your spaces with energy efficiency.",
    },
    {
      icon: <FaPlug className="text-[#FFD700] text-3xl" />,
      heading: "Wiring & Rewiring",
      description: "Professional wiring, rewiring, and circuit installation for homes, offices, and industries.",
    },
    {
      icon: <FaTools className="text-[#FFD700] text-3xl" />,
      heading: "Maintenance Services",
      description: "Scheduled inspections and preventive maintenance to avoid electrical hazards and downtime.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 bg-white max-w-7xl mx-auto">
      {/* Image Block */}
      <motion.div
        className="md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-end mr-0 md:mr-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <img
          src={imageUrl}
          alt="Electrician at Work"
          className="w-full max-w-md h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="md:w-1/2 md:pl-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p
          className="text-sm font-semibold uppercase text-gray-500 mb-2"
          variants={itemVariants}
        >
          What we offer
        </motion.p>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          variants={titleVariants}
        >
          {firstPart}
          <span className="text-[#FFD700]">{highlightedText}</span>
        </motion.h1>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-5"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-black/80 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h2 className="text-md font-semibold uppercase text-gray-700">
                  {item.heading}
                </h2>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
