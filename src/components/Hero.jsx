import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "../assets/images/premium-hero.png";
import hero2 from "../assets/images/premium-hero-2.png";
import hero3 from "../assets/images/premium-hero-3.png";

const slides = [
  {
    image: hero1,
    tagline: "Exterior Architecture",
    headline: {
        main: "Simplicity",
        italic: "Meets",
        sub: "Statute."
    },
    description: "Exploring the boundary where structural integrity satisfies aesthetic desire. We define the modern monument through pure form and calculate each line for impact."
  },
  {
    image: hero2,
    tagline: "Interior Experience",
    headline: {
        main: "Where Light",
        italic: "Defines",
        sub: "Space."
    },
    description: "Capturing the transient nature of daylight to transform minimalist interiors into living canvases of warm shadow and sculpted form. Sanctuary crafted from silence."
  },
  {
    image: hero3,
    tagline: "Cultural Landmarks",
    headline: {
        main: "Architecture",
        italic: "For the",
        sub: "Soul."
    },
    description: "Designing sanctuaries that foster profound connection and a sense of place. We build landmarks that bridge history and modern innovation for the future of living."
  }
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000); // 7 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[100vh] bg-[#111] overflow-hidden" id="hero">
            
            {/* Background Slider Container */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Background Image with Continuous Cinematic Zoom */}
                        <motion.div
                            animate={{ scale: [1, 1.1] }}
                            transition={{ duration: 7, ease: "linear" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={slides[currentSlide].image}
                                alt={`Full-Width Immersive ${slides[currentSlide].tagline}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Constant Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
                <div className="absolute inset-0 bg-black/10 z-10" />

                {/* Centered Content (Common for all slides, but updates subtext) */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                    <div className="max-w-5xl space-y-10 md:space-y-16">
                        
                        <div className="space-y-6 md:space-y-8">
                            <motion.div
                                key={`tagline-${currentSlide}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-center gap-4"
                            >
                                <div className="h-[1px] w-8 md:w-12 bg-amber-500/50" />
                                <span className="text-amber-500 font-bold tracking-[0.5em] text-[10px] md:text-[12px] uppercase">
                                    {slides[currentSlide].tagline} 
                                </span>
                                <div className="h-[1px] w-8 md:w-12 bg-amber-500/50" />
                            </motion.div>

                            {/* Headline: Clean, Bold Cinema Look */}
                            <motion.h1 
  key={`headline-${currentSlide}`}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="text-5xl md:text-6xl lg:text-8xl font-playfair font-semibold text-white leading-[0.9] tracking-wide"
>
  <span className="block">
    {slides[currentSlide].headline.main}
  </span>

  <span className="block mt-2">
    <em className="text-white/90 italic font-semibold">
      {slides[currentSlide].headline.italic}
    </em>{" "}
    {slides[currentSlide].headline.sub}
  </span>
</motion.h1>
                        </div>

                        <motion.p 
                            key={`desc-${currentSlide}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            className="text-sm md:text-xl text-white font-light max-w-2xl leading-relaxed mx-auto italic"
                        >
                            "{slides[currentSlide].description}"
                        </motion.p>

                        {/* Premium Immersive CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-center pt-4">
                            <button className="group relative w-full sm:w-auto px-16 py-6 bg-white text-[#111] text-[12px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:scale-[1.02] shadow-2xl overflow-hidden">
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore Legacy</span>
                                <div className="absolute inset-0 bg-[#111] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                            
                            
                        </div>
                    </div>
                </div>

                {/* Progress Indicators (Minimalist lines) */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
                    {slides.map((_, index) => (
                        <div 
                            key={index} 
                            onClick={() => setCurrentSlide(index)}
                            className="w-12 md:w-24 h-1 bg-white/10 rounded-full cursor-pointer relative overflow-hidden"
                        >
                            {currentSlide === index && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 7, ease: "linear" }}
                                    className="absolute inset-0 bg-white origin-left"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 right-12 z-20 hidden lg:flex flex-col items-center gap-4 cursor-pointer"
                >
                    <span className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold [writing-mode:vertical-lr]">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;