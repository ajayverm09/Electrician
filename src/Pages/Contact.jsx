import React from 'react';
import RequestServiceForm from '../Components/ContactPart';
import OurOffice from '../Components/OurOFFice';

const Contact = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7285975/pexels-photo-7285975.jpeg ')", // Electrician background
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="text-lg font-bold uppercase tracking-widest mb-2 text-[#FFD700]">
            Home
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FFD700] drop-shadow-lg">
            Contact
          </h1>
          <div className="w-[100%] md:w-[30%] h-[90%] absolute top-[5%] left-1/2 -translate-x-1/2  opacity-40" />
        </div>
      </section>

      {/* Request Service Form */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#FFD700]">
            Request Electrical Services
          </h2>
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-[#FFD700]/30">
            <RequestServiceForm />
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section className="py-16 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#FFD700]">
            Our Office
          </h2>
          <div className="bg-black p-8 rounded-2xl shadow-lg border border-[#FFD700]/30">
            <OurOffice />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;