import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import ElectricianStats from "../Components/ElectricianStats"; // Rename or create as ElectricianStats
import TeamExpert from "../Components/TeamExpert"; // Updated for electrician team
import { motion, useAnimation } from "framer-motion";
import CounterSection from "../Components/AboutFacilities";

// Animated Counter Hook with scroll trigger
const useCountUp = (end, duration, inView) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const incrementTime = Math.floor((duration * 1000) / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
};

const splitText = (text) => text.split("");
const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.4, ease: "easeOut" },
  }),
};

const About = () => {
  const controls = useAnimation();
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("counter-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setSectionInView(true);
        controls.start("visible");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  const years = useCountUp(20, 2, sectionInView);
  const projects = useCountUp(1200, 2, sectionInView);
  const customers = useCountUp(900, 2, sectionInView);

  const services = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/3042/3042212.png", // Electrician icon
      heading: "FAST RELIABLE SERVICE",
      description: "We provide expert electrical services quickly and efficiently.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3326/3326870.png",
      heading: "EMERGENCY SERVICES",
      description: "Available 24/7 for electrical emergencies or urgent repairs.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-black text-gray-200">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[80vh] md:h-[90vh] flex items-center justify-center px-4 md:px-12"
        style={{
          backgroundImage:
            "url('https://ngsmagnified.com/wp-content/uploads/electricitycover.jpg')", // electrician-related background
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-[#FFD700] max-w-4xl">
          <motion.div
            className="text-lg font-bold uppercase tracking-widest mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Home
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {splitText("About Us").map((char, index) => (
              <motion.span key={index} custom={index} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="w-[90%] md:w-[30%] h-[2px] bg-[#FFD700] mt-6 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section
        className="bg-no-repeat bg-cover bg-center py-16 md:py-20 px-6 md:px-12"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg')",
        }}
      >
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl text-center lg:text-left text-[#6b7dec]">
            <FaQuoteLeft className="text-[#FFD700] text-4xl mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              We have over{" "}
              <span className="text-[#FFD700]">
                20 years
                <br />
                experience
              </span>{" "}
              in residential and commercial <br /> electrical services
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <div>
                <h2 className="text-lg font-semibold text-[#FFD700]">
                  John Doe
                </h2>
                <p className="text-black mb-4">Company CEO</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 max-w-md w-full">
            <img
              src="https://images.pexels.com/photos/5989942/pexels-photo-5989942.jpeg"
              alt="CEO"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* FACILITIES SECTION */}
      <CounterSection/>

      <ElectricianStats /> 

      {/* SERVICES & IMAGES */}
      <section className="mx-6 md:mx-[5%] -mt-20 flex flex-col lg:flex-row justify-between items-center px-6 py-8 bg-black gap-10 rounded-lg shadow-md">
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Wa2PV6ip-xk5fKaezmX1dciRKyIXOuIi0g&s"
          alt="Electrician Work"
          className="w-full max-w-md object-cover rounded shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="max-w-xl text-center lg:text-left text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFD700]">
            Industrial Electrical <br className="hidden md:block" /> Systems
          </h1>
          <p className="mb-6">
            Professional electrical installation, maintenance, and safety inspections for industrial clients.
          </p>
        </motion.div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row justify-around items-center px-6 md:px-10 py-16 gap-12 bg-black">
        <motion.div
          className="max-w-2xl text-center lg:text-left space-y-6 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How to Decide Between New{" "}
            <span className="text-[#FFD700]">Electrical</span> Systems
          </h1>
          <p className="mb-8 text-lg">
            Modern electrical systems require careful planning for safety, efficiency, and reliability.
          </p>

          <div className="space-y-6">
            {services.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="w-10 h-10 shrink-0">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-md font-semibold uppercase text-[#FFD700]">
                    {item.heading}
                  </h2>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjM_GDjSWRihZo9PgofTnoBesx5_unCo6ddg&s"
            alt="Technician"
            className="w-full h-auto object-contain rounded-lg shadow-md"
          />
        </motion.div>
      </section>
      <TeamExpert /> {/* Update component for Electrician team */}
    </div>
  );
};

export default About;
