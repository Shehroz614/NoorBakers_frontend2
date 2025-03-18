'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-6xl font-bold text-amber-600 mb-4">Oops!</h1>
          <h2 className="text-3xl font-bold text-gray-900">
            Something went wrong
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="space-y-4">
          <motion.button
            onClick={reset}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Try again
          </motion.button>

          <Link
            href="/"
            className="w-full inline-flex justify-center py-3 px-4 border border-amber-300 rounded-md shadow-sm text-lg font-medium text-amber-700 bg-white hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Return to homepage
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          If the problem persists, please contact our support team
        </p>
      </motion.div>
    </div>
  );
} 