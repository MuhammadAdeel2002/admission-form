"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "construction", label: "Construction" },
    { id: "real-estate", label: "Real Estate" },
    { id: "energy", label: "Energy" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  const projects = [
    {
      id: 1,
      title: "Sardar Heights",
      category: "real-estate",
      description: "Luxury apartment complex in the heart of Islamabad featuring 120 premium units with modern amenities and sustainable design elements.",
      location: "Islamabad, Pakistan",
      completionYear: 2022,
      image: "/images/projects/project-1.jpg",
      link: "/projects/sardar-heights",
    },
    {
      id: 2,
      title: "Lahore-Islamabad Highway",
      category: "infrastructure",
      description: "Major infrastructure development connecting two major cities, spanning 375 km with modern safety features and service areas.",
      location: "Punjab, Pakistan",
      completionYear: 2020,
      image: "/images/projects/project-2.jpg",
      link: "/projects/lahore-islamabad-highway",
    },
    {
      id: 3,
      title: "Solar Power Plant",
      category: "energy",
      description: "50MW solar power generation facility in Punjab, providing clean energy to over 30,000 households and reducing carbon emissions.",
      location: "Punjab, Pakistan",
      completionYear: 2021,
      image: "/images/projects/project-3.jpg",
      link: "/projects/solar-power-plant",
    },
    {
      id: 4,
      title: "SGC Business Tower",
      category: "real-estate",
      description: "Modern office complex with state-of-the-art facilities, smart building technology, and LEED Gold certification for sustainability.",
      location: "Karachi, Pakistan",
      completionYear: 2019,
      image: "/images/projects/project-4.jpg",
      link: "/projects/sgc-business-tower",
    },
    {
      id: 5,
      title: "Sardar Hospital",
      category: "construction",
      description: "300-bed modern healthcare facility with specialized departments, cutting-edge medical equipment, and patient-centered design.",
      location: "Lahore, Pakistan",
      completionYear: 2023,
      image: "/images/projects/project-5.jpg",
      link: "/projects/sardar-hospital",
    },
    {
      id: 6,
      title: "Wind Energy Farm",
      category: "energy",
      description: "Renewable energy project with 25 wind turbines, generating 100MW of clean electricity for the national grid.",
      location: "Sindh, Pakistan",
      completionYear: 2020,
      image: "/images/projects/project-6.jpg",
      link: "/projects/wind-energy-farm",
    },
    {
      id: 7,
      title: "Marina Bay Residences",
      category: "real-estate",
      description: "Waterfront luxury residential development with premium apartments, private marina, and exclusive resident amenities.",
      location: "Karachi, Pakistan",
      completionYear: 2022,
      image: "/images/projects/project-7.jpg",
      link: "/projects/marina-bay-residences",
    },
    {
      id: 8,
      title: "Sardar Industrial Park",
      category: "construction",
      description: "Large-scale industrial complex with manufacturing facilities, warehousing, and logistics infrastructure for multiple industries.",
      location: "Faisalabad, Pakistan",
      completionYear: 2021,
      image: "/images/projects/project-8.jpg",
      link: "/projects/sardar-industrial-park",
    },
    {
      id: 9,
      title: "Hydroelectric Power Station",
      category: "energy",
      description: "25MW hydroelectric power station utilizing sustainable water resources to generate clean energy for local communities.",
      location: "Khyber Pakhtunkhwa, Pakistan",
      completionYear: 2019,
      image: "/images/projects/project-9.jpg",
      link: "/projects/hydroelectric-power-station",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  return (
    <main>
      <Header />
      
      {/* Page Header */}
      <div className="relative h-[400px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/projects/projects-bg.jpg"
            alt="SGC Projects"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-white/90">
                Explore our portfolio of successful projects across multiple sectors
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Portfolio</h2>
            <h3 className="section-title text-center">Featured Projects</h3>
            <p className="section-subtitle text-center">
              Showcasing our diverse range of successful projects that demonstrate our expertise and commitment to excellence
            </p>
          </div>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="uppercase text-xs font-semibold tracking-wider mb-2">
                        {filters.find((f) => f.id === project.category)?.label}
                      </p>
                      <h4 className="text-xl font-bold">{project.title}</h4>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-primary">{project.title}</h4>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-sm font-medium">
                      {project.completionYear}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center text-secondary font-medium group"
                  >
                    <span className="group-hover:underline">View Project Details</span>
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <svg className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any projects matching your selected filter. Please try a different category.
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-6 btn-primary"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your project needs and how SGC can help bring your vision to life
          </p>
          <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 