'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-lg w-full space-y-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-48 h-48 mx-auto">
          <Image
            src="https://picsum.photos/seed/404-cake/400/400"
            alt="404 Error"
            fill
            className="object-contain"
          />
        </div>

        <div>
          <motion.h1
            className="text-6xl font-bold text-amber-600 mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            404
          </motion.h1>
          <h2 className="text-3xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Oops! It seems this page has been eaten by our hungry customers.
          </p>
        </div>

        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
            >
              Return to Homepage
            </Link>
          </motion.div>
          
          <p className="mt-6 text-base text-gray-500">
            Looking for something specific? Check out our{' '}
            <Link href="/services" className="text-amber-600 hover:text-amber-500">
              menu
            </Link>
            {' '}or{' '}
            <Link href="/contact" className="text-amber-600 hover:text-amber-500">
              contact us
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
} 