"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

// Particle component for background effects
const Particles = ({ count = 100, theme }) => {
  const isDark = theme === "dark";
  
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            isDark ? "bg-white" : "bg-primary"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.3,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            opacity: [Math.random() * 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  const { theme } = useTheme();
  
  // Parallax effect values
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  
  const slides = [
    {
      id: 1,
      title: "Building the Future",
      subtitle: "Leading the industry with innovative solutions and exceptional service",
      image: "/images/hero/hero-1.jpg",
      cta: "/contact",
      ctaText: "Start a Project",
    },
    {
      id: 2,
      title: "Excellence in Construction",
      subtitle: "Creating sustainable landmarks that stand the test of time",
      image: "/images/hero/hero-2.jpg",
      cta: "/services",
      ctaText: "Our Services",
    },
    {
      id: 3,
      title: "Empowering Pakistan's Progress",
      subtitle: "From construction to clean energy, we lead innovation across industries",
      image: "/images/hero/hero-3.jpg",
      cta: "/about",
      ctaText: "Learn More",
    },
  ];


  // const slides = [
  //   {
  //     id: 1,
  //     title: "Empowering Pakistan's Progress",
  //     subtitle: "From construction to clean energy, we lead innovation across industries",
  //     image: "/images/hero/sgc-1.jpg",
  //     cta: "/about",
  //     ctaText: "Discover SGC",
  //   },
  //   {
  //     id: 2,
  //     title: "Shaping Tomorrow's Communities",
  //     subtitle: "Real estate, smart living, and infrastructure with Taj Residencia & Sardar Builders",
  //     image: "/images/hero/sgc-2.jpg",
  //     cta: "/taj-residencia",
  //     ctaText: "Explore Projects",
  //   },
  //   {
  //     id: 3,
  //     title: "Powering the Future",
  //     subtitle: "Clean, efficient, and scalable solar energy solutions by Usman Solar",
  //     image: "/images/hero/sgc-3.jpg",
  //     cta: "/usman-solar",
  //     ctaText: "Go Solar",
  //   },
  //   {
  //     id: 4,
  //     title: "Innovating Everyday Essentials",
  //     subtitle: "Manufacturing quality tissue products for homes and businesses with Fresh Fold",
  //     image: "/images/hero/sgc-4.jpg",
  //     cta: "/fresh-fold",
  //     ctaText: "View Products",
  //   },
  //   {
  //     id: 5,
  //     title: "Educating for a Brighter Future",
  //     subtitle: "CICON, TIGES, and The Tenacious – transforming education across disciplines",
  //     image: "/images/hero/sgc-5.jpg",
  //     cta: "/education",
  //     ctaText: "Visit Academics",
  //   },
  //   {
  //     id: 6,
  //     title: "Driving Innovation in Mobility",
  //     subtitle: "Ride with ease across Pakistan using TXY – the next-gen ride-hailing platform",
  //     image: "/images/hero/sgc-6.jpg",
  //     cta: "/txy",
  //     ctaText: "Ride Now",
  //   }
  // ];
  



  // Auto-rotate slides
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  // Handle manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsPaused(true);
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Content animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -40,
      transition: { duration: 0.5, ease: "easeIn" }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    }
  };
  //slider remain when user hover on hero cta buttons



  return (
    <motion.div 
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      style={{ opacity }}
    >
      {/* Dynamic particles background */}
      <Particles count={50} theme={theme} />
      
      {/* Hero content slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with parallax */}
          <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              quality={90}
              style={{ objectFit: "cover" }}
              priority={true}
              className="scale-105"
            />
            
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/40"></div>
            
            {/* Animated overlay pattern for texture */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
              </svg>
          </div>
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex items-center z-10">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
              <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="inline-block mb-6"
                >
                  <span className="inline-flex items-center px-4 py-1 bg-secondary text-primary rounded-full text-sm font-semibold tracking-wider shadow-lg">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      className="mr-2 w-2 h-2 bg-primary rounded-full"
                    ></motion.span>
                  Sardar Group of Companies
                </span>
                </motion.div>
                
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={`title-${currentSlide}`}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    <span className="block">{slides[currentSlide].title}</span>
                  </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p 
                    key={`subtitle-${currentSlide}`}
                    variants={subtitleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-xl md:text-2xl text-white opacity-90 mb-10 leading-relaxed"
                  >
                  {slides[currentSlide].subtitle}
                  </motion.p>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`buttons-${currentSlide}`}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-wrap gap-6"
                  >
                    <motion.div whileHover="hover" variants={buttonVariants}>
                      <Link
                        href={slides[currentSlide].cta}
                        className="group bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-md font-bold transition-all duration-500 flex items-center shadow-[0_5px_15px_rgba(212,175,55,0.3)] overflow-hidden relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        {/* Button text */}
                        <span className="relative z-10">{slides[currentSlide].ctaText}</span>
                        
                        {/* Button icon with animation */}
                        <svg 
                          className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                        
                        {/* Button shine animation */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                  </Link>
                    </motion.div>
                    
                    <motion.div whileHover="hover" variants={buttonVariants}>
                  <Link
                    href="/projects"
                        className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-md font-bold hover:bg-white/20 transition-all duration-300 flex items-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                  >
                        <span>View Our Projects</span>
                        <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l5-5m0 0l-5-5m5 5H4" />
                    </svg>
                  </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Enhanced */}
      <motion.button 
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 glass-bg text-white p-3 rounded-full transition-all duration-300 z-30 hover:scale-110"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button 
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 glass-bg text-white p-3 rounded-full transition-all duration-300 z-30 hover:scale-110"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex space-x-3 glass-bg rounded-full px-6 py-3"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className="transition-all duration-300 relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`w-3 h-3 rounded-full bg-white/50 hover:bg-white/80`}
                whileHover={{ scale: 1.2 }}
                animate={{ 
                  scale: index === currentSlide ? [1, 1.2, 1] : 1,
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: index === currentSlide ? Infinity : 0,
                  repeatDelay: 1
                }}
              />
              {index === currentSlide && (
                <motion.div
                  layoutId="activeSlideIndicator"
                  className="absolute inset-0 bg-secondary rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{ width: '12px', height: '12px', top: '0px', left: '0px' }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-6 left-0 right-0 -translate-x-1/2 z-20 text-white flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.span 
          className="text-xs uppercase tracking-widest mb-2 opacity-80"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 