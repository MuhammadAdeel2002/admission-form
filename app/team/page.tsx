import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TeamSection from "../components/team/TeamSection";
import PageHeader from "../components/shared/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <main>
      <Header />
      
      <PageHeader 
        title="Board of Directors"
        description="Meet the experienced professionals who lead Sardar Group of Companies to success"
        backgroundImage="/images/team/team-bg.jpg"
      />
      
      <TeamSection />
      
      {/* Leadership Philosophy */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/team/leadership-meeting.jpg"
                  alt="SGC Leadership Meeting"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Our Philosophy</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Leadership Excellence</h3>
              
              <p className="text-gray-600 mb-6">
                At SGC, we believe that exceptional leadership is the foundation of our success. Our Board of Directors brings together industry veterans with diverse expertise and a shared commitment to excellence, innovation, and ethical business practices.
              </p>
              
              <p className="text-gray-600 mb-6">
                Each member of our leadership team contributes unique perspectives and specialized knowledge, allowing us to make strategic decisions that drive sustainable growth and create value for our stakeholders. Through collaborative leadership, we navigate challenges, seize opportunities, and maintain our position as a trusted business group.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our directors are actively involved in mentoring the next generation of leaders within SGC, ensuring the continuity of our values and vision as we continue to grow and evolve in an ever-changing business landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Explore career opportunities at SGC and be part of our journey.
          </p>
          <Link href="/careers" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all">
            Explore Careers
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 