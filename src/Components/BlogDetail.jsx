import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../Components/BlogData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [id]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedMessages = JSON.parse(localStorage.getItem('blogMessages')) || [];
    const newMessage = {
      blogId: blog.id,
      ...formData,
      timestamp: new Date().toISOString(),
    };

    storedMessages.push(newMessage);
    localStorage.setItem('blogMessages', JSON.stringify(storedMessages));

    alert('Message submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  if (!blog) return <div className="p-10 text-center text-lg text-[#F5AA21]">Blog not found.</div>;

  return (
    <div className="text-gray-800 bg-black">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] md:h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div
          className="relative z-10 text-center px-4 max-w-3xl text-[#F5AA21]"
          data-aos="fade-up"
        >
          <h4 className="uppercase text-sm md:text-base tracking-widest mb-4">{blog.category}</h4>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">{blog.title}</h1>
          <p className="mt-4 text-xs md:text-sm text-gray-200">
            {blog.date} / by {blog.author} / {blog.comments} Comment{blog.comments !== 1 && 's'}
          </p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-200">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-6 shadow-lg"
          data-aos="zoom-in"
        />

        <p
          className="text-base md:text-lg leading-relaxed mb-6"
          data-aos="fade-up"
        >
          Welcome to our in-depth guide on <strong className="text-[#F5AA21]">{blog.title}</strong>. 
          In today’s post, we’ll explore why this electrical topic is so important and how you can 
          protect your home, appliances, and family from potential risks.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-[#F5AA21]" data-aos="fade-right">
          Why It Matters
        </h2>
        <p className="leading-relaxed mb-4" data-aos="fade-left">
          Electricity powers everything we rely on daily. Poorly maintained systems or outdated setups 
          can cause:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2" data-aos="fade-up">
          <li>Increased risk of electrical fires</li>
          <li>Damage to sensitive electronics</li>
          <li>Higher energy bills due to inefficiency</li>
          <li>Unexpected power outages and downtime</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-[#F5AA21]" data-aos="fade-up">
          Key Takeaways
        </h2>
        <p className="leading-relaxed mb-4" data-aos="fade-up">
          Whether you’re upgrading your panel, installing new lighting, or setting up an EV charger, 
          routine inspections and preventive maintenance are the keys to safety and reliability.
        </p>
        <p className="leading-relaxed mb-4" data-aos="fade-up">
          <strong className="text-[#F5AA21]">Pro Tip:</strong> Always hire a licensed electrician for 
          installations and have your wiring checked every 1–2 years.
        </p>

        <hr className="my-10 border-[#F5AA21]/50" data-aos="zoom-in" />

        <p className="text-base md:text-lg leading-relaxed" data-aos="fade-up">
          We hope this guide gave you insights into maintaining your home’s electrical systems. Stay tuned 
          for more expert tips and updates on modern electrical solutions.
        </p>
      </div>

      {/* Leave a Message Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" data-aos="fade-up">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F5AA21]">Leave a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-[#F5AA21] px-4 py-2 rounded shadow-sm bg-black text-[#F5AA21] focus:outline-none focus:ring focus:border-[#F5AA21]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-[#F5AA21] px-4 py-2 rounded shadow-sm bg-black text-[#F5AA21] focus:outline-none focus:ring focus:border-[#F5AA21]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full border border-[#F5AA21] px-4 py-2 rounded shadow-sm bg-black text-[#F5AA21] focus:outline-none focus:ring focus:border-[#F5AA21]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#F5AA21] text-black px-6 py-2 rounded hover:bg-[#d4991b] transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Back to Blog Button */}
      <div className="max-w-4xl mx-auto px-4 pb-20 text-center" data-aos="fade-up">
        <Link
          to="/blog"
          className="inline-block mt-6 bg-[#F5AA21] text-black px-6 py-2 rounded hover:bg-[#d4991b] transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
