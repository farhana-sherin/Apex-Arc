import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import logo1 from '../assets/react.svg';
import logo2 from '../assets/vite.svg';
import archImg from '../assets/images/171716266263714.avif';

const CountUp = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = Math.abs(Math.floor(duration / steps));
      let endNum = parseInt(end.replace(/\D/g, ''));
      let current = 0;
      const timer = setInterval(() => {
        current += Math.ceil(endNum / steps);
        if (current >= endNum) {
          setCount(endNum);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-1 flex flex-col items-center md:items-start text-center md:text-left group border-l border-gray-100 pl-6 border-solid"
    >
      <h3 className="text-3xl md:text-4xl font-playfair font-medium text-[#111] tracking-tight hover:text-amber-800 transition-colors">
        {count}{end.includes('+') ? '+' : end.includes('%') ? '%' : ''}
      </h3>
      <p className="text-[10px] text-gray-400 leading-relaxed font-bold uppercase tracking-widest">
        {label}
      </p>
    </motion.div>
  );
};

const stats = [
  { value: '25+', label: 'Years Of Excellence' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Retention Rate' },
  { value: '15+', label: 'Countries' },
];

export const About = () => {
  return (
    <section className="py-16 md:py-20 mt-8 md:mt-12 bg-[#fdfdfd]" id="about">
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-6">
        
        {/* Intro Side */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <span className="text-gray-400 font-bold tracking-[0.4em] text-[10px] uppercase border-b border-gray-100 pb-3 w-fit inline-block">
              THE STUDIO
            </span>

            <h2 className="text-3xl md:text-5xl font-playfair font-medium tracking-tight text-[#111] leading-[1.1]">
              Architecture is more than just <em className="text-gray-400 italic font-light">structures.</em>
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-gray-500 font-light max-w-sm">
              We specialize in the alchemy of light, space, and materials to build environments that resonate with the human spirit and stand timeless.
            </p>
          </motion.div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            {stats.map((stat, i) => (
               <CountUp key={i} end={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative group"
        >
          <div className="relative h-[340px] md:h-[420px] lg:h-[480px] overflow-hidden shadow-xl rounded-sm">
             <motion.img 
                whileHover={{ scale: 1.03 }}
                src={archImg} 
                alt="Studio Masterpiece" 
                className="w-full h-full object-cover filter contrast-110 saturate-50 grayscale-[20%] group-hover:grayscale-0 group-hover:saturate-100 transition-all duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-6 right-6 bg-white/5 backdrop-blur-2xl border border-white/10 p-7 shadow-xl max-w-[220px]"
          >
            <h3 className="text-white text-xl font-playfair italic mb-1">
              Pure Form.
            </h3>
            <p className="text-gray-300 text-[9px] uppercase tracking-widest font-bold">
              Concept Study 2024
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
