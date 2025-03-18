'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const categories = ['All', 'Breads', 'Pastries', 'Cakes', 'Cookies'];

const galleryItems = [
  {
    id: 1,
    title: 'Artisan Sourdough',
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1620921592619-652411a0d01a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '4/3',
    description: 'Traditional sourdough with perfect crust and texture'
  },
  {
    id: 2,
    title: 'French Croissants',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1566550190349-0e08628941ab?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '3/4',
    description: 'Flaky, buttery croissants made in authentic French style'
  },
  {
    id: 3,
    title: 'Wedding Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '1/1',
    description: 'Elegant three-tier wedding cake with fondant flowers'
  },
  {
    id: 4,
    title: 'Chocolate Chip Cookies',
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2678&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '4/3',
    description: 'Classic chocolate chip cookies with a gooey center'
  },
  {
    id: 5,
    title: 'Baguette',
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1599819055803-717bba43890f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '3/4',
    description: 'Crispy French baguette with perfect crumb'
  },
  {
    id: 6,
    title: 'Danish Pastry',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1568471173242-461f0a730452?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '1/1',
    description: 'Sweet Danish pastry filled with cream cheese'
  },
  {
    id: 7,
    title: 'Birthday Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '4/3',
    description: 'Colorful birthday cake with sprinkles and decorations'
  },
  {
    id: 8,
    title: 'Macarons',
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=3459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '3/4',
    description: 'Delicate French macarons in various flavors'
  },
  {
    id: 9,
    title: 'Rye Bread',
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1551888761-382cd30b5da6?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: '1/1',
    description: 'Hearty rye bread with perfect density'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://picsum.photos/seed/gallery-hero/1920/1080"
          alt="Gallery Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Explore our collection of artisanal creations, each telling a story of passion and craftsmanship
          </p>
        </motion.div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-amber-500 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-amber-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="max-w-7xl mx-auto"
          layout
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className={`relative rounded-2xl overflow-hidden shadow-lg
                    ${item.aspectRatio === '4/3' ? 'aspect-[4/3]' :
                      item.aspectRatio === '3/4' ? 'aspect-[3/4]' :
                      'aspect-square'}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-5xl w-full aspect-[16/9] rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {selectedImage && (
                <>
                  <Image
                    src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                    alt="Selected image"
                    fill
                    className="object-contain"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 