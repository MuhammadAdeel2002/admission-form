"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PresidentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-2 tracking-wider">
                SOMETHING ABOUT OUR COMPANY - SGC
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              The President of SGC,{" "}
              <span className="text-secondary block mt-2">
                Mr. Sardar Tanveer Ilyas Khan
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              a name that does not need introduction but it would be unfair not
              to mention just a few attributes, a philanthropist, Educationist, a
              renowned Politician has great distinction and honor of being elected
              as the Prime Minister of Azad Jammu Kashmir, this one-man army
              has been constantly working and living each moment to bring in
              more opportunities.
            </p>

            <div className="pt-6">
              <h3 className="text-3xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-gray-600">
                Empowering diverse industries through a commitment to excellence
                in education, pioneering innovation in real estate development,
                delivering unparalleled hospitality experiences, driving sustainable
                textile manufacturing practices, and providing innovative property
                solutions
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/president.jpg"
                alt="Mr. Sardar Tanveer Ilyas Khan - President of SGC"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
                className="transition-transform duration-700 hover:scale-105"
              />
              
              {/* Gold decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 rounded-bl-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-secondary rounded-bl-3xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-3xl"></div>
              </div>
              
              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <div className="h-1 w-16 bg-secondary rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-xl border-2 border-secondary/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 