import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Sarah Jenkins', role: 'Homeowner', text: 'Apex Architects turned our dream home into a reality. Their attention to detail and modern touch is simply unparalleled.' },
  { name: 'David Cho', role: 'Business Owner', text: 'Innovative, professional, and reliable. They handled our commercial property space redesign flawlessly.' },
  { name: 'Elena Brooks', role: 'Property Developer', text: 'The team consistently delivers pioneering designs that not only look stunning but maintain perfect functional utility.' }
];

// duplicate for infinite loop
const loopData = [...reviews, ...reviews];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden relative" id="testimonials">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 max-w-2xl relative z-10"
      >
        <span className="text-gray-500 font-semibold tracking-[0.25em] text-[10px] uppercase block mb-4 border-b border-gray-200 pb-3 w-fit">
          Testimonials
        </span>

        <h2 className="text-4xl md:text-5xl font-playfair font-medium tracking-tight text-black mb-6">
          Words from our <em className="text-gray-400 italic font-light">Visionaries.</em>
        </h2>

        <p className="text-gray-500 font-light text-sm max-w-md">
          Trusted by clients worldwide for delivering timeless, editorial-quality architecture tailored to individual lifestyles.
        </p>
      </motion.div>

      {/* Marquee Wrapper */}
      <div className="overflow-hidden relative z-10 w-[calc(100%+4rem)] -ml-8 px-8 cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {loopData.map((rev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className={`min-w-[300px] md:min-w-[400px] p-10 flex flex-col justify-between transition-shadow duration-500 border shadow-sm hover:shadow-xl rounded-3xl
                ${i % 2 === 0 
                  ? 'bg-[#141414] border-[#222]' 
                  : 'bg-[#1a1a1a] border-[#2a2a2a]'
                }`}
            >
              <div>
                {/* Stars */}
                <div className="text-amber-600/80 mb-8 text-sm tracking-widest">
                  ⋆⋆⋆⋆⋆
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg leading-relaxed mb-12 font-playfair italic font-light">
                  "{rev.text}"
                </p>
              </div>

              {/* User */}
              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-12 h-12 bg-[#222] text-amber-50 flex items-center justify-center font-playfair text-xl italic">
                  {rev.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-[13px] font-semibold tracking-wider text-white uppercase">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 tracking-widest uppercase mt-1">
                    {rev.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Testimonials;