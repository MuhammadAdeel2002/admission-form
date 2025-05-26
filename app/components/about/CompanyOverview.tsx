import Image from "next/image";
import Link from "next/link";

export default function CompanyOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/about-image.jpg"
                alt="SGC Headquarters"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Company Overview</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h3>
            
            <p className="text-gray-600 mb-6">
              Sardar Group of Companies (SGC) was founded  by Mr. Sardar Tanveer Ilyas Khan with a vision to create a diversified business group that would contribute to Pakistan's economic growth and development.
            </p>
            
            <p className="text-gray-600 mb-6">
              What began as a small trading company has evolved into one of Pakistan's most respected business conglomerates with interests spanning construction, real estate, energy, and international trading.
            </p>
            
            <p className="text-gray-600 mb-6">
              Over the past 25+ years, SGC has established a reputation for excellence, reliability, and innovation. Our commitment to quality, sustainable practices, and ethical business conduct has allowed us to grow consistently and build strong relationships with clients, partners, and communities.
            </p>
            
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 