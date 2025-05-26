"use client";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import PresidentSection from "./components/home/PresidentSection";
import AboutSection from "./components/home/AboutSection";
import ServicesSection from "./components/home/ServicesSection";
import ProjectsSection from "./components/home/ProjectsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import ContactSection from "./components/contact/ContactSection";
import SectionDivider from "./components/shared/SectionDivider";
import PageTransition from "./components/shared/PageTransition";
import SocialFloatingBar from "./components/shared/SocialFloatingBar";
import ScrollToTop from "./components/shared/ScrollToTop";
import MarqueeSection, { achievementsMarquee, partnersMarquee } from "./components/shared/MarqueeSection";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <PageTransition>
      <Header />
      <HeroSection />
      
      {/* Achievements Marquee
      <MarqueeSection {...achievementsMarquee} /> */}
      
      <PresidentSection />
      
      <SectionDivider backgroundColor="bg-gray-50" />
      <AboutSection />
      
      {/* Partners Marquee
      <MarqueeSection {...partnersMarquee} /> */}
      
      <SectionDivider reversed={true} />
      <ServicesSection />
      
      <SectionDivider backgroundColor="bg-white" withDots={true} />
      <ProjectsSection />
      
      <SectionDivider backgroundColor="bg-primary" reversed={true} />
      <TestimonialsSection />
      
      {/* Final Achievements Marquee with different speed */}
      <MarqueeSection 
        {...achievementsMarquee} 
        speed={45} 
        reverse={true}
        backgroundColor="bg-secondary"
        textColor="text-primary"
      />
      
      <SectionDivider backgroundColor="bg-white" />
      <ContactSection />
      
      <Footer />
      
      <SocialFloatingBar />
      <ScrollToTop />
    </PageTransition>
  );
} 