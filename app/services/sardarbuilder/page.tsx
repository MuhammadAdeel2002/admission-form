import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/shared/Breadcrumb";

export default function SardarBuilderService() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/construction.jpg"
            alt="Sardar Builder"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center z-10 pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Sardar Builder
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Premier construction service provider specializing in residential, commercial, and industrial projects
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#services" 
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Our Services
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all"
                >
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Breadcrumb />
      
      {/* About Service */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/construction-about.jpg"
                  alt="About Sardar Builder"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">About Sardar Builder</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Sardar Builder is SGC's premier construction division, with decades of experience delivering high-quality construction projects across Pakistan. We specialize in residential, commercial, and industrial construction, with a reputation for excellence, reliability, and innovation.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team of experienced architects, engineers, and construction professionals work collaboratively to bring your vision to life, from initial concept to final completion. We pride ourselves on attention to detail, quality craftsmanship, and adherence to timelines and budgets.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With Sardar Builder, you can expect transparent communication, personalized service, and a commitment to exceeding your expectations at every stage of the construction process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Offered */}
      <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Expertise</h2>
            <h3 className="section-title">Construction Services</h3>
            <p className="section-subtitle">
              Comprehensive construction solutions tailored to meet your specific needs and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Residential Construction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Custom homes, apartment buildings, and housing societies built to the highest standards of quality and comfort.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Commercial Construction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Office buildings, retail spaces, hotels, and mixed-use developments designed for functionality and aesthetic appeal.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Industrial Construction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Factories, warehouses, and production facilities engineered for efficiency, safety, and productivity.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Infrastructure Development</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Roads, bridges, and utilities construction that forms the backbone of urban and rural development.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Renovation & Remodeling</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Transformative renovations and remodeling services that breathe new life into existing structures.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Design-Build Services</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Integrated design and construction services that streamline the building process from concept to completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Approach</h2>
            <h3 className="section-title">Construction Process</h3>
            <p className="section-subtitle">
              Our systematic approach ensures successful project delivery from initial concept to final handover
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">1</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Consultation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Understanding your vision, requirements, and budget constraints.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">2</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Design & Planning</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Architectural design, engineering plans, and project scheduling.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">3</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Pre-construction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Permits, resource allocation, and site preparation activities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">4</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Construction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Building execution with quality control and progress monitoring.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">5</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Handover</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Final inspection, documentation, and project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Showcase */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured Projects</h3>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              A glimpse of our diverse construction portfolio across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/projects/project-1.jpg"
                  alt="Taj Residensia"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">Taj Residensia</h4>
                <p className="text-white/80 mb-4">
                  Luxury residential complex with premium apartments and world-class amenities.
                </p>
                <Link href="/projects/taj-residensia" className="text-secondary hover:text-secondary/80 transition-colors font-medium flex items-center">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/projects/project-5.jpg"
                  alt="Sardar Hospital"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">Sardar Hospital</h4>
                <p className="text-white/80 mb-4">
                  Modern healthcare facility with specialized departments and cutting-edge medical equipment.
                </p>
                <Link href="/projects/sardar-hospital" className="text-secondary hover:text-secondary/80 transition-colors font-medium flex items-center">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/projects/project-8.jpg"
                  alt="Sardar Industrial Park"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">Sardar Industrial Park</h4>
                <p className="text-white/80 mb-4">
                  Large-scale industrial complex with manufacturing facilities and logistics infrastructure.
                </p>
                <Link href="/projects/sardar-industrial-park" className="text-secondary hover:text-secondary/80 transition-colors font-medium flex items-center">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-6">Start Your Construction Project</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Contact our team to discuss your construction needs and get a personalized consultation. We're ready to bring your vision to life.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="industrial">Industrial Construction</option>
                      <option value="infrastructure">Infrastructure Development</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="design-build">Design-Build Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                      placeholder="Tell us about your project, requirements, and timeframe..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
              
              <div className="md:w-1/2 relative min-h-[400px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/services/construction-contact.jpg"
                    alt="Construction Services"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-primary/30 dark:bg-primary/50"></div>
                </div>
                <div className="relative p-8 md:p-12 lg:p-16 z-10 h-full flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-2xl font-bold text-white mb-4">Why Choose Sardar Builder?</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Over 20 years of construction experience</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Team of certified professionals</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Transparent pricing and detailed proposals</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Quality materials and craftsmanship</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">On-time project completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 