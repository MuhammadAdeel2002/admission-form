"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Here you would typically send the form data to a server
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const formFieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: custom * 0.1,
        ease: "easeOut" 
      }
    })
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: { duration: 1.5, repeat: Infinity }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 md:py-24 relative overflow-hidden" 
      id="contact" 
      ref={sectionRef}
    >
      {/* Background decoration elements */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.8 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.8 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
    
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          
          <motion.h3 
            className="section-title text-center"
            variants={itemVariants}
          >
            Contact Us
          </motion.h3>
          
          <motion.p 
            className="section-subtitle text-center"
            variants={itemVariants}
          >
            Have questions or want to discuss a project? We'd love to hear from you.
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-green-100 text-green-700 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, times: [0, 0.6, 1] }}
                  >
                    <motion.svg 
                      className="h-10 w-10" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      />
                    </motion.svg>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-2xl font-bold text-primary mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Thank You!
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Your message has been successfully sent. We will contact you very soon!
                  </motion.p>
                  
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h4 
                    className="text-2xl font-bold text-primary mb-6"
                    variants={itemVariants}
                  >
                    Send us a message
                  </motion.h4>
                  
                  <AnimatePresence>
                    {error && (
                      <motion.div 
                        className="bg-red-50 text-red-600 p-4 mb-6 rounded-md"
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      variants={formFieldVariants}
                      custom={0}
                    >
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Smith"
                        whileFocus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)" }}
                      />
                    </motion.div>
                    
                    <motion.div
                      variants={formFieldVariants}
                      custom={1}
                    >
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                        whileFocus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)" }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      variants={formFieldVariants}
                      custom={2}
                    >
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+92-345-6677885"
                        whileFocus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)" }}
                      />
                    </motion.div>
                    
                    <motion.div
                      variants={formFieldVariants}
                      custom={3}
                    >
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject *
                      </label>
                      <motion.select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        whileFocus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)" }}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Consultation">Project Consultation</option>
                        <option value="Business Partnership">Business Partnership</option>
                        <option value="Career Opportunity">Career Opportunity</option>
                        <option value="Other">Other</option>
                      </motion.select>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mb-6"
                    variants={formFieldVariants}
                    custom={4}
                  >
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us more about your project, requirements, and timeline..."
                      whileFocus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)" }}
                    ></motion.textarea>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    variants={formFieldVariants}
                    custom={5}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary w-full md:w-auto ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                      whileHover={!isSubmitting ? { scale: 1.05 } : undefined}
                      whileTap={!isSubmitting ? { scale: 0.95 } : undefined}
                      animate={isSubmitting ? { scale: [1, 0.98, 1], transition: { duration: 1.5, repeat: Infinity } } : {}}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-primary rounded-lg shadow-lg p-8 text-white mb-8"
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <motion.h4 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Contact Information
              </motion.h4>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)", scale: 1.1 }}
                  >
                    <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h5 className="text-lg font-semibold mb-1">Visit Us</h5>
                    <p className="text-white/80">
                      1708, Tower A, The Centaurus,<br />
                      Islamabad, Pakistan
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)", scale: 1.1 }}
                  >
                    <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h5 className="text-lg font-semibold mb-1">Call Us</h5>
                    <p className="text-white/80">+92-345-6677885</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)", scale: 1.1 }}
                  >
                    <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h5 className="text-lg font-semibold mb-1">Email Us</h5>
                    <p className="text-white/80">info@sgc.international</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)", scale: 1.1 }}
                  >
                    <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h5 className="text-lg font-semibold mb-1">Working Hours</h5>
                    <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/80">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="relative h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1658.1841529545853!2d73.05187738388838!3d33.70815029486188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe2067dc1e33%3A0x8fc0f21d006f05e7!2sThe%20Centaurus%20Islamabad!5e0!3m2!1sen!2s!4v1679949222909!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 