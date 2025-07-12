import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a3d35] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-wide">ReWear</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Reimagining fashion through conscious reuse. Join our movement to build a sustainable future one outfit at a time.
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-[#38c172] transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#38c172] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#38c172] transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#38c172] transition duration-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sky-400 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ReWear · All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
