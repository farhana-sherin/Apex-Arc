import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import FeaturedProject from "../components/FeaturedProject"; // Import new STANDOUT section
import Testimonials from "../components/Testimonials";

export const Home = () => {
  return (
    <main className="relative min-h-screen w-full bg-[#fdfdfd]">
      <Hero />
      <About />
       {/* Inject Standout Section HERE to break the flow and grab attention */}
      <Services />
     
      <Portfolio />
       <FeaturedProject />
      <Testimonials />
    </main>
  );
};

export default Home;
