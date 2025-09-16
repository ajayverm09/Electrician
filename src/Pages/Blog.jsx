import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogData } from "../Components/BlogData";

const BlogCard = ({ id, title, image, date, description }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {/* Image with fixed aspect ratio */}
      <div className="w-full aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-600 flex-grow line-clamp-3">{description}</p>
        <Link
          to={`/blog/${id}`}
          className="mt-auto inline-block bg-black text-[#FFD700] px-4 py-2 text-sm font-semibold rounded hover:bg-[#FFD700] hover:text-black transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7285965/pexels-photo-7285965.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
          <motion.div
            className="text-lg font-bold uppercase tracking-widest mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Home
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Electrical Blog
          </motion.h1>
          <motion.div
            className="w-[90%] md:w-[30%] h-[2px] absolute top-[15%] left-1/2 -translate-x-1/2 border border-white opacity-20"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Blog List */}
        <motion.div
          className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {currentBlogs.length > 0 ? (
            currentBlogs.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="h-full"
              >
                <BlogCard {...item} />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">No blogs found.</p>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          className="lg:col-span-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Latest Electrical Tips
          </h2>
          <ul className="space-y-4">
            {blogData
              .slice(-3)
              .reverse()
              .map((blog) => (
                <motion.li
                  key={blog.id}
                  className="border-b pb-2"
                  variants={itemVariants}
                >
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-[#FFD700] hover:underline font-semibold"
                  >
                    {blog.title}
                  </Link>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </motion.li>
              ))}
          </ul>
        </motion.aside>
      </section>

      {/* Pagination */}
      <motion.div
        className="flex justify-center mt-10 space-x-2 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(totalPages)].map((_, i) => (
          <motion.button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 border rounded transition-colors duration-300 ${
              currentPage === i + 1
                ? "bg-black text-white border-[#FFD700] hover:bg-white hover:text-black"
                : "bg-white text-[#FFD700] border-black hover:bg-black hover:text-white"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {i + 1}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
