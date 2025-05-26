import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/shared/Breadcrumb";

export default function FreshFoldService() {
  // Sample product catalog
  const products = [
    {
      id: 1,
      name: "Premium Toilet Tissue",
      description: "Soft, absorbent toilet tissue with premium quality for enhanced comfort and durability.",
      features: ["3-ply soft texture", "Biodegradable materials", "Elegant packaging", "Available in various quantities"],
      image: "/images/services/product-1.jpg"
    },
    {
      id: 2,
      name: "Facial Tissue",
      description: "Ultra-soft facial tissue designed for gentle use with skin-friendly materials.",
      features: ["Extra soft for sensitive skin", "Lotion-infused option", "Compact and family size boxes", "Dermatologically tested"],
      image: "/images/services/product-2.jpg"
    },
    {
      id: 3,
      name: "Kitchen Rolls",
      description: "Heavy-duty kitchen rolls with superior absorbency for effective cleaning and spill management.",
      features: ["Extra absorbent", "Perforated sheets", "Ideal for kitchen spills", "Durable wet strength"],
      image: "/images/services/product-3.jpg"
    },
    {
      id: 4,
      name: "Napkins and Serviettes",
      description: "Elegant napkins for dining and special occasions, available in various designs and colors.",
      features: ["Multiple colors and designs", "Premium embossed options", "Ideal for restaurants", "Custom branding available"],
      image: "/images/services/product-4.jpg"
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/manufacturing.jpg"
            alt="Fresh Fold Tissue Manufacturing"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Fresh Fold
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Premium tissue manufacturing and distribution with a commitment to quality and sustainability
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#products" 
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  View Products
                </a>
                <a 
                  href="#wholesale" 
                  className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all"
                >
                  Wholesale Inquiry
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
                  src="/images/services/freshfold-about.jpg"
                  alt="About Fresh Fold"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">About Fresh Fold</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Fresh Fold is SGC's premier tissue manufacturing and distribution company dedicated to providing high-quality paper products for homes and businesses across the region. With state-of-the-art manufacturing facilities and a commitment to sustainability, we produce a wide range of paper products including toilet tissue, facial tissue, kitchen rolls, and napkins.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our mission is to deliver exceptional paper products while minimizing environmental impact. We use responsibly sourced materials and implement eco-friendly manufacturing processes to reduce our carbon footprint while maintaining the highest standards of quality.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Fresh Fold serves both retail and wholesale markets through an extensive distribution network, ensuring our products are readily available to customers nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Catalog */}
      <section id="products" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Offerings</h2>
            <h3 className="section-title">Product Catalog</h3>
            <p className="section-subtitle">
              Fresh Fold offers a comprehensive range of high-quality tissue products for various needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3">
                  <div className="relative h-full min-h-[200px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="text-xl font-bold text-primary dark:text-white mb-3">{product.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h5>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Looking for customized products or special packaging? We offer custom solutions for corporate clients and special events.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white dark:bg-secondary dark:text-primary px-8 py-3 rounded-md font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all"
            >
              Request Custom Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Distribution Network */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Nationwide Reach</h2>
            <h3 className="section-title">Distribution Network</h3>
            <p className="section-subtitle">
              Fresh Fold's extensive distribution network ensures our products are available throughout the country
            </p>
          </div>
          
          <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/distribution-map.jpg"
              alt="Fresh Fold Distribution Network"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Retail Stores</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our products are available in major supermarkets, convenience stores, and retail chains nationwide, ensuring easy access for individual consumers.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Wholesale Distribution</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We supply businesses, hospitals, hotels, restaurants, and other institutions through our wholesale distribution channels with competitive bulk pricing.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                  <path d="M12 2a4 10 0 00-4 10c0 4.4 1.8 8 4 8s4-3.6 4-8a4 10 0 00-4-10zm0 10c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Direct Online Sales</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Consumers can purchase our products directly through our online store with home delivery options available in major cities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wholesale Section */}
      <section id="wholesale" className="py-16 bg-primary dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Wholesale & Retail Contact</h2>
              <p className="text-white/80 mb-6">
                Fresh Fold offers competitive wholesale pricing for businesses of all sizes. Whether you're a retailer, distributor, or institutional buyer, our dedicated team is ready to assist you with bulk orders and custom requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@sgc.international</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+92-345-6677885</span>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all"
              >
                Contact Wholesale Team
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Wholesale Inquiry Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Contact Person</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                        placeholder="Full name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Products Interested In</label>
                    <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white">
                      <option>All Products</option>
                      <option>Toilet Tissue</option>
                      <option>Facial Tissue</option>
                      <option>Kitchen Rolls</option>
                      <option>Napkins</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none dark:bg-gray-700 dark:text-white"
                      placeholder="Your inquiry details..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white dark:bg-secondary dark:text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Environmental Commitment</h2>
            <h3 className="section-title">Our Sustainability Initiatives</h3>
            <p className="section-subtitle">
              Fresh Fold is committed to sustainable manufacturing practices and minimizing environmental impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Recycled Materials</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We use post-consumer recycled paper in our manufacturing process, reducing the demand for virgin wood pulp and minimizing waste.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Energy Efficiency</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our production facilities utilize energy-efficient technologies and renewable energy sources to reduce our carbon footprint.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Water Conservation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We implement advanced water recycling systems in our manufacturing process to minimize water consumption and waste.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Fresh Fold today for retail or wholesale inquiries and experience the premium quality of our tissue products
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#wholesale" 
              className="bg-primary text-white dark:bg-secondary dark:text-primary px-8 py-3 rounded-md font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all"
            >
              Wholesale Inquiry
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-primary border border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 px-8 py-3 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 