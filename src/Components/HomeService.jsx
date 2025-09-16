import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import ServiceSection from "./Service";

const HomeService = () => {
  const Carded = [
    {
      img: "https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg",
      img2: "https://cdn-icons-png.flaticon.com/128/2950/2950666.png",
      header: "Residential Electrical",
      text: "Trusted expert electrical repair, wiring, and installations for homes",
    },
    {
      img: "https://images.pexels.com/photos/9679179/pexels-photo-9679179.jpeg",
      img2: "https://cdn-icons-png.flaticon.com/128/4222/4222026.png",
      header: "Commercial Electrical",
      text: "Professional electrical solutions for offices, factories, and buildings",
    },
    {
      img: "https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg",
      img2: "https://cdn-icons-png.flaticon.com/128/3103/3103459.png",
      header: "Emergency Repairs",
      text: "24/7 emergency electrical service – quick, safe, and reliable repairs",
    },
  ];

  const CardDetail = [
    {
      imageUrl:
        "https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg",
      title: "Explore Our Electrical Services & Solutions",
      services: [
        {
          img: "https://cdn-icons-png.flaticon.com/128/1045/1045678.png",
          heading: "Wiring & Rewiring",
          description:
            "From new installations to rewiring old systems, we ensure your home or office wiring is safe and efficient.",
        },
        {
          img: "https://cdn-icons-png.flaticon.com/128/3132/3132693.png",
          heading: "Panel Upgrades",
          description:
            "Upgrade outdated electrical panels to handle modern power demands safely and efficiently.",
        },
      ],
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/9242266/pexels-photo-9242266.jpeg",
      title: "Lighting & Smart Solutions",
      services: [
        {
          img: "https://cdn-icons-png.flaticon.com/128/1048/1048940.png",
          heading: "Lighting Installation",
          description:
            "Indoor, outdoor, and decorative lighting installations tailored to your needs.",
        },
        {
          img: "https://cdn-icons-png.flaticon.com/128/1829/1829586.png",
          heading: "Smart Home Setup",
          description:
            "Automated lighting, smart switches, and home energy management solutions.",
        },
      ],
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/29191589/pexels-photo-29191589.jpeg",
      title: "Need Professional Help With Your Electrical Project",
      services: [
        {
          img: "https://cdn-icons-png.flaticon.com/128/566/566299.png",
          heading: "Circuit Repairs",
          description:
            "Diagnosing and fixing circuit overloads, shorts, and tripped breakers.",
        },
        {
          img: "https://cdn-icons-png.flaticon.com/128/2316/2316045.png",
          heading: "Surge Protection",
          description:
            "Protect your entire electrical system and devices from power surges.",
        },
      ],
    },
  ];

  const Card = ({ url, url2, header, text, delay }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="w-full sm:w-72 md:w-80 m-4 shadow-lg rounded overflow-hidden bg-black transform hover:scale-105 transition duration-300"
    >
      <img src={url} alt={header} className="w-full h-56 object-cover" />
      <div
        className="relative text-black p-6"
        style={{ backgroundColor: "#F5AA21" }}
      >
        <div className="absolute -top-6 left-6 bg-black/40 p-2 rounded shadow-md">
          <img src={url2} className="w-6 h-6 object-contain" alt="icon" />
        </div>
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="uppercase font-bold text-lg mt-4"
        >
          {header}
        </motion.h1>
        <motion.p
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className="text-sm mt-2"
        >
          {text}
        </motion.p>
        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.6 }}
            className="uppercase text-sm cursor-pointer mt-4 border-b border-black hover:text-black transition"
          >
            Read More &gt;
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-black py-12 px-4 relative">
      {/* Services Cards */}
      <section className="relative z-20 -mt-32 flex flex-wrap justify-center">
        {Carded.map((item, index) => (
          <Card
            key={index}
            url={item.img}
            url2={item.img2}
            header={item.header}
            text={item.text}
            delay={index * 0.2}
          />
        ))}
      </section>

      {/* Service Sections Carousel */}
      <section className="relative z-10 mt-20 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {CardDetail.map((item, index) => (
              <SwiperSlide key={index}>
                <ServiceSection
                  imageUrl={item.imageUrl}
                  title={item.title}
                  services={item.services}
                  theme="black-golden" // electrician theme
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeService;
