"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      className="max-w-2xl mx-auto text-center py-20"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
      <div className="space-y-8">
        <motion.div
          className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <motion.a
            href="mailto:kothariprakhar@gmail.com"
            className="text-blue-400 hover:text-blue-300 text-lg flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-5 h-5" />
            <span>kothariprakhar@gmail.com</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <motion.a
            href="tel:+447741379667"
            className="text-blue-400 hover:text-blue-300 text-lg flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-5 h-5" />
            <span>+44-7741379667</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <div className="text-gray-300 flex items-center justify-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>London, United Kingdom</span>
          </div>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold mb-2">Social</h3>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://linkedin.com/in/prakhar-kothari-sde/"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;