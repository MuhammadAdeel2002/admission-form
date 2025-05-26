"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      position: "CEO, Khan Properties",
      testimonial: "Working with SGC on our commercial development project was an exceptional experience. Their professionalism, attention to detail, and commitment to quality exceeded our expectations. The project was delivered on time and within budget.",
      image: "/images/testimonials/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      position: "Director, GreenPower Solutions",
      testimonial: "SGC's expertise in energy sector projects is unmatched. Their team worked diligently to understand our specific requirements and delivered a comprehensive solution that has significantly improved our operational efficiency.",
      image: "/images/testimonials/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Faisal Malik",
      position: "Managing Director, Global Imports",
      testimonial: "As an international trading partner, SGC has consistently demonstrated reliability and excellence. Their understanding of global markets and logistics has made them an invaluable partner in our supply chain operations.",
      image: "/images/testimonials/testimonial-3.jpg",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Reduced from 8000 to 5000 for faster rotation
    return () => clearInterval(timer);
  }, [testimonials.length]); // Removed isHoveringNav dependency

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier curve for smooth deceleration
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }
    })
  };
  
  const quoteIconVariants = {
    hidden: { opacity: 0, scale: 0.3, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(234, 179, 8, 0.2)",
        "0 0 0 10px rgba(234, 179, 8, 0)",
        "0 0 0 0 rgba(234, 179, 8, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };
  
  const buttonVariants = {
    initial: { opacity: 0.8, scale: 1 },
    hover: { 
      opacity: 1, 
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };
  
  // Track the direction of testimonial change
  const [[page, direction], setPage] = useState([activeIndex, 0]);

  // Update page when activeIndex changes
  useEffect(() => {
    const newDirection = page > activeIndex ? -1 : 1;
    setPage([activeIndex, newDirection]);
  }, [activeIndex, page]);

  return (
    <motion.section 
      className="py-16 md:py-24 bg-primary text-white overflow-hidden"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background decoration elements */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-white/5 -z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: [0, 30, 0],
          opacity: 0.6,
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-secondary/10 -z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: [0, -20, 0],
          opacity: 0.7,
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Testimonials
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h3>
          
          <motion.p 
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Hear from our satisfied clients about their experiences working with Sardar Group of Companies
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[280px] md:min-h-[240px]">
            {/* Testimonials */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 absolute inset-0"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <motion.div 
                    className="mb-6 text-secondary"
                    variants={quoteIconVariants}
                  >
                    <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.p 
                    className="text-white text-lg md:text-xl mb-8 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    "{testimonials[page].testimonial}"
                  </motion.p>

                  {/* Client Info */}
                  <div className="flex flex-col items-center">
                    {/* Client Photo */}
                    <motion.div 
                      className="relative h-16 w-16 rounded-full overflow-hidden mb-4 border-2 border-secondary"
                      variants={imageVariants}
                      animate={["visible", "pulse"]}
                    >
                      <Image
                        src={testimonials[page].image}
                        alt={testimonials[page].name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </motion.div>

                    {/* Client Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <motion.h4 
                        className="text-white font-bold text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        {testimonials[page].name}
                      </motion.h4>
                      
                      <motion.p 
                        className="text-white/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        {testimonials[page].position}
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white"
              aria-label="Previous testimonial"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 text-white"
              aria-label="Next testimonial"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0.6 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0.6,
                  scale: index === activeIndex ? 1.1 : 1,
                  width: index === activeIndex ? 32 : 12
                }}
                whileHover={{ opacity: 0.9, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-secondary"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 