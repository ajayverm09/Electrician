import React from "react";
import {
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBolt,
} from "react-icons/fa";

const OurOffice = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 py-5 h-[600px] bg-black text-white">
      {/* Left: Info Section with Background */}
      <div
        className="relative bg-cover bg-center flex items-center px-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/electrician-works-switchboard-with-electrical-connecting-cable_169016-15069.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="bg-black/70 p-6 rounded-lg w-full max-w-xl space-y-6">
          <h2 className="text-4xl font-bold">
            Our <span className="text-[#FFD700]">Head Office</span>
          </h2>
          <p className="text-lg text-gray-200">
            PowerFix Electricals provides reliable electrical solutions from our
            main office — ensuring fast service dispatch and expert support.
          </p>

          {/* Details */}
          <div className="space-y-4 text-sm">
            {/* Working Hours */}
            <div className="flex items-start space-x-3 group">
              <FaClock className="text-[#FFD700] text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold text-[#FFD700]">WORKING HOURS</p>
                <p>
                  Mon - Sat 8.00 - 20.00
                  <br />
                  Emergency Service: 24/7
                </p>
              </div>
            </div>

            {/* Emergency Call */}
            <div className="flex items-start space-x-3 group">
              <FaPhoneAlt className="text-[#FFD700] text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold text-[#FFD700]">EMERGENCY CALL</p>
                <p>
                  1-800-700-600
                  <br />
                  Available Anytime ⚡
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3 group">
              <FaMapMarkerAlt className="text-[#FFD700] text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold text-[#FFD700]">LOCATION</p>
                <p>
                  1010 Electric Ave, New York
                  <br />
                  NY 10018 US
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 group">
              <FaEnvelope className="text-[#FFD700] text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold text-[#FFD700]">WRITE US</p>
                <p>
                  <a
                    href="mailto:support@powerfixelectricals.com"
                    className="hover:underline text-gray-200"
                  >
                    support@powerfixelectricals.com
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Highlight */}
            <div className="flex items-start space-x-3 group">
              <FaBolt className="text-[#FFD700] text-xl group-hover:text-white transition" />
              <div>
                <p className="font-bold text-[#FFD700]">QUICK RESPONSE</p>
                <p>Certified electricians dispatched within 60 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Map Section */}
      <div className="h-full border-4 border-[#FFD700] rounded-lg overflow-hidden">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.967407185314!2d-104.96309138468654!3d39.752609679446846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d58bfe559f%3A0x7c5d67cdb169c8ef!2sFive%20Points%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1630628620472!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default OurOffice;
