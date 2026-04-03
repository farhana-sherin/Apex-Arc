import React from 'react';
import { motion } from 'framer-motion';
import projectImg from '../assets/images/masterpiece.png';

export const FeaturedProject = () => {
  return (
     <section className="py-8 md:py-10 bg-[#0a0a0a] text-white overflow-hidden relative rounded-2xl max-w-[1400px] mx-auto" id="featured">

      {/* Background Text (reduced) */}
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-[0.01] pointer-events-none">
        <h2 className="text-[12vw] font-playfair font-bold whitespace-nowrap leading-none select-none">
          MASTERPIECE
        </h2>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center relative z-10">
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden shadow-xl"
        >
          <motion.img 
            whileHover={{ scale: 1.04 }}
            src={projectImg} 
            alt="Featured Project" 
            className="w-full h-full object-cover brightness-90 saturate-50 group-hover:saturate-100 transition-all rounded-xl" 
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Floating Info */}
          <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-[8px] uppercase tracking-[0.3em] font-semibold text-amber-500 mb-1">
              Location
            </p>
            <p className="text-sm font-playfair italic">
              The Glass Pavilion, Aspen
            </p>
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col space-y-4">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-500 font-bold tracking-[0.4em] text-[8px] uppercase block mb-3">
              STANDOUT PROJECT
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium tracking-tighter leading-[0.95] mb-3">
              Pioneering<br /> 
              <em className="text-gray-600 font-light italic">Living Spaces.</em>
            </h2>

            <div className="w-12 h-[1px] bg-amber-700/50 mb-4"></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-light max-w-sm leading-relaxed"
          >
            A seamless integration of sharp-edged concrete and invisible glass, defining the boundary between private sanctuary and the raw beauty of the wilderness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all group-hover:bg-amber-700 group-hover:border-amber-700">
                    <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <div className="text-left">
                    <p className="text-[8px] uppercase tracking-widest font-bold text-gray-500">
                      Case Study
                    </p>
                    <p className="text-[11px] font-semibold tracking-wider">
                      VIEW PROJECT DETAILS
                    </p>
                </div>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;