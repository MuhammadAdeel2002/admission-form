import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/shared/Breadcrumb";

export default function TigesService() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/education-tiges.jpg"
            alt="TIGES - Integrity Global Education System"
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
                TIGES
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Integrity Global Education System - Empowering minds through quality education
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#programs" 
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  Our Programs
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all"
                >
                  Apply Now
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
                  src="/images/services/education-tiges-about.jpg"
                  alt="About TIGES"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">About TIGES</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                TIGES (Integrity Global Education System) is a premier educational institution under the Sardar Group of Companies, committed to providing world-class education that nurtures intellectual growth, character development, and global citizenship.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our state-of-the-art campus features modern classrooms, advanced laboratories, sports facilities, and digital learning resources. We follow an innovative curriculum that combines academic excellence with practical skills development, preparing students for success in higher education and professional careers.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                At TIGES, we believe in fostering a culture of integrity, innovation, and inclusivity. Our dedicated faculty members are committed to providing personalized attention and guidance to help each student reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Offered */}
      <section id="programs" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Academic Excellence</h2>
            <h3 className="section-title">Our Educational Programs</h3>
            <p className="section-subtitle">
              Comprehensive educational programs designed to prepare students for future success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Primary Education</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A nurturing environment for young learners to develop foundational skills and curiosity.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Early childhood development</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic literacy and numeracy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Creative and physical activities</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-all text-sm">
                Program Details
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Secondary Education</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive academic program preparing students for higher education and beyond.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced academic subjects</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>College preparation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Career counseling</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-all text-sm">
                Program Details
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Specialized Programs</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced courses and enrichment programs for specialized learning.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>STEM education</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Arts and humanities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sports and athletics</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-all text-sm">
                Program Details
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Campus Infrastructure</h2>
            <h3 className="section-title">World-Class Facilities</h3>
            <p className="section-subtitle">
              Our modern campus provides the perfect environment for learning and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Modern Classrooms</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Spacious, well-equipped classrooms with smart technology and comfortable learning environments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Digital Library</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Extensive collection of books, journals, and online resources for research and learning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Science Labs</h4>
              <p className="text-gray-600 dark:text-gray-300">
                State-of-the-art laboratories for physics, chemistry, and biology experiments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Computer Labs</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Modern computer facilities with high-speed internet and educational software.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Sports Complex</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive sports facilities including indoor and outdoor courts, fields, and swimming pool.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Student Center</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Modern facilities for student activities, clubs, and social gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Faculty */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Expert Educators</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Faculty</h3>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Learn from experienced educators and subject matter experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-secondary">
                  <Image
                    src="/images/team/team-1.jpg"
                    alt="Professor Name"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Dr. Sarah Ahmed</h4>
                  <p className="text-white/80">Principal</p>
                </div>
              </div>
              <p className="text-white/80">
                With over 20 years of experience in education, Dr. Ahmed leads our institution with a vision for academic excellence and student success.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-secondary">
                  <Image
                    src="/images/team/team-2.jpg"
                    alt="Professor Name"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Prof. Imran Khan</h4>
                  <p className="text-white/80">Head of Science Department</p>
                </div>
              </div>
              <p className="text-white/80">
                A specialist in STEM education, Prof. Khan brings innovative teaching methods and practical experience to our science programs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-secondary">
                  <Image
                    src="/images/team/team-3.jpg"
                    alt="Professor Name"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Dr. Fatima Malik</h4>
                  <p className="text-white/80">Head of Humanities</p>
                </div>
              </div>
              <p className="text-white/80">
                Dr. Malik oversees our humanities programs, bringing her expertise in literature and cultural studies to enrich student learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-6">Begin Your Educational Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Take the first step towards academic excellence. Apply today for our educational programs or contact us for more information.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Student Name *
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
                        Parent's Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        placeholder="parent@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Contact Number *
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
                    <label htmlFor="program" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Program of Interest *
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select a program</option>
                      <option value="primary">Primary Education</option>
                      <option value="secondary">Secondary Education</option>
                      <option value="specialized">Specialized Programs</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                      placeholder="Any specific questions or information you'd like to know..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
              
              <div className="md:w-1/2 relative min-h-[400px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/services/education-tiges-contact.jpg"
                    alt="TIGES Education"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-primary/30 dark:bg-primary/50"></div>
                </div>
                <div className="relative p-8 md:p-12 lg:p-16 z-10 h-full flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-2xl font-bold text-white mb-4">Why Choose TIGES?</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Nationally recognized curriculum</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">State-of-the-art facilities</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Experienced faculty members</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Individual attention and support</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Holistic development programs</span>
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