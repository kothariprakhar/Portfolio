"use client";
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children, isVisible }) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.3,
              ease: "easeIn"
            }
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;