import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import hero images
import heroComputerServices from "@/assets/hero-computer-services.jpg";
import heroCloudComputing from "@/assets/hero-cloud-computing.jpg";
import heroWebDevelopment from "@/assets/hero-web-development.jpg";
import heroTraining from "@/assets/hero-training.jpg";
import heroCybersecurity from "@/assets/hero-cybersecurity.jpg";

const slides = [
  {
    image: heroComputerServices,
    title: "Premium Computer Sales & Repair Services",
    subtitle: "Professional computer solutions for businesses and individuals",
    description: "High-quality computers, laptops, repairs, upgrades, and maintenance services. Your trusted ICT partner in Nairobi.",
    cta: "Explore Computer Services"
  },
  {
    image: heroCloudComputing,
    title: "Advanced Cloud Computing & Data Backup",
    subtitle: "Secure, scalable cloud solutions for modern businesses",
    description: "Cloud migration, disaster recovery, and enterprise-grade data backup solutions. Keep your business running smoothly.",
    cta: "Learn About Cloud Services"
  },
  {
    image: heroWebDevelopment,
    title: "Professional Web Development & E-commerce",
    subtitle: "Modern websites that drive business growth",
    description: "Custom websites, e-commerce platforms, and digital marketing solutions. Transform your online presence.",
    cta: "Start Your Web Project"
  },
  {
    image: heroTraining,
    title: "Corporate ICT Training Programs",
    subtitle: "Empowering your team with digital skills",
    description: "Cybersecurity training, digital literacy, and professional certification programs. Invest in your team's future.",
    cta: "View Training Programs"
  },
  {
    image: heroCybersecurity,
    title: "ICT Audits & Cybersecurity Solutions",
    subtitle: "Protect your business from digital threats",
    description: "Comprehensive security audits, compliance reviews, and penetration testing. Secure your digital infrastructure.",
    cta: "Get Security Assessment"
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-hero pt-16">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-70" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="space-y-6 text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-xl md:text-2xl font-light opacity-90">
                {slides[currentSlide].subtitle}
              </p>
              
              <p className="text-lg opacity-80 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group"
                  onClick={() => scrollToSection('services')}
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => scrollToSection('contact')}
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};