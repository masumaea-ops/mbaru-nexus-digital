import { Navigation } from "@/components/Navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { DownloadableResources } from "@/components/DownloadableResources";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="hero"><HeroSlider /></section>
      <section id="services"><ServicesSection /></section>
      <section id="about"><AboutSection /></section>
      <TestimonialsSection />
      <CertificationsSection />
      <section id="blog"><BlogSection /></section>
      <DownloadableResources />
      <section id="contact"><ContactSection /></section>
      <Footer />
      <CookieConsent />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
