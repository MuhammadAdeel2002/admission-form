import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  const directors = [
    {
      id: 1,
      name: "Sardar Ahmed Khan",
      position: "Chairman & CEO",
      bio: "Sardar Ahmed Khan is the founder and visionary leader of SGC with over 30 years of experience in business development and strategic leadership. He founded the company in 1997 and has led its growth into multiple sectors.",
      image: "/images/team/director-1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      id: 2,
      name: "Aisha Khan",
      position: "Executive Director",
      bio: "Aisha Khan brings 20+ years of experience in corporate finance and strategic planning. She oversees the group's financial operations and plays a key role in expansion strategies and new business development.",
      image: "/images/team/director-2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      id: 3,
      name: "Mohammad Tariq",
      position: "Director of Construction",
      bio: "Mohammad Tariq is an industry veteran with extensive experience in construction management. He leads SGC's construction division, overseeing major infrastructure and building projects across Pakistan.",
      image: "/images/team/director-3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      id: 4,
      name: "Fatima Zaidi",
      position: "Director of Real Estate",
      bio: "Fatima Zaidi has transformed SGC's real estate portfolio with her innovative approach to property development. She leads our residential and commercial development projects with a focus on sustainability.",
      image: "/images/team/director-4.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      id: 5,
      name: "Ali Hassan",
      position: "Director of Energy",
      bio: "Ali Hassan is a renewable energy expert who has been instrumental in developing SGC's energy division. He leads our initiatives in solar and wind power projects, focusing on clean energy solutions.",
      image: "/images/team/director-5.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      id: 6,
      name: "Nadia Kamal",
      position: "Director of International Trade",
      bio: "Nadia Kamal oversees SGC's international trading operations with expertise in global supply chains and market development. She has established key partnerships across Asia, Middle East, and Europe.",
      image: "/images/team/director-6.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase mb-2">Leadership</h2>
          <h3 className="section-title text-center">Board of Directors</h3>
          <p className="section-subtitle text-center">
            Meet the experienced professionals who lead Sardar Group of Companies to success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director) => (
            <div 
              key={director.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Director Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Director Info */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-1">{director.name}</h4>
                <p className="text-secondary font-medium mb-3">{director.position}</p>
                <p className="text-gray-600 mb-4">{director.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-3 mt-4">
                  {director.social.linkedin && (
                    <a 
                      href={director.social.linkedin}
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                      aria-label={`${director.name}'s LinkedIn profile`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  )}
                  {director.social.twitter && (
                    <a 
                      href={director.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={`${director.name}'s Twitter profile`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 