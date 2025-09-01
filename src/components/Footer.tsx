import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const serviceLinks = [
  { name: "Computer Sales & Services", href: "/services/computer-sales" },
  { name: "Cloud Computing", href: "/services/cloud-computing" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Cybersecurity", href: "/services/security" },
  { name: "ICT Training", href: "/services/training" },
  { name: "Networking Solutions", href: "/services/networking" }
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Free Consultation", href: "/consultation" },
  { name: "Support", href: "/support" }
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/3f9f55ee-b85d-492a-a6f2-765bab94a721.png" 
                alt="Mbaru Technologies Logo" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold">Mbaru Technologies</h3>
            </div>
            <div>
              <p className="text-primary-foreground/80">
                Your trusted ICT partner in Nairobi, providing innovative digital solutions 
                for businesses and individuals since 2017.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-light" />
                <span className="text-sm">Adams Arcade, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-light" />
                <span className="text-sm">+254 072 093 5895 / +254 071 014 7458</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-light" />
                <span className="text-sm">info@mtechgroup.co.ke</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/mbarutechnologies" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/mbaru-technologies" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/mbarutech" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for the latest ICT insights and updates.
            </p>
            
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                type="submit" 
                variant="secondary" 
                size="sm" 
                className="w-full"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <div className="text-sm text-primary-foreground/80 space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2025 Mbaru Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};