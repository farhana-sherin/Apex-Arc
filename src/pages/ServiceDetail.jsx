import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import archImg from '../assets/images/arch.jpg';
import intImg from '../assets/images/interior.webp';
import urbImg from '../assets/images/urban.jpg';
import projImg from '../assets/images/pro.jpg';

const serviceData = {
  'architecture-design': {
    title: 'Architecture Design',
    img: archImg,
    desc: 'From initial concept development to schematic design and final blueprints, we craft iconic structures that stand the test of time.',
    details: 'Our architectural design service involves profound research and integration of surrounding environments. We ensure that our buildings are not only aesthetically captivating but also environmentally sustainable and functionally sound. By balancing light, materials, and space, we create extraordinary architectures tailored to your vision.',
    features: ['Feasibility Studies', 'Concept & Schematic Design', 'Sustainable Architecture', 'Permit & Blueprint Generation']
  },
  'interior-design': {
    title: 'Interior Design',
    img: intImg,
    desc: 'Creating cohesive, beautiful interior spaces that perfectly reflect your style while maintaining maximal functionality.',
    details: 'Great interior design is the seamless harmony between the inhabitant and the space. We carefully curate textures, palettes, lighting, and custom fixtures to tell a unique story within every room. We optimize spatial flow to turn ordinary layouts into profoundly moving experiential spaces.',
    features: ['Space Planning', 'Material & Finish Selection', 'Custom Furniture Design', 'Lighting Concepts']
  },
  'urban-planning': {
    title: 'Urban Planning',
    img: urbImg,
    desc: 'Designing the spaces between buildings & outdoors to create thriving, connected communities.',
    details: 'Urban planning lays the groundwork for vibrant communities. Our approach evaluates social, economic, and environmental factors to craft master plans for cities, campuses, and neighborhoods. We focus on enhancing public realms, mobility networks, and ecological resilience to create thriving spaces for future generations.',
    features: ['Master Planning', 'Urban Revitalization', 'Landscape Architecture', 'Mobility & Transit Integration']
  },
  'project-management': {
    title: 'Project Management',
    img: projImg,
    desc: 'Overseeing & controlling the entire construction process to ensure your project is delivered perfectly on schedule.',
    details: 'Navigating the complexities of construction requires precision and expertise. Our dedicated project management team acts as your advocate from day one. We manage budgets, timelines, contractors, and local authorities to ensure a stress-free transition from paper to reality, all without compromising quality.',
    features: ['Budgeting & Estimating', 'Contractor Coordination', 'Site Supervision', 'Quality Control & Handover']
  }
};

export const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceData[slug] || serviceData['architecture-design'];

  return (
    <div className="min-h-screen bg-white w-full">
      
      {/* Hero Banner */}
      <div className="relative w-full h-[45vh] min-h-[350px] overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${data.img}")` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl pt-16">
          <Link to="/" className="text-gray-300 hover:text-white mb-4 flex items-center gap-2 group w-fit transition-colors text-xs tracking-widest uppercase font-medium">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-200 font-light max-w-2xl"
          >
            {data.desc}
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-base font-light mb-10">
            {data.details}
          </p>
          <button className="bg-[#111] text-white px-8 py-3.5 rounded-full hover:bg-black transition-all hover:scale-105 shadow-md font-medium tracking-wide text-sm">
            Get a Quote for this Service
          </button>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-gray-50 rounded-[1.5rem] p-8 md:p-10 h-fit border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-gray-900 tracking-tight">Key Features</h3>
          <ul className="space-y-4">
            {data.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white mt-0.5 shadow-sm text-[10px] font-bold leading-none shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm md:text-base font-light">{feat}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
