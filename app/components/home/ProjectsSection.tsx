"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "construction", label: "Construction" },
    { id: "real-estate", label: "Real Estate" },
    { id: "energy", label: "Energy" },
  ];

  const projects = [
    {
      id: 1,
      title: "Taj Residencia",
      category: "real-estate",
      description: "A luxurious residential development in the heart of the city, offering a unique blend of modern architecture and traditional design.",
      image: "/images/projects/taj-residencia.jpg",
      link: "/projects/tajresidencia",
    },
    {
      id: 2,
      title: "Sardar Heights",
      category: "real-estate",
      description: "Luxury apartment complex in the heart of Islamabad",
      image: "/images/projects/project-2.jpg",
      link: "/projects/sardar-heights",
    },
    {
      id: 3,
      title: "Islamabad Highway",
      category: "construction",
      description: "Major infrastructure development connecting two major cities",
      image: "/images/projects/project-3.jpg",
      link: "/projects/lahore-islamabad-highway",
    },
    {
      id: 4,
      title: "Solar Power Plants",
      category: "energy",
      description: "50MW solar power generation facility in Islamabad",
      image: "/images/projects/project-4.jpg",
      link: "/projects/solar-power-plant",
    },
    {
      id: 5,
      title: "SGC Business Tower",
      category: "real-estate",
      description: "Modern office complex with state-of-the-art facilities",
      image: "/images/projects/project-5.jpg",
      link: "/projects/sgc-business-tower",
    },
    {
      id: 6,
      title: "Wind Energy Farm",
      category: "energy",
      description: "Renewable energy project with 25 wind turbines",
      image: "/images/projects/project-6.jpg",
      link: "/projects/wind-energy-farm",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);
    
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const filterContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };
  
  const filterButtonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    }
  };
  
  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      } 
    }),
    hover: { 
      y: -15,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      } 
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full -z-10"
          initial={{ scale: 0, x: 100 }}
          animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: 100 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -z-10"
          initial={{ scale: 0, x: -100 }}
          animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: -100 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2 inline-block"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            Our Portfolio
          </motion.span>
          
          <motion.h3 
            className="section-title text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h3>
          
          <motion.p 
            className="section-subtitle text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our diverse portfolio of successful projects across multiple sectors
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={filterContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={filterButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <motion.span
                animate={{ 
                  scale: activeFilter === filter.id ? [1, 1.2, 1] : 1 
                }}
                transition={{ 
                  duration: 0.5, 
                  times: [0, 0.5, 1],
                  ease: "easeInOut" 
                }}
              >
                {filter.label}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={projectCardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredProject === project.id ? 0 : 20,
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.p 
                        className="uppercase text-xs font-semibold tracking-wider mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {filters.find((f) => f.id === project.category)?.label}
                      </motion.p>
                      <motion.h4 
                        className="text-xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h4>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <motion.h4 
                    className="text-xl font-bold text-primary mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {project.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={project.link} 
                      className="inline-flex items-center text-secondary font-medium group"
                    >
                      <span className="group-hover:underline">View Project</span>
                      <motion.svg
                        className="ml-2 h-4 w-4"
                        animate={{ 
                          x: hoveredProject === project.id ? 5 : 0 
                        }}
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
                
                {/* Corner Decoration */}
                <motion.div
                  className="absolute top-0 left-0 w-16 h-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L60 0L0 60L0 0Z" fill={project.category === 'construction' ? '#FCD34D' : project.category === 'real-estate' ? '#60A5FA' : '#34D399'} fillOpacity="0.2"/>
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show loading animation when filter changes */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="flex justify-center items-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-gray-500">Loading projects...</p>
            </div>
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
        >
          <Link 
            href="/projects" 
            className="relative overflow-hidden btn-primary inline-flex items-center group"
          >
            <span className="relative z-10">View All Projects</span>
            <motion.span 
              className="absolute inset-0 bg-secondary"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.svg 
              className="ml-2 h-5 w-5 relative z-10" 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
} 