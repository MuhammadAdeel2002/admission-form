import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Taj Residencia",
      description: "Premier housing society near Islamabad offering luxurious residential options in a well-planned community with modern amenities and strategic location advantages.",
      features: [
        "Premium residential plots and houses",
        "Strategically located near Islamabad",
        "Well-designed infrastructure and utilities",
        "Green spaces and recreational areas",
        "Security and community management"
      ],
      image: "/images/services/taj-residencia.jpg",
      link: "/services/tajresidencia",
    },
    
    
    {
      id: 2,
      title: "Fresh Fold",
      description: "Premium tissue manufacturing and distribution company providing high-quality paper products for domestic and commercial use with a commitment to environmental sustainability.",
      features: [
        "Toilet tissue, facial tissue, napkins, and kitchen rolls",
        "Wholesale and retail distribution options",
        "Nationwide distribution network",
        "Custom branding for corporate clients",
        "Eco-friendly manufacturing processes"
      ],
      image: "/images/services/manufacturing.jpg",
      link: "/services/freshfold",
    },
    {
      id: 3,
      title: "Usman Solar",
      description: "Comprehensive solar energy solutions provider for residential, commercial, industrial, and agricultural sectors, promoting sustainable energy and reducing carbon footprint.",
      features: [
        "Solar panel installation for homes and businesses",
        "Energy audit and consultation services",
        "Maintenance and support packages",
        "Financing options for solar installations",
        "Advanced solar technology solutions"
      ],
      image: "/images/services/energy-detail.jpg",
      link: "/services/usmansolar",
    },
    {
      id: 4,
      title: "Royal Create",
      description: "Leading manufacturer and supplier of high-quality construction blocks and materials, providing innovative and durable building solutions for construction projects of all sizes.",
      features: [
        "Concrete blocks, pavers, and tiles",
        "Quality-certified building materials",
        "Customized material solutions",
        "Bulk ordering options for developers",
        "Distributor partnership programs"
      ],
      image: "/images/services/royal-crete.jpg",
      link: "/services/royalcreate",
    },
    {
      id: 5,
      title: "Sardar Builder",
      description: "Premiere construction service provider specializing in residential, commercial, and industrial projects with a focus on quality craftsmanship and timely delivery.",
      features: [
        "Residential house construction",
        "Commercial building development",
        "Villa and luxury home construction",
        "Project management services",
        "Interior and exterior design solutions"
      ],
      image: "/images/services/sardar-builder.jpg",
      link: "/services/sardarbuilder",
    },

    {
      
      id: 6,
      title: "Txy.co",
      description: "A state-of-the-art ride-hailing platform similar to InDrive, offering convenient and affordable transportation services for users across the region.",
      features: [
        "User-friendly mobile app for booking rides",
        "Affordable pricing with transparent fare system",
        "Multiple vehicle options for different needs",
        "Franchise opportunities for entrepreneurs",
        "Partnership programs for local businesses"
      ],
      image: "/images/services/txyco.png",
      link: "/services/txy",
    },
   
    {
      id: 7,
      title: "CICON (Country International College of Nursing)",
      description: "Leading nursing education institution providing comprehensive training and certification for aspiring healthcare professionals with state-of-the-art facilities and experienced faculty.",
      features: [
        "Diploma and degree nursing programs",
        "Specialized healthcare courses",
        "Modern campus with practical facilities",
        "Industry partnerships for clinical training",
        "Career placement assistance"
      ],
      image: "/images/services/cicon.jpg",
      link: "/services/cicon",
    },
    {
      id: 8,
      title: "TIGES (Integrity Global Education System)",
      description: "Multicampus school system dedicated to providing quality education with a focus on character development, academic excellence, and global citizenship.",
      features: [
        "Comprehensive K-12 education",
        "Values-based teaching philosophy",
        "Multiple campus locations",
        "Extracurricular activities and sports",
        "International curriculum standards"
      ],
      image: "/images/services/tiges-logo.jpg",
      link: "/services/tiges",
    },
    {
      id: 9,
      title: "The Tenacious (Law College)",
      description: "Distinguished legal education institution offering comprehensive law programs designed to prepare students for successful careers in various legal domains.",
      features: [
        "LLB and specialized law programs",
        "Distinguished legal faculty",
        "Moot court and practical training",
        "Legal internship opportunities",
        "Career development for legal profession"
      ],
      image: "/images/services/the-tenacious.png",
      link: "/services/thetenacious",
    },
  ];

  return (
    <main>
      <Header />
      
      {/* Page Header */}
      <div className="relative h-[400px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/services-bg.jpg"
            alt="SGC Services"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center z-10 pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Companies
              </h1>
              <p className="text-xl text-white/90">
                Explore our diverse portfolio of businesses across multiple industries delivering excellence and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Breadcrumb />
      
      {/* Services Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Portfolio</h2>
            <h3 className="section-title text-center">Diverse Business Ecosystem</h3>
            <p className="section-subtitle text-center">
              SGC has established a portfolio of successful companies across multiple industries including transportation, manufacturing, energy, construction, real estate, and education
            </p>
          </div>
          
          {/* Services Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary dark:text-white mb-3">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{service.description}</p>
                  
                  <Link 
                    href={service.link}
                    className="inline-block bg-primary text-white dark:bg-secondary dark:text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Companies?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about partnership opportunities, services, or career options within the SGC group of companies
          </p>
          <Link href="/contact" className="bg-white text-primary dark:bg-secondary dark:text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-white/90 dark:hover:bg-secondary/90 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 