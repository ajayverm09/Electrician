import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Nick Francis",
    role: "Residential Electrician",
    image:
      "https://images.pexels.com/photos/9242271/pexels-photo-9242271.jpeg",
  },
  {
    name: "John Carter",
    role: "Commercial Electrician",
    image:
      "https://img.freepik.com/free-photo/electrician-installing-wires-switchboard_23-2149272032.jpg",
  },
  {
    name: "Dave Wilson",
    role: "Lighting Specialist",
    image:
      "https://img.freepik.com/free-photo/worker-repairing-street-lamp_23-2149272060.jpg",
  },
  {
    name: "Robert Smith",
    role: "Power Systems Expert",
    image:
      "https://img.freepik.com/free-photo/electrician-working-with-fuse-box_23-2149272084.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const TeamExpert = () => {
  return (
    <section className="bg-black px-6 md:px-16 py-16">
      <motion.h1
        className="text-center text-white text-4xl md:text-5xl font-bold mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        OUR TEAMS OF <span className="text-[#FFD700]">ELECTRICAL EXPERTS</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative rounded-md shadow-xl overflow-hidden group cursor-pointer"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Team member image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-[#FFD700]/90 via-black/60 to-black/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-center text-white px-6 py-6 text-center overflow-hidden">
              <p className="uppercase text-sm font-semibold tracking-wide mb-1">
                {member.role}
              </p>
              <h2 className="text-xl font-bold mb-4">{member.name}</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 rounded hover:text-blue-500 hover:shadow-lg hover:scale-110 transition"
                >
                  <FiFacebook size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 rounded hover:text-pink-600 hover:shadow-lg hover:scale-110 transition"
                >
                  <FiInstagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded hover:text-blue-400 hover:shadow-lg hover:scale-110 transition"
                >
                  <FiTwitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamExpert;