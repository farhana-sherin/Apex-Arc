import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 px-6 md:px-16 lg:px-24 pt-24 pb-10 border-t border-[#1a1a1a]" id="contact">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair text-white tracking-tight">
              Apex Arc<span className="text-gray-500">.</span>
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xs">
              Pioneering modern architectural layouts and shaping environments that merge innovation with timeless design.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm font-light">
              <li><a href="/#about" className="hover:text-white transition">About</a></li>
              <li><a href="/#services" className="hover:text-white transition">Services</a></li>
              <li><a href="/#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Services
            </h4>

            <ul className="space-y-3 text-sm font-light">
              <li><a href="/services/architecture-design" className="hover:text-white transition">Architecture</a></li>
              <li><a href="/services/interior-design" className="hover:text-white transition">Interior Design</a></li>
              <li><a href="/services/urban-planning" className="hover:text-white transition">Urban Planning</a></li>
              <li><a href="/services/project-management" className="hover:text-white transition">Project Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Contact
            </h4>

            <ul className="space-y-3 text-sm font-light">
              <li className="hover:text-white transition cursor-pointer">
                hello@apexarc.com
              </li>
              <li className="hover:text-white transition cursor-pointer">
                +1 (555) 123-4567
              </li>
              <li className="text-gray-500 leading-relaxed">
                123 Architecture Blvd.<br />
                New York, NY 10001
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-light">

          <p>
            © {new Date().getFullYear()} Apex Arc Studio
          </p>

          <div className="flex gap-6 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;