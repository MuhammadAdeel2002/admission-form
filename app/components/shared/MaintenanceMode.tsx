"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/config/site";

export default function MaintenanceMode() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl"
      >
        {/* Logo */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/logo/sgc-logo.png"
            alt="SGC Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        
        {/* Maintenance Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-primary dark:text-secondary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
          Under Maintenance
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {siteConfig.maintenance.message}
        </p>
        
        {/* Animated progress bar */}
        <div className="w-full max-w-md mx-auto h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Contact info */}
        <div className="text-gray-500 dark:text-gray-400">
          <p>For urgent inquiries, please contact us:</p>
          <p className="font-medium">info@sgc.international</p>
        </div>
      </motion.div>
    </div>
  );
} 