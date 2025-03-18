'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-xl font-bold">NB</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Noor Bakers
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Crafting artisanal delights with passion and precision. 
              Every creation tells a story of tradition and innovation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'instagram', href: '#' },
                { icon: 'facebook', href: '#' },
                { icon: 'twitter', href: '#' },
                { icon: 'pinterest', href: '#' }
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/20"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fab fa-${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-amber-500">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-all duration-300 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-amber-500">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Custom Cakes',
                'Wedding Catering',
                'Event Planning',
                'Bakery Classes',
                'Corporate Orders'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-500 transition-all duration-300 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-amber-500">Get in Touch</h3>
            <div className="space-y-4 text-gray-400">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-start space-x-3 group hover:text-amber-500 transition-colors">
                <i className="fas fa-map-marker-alt text-amber-500 mt-1"></i>
                <span>
                  123 Bakery Street
                  <br />
                  New York, NY 10001
                </span>
              </a>
              <a href="tel:+15551234567" 
                className="flex items-center space-x-3 group hover:text-amber-500 transition-colors">
                <i className="fas fa-phone text-amber-500"></i>
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:hello@noorbakers.com" 
                className="flex items-center space-x-3 group hover:text-amber-500 transition-colors">
                <i className="fas fa-envelope text-amber-500"></i>
                <span>hello@noorbakers.com</span>
              </a>
              <div className="pt-4">
                <h4 className="font-semibold mb-2 text-amber-500">Hours</h4>
                <p className="flex justify-between items-center">
                  <span>Mon - Fri:</span>
                  <span>7am - 8pm</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Sat - Sun:</span>
                  <span>8am - 9pm</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Noor Bakers. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-amber-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-amber-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-amber-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 