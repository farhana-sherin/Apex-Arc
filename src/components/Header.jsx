import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 ${
                (isScrolled || !isHome)
                ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
                : 'py-6 bg-transparent'
            }`}
        >
            <div className="max-w-[1800px] mx-auto flex justify-between items-center w-full">
                <a 
                    href="/" 
                    className={`text-2xl font-playfair font-bold tracking-tight transition-colors duration-300 ${
                        (isScrolled || !isHome) ? 'text-gray-900' : 'text-white'
                    }`}
                >
                    Apex Arc
                </a>

                <nav className={`hidden md:flex items-center space-x-12 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                    (isScrolled || !isHome) ? 'text-gray-600' : 'text-white/90'
                }`}>
                    <a href="/#about" className="hover:text-amber-500 transition-colors">About</a>
                    <a href="/#services" className="hover:text-amber-500 transition-colors">Services</a>
                    <a href="/#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
                    <a href="/contact" className="hover:text-amber-500 transition-colors">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
