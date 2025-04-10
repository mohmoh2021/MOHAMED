import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-500" size={24} />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a href="mailto:gsdg95956@gmail.com" className="text-gray-300 hover:text-blue-500 transition-colors">
                      gsdg95956@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-500" size={24} />
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <a href="tel:+21379787486" className="text-gray-300 hover:text-blue-500 transition-colors">
                      +213 7 97 87 48 67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-500" size={24} />
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-gray-300">Algeria</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-white font-medium mb-4">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-300 hover:text-blue-500 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-500 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="https://artstation.com" target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-500 transition-colors">
                      <Globe size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}