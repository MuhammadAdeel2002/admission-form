import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/shared/Breadcrumb";

export default function TheTenaciousService() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <div className="relative h-[500px] bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/law-hero.jpg"
            alt="The Tenacious Law College Hero"
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
                The Tenacious Law College
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Distinguished legal education institution preparing future leaders in law and justice
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#programs" 
                  className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-all flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
      {/* About College */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/law-about.jpg"
                  alt="About The Tenacious Law College"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">About The Tenacious Law College</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The Tenacious Law College is committed to academic excellence, professional ethics, and practical legal training. Our mission is to nurture future leaders in law, justice, and public service through a rigorous curriculum and hands-on experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With a distinguished faculty, state-of-the-art moot court, and strong industry connections, we provide students with the knowledge, skills, and opportunities to excel in the legal profession.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Join a vibrant community dedicated to justice, advocacy, and lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Offered */}
      <section id="programs" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Academic Programs</h2>
            <h3 className="section-title">Legal Education for the Modern Era</h3>
            <p className="section-subtitle">
              Comprehensive law programs designed to prepare students for successful legal careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">LLB (Bachelor of Laws)</h4>
              <p className="text-gray-600 dark:text-gray-300">
                A rigorous undergraduate program covering core areas of law, legal research, and advocacy skills.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Specialized Law Programs</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced courses in corporate law, human rights, criminal law, and more for focused legal expertise.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-4">Moot Court & Legal Clinics</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Practical training through moot court competitions, legal clinics, and real-world casework.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Why Choose The Tenacious Law College</h2>
            <h3 className="section-title">Our Distinction</h3>
            <p className="section-subtitle">
              Discover what sets us apart in legal education and professional development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Distinguished Faculty</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from experienced legal scholars, practitioners, and judges.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Moot Court Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Participate in national and international moot court competitions and advocacy training.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Internship Opportunities</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Access internships with law firms, courts, and NGOs for real-world legal experience.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Career Development</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Career counseling, job placement, and alumni network for professional growth.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Modern Facilities</h4>
              <p className="text-gray-600 dark:text-gray-300">
                State-of-the-art campus, moot courtrooms, and legal research library.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary dark:text-white mb-3">Ethics & Justice</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Emphasis on legal ethics, justice, and public service in all programs.
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
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-6">Apply to The Tenacious Law College</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Ready to pursue a career in law? Contact our admissions team to learn more about our programs, application process, and scholarships.
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
                    <label htmlFor="program" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Program Interest *
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select a program</option>
                      <option value="llb">LLB</option>
                      <option value="specialized">Specialized Law Program</option>
                      <option value="moot">Moot Court/Legal Clinic</option>
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
                      placeholder="Tell us about your interest, previous education, or any questions..."
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
                    src="/images/services/law-contact.jpg"
                    alt="The Tenacious Law College Contact"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-primary/30 dark:bg-primary/50"></div>
                </div>
                <div className="relative p-8 md:p-12 lg:p-16 z-10 h-full flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Admissions Office</h4>
                    <p className="text-white/80 mb-2">Tenacious Law College Campus, Islamabad, Pakistan</p>
                    <p className="text-white/80">admissions@thetenacious.com</p>
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