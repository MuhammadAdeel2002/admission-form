import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/shared/PageHeader";
import CompanyOverview from "../components/about/CompanyOverview";
import MissionVisionValues from "../components/about/MissionVisionValues";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function About() {
  return (
    <main>
      <Header />
      
      <PageHeader 
        title="About Us"
        description="Learn more about Sardar Group of Companies, our history, values, and the team behind our success."
        backgroundImage="/images/about/tag-maingate.jpg"
        
      />
      
      <Breadcrumb />
      
      <CompanyOverview />
      
      <MissionVisionValues />
      
      <Footer />
    </main>
  );
} 