import React from 'react';
import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-[#0a0a0a] text-white rounded-4xl" id="contact">

      <div className="max-w-[1200px] mx-auto border border-white/10 bg-[#111] px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <span className="text-amber-500 font-semibold tracking-[0.4em] text-[10px] uppercase block mb-4">
            THE NEXT CHAPTER
          </span>

          <h2 className="text-3xl md:text-4xl font-playfair font-medium leading-tight mb-4">
            Ready to start?
          </h2>

          <p className="text-sm text-gray-400 font-light leading-relaxed">
            We are currently accepting select partnerships for the upcoming season.
          </p>
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2 rounded-full"
        >
          Contact Us
          <span>↗</span>
        </motion.button>

      </div>

      {/* Contact Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto mt-8 flex flex-wrap gap-6 text-[10px] tracking-[0.3em] text-gray-500 uppercase px-2"
      >
        <a href="mailto:hello@apexarc.com" className="hover:text-white transition">hello@apexarc.com</a>
        <a href="#" className="hover:text-white transition">+1 (555) 123 4567</a>
        <a href="#" className="hover:text-white transition">Instagram</a>
      </motion.div>

    </section>
  );
};

export default CTA;