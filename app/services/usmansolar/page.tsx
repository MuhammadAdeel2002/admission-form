import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/shared/Breadcrumb";

export default function UsmanSolarService() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/energy-detail.jpg"
            alt="Usman Solar Energy Solutions"
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
                Usman Solar
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Sustainable energy solutions for residential, commercial and industrial sectors
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#solutions" 
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Our Solutions
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
                  src="/images/services/solar-about.jpg"
                  alt="About Usman Solar"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">About Usman Solar</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Usman Solar is SGC's renewable energy division dedicated to providing comprehensive solar energy solutions. We specialize in designing, installing, and maintaining solar power systems that reduce energy costs while promoting environmental sustainability.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team of experienced engineers and technicians works with clients to develop customized solar solutions that meet their specific energy requirements, whether for residential homes, commercial buildings, or large-scale industrial facilities.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With a commitment to quality and innovation, Usman Solar has established itself as a trusted leader in Pakistan's renewable energy sector, helping the country move towards a cleaner and more sustainable energy future.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Offered */}
      <section id="solutions" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Solutions</h2>
            <h3 className="section-title">Solar Energy Solutions</h3>
            <p className="section-subtitle">
              Comprehensive solar energy solutions tailored to your specific needs and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Residential Solar</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Home solar power systems designed to reduce electricity bills and provide energy independence for families.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Commercial Solar</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Power solutions for businesses and commercial properties that reduce operational costs and enhance sustainability.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Industrial Solar</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Large-scale solar installations for factories and industrial facilities with high energy demands.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Solar Net Metering</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Systems that allow you to sell excess power back to the grid, maximizing your return on investment.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Hybrid Systems</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Combined solar and battery storage solutions for continuous power supply, even during grid outages.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Maintenance Services</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Regular maintenance and monitoring to ensure optimal performance of your solar power system.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Process</h2>
            <h3 className="section-title">How We Work</h3>
            <p className="section-subtitle">
              Our comprehensive approach to solar energy solutions ensures optimal results for each project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">1</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Consultation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Initial assessment of your energy needs and site evaluation to determine feasibility.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">2</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Design & Planning</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Custom system design based on energy requirements, sun exposure, and available space.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">3</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Installation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Professional installation by our expert team, ensuring safety and efficiency.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">4</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Monitoring & Support</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Ongoing monitoring, maintenance, and customer support to maximize system performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Advantages</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Benefits of Solar Energy</h3>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Why switching to solar power is a smart investment for your home or business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Cost Savings</h4>
              <p className="text-white/80">
                Significant reduction in electricity bills and protection against rising energy costs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Environmental Impact</h4>
              <p className="text-white/80">
                Clean, renewable energy that reduces carbon footprint and environmental pollution.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Energy Security</h4>
              <p className="text-white/80">
                Greater independence from the grid with reliable power even during outages.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Increased Property Value</h4>
              <p className="text-white/80">
                Solar installations typically increase property values and marketability.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Low Maintenance</h4>
              <p className="text-white/80">
                Solar panels require minimal maintenance with long lifespans of 25+ years.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Government Incentives</h4>
              <p className="text-white/80">
                Take advantage of various tax credits and incentives for solar adoption.
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
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-6">Ready to Switch to Solar?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Contact our team for a free consultation and energy assessment. Discover how much you could save with solar power.
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
                    <label htmlFor="interest" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="residential">Residential Solar</option>
                      <option value="commercial">Commercial Solar</option>
                      <option value="industrial">Industrial Solar</option>
                      <option value="other">Other Solutions</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                      placeholder="Tell us about your energy needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Request Free Consultation
                  </button>
                </form>
              </div>
              
              <div className="md:w-1/2 relative min-h-[400px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/services/solar-contact.jpg"
                    alt="Solar Energy Consultation"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-primary/30 dark:bg-primary/50"></div>
                </div>
                <div className="relative p-8 md:p-12 lg:p-16 z-10 h-full flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-2xl font-bold text-white mb-4">Why Choose Usman Solar?</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Expert engineering and installation</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">High-quality, tier-1 solar equipment</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Comprehensive warranties and after-sales support</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Customized solutions for your specific needs</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-6 w-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white">Financing options available</span>
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