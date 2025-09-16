import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Why do my lights flicker?',
    answer:
      'Flickering lights can be caused by loose wiring, overloaded circuits, or faulty switches. It’s best to have an electrician inspect it promptly.',
  },
  {
    question: 'How can I reduce my electricity bill?',
    answer:
      'Switching to LED lighting, using energy-efficient appliances, and installing smart thermostats can help reduce costs.',
  },
  {
    question: 'Why does my breaker keep tripping?',
    answer:
      'This usually indicates an overloaded circuit, short circuit, or ground fault. Call an electrician to check the wiring safely.',
  },
  {
    question: 'Is it safe to DIY electrical repairs?',
    answer:
      'Small tasks like changing a bulb are fine, but wiring and breaker work should only be handled by licensed electricians to avoid fire hazards.',
  },
  {
    question: 'How often should I get an electrical inspection?',
    answer:
      'Experts recommend every 3–5 years for homes, or immediately if you notice sparks, burning smells, or frequent outages.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-black px-4 md:px-16 py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Heading */}
      <motion.div
        className="mb-10 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="uppercase text-sm font-semibold text-[#F5AA21]">
          Fix it yourself (safely)
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Electrical <span className="text-[#F5AA21]">tips & tricks</span>
        </h1>
      </motion.div>

      {/* Flex Container */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* FAQ Accordion */}
        <div className="flex-1 space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border rounded shadow bg-black overflow-hidden border-[#F5AA21]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex border-b border-[#F5AA21] justify-between items-center p-4">
                {/* Number Box */}
                <div className="bg-[#F5AA21] w-12 h-12 flex items-center justify-center text-black text-lg font-semibold rounded">
                  {index + 1}
                </div>

                {/* Question */}
                <span className="flex-1 mx-4 text-md font-medium text-[#F5AA21]">
                  {item.question}
                </span>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="text-xl font-bold cursor-pointer text-[#F5AA21] focus:outline-none"
                >
                  {openIndex === index ? '−' : '+'}
                </button>
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-[#F5AA21] text-sm"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          className="flex-1 w-full h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full h-full rounded overflow-hidden shadow-lg border-2 border-[#F5AA21]">
            <iframe
              className="w-full aspect-video rounded"
              src="https://www.youtube.com/embed/izIHbkA0J5M?si=BEEUduCaNSFmoPLj"
              title="Electrical Safety & DIY Tips"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Faq;
