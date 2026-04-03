import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className="bg-[#fdfdfd] min-h-screen font-sans flex flex-col relative overflow-hidden">
      
      {/* EXTREMELY Subtle Ambient Blooms (to give "3D" depth without changing light theme) */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-soft z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[100%] h-[100%] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none animate-pulse-soft delay-1000 z-0"></div>

      <Header />
      
      <main className="flex-1 w-full relative z-10 pb-12">
  <Outlet />
</main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
