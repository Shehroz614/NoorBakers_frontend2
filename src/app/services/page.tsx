'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'artisan-breads',
    title: 'Artisan Breads',
    description: 'Handcrafted breads using traditional European methods and organic ingredients.',
    image: 'https://images.unsplash.com/photo-1620921592619-652411a0d01a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Sourdough & Rye Breads',
      'Baguettes & Ciabatta',
      'Whole Grain Options',
      'Gluten-Free Available'
    ],
    pricing: [
      { name: 'Artisan Loaf', price: '$6.99' },
      { name: 'Specialty Bread', price: '$8.99' },
      { name: 'Custom Order', price: 'From $12.99' }
    ],
    process: [
      'Selection of premium ingredients',
      '24-hour fermentation process',
      'Hand-shaped and scored',
      'Baked in stone hearth ovens'
    ]
  },
  {
    id: 'custom-cakes',
    title: 'Custom Cakes',
    description: 'Bespoke cakes for weddings, birthdays, and special occasions, tailored to your vision.',
    image: 'https://images.unsplash.com/photo-1694168720027-5f2e02c59f14?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Wedding & Celebration Cakes',
      'Custom Designs',
      'Various Flavors & Fillings',
      'Dietary Options Available'
    ],
    pricing: [
      { name: 'Basic Tier', price: 'From $49.99' },
      { name: 'Wedding Cake', price: 'From $299.99' },
      { name: 'Custom Design', price: 'Custom Quote' }
    ],
    process: [
      'Personal consultation',
      'Design sketching',
      'Flavor tasting session',
      'Professional decoration'
    ]
  },
  {
    id: 'pastries',
    title: 'French Pastries',
    description: 'Authentic French pastries made with imported butter and traditional techniques.',
    image: 'https://images.unsplash.com/photo-1450862479751-84eeaf2fcca4?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Croissants & Danish',
      'Eclairs & Choux',
      'Macarons & Petit Fours',
      'Seasonal Specialties'
    ],
    pricing: [
      { name: 'Individual Pastry', price: 'From $3.99' },
      { name: 'Box of 6', price: '$21.99' },
      { name: 'Catering Box', price: 'From $49.99' }
    ],
    process: [
      'Premium butter lamination',
      'Multi-day preparation',
      'Hand-piped details',
      'Fresh daily production'
    ]
  },
  {
    id: 'catering',
    title: 'Event Catering',
    description: 'Full-service catering for corporate events, weddings, and private parties.',
    image: 'https://images.unsplash.com/photo-1549590143-d5855148a9d5?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Corporate Functions',
      'Wedding Packages',
      'Private Events',
      'Custom Menus'
    ],
    pricing: [
      { name: 'Basic Package', price: 'From $15/person' },
      { name: 'Premium Package', price: 'From $25/person' },
      { name: 'Custom Package', price: 'Custom Quote' }
    ],
    process: [
      'Menu consultation',
      'Tasting session',
      'Event planning',
      'Professional service'
    ]
  }
];

export default function Services() {
  const { scrollY } = useScroll();
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            scale: useTransform(scrollY, [0, 300], [1.1, 1]),
            opacity: useTransform(scrollY, [0, 300], [1, 0.5])
          }}
        >
          <Image
            src="https://picsum.photos/seed/services-hero/1920/1080"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Crafting Moments of
              <span className="block text-amber-400">Pure Delight</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From artisanal breads to custom cakes, we bring your culinary visions to life with passion and precision.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="#explore">
                <motion.button
                  className="px-8 py-4 bg-amber-500 text-white rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-amber-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section id="explore" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of professional services, each crafted with expertise and attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group
                  ${selectedService.id === service.id ? 'ring-4 ring-amber-500' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200 line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      <AnimatePresence mode="wait">
        <motion.section
          key={selectedService.id}
          className="py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{selectedService.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{selectedService.description}</p>
                
                <div className="space-y-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3 text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Process</h3>
                    <div className="space-y-4">
                      {selectedService.process.map((step, index) => (
                        <motion.div
                          key={step}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-600 pt-1">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Pricing */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pricing</h3>
                  <div className="space-y-4">
                    {selectedService.pricing.map((item, index) => (
                      <motion.div
                        key={item.name}
                        className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-gray-600">{item.name}</span>
                        <span className="text-xl font-semibold text-amber-600">{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6">Contact us now to discuss your requirements and get a custom quote.</p>
                  <Link href="/contact">
                    <motion.button
                      className="w-full py-4 bg-white text-amber-600 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Wedding Client',
                comment: 'The wedding cake was absolutely stunning! Not only did it look beautiful, but it tasted amazing. Everyone was asking about it!',
                image: 'https://picsum.photos/seed/testimonial-1/200/200'
              },
              {
                name: 'Michael Chen',
                role: 'Corporate Event Planner',
                comment: 'Their catering service is top-notch. Professional, punctual, and the food was exceptional. Will definitely use them again.',
                image: 'https://picsum.photos/seed/testimonial-2/200/200'
              },
              {
                name: 'Emma Davis',
                role: 'Regular Customer',
                comment: 'The best artisanal bread in town! Their sourdough is exceptional, and the staff is always friendly and helpful.',
                image: 'https://picsum.photos/seed/testimonial-3/200/200'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-amber-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.comment}</p>
                <div className="mt-4 flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How far in advance should I order a custom cake?',
                answer: 'We recommend placing custom cake orders at least 2 weeks in advance. For wedding cakes, we suggest 3-6 months ahead.'
              },
              {
                question: 'Do you offer gluten-free options?',
                answer: 'Yes, we offer a variety of gluten-free breads, pastries, and cakes. Please let us know about any dietary requirements.'
              },
              {
                question: 'What is your delivery area?',
                answer: 'We deliver within a 30-mile radius of our location. Additional charges may apply based on distance.'
              },
              {
                question: 'Can I schedule a tasting session?',
                answer: 'Yes! We offer tasting sessions for wedding cakes and catering services. Contact us to schedule an appointment.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 