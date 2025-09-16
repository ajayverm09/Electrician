import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* Call to Action */}
      <div className="border border-[#F5AA21] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-10 space-y-6 md:space-y-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left text-[#F5AA21]">
          Power up your home or business today
        </h2>
        <a href="tel:1234567890">
          <motion.button
            className="bg-[#F5AA21] cursor-pointer text-black font-bold py-3 px-6 rounded transition"
            whileHover={{ boxShadow: "0 0 15px #F5AA21, 0 0 30px #F5AA21", scale: 1.05 }}
          >
            GET A FREE QUOTE
          </motion.button>
        </a>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#F5AA21] inline-block text-[#F5AA21]">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#F5AA21]" /> 1-800-400-800
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#F5AA21]" /> support@electricpro.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#F5AA21]" /> 123 Power Ave, New York City, NY 10001
            </li>
          </ul>
          <div className="flex gap-4 mt-6 text-white text-lg">
            {[
              { icon: <FaFacebookF />, href: "/" },
              { icon: <FaTwitter />, href: "/" },
              { icon: <FaYoutube />, href: "/" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                whileHover={{ boxShadow: "0 0 10px #F5AA21", scale: 1.1 }}
                className="p-2 rounded-full"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#F5AA21] inline-block text-[#F5AA21]">
            Popular Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Residential Wiring</li>
            <li>Electrical Panel Upgrades</li>
            <li>Lighting Installation</li>
            <li>EV Charger Setup</li>
          </ul>
        </div>

        {/* Safety Tips */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#F5AA21] inline-block text-[#F5AA21]">
            Safety Tips
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Unplug appliances during storms</li>
            <li>Don’t overload outlets</li>
            <li>Test smoke detectors regularly</li>
            <li>Schedule routine inspections</li>
          </ul>
        </div>

        {/* Emergency Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#F5AA21] inline-block text-[#F5AA21]">
            24/7 Emergency Service
          </h3>
          <p className="flex items-center gap-3 text-[#F5AA21] text-xl font-bold mt-4">
            <FaPhoneAlt className="text-[#F5AA21]" />
            1-800-911-POWER
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
