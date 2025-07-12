import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a3d35] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">ReWear</h3>
          <p className="text-sm text-gray-300">
            Promoting sustainable fashion by swapping and reusing clothes with care.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/terms" className="hover:text-white">Terms</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#38c172]"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#38c172]"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#38c172]"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ReWear. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
