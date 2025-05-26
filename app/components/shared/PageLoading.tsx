"use client";

import { motion } from "framer-motion";

export default function PageLoading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="relative w-20 h-20 mx-auto mb-4">
          {/* Outer circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full"
          ></motion.div>
          
          {/* Inner circle */}
          <motion.div
            animate={{ rotate: -180 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-4 border-t-transparent border-r-transparent border-b-secondary border-l-secondary rounded-full"
          ></motion.div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-primary font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
} 