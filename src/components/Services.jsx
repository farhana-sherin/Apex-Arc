import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import archImg from '../assets/images/service-interior.png'; // High-end generated image
import intImg from '../assets/images/interior.webp';
import urbImg from '../assets/images/urban.jpg';
import projImg from '../assets/images/pro.jpg';

const services = [
  { num: '01', title: 'Architectural Blueprinting', desc: 'Crafting the primary skeleton of visionary structures.', img: archImg, slug: 'architecture-design' },
  { num: '02', title: 'Immersive Interior Curation', desc: 'Luxury materials meets psychological comfort.', img: intImg, slug: 'interior-design' },
  { num: '03', title: 'Urban Landscaping', desc: 'Designing the ecological pulse of modern cities.', img: urbImg, slug: 'urban-planning' },
  { num: '04', title: 'Project Orchestration', desc: 'Precision management for high-stakes constructions.', img: projImg, slug: 'project-management' },
];

export const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-[#f8f8f8]" id="services">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        {/* DOMINANT HEADER */}
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-14 items-end"
>
  <div className="lg:col-span-8">
     <span className="text-amber-800 font-bold tracking-[0.6em] text-[10px] uppercase block mb-4">
       OUR CORE PRACTICES
     </span>

     <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-playfair font-medium tracking-tighter text-gray-900 leading-[0.95]">
       We define the <br /> 
       <em className="text-gray-300 italic font-light">standard of luxury.</em>
     </h2>
  </div>

  <div className="lg:col-span-4 lg:text-right">
     <p className="text-gray-500 font-light text-base md:text-lg max-w-sm ml-auto leading-relaxed lg:mb-2">
        Our expertise spans across multiple disciplines, each driven by a commitment to unrivaled quality and architectural innovation.
     </p>
  </div>
</motion.div>

        {/* DOMINANT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 perspective-1000">
          {services.map((svc, i) => (
            <Link to={`/services/${svc.slug}`} key={i} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="cursor-pointer"
              >
                {/* 3D TILT EFFECT CARD */}
                <motion.div 
                  whileHover={{ y: -20, rotateY: 5, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-[3/4] overflow-hidden mb-8 shadow-[0_25px_60px_rgba(0,0,0,0.06)] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] rounded-3xl"
                >
                  <motion.img 
                    whileHover={{ scale: 1.1, filter: 'blur(0px)' }}
                    initial={{ scale: 1.05, filter: 'blur(2px)' }}
                    animate={{ filter: 'blur(0px)' }}
                    src={svc.img} 
                    alt={svc.title} 
                    className="w-full h-full object-cover filter brightness-[0.95] saturate-50 group-hover:saturate-100 transition-all duration-[1.5s] "
                  />
                  <div className="absolute top-8 left-8 text-white font-playfair italic text-3xl drop-shadow-xl z-10 select-none">
                    {svc.num}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </motion.div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="text-xl md:text-2xl font-playfair font-medium text-gray-900 mb-4 group-hover:text-amber-800 transition-colors tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-bold uppercase tracking-[0.2em]">
                    {svc.desc}
                  </p>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    className="h-[1px] bg-amber-800/20 mt-8 group-hover:bg-amber-800 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;