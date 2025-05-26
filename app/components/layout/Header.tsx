"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const headerRef = useRef<HTMLDivElement>(null);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on current path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Board of Directors", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Gradient background overlay for non-scrolled state */}
      {!isScrolled && (
        <div className="fixed top-0 left-0 right-0 h-32 z-40 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none" />
      )}
      
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo with enhanced visualization */}
          <Link href="/" className="relative z-50 flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative transition-all duration-500 ${
                isScrolled ? "h-16 w-52" : "h-24 w-64"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-start">
                <Image
                  src="/images/logo/sgc-logo.png"
                  alt="SGC Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  className="transition-all duration-500"
                />
              </div>
              
              {/* Logo glow effect for non-scrolled state */}
              {!isScrolled && (
                <div className="absolute -inset-1 bg-secondary/20 rounded-full filter blur-xl opacity-70 animate-pulse" />
              )}
            </motion.div>
            
            {/* Tagline below logo - visible in non-scrolled state */}
            {!isScrolled && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hidden md:block absolute -bottom-5 left-1 text-secondary text-xs font-bold tracking-wider ml-14 
                "
              >
                BUILDING THE FUTURE
              </motion.p>
            )}
          </Link>

          {/* Desktop Navigation - moved further to accommodate larger logo */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative mx-1 px-4 py-2 font-medium transition-colors duration-200 hover:text-secondary ${
                    isScrolled ? "text-primary dark:text-white" : "text-white"
                  } ${activeLink === link.href ? "font-bold" : ""}`}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              className="ml-4"
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              className="ml-4"
            >
              <Link 
                href="/contact" 
                className={`relative overflow-hidden group px-6 py-3 rounded-full transition-all duration-300 
                ${isScrolled 
                  ? "bg-primary dark:bg-secondary text-white dark:text-primary hover:bg-secondary hover:text-primary dark:hover:bg-white" 
                  : "bg-secondary text-primary hover:bg-white hover:text-primary"
                } font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1`}
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-secondary via-secondary to-secondary-light"></span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-3 z-50">
            <div className={isScrolled || mobileMenuOpen ? "" : "bg-gray-800/40 rounded-md backdrop-blur-sm"}>
              <ThemeToggle />
            </div>
            <button
              className={`text-primary z-50 p-2 ${isScrolled ? "" : "bg-gray-800/40 rounded-md backdrop-blur-sm"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 transform transition-all duration-300 bg-current ${
                  isScrolled ? "bg-primary dark:bg-white" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}></span>
                
                <span className={`absolute h-0.5 w-6 bg-current ${
                  isScrolled ? "bg-primary dark:bg-white" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}></span>
                
                <span className={`absolute h-0.5 w-6 transform transition-all duration-300 bg-current ${
                  isScrolled ? "bg-primary dark:bg-white" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fullscreen overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 bg-primary/95 dark:bg-gray-900/95 lg:hidden z-40 flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary dark:from-gray-900 to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary dark:from-gray-900 to-transparent opacity-50" />
              
              <motion.nav 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex flex-col items-center space-y-6 py-4 px-6 w-full max-w-md"
              >
                {/* Larger centered logo in mobile menu */}
                <div className="w-40 h-40 rounded-full bg-secondary/20 mb-8 p-1">
                  <div className="w-full h-full rounded-full border-2 border-secondary/70 flex items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/logo/sgc-logo.png"
                        alt="SGC Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  {/* Decorative rays around logo */}
                  <div className="absolute -inset-4 border-2 border-dashed border-secondary/30 rounded-full -z-10 animate-spin-slow" style={{ animationDuration: '30s' }} />
                </div>
                
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className="block text-center text-2xl font-bold text-white hover:text-secondary transition-colors duration-200 py-3 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + navLinks.length * 0.1, duration: 0.3 }}
                  className="mt-8 w-full"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-secondary hover:bg-secondary/90 text-primary font-bold py-4 rounded-lg shadow-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </motion.div>
                
                {/* Social Media Icons */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + navLinks.length * 0.1, duration: 0.3 }}
                  className="flex space-x-6 mt-8"
                >
                  <a href="#" className="text-white hover:text-secondary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-secondary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-secondary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}