import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/images/arch.jpg';
import img2 from '../assets/images/interior.webp';
import img3 from '../assets/images/project.jpg';
import img4 from '../assets/images/urban.jpg';
import img5 from '../assets/images/04795bd9e8f3ee43c3be046da62d3198.jpg';

export const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-12 md:py-20 px-6 bg-[#fdfdfd]" id="portfolio">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        
        {/* Left text */}
        <div className="lg:col-span-4 flex flex-col space-y-8 sticky top-24 h-fit mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-amber-800 font-bold tracking-[0.6em] text-[10px] uppercase block mb-6">
              THE ARCHIVE
            </span>

            <h2 className="text-4xl md:text-6xl font-playfair font-medium tracking-tighter text-[#111] leading-[0.95] mb-6">
              Selected <br />
              <em className="text-gray-300 italic font-light">Global Works.</em>
            </h2>

            <div className="w-16 h-[1.5px] bg-[#111] mb-6"></div>

            <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 max-w-sm">
              An evolving curated collection of our most ambitious projects, representing the fusion of technical precision and artistic vision.
            </p>

            <button className="group relative pr-10 text-[#111] font-bold tracking-[0.3em] uppercase text-[10px] transition-all duration-500 hover:text-amber-800 w-fit">
              Explore All Projects
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-base transition-transform group-hover:translate-x-2 duration-500">→</span>
            </button>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <motion.div variants={itemVariants} className="relative group overflow-hidden h-[260px] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/[0.03]">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                src={img1}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 rounded-3xl"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative group overflow-hidden h-[200px] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/[0.03]">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                src={img3}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 sm:mt-10">
            <motion.div variants={itemVariants} className="relative group overflow-hidden h-[200px] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/[0.03]">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                src={img2}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 rounded-3xl"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative group overflow-hidden h-[260px] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/[0.03]">
              <motion.img 
                whileHover={{ scale: 1.08 }}
                src={img5}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Big Image */}
          <motion.div variants={itemVariants} className="md:col-span-1 sm:col-span-2 relative group overflow-hidden min-h-[380px] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/[0.03] sm:mt-[-20px]">
            <motion.img 
              whileHover={{ scale: 1.03 }}
              src={img4}
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;