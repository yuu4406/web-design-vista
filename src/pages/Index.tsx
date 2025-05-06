
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ContactSection from "@/components/ContactSection";
import SeaBubbles from "@/components/SeaBubbles";
import CloudAnimations from "@/components/CloudAnimations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CloudAnimations />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <FeatureSection />
      <TestimonialsSection />
      <FAQSection />
      <CapabilitiesSection />
      <ContactSection />
      <Footer />
      <SeaBubbles />
    </div>
  );
};

export default Index;
