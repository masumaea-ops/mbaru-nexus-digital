import { HeroSlider } from "@/components/HeroSlider";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Interactive Slider */}
      <HeroSlider />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
