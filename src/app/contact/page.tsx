'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const contactInfo = {
  address: '123 Bakery Lane, Sweet Town, ST 12345',
  email: 'hello@noorbakers.com',
  phone: '+1 (555) 123-4567',
  hours: [
    { days: 'Monday - Friday', time: '7:00 AM - 7:00 PM' },
    { days: 'Saturday', time: '8:00 AM - 6:00 PM' },
    { days: 'Sunday', time: '8:00 AM - 3:00 PM' }
  ],
  socialMedia: [
    { name: 'Instagram', icon: '📸', link: 'https://instagram.com/noorbakers' },
    { name: 'Facebook', icon: '👥', link: 'https://facebook.com/noorbakers' },
    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/noorbakers' },
    { name: 'Pinterest', icon: '📌', link: 'https://pinterest.com/noorbakers' }
  ]
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://picsum.photos/seed/contact-hero/1920/1080"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Have a question or special request? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📍',
                title: 'Visit Us',
                content: contactInfo.address,
                link: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`
              },
              {
                icon: '📧',
                title: 'Email Us',
                content: contactInfo.email,
                link: `mailto:${contactInfo.email}`
              },
              {
                icon: '📞',
                title: 'Call Us',
                content: contactInfo.phone,
                link: `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`
              },
              {
                icon: '⏰',
                title: 'Hours',
                content: contactInfo.hours.map(h => (
                  <div key={h.days} className="mb-2">
                    <p className="font-medium">{h.days}</p>
                    <p className="text-gray-600">{h.time}</p>
                  </div>
                ))
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                {typeof item.content === 'string' ? (
                  item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )
                ) : (
                  item.content
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Your email"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Catering">Catering</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    placeholder="Your message"
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className={`w-full py-4 rounded-full text-lg font-semibold ${
                    isSubmitting || submitSuccess
                      ? 'bg-amber-400 cursor-not-allowed'
                      : 'bg-amber-500 hover:bg-amber-600'
                  } text-white transition-colors`}
                  disabled={isSubmitting || submitSuccess}
                  whileHover={!isSubmitting && !submitSuccess ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !submitSuccess ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending...' : submitSuccess ? 'Message Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {contactInfo.socialMedia.map((platform, index) => (
                    <motion.a
                      key={platform.name}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-3xl mb-2">{platform.icon}</span>
                      <span className="text-sm font-medium text-gray-600">{platform.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/bakery-map/800/600"
                    alt="Location Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="font-medium text-gray-900">Noor Bakers</p>
                      <p className="text-sm text-gray-600">{contactInfo.address}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 