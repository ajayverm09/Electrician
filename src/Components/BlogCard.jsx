import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  },
};

const BlogCard = ({ id, image, category, date, author, comments, title, excerpt }) => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-black shadow-xl rounded overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-auto object-cover"
        variants={itemVariants}
      />

      {/* Meta Info */}
      <motion.div
        className="text-[#F5AA21] text-xs uppercase px-6 pt-6 tracking-wide flex flex-wrap gap-x-2 gap-y-1"
        variants={itemVariants}
      >
        <span>{category}</span> / 
        <span>{date}</span> / 
        <span>By {author}</span> / 
        <span>{comments} Comments</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-2xl sm:text-3xl font-bold px-6 pt-4 text-[#F5AA21]"
        variants={itemVariants}
      >
        {title}
      </motion.h1>

      {/* Excerpt */}
      <motion.p
        className="px-6 pt-4 text-gray-200 leading-relaxed"
        variants={itemVariants}
      >
        {excerpt}
      </motion.p>

      {/* Read More */}
      <motion.div className="px-6 pt-4 pb-6" variants={itemVariants}>
        <Link
          to={`/blog/${id}`}
          className="inline-block bg-[#F5AA21] hover:bg-[#d4991b] text-black text-sm px-4 py-2 rounded transition"
        >
          Read More
        </Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex items-center space-x-4 px-6 pb-6"
        variants={itemVariants}
      >
        <a href="#" className="text-black bg-[#F5AA21] p-2 rounded-full hover:bg-black hover:text-[#F4AA21] transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-black bg-[#F5AA21] p-2 rounded-full hover:bg-black hover:text-[#F4AA21] transition">
          <FaTwitter />
        </a>
        <a href="#" className="text-black bg-[#F5AA21] p-2 rounded-full hover:bg-black hover:text-[#F4AA21] transition">
          <FaWhatsapp />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
