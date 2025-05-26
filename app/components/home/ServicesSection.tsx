"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Taj Residencia",
      description: "A luxurious residential development in the heart of the city, offering a unique blend of modern architecture and traditional design.",
      icon: (
        <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      image: "/images/services/taj-residencia.jpg",
      link: "/services/tajresidencia",
    },
    {
      id: 2,
      title: "Fresh Fold",
      description: "Premium tissue manufacturing and distribution company providing high-quality paper products.",
      icon: (
        <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      image: "/images/services/manufacturing.jpg",
      link: "/services/freshfold",
    },
    {
      id: 3,
      title: "Usman Solar",
      description: "Comprehensive solar energy solutions for residential, commercial, and industrial sectors.",
      icon: (
        <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/images/services/energy-detail.jpg",
      link: "/services/usmansolar",
    },
    {
      id: 4,
      title: "Cicon",
      description: "Country International College of Nursing (CICON) is a premier nursing education institution under the Sardar Group of Companies, dedicated to training the next generation of healthcare professionals. ",
      icon: (
        <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      image: "/images/services/cicon.jpg",
      link: "/services/cicon",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };
  
  const iconAnimationVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { rotate: 5, scale: 1.1, transition: { duration: 0.3, yoyo: Infinity, repeatDelay: 0.5 } }
  };

  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden" ref={sectionRef}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative"
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary/5 dark:bg-secondary/10 z-0"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 z-0"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4"
            variants={titleVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(234, 179, 8, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            Our Companies
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6"
            variants={titleVariants}
          >
            Featured Businesses
          </motion.h2>
          
          <motion.div 
            className="mx-auto max-w-3xl"
            variants={titleVariants}
          >
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore some of our key businesses across multiple industries delivering excellence and innovation
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10 h-1 bg-secondary mx-auto rounded-full"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer"
            >
              {/* Service Image with Parallax Effect */}
              <div className="relative h-56 overflow-hidden">
                <motion.div 
                  className="absolute inset-0"
                  animate={{ 
                    scale: hoveredService === service.id ? 1.1 : 1,
                    y: hoveredService === service.id ? -10 : 0
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
                
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"
                  initial={{ opacity: 0.7 }}
                  animate={{ 
                    opacity: hoveredService === service.id ? 0.9 : 0.7 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Service Title on Image */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 5, opacity: 0.9 }}
                  animate={{ 
                    y: hoveredService === service.id ? 0 : 5,
                    opacity: hoveredService === service.id ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </motion.div>
              </div>
              
              {/* Service Icon - Animated on hover */}
              <motion.div 
                className="absolute top-0 right-0 bg-white dark:bg-gray-700 p-4 rounded-bl-xl shadow-md"
                variants={iconAnimationVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div 
                  className="text-primary dark:text-secondary"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
              
              {/* Service Content */}
              <div className="p-6">
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6 mt-2"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: hoveredService === service.id ? 1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-secondary font-bold py-2 px-4 rounded-md border-2 border-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <motion.svg
                      className="ml-2 h-4 w-4"
                      animate={{ x: hoveredService === service.id ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </div>
              
              {/* Hover effect shine overlay */}
              <motion.div 
                className="absolute inset-0 bg-white pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredService === service.id ? [0, 0.1, 0] : 0,
                  left: hoveredService === service.id ? ["-100%", "100%", "100%"] : "-100%"
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: 0
                }}
                style={{
                  background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/services" 
              className="relative overflow-hidden bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 dark:text-primary text-white py-4 px-10 rounded-md font-bold transition-all duration-300 hover:shadow-xl inline-flex items-center group"
            >
              <motion.span 
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                View All Companies
              </motion.span>
              
              <motion.svg 
                className="ml-2 h-5 w-5 relative z-10" 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
              
              <motion.span 
                className="absolute inset-0 bg-secondary dark:bg-primary"
                initial={{ x: "-100%", opacity: 0.7 }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 