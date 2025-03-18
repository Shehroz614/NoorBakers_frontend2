'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/bakery-interior/1920/1080"
            alt="Noor Bakers Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h1>
        </motion.div>
      </section>

      {/* Our Journey */}
      <motion.section
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Legacy of Excellence</h2>
            <p className="text-lg text-gray-600">
              Since 2010, Noor Bakers has been crafting exceptional artisanal breads and pastries,
              bringing the authentic taste of traditional baking to our community.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={fadeIn}
          >
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Founder&apos;s Vision</h3>
              <p className="text-gray-600 mb-6">
                Founded by Master Baker Sarah Noor, our bakery began with a simple yet powerful vision:
                to create bread that not only nourishes the body but also brings joy to the soul.
              </p>
              <p className="text-gray-600">
                Drawing from generations of baking tradition and combining it with modern techniques,
                we&apos;ve created a unique experience that keeps our customers coming back for more.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="py-20 bg-amber-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-gray-900"
            variants={fadeIn}
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on ingredients or processes, ensuring every product meets our high standards.'
              },
              {
                title: 'Community Focus',
                description: "We&apos;re more than a bakery - we&apos;re a gathering place for the community, creating moments of joy."
              },
              {
                title: 'Sustainable Practices',
                description: "We&apos;re committed to environmentally conscious baking, using local ingredients and eco-friendly packaging."
              }
            ].map((value) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-amber-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-16 text-gray-900"
            variants={fadeIn}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Noor',
                role: 'Master Baker & Founder',
                image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                name: 'Michael Chen',
                role: 'Head Pastry Chef',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                name: 'Emma Rodriguez',
                role: 'Artisan Bread Specialist',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                name: 'James Wilson',
                role: 'Cake Designer',
                image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
            ].map((member) => (
              <motion.div
                key={member.name}
                className="text-center"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
} 