import React, { useState } from 'react';

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Form data saved! Our electricians will contact you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md border border-[#F5AA21]">
      <h2 className="text-2xl font-bold mb-4 text-[#F5AA21]">
        ⚡ Get in Touch with Our Electricians
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5AA21]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5AA21]"
          />
        </div>

        {/* Subject Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Service Needed</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5AA21]"
          >
            <option value="">Select a service</option>
            <option value="wiring">Wiring & Rewiring</option>
            <option value="lighting">Lighting Installation</option>
            <option value="panel">Electrical Panel Upgrade</option>
            <option value="inspection">Safety Inspection</option>
            <option value="emergency">24/7 Emergency Repair</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5AA21]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#F5AA21] text-black font-semibold rounded-md hover:bg-yellow-600 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
