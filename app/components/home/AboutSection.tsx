"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  // Feature item animation variants
  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };
  
  return (
    <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image column */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/about/about-image.jpg"
                  alt="Sardar Group of Companies"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="text-primary font-bold text-5xl"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                >
                  25+
                </motion.div>
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  Years of Excellence
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div 
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="max-w-xl">
              <motion.span 
                className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2 inline-block"
                variants={itemVariants}
              >
                About SGC
              </motion.span>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
                variants={itemVariants}
              >
                Leading Diversified Business Group in Pakistan
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Sardar Group of Companies (SGC) is a leading business conglomerate with extensive investments across real estate development, construction, energy solutions, transportation, and manufacturing sectors in Pakistan.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 mb-8"
                variants={itemVariants}
              >
                Founded in 1997, SGC has established itself as one of Pakistan's most innovative and dynamic business groups. With flagship projects like Taj Residensia and a commitment to sustainable development, we continue to transform industries through cutting-edge solutions and ethical business practices. Our vision is to be at the forefront of Pakistan's economic growth while creating lasting value for our stakeholders.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delayChildren: 0.6, staggerChildren: 0.1 }}
              >
                <motion.div 
                  className="flex items-start"
                  variants={featureVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex-shrink-0 mr-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <motion.div 
                      className="bg-secondary/20 p-3 rounded-full"
                      whileHover={{ 
                        backgroundColor: "rgba(234, 179, 8, 0.3)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Quality Commitment</h4>
                    <p className="text-gray-600">Delivering excellence in every project and service</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={featureVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex-shrink-0 mr-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <motion.div 
                      className="bg-secondary/20 p-3 rounded-full"
                      whileHover={{ 
                        backgroundColor: "rgba(234, 179, 8, 0.3)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Innovation</h4>
                    <p className="text-gray-600">Pioneering new approaches and technologies</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={featureVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex-shrink-0 mr-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <motion.div 
                      className="bg-secondary/20 p-3 rounded-full"
                      whileHover={{ 
                        backgroundColor: "rgba(234, 179, 8, 0.3)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Experienced Team</h4>
                    <p className="text-gray-600">Industry experts with proven track records</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={featureVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex-shrink-0 mr-4"
                    whileHover={{ rotate: 5 }}
                  >
                    <motion.div 
                      className="bg-secondary/20 p-3 rounded-full"
                      whileHover={{ 
                        backgroundColor: "rgba(234, 179, 8, 0.3)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Global Reach</h4>
                    <p className="text-gray-600">Operations and partnerships across continents</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/about" className="btn-primary inline-block relative overflow-hidden group">
                  <span className="relative z-10">Learn More About Us</span>
                  <motion.span 
                    className="absolute inset-0 bg-secondary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 