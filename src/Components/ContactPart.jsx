import React, { useState } from 'react';

const RequestServiceForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('electricalServiceRequest', JSON.stringify(formData));
    alert('Your electrical service request has been saved locally!');
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      serviceType: '',
      message: ''
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 px-[10%] bg-black text-white">
      {/* Left: Form */}
      <form
        onSubmit={handleSubmit}
        className="md:col-span-2 space-y-4 w-full"
      >
        <h2 className="text-3xl font-bold">
          Request <span className="text-[#FFD700]">Electrical Service</span>
        </h2>
        <p className="text-gray-300">
          Need help with wiring, installations, or urgent electrical repairs? 
          Fill out the form below and our certified electricians will get in touch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-[#FFD700]">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#FFD700]">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[#FFD700]">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-[#FFD700]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#FFD700]">Phone Number</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-[#FFD700]">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#FFD700]">Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
              required
            >
              <option value="">—Please choose an option—</option>
              <option>Morning (8 AM - 12 PM)</option>
              <option>Afternoon (12 PM - 4 PM)</option>
              <option>Evening (4 PM - 8 PM)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[#FFD700]">Type of Electrical Service</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
            required
          >
            <option value="">—Please choose an option—</option>
            <option>Wiring & Rewiring</option>
            <option>Lighting Installation</option>
            <option>Electrical Panel Upgrade</option>
            <option>EV Charger Installation</option>
            <option>Emergency Repair</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-[#FFD700]">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-[#FFD700]/50 bg-black text-white p-2 focus:border-[#FFD700] focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#FFD700] text-black font-semibold py-2 px-6 rounded hover:bg-black hover:text-[#FFD700] border border-[#FFD700] transition"
        >
          Submit Request
        </button>
      </form>

      {/* Right: Contact Info */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">
          Our <span className="text-[#FFD700]">Support</span>
        </h2>
        <p className="text-gray-300 font-medium">
          Professional electrical installation, repair & maintenance services.
        </p>
        <p className="text-gray-400">
          From residential wiring to commercial electrical projects, we’re here to keep you powered safely.
        </p>
        <address className="not-italic text-gray-300 space-y-2">
          <p>310 West 14th North Street, Suite 21<br />New York, NY 10010</p>
          <p>Phone: <span className="text-[#FFD700]">+88 (0) 101 0000 000</span></p>
          <p>Fax: +88 (0) 202 0000 001</p>
          <p>Email: <span className="text-[#FFD700]">info@electro-services.com</span></p>
          <p>Support: <span className="text-[#FFD700]">support@electro-services.com</span></p>
        </address>
      </div>
    </div>
  );
};

export default RequestServiceForm;
