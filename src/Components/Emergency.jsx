import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Emergency = () => {
  const OfferCard = ({ url, header, number, delay = 0 }) => (
    <motion.div
      className="relative bg-cover bg-center h-[300px] flex flex-col justify-center p-6 text-white rounded shadow-lg border-2 border-[#F5AA21] overflow-hidden"
      style={{ backgroundImage: `url(${url})` }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10">
        <p className="uppercase text-sm font-semibold text-[#F5AA21]">Special Offer</p>
        <h1 className="text-2xl font-bold mt-1 text-[#F5AA21]">{header}</h1>
        <h2 className="text-xl mt-2">
          <span className="font-bold">{number} off</span>
        </h2>
        <Link to="/contact">
          <button className="mt-4 w-fit cursor-pointer bg-[#F5AA21] text-black px-5 py-2 uppercase text-sm font-semibold rounded hover:bg-[#d5941a] transition">
            Contact Us
          </button>
        </Link>
      </div>
    </motion.div>
  );

  const Cardetail = [
    {
      url: "https://img.freepik.com/free-photo/portrait-modern-man-cleaning-doing-household-chores_23-2151468739.jpg?semt=ais_incoming&w=740&q=80",
      header: "Ceiling Fan Installation",
      number: "$30",
    },
    {
      url: "https://xpelectrical.co.nz/wp-content/uploads/2023/02/Electrical-Inspection.jpg",
      header: "Wiring Inspection",
      number: "40%",
    },
    {
      url: "https://emergency-electrician.org/wp-content/uploads/2021/11/slider-fuse-boxes-circuit-boards-480x320.jpeg",
      header: "Emergency Fuse Repair",
      number: "$15",
    },
    // 3 More Cards
    {
      url: "https://c8.alamy.com/comp/2C4282G/installation-of-a-switchboard-or-consumer-unit-an-electrician-secures-a-copper-wire-to-a-neutral-bar-the-installer-installs-a-fuse-box-or-circuit-b-2C4282G.jpg",
      header: "Switchboard Installation",
      number: "$25",
    },
    {
      url: "https://5.imimg.com/data5/WW/XI/MY-17010716/home-appliances-cable-500x500.png",
      header: "Appliance Wiring",
      number: "35%",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhUFBAGy_9-8A1KPSjmqH1FnPmKyPPjsUug&s",
      header: "Lighting Installation",
      number: "$20",
    },
  ];

const DetailsElectrician = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/869/869869.png", // ⚡ Energy Bolt
    header: "FAST RELIABLE SERVICE",
    text: "Quick and efficient electrical services to restore power and safety.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Worker with helmet
    header: "LICENSED ELECTRICIANS",
    text: "All our electricians are certified, skilled, and experienced.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png", // Clock with bolt
    header: "24/7 EMERGENCY RESPONSE",
    text: "Available day and night for urgent power failures and repairs.",
  },
  {
    img: "https://static.thenounproject.com/png/4923516-512.png", // “Shield Check” icon
    header: "ONE YEAR WARRANTY",
    text: "We provide a full one-year warranty on all installations and repairs.",
  },
];


  return (
    <div className="bg-black relative overflow-hidden text-white">
      {/* Section Content */}
      <div className="relative z-10">
        {/* Offer Cards Section */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {Cardetail.map((item, index) => (
            <OfferCard
              key={index}
              url={item.url}
              header={item.header}
              number={item.number}
              delay={index * 0.15}
            />
          ))}
        </motion.section>

        {/* Emergency Info Section */}
        <motion.section
          className="px-4 md:px-16 py-20 bg-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Section Title */}
          <motion.div
            className="text-center md:text-left mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase text-sm font-semibold text-[#F5AA21] tracking-wide">
              What we offer
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#F5AA21] leading-tight mt-2">
              Available for <span className="text-white">24/7 Emergency</span><br />
              Electrical Service
            </h1>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {DetailsElectrician.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img src={item.img} alt={item.header} className="w-10 h-10 object-contain text-white " />
                <div>
                  <h3 className="text-md font-semibold text-[#F5AA21]">{item.header}</h3>
                  <p className="text-sm text-white mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Emergency;
