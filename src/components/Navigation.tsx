import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3f9f55ee-b85d-492a-a6f2-765bab94a721.png" 
              alt="Mbaru Technologies Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="font-display font-bold text-xl text-foreground">
              Mbaru Technologies
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-muted-foreground hover:text-foreground transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">About</button>
            <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            <button onClick={() => scrollToSection('blog')} className="text-muted-foreground hover:text-foreground transition-colors">Blog</button>
            <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
          </div>

          <div className="hidden lg:block">
            <Button variant="cta" onClick={() => scrollToSection('contact')}>Free Consultation</Button>
          </div>

          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block text-muted-foreground hover:text-foreground transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="block text-muted-foreground hover:text-foreground transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="block text-muted-foreground hover:text-foreground transition-colors">About</button>
              <Link to="/portfolio" className="block text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <button onClick={() => scrollToSection('blog')} className="block text-muted-foreground hover:text-foreground transition-colors">Blog</button>
              <Link to="/faq" className="block text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
              <button onClick={() => scrollToSection('contact')} className="block text-muted-foreground hover:text-foreground transition-colors">Contact</button>
              <Button variant="cta" className="w-full mt-4" onClick={() => { scrollToSection('contact'); setIsOpen(false); }}>Free Consultation</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};