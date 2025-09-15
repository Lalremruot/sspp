"use client";

import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 p-2 lg:px-6 mt-8 lg:mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo + Tagline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Siamsinpawlpi</h2>
          <p className="text-sm leading-relaxed">
            A Students’ Welfare Organisation built on the principles of{" "}
            <span className="italic">Learn, Labour, Serve.</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">What We Do</a></li>
            <li><a href="#" className="hover:text-white transition">Motto</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              info@siamsinpawlpi.org
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition"><Facebook /></a>
            <a href="#" className="hover:text-white transition"><Twitter /></a>
            <a href="#" className="hover:text-white transition"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Siamsinpawlpi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
