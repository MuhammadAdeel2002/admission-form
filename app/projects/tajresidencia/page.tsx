import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/shared/Breadcrumb";

export default function TajResidenciaService() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/taj-residencia.jpg"
            alt="Taj Residencia Hero"
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
                Taj Residencia
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Premium housing society offering luxury living and modern amenities in Islamabad
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#features" 
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Explore Features
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all"
                >
                  Book a Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumb />
      {/* About Project */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[620px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/1taj-residencia.jpg"
                  alt="About Taj Residencia"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">About Taj Residencia</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Taj Residencia is a premier housing society in Islamabad, offering a blend of luxury, comfort, and modern living. Developed by SGC, it features world-class infrastructure, green spaces, and a secure environment for families.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The project is strategically located with easy access to major city centers, providing residents with convenience and connectivity.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Taj Residencia is committed to delivering a high standard of living with a focus on community, sustainability, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Offered */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Key Features</h2>
            <h3 className="section-title">Luxury Living Redefined</h3>
            <p className="section-subtitle">
              Discover the exceptional amenities and lifestyle offered at Taj Residencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Gated Community</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Secure and peaceful environment with 24/7 surveillance and controlled access.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Modern Infrastructure</h4>
              <p className="text-gray-600 dark:text-gray-300">
                State-of-the-art roads, utilities, and facilities for a comfortable lifestyle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Green Spaces</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful parks, gardens, and recreational areas for families and children.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Commercial Zones</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Dedicated commercial areas for shopping, dining, and business needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Healthcare & Education</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Access to top-tier schools, colleges, and healthcare facilities within the community.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Luxury Villas & Plots</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A range of residential options including luxury villas and various plot sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Why Taj Residencia</h2>
            <h3 className="section-title">Our Promise</h3>
            <p className="section-subtitle">
              Experience a lifestyle of comfort, security, and luxury at Taj Residencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Prime Location</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Ideally situated with easy access to Islamabad and Rawalpindi.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Quality Construction</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Built to the highest standards with premium materials and craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Community Living</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A vibrant, inclusive community with events and activities for all ages.
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
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-6">Book a Visit to Taj Residencia</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Interested in learning more or visiting the site? Contact our team to schedule a tour or request more information about available plots and villas.
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
                        placeholder="Muhammad Adeel"
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
                        placeholder="adeel@example.com"
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
                      Interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="villa">Luxury Villa</option>
                      <option value="plot">Residential Plot</option>
                      <option value="commercial">Commercial Plot</option>
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
                      placeholder="Tell us about your interest, preferred plot size, or any questions..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Book Now
                  </button>
                </form>
              </div>
           
           
              <div className="md:w-1/2 relative min-h-[400px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/services/taj-contactform.jpg"
                    alt="Taj Residensia Interior"
                    fill
                    style={{ objectFit: "contain  ", objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-primary/30 dark:bg-primary/50"></div>
                </div>
                <div className="relative p-8 md:p-12 lg:p-16 z-10 h-full flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-2xl font-bold text-white mb-4">Visit Our Sales Office</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white">Adjacent to CDA Sector I-14 &, I-15, Rawalpindi, Punjab</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-white">051-111-857-857
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white">info@tajpk.com</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white">Open Daily: 9:00 AM - 6:00 PM</span>
                      </li>
                    </ul>
                    
                   
                  </div>
                </div>
              </div>


              {/* <div className="md:w-1/2 relative min-h-[400px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/services/taj-contactform.jpg"
                    alt="Taj Residencia Contact"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  <div className="absolute inset-0 bg-primary/30 dark:bg-primary/50"></div>
                </div>
                <div className="relative p-8 md:p-12 lg:p-20 z-10 h-full flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Sales Office</h4>
                    <p className="text-white/80 mb-2">Adjacent to CDA Sector I-14 &, I-15, Rawalpindi, Punjab</p>
                    <p className="text-white/80">info@tajpk.com</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 