import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/contact/ContactSection";
import MapSection from "../components/contact/MapSection";
import PageHeader from "../components/shared/PageHeader";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function Contact() {
  return (
    <main>
      <Header />
      
      <PageHeader 
        title="Contact Us"
        description="Get in touch with our team to discuss your business needs, projects, or any questions you may have."
        backgroundImage="/images/contact/contact-bg.jpg"
      />
      
      <Breadcrumb />
      
      {/* Contact Section */}
      <ContactSection />
      
      <MapSection />
      
      <Footer />
    </main>
  );
} 