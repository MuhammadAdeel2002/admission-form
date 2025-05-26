import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/shared/Breadcrumb";

export default function TxyService() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/transportation.jpg"
            alt="Txy.co Ride-Hailing Service"
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
                Txy.co
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Modern ride-hailing platform providing convenient and affordable transportation services
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#download" 
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 001 1h12a1 1 0 001-1V9.293a1 1 0 00-.293-.707l-5.5-5.5A1 1 0 0010.5 3h-7a1 1 0 00-1 1v13zm9-10.5v-2l5 5h-5v-3z" clipRule="evenodd" />
                  </svg>
                  Download App
                </a>
                <a 
                  href="#franchise" 
                  className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all"
                >
                  Become a Partner
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
                  src="/images/services/txy-about.jpg"
                  alt="About Txy.co"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">About Txy.co</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Txy.co is SGC's innovative ride-hailing platform designed to revolutionize urban transportation. Similar to InDrive, our service connects riders with drivers through a user-friendly mobile application, offering convenient, safe, and affordable transportation options.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our mission is to make transportation accessible to everyone while creating economic opportunities for drivers. We leverage cutting-edge technology to provide a seamless experience for both riders and drivers, with transparent pricing, real-time tracking, and dedicated customer support.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Txy.co is rapidly expanding its presence across major cities, connecting thousands of riders with reliable transportation daily while empowering drivers to earn a sustainable income.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Offered */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Services</h2>
            <h3 className="section-title">Services Offered</h3>
            <p className="section-subtitle">
              Txy.co offers a range of transportation services to meet various customer needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Standard Rides</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Affordable daily transportation with comfortable vehicles for individual or small group travel.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Premium Service</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Luxury vehicles with professional drivers for business travel and special occasions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Group Transportation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Larger vehicles for group travel, events, and family outings with spacious seating.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Book */}
      <section id="booking" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Easy Process</h2>
            <h3 className="section-title">How to Book a Ride</h3>
            <p className="section-subtitle">
              Booking a ride with Txy.co is simple and convenient through our mobile application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">1</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Download the App</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Get the Txy.co app from Google Play or App Store and create your account.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">2</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Set Your Location</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your pickup and destination locations in the app.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">3</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Confirm Fare</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Review and confirm the transparent fare before booking your ride.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">4</div>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Enjoy Your Ride</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Track your driver's arrival and enjoy a comfortable journey to your destination.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download App */}
      <section id="download" className="py-16 bg-primary dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Download the Txy.co App</h2>
              <p className="text-white/80 mb-8">
                Experience convenient transportation at your fingertips. Download the Txy.co app now and enjoy seamless ride booking, real-time tracking, and secure payment options.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-black/90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0l-5 5c-.39.39-.39 1.023 0 1.414s1.023.39 1.414 0L12 5.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414zM12 18.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l5 5c.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 18.586z" />
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-black/90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.434 1.043c-.292.094-.576.297-.822.562C2.235 2.017 2 2.756 2 3.541v16.918c0 .785.235 1.524.612 1.936.246.265.53.468.822.562l9.492-10.957L3.434 1.043zm1.937.73l8.574 8.908-2.852 3.261-5.722-12.169zm11.371 11.964l-3.408 3.55.004.005c.47-.303.719-.797.934-1.404l2.47-2.151z" />
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/services/txy-app.jpg"
                  alt="Txy.co Mobile App"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Franchise Information */}
      <section id="franchise" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Business Opportunity</h2>
            <h3 className="section-title">Franchise & Partnership</h3>
            <p className="section-subtitle">
              Join Txy.co's expanding network and be part of the transportation revolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-primary dark:text-white mb-4">Franchise Opportunities</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Own and operate a Txy.co franchise in your city or region. Our franchise program provides a proven business model with comprehensive support including marketing, technology, training, and operational guidance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Exclusive territory rights</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive training program</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Marketing and promotional support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Ongoing technical support</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-white dark:bg-secondary dark:text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all"
              >
                Inquire About Franchise
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-primary dark:text-white mb-4">Partnership Programs</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Txy.co offers various partnership opportunities for businesses looking to enhance their transportation services or integrate with our platform.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Corporate transportation solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Hotel and hospitality partnerships</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Event transportation coordination</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">API integration for businesses</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-white dark:bg-secondary dark:text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all"
              >
                Explore Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Download the Txy.co app today or contact our team for business inquiries and partnership opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#download" 
              className="bg-primary text-white dark:bg-secondary dark:text-primary px-8 py-3 rounded-md font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all"
            >
              Download App
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-primary border border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 px-8 py-3 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 