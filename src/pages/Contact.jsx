import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-20 md:py-24 bg-[#fdfdfd]" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-amber-700 font-semibold tracking-[0.4em] text-[10px] uppercase block mb-3">
            CONTACT
          </span>

          <h1 className="text-3xl md:text-5xl font-playfair font-medium tracking-tight text-[#111] leading-tight mb-3">
            Let’s build something <br />
            <em className="text-gray-400 italic font-light">meaningful.</em>
          </h1>

          <p className="text-sm text-gray-500 font-light leading-relaxed">
            We collaborate with visionary clients to shape timeless architectural experiences.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Info */}
          <div className="lg:col-span-5 space-y-12">

            <div className="border-l border-gray-200 pl-6 space-y-8">

              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2">
                  Email
                </p>
                <a href="mailto:hello@apexarc.com" className="text-xl font-playfair text-[#111] group-hover:text-amber-700 transition">
                  hello@apexarc.com
                </a>
              </div>

              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2">
                  Phone
                </p>
                <a href="tel:+15551234567" className="text-xl font-playfair text-[#111] group-hover:text-amber-700 transition">
                  +1 (555) 123 4567
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2">
                  Studio
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  123 Architecture Blvd.<br />
                  Hudson Yards, New York<br />
                  NY 10001
                </p>
              </div>

            </div>

          </div>

          {/* Right Form (Hero Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-[#0a0a0a] text-white rounded-3xl p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
          >
            <h4 className="text-2xl font-playfair italic mb-8">
              Start a Project
            </h4>

            <div className="space-y-8">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full border-b border-white/10 pb-3 text-sm bg-transparent outline-none placeholder:text-gray-500 focus:border-amber-700 transition"
              />

              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full border-b border-white/10 pb-3 text-sm bg-transparent outline-none placeholder:text-gray-500 focus:border-amber-700 transition"
              />

              <textarea 
                rows="3"
                placeholder="Project Vision"
                className="w-full border-b border-white/10 pb-3 text-sm bg-transparent outline-none resize-none placeholder:text-gray-500 focus:border-amber-700 transition"
              />

              <button className="mt-6 bg-white text-black px-8 py-3 text-xs tracking-widest uppercase rounded-full hover:bg-amber-700 hover:text-white transition-all">
                Send Request
              </button>
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-[10px] tracking-[0.3em] text-gray-400 uppercase">
          {['Instagram', 'LinkedIn', 'Behance', 'Twitter'].map((social) => (
            <a key={social} href="#" className="hover:text-amber-700 transition">
              {social}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;