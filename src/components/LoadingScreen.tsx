import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.svg
          className="w-24 h-24 mx-auto mb-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <path
            d="M6.75024 6.83431C6.75024 5.68649 7.67885 4.75024 8.81524 4.75024C9.95163 4.75024 10.8802 5.68649 10.8802 6.83431"
            className="stroke-amber-600"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.1702 6.83431C13.1702 5.68649 14.0988 4.75024 15.2352 4.75024C16.3716 4.75024 17.3002 5.68649 17.3002 6.83431"
            className="stroke-amber-600"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 10.5002V11.9002C3 15.7502 6.75 17.2502 12 17.2502C17.25 17.2502 21 15.7502 21 11.9002V10.5002"
            className="stroke-amber-600"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.2502V19.5002"
            className="stroke-amber-600"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-light text-amber-600"
        >
          Einen Moment bitte...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;