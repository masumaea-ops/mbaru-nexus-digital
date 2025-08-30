import { Monitor, Cloud, Globe, GraduationCap, Shield, Cpu, Network, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Computer Sales & Services",
    description: "Premium computers, laptops, repairs, upgrades, and maintenance services for businesses and individuals.",
    features: ["New & Refurbished Computers", "Hardware Repairs & Upgrades", "Regular Maintenance", "Warranty Support"],
    link: "/services/computer-sales"
  },
  {
    icon: Network,
    title: "Networking & Infrastructure", 
    description: "Professional network setup, CCTV installation, and structured cabling solutions for modern offices.",
    features: ["LAN/Wi-Fi Setup", "CCTV Installation", "Fiber Cabling", "Network Security"],
    link: "/services/networking"
  },
  {
    icon: Smartphone,
    title: "Software Sales & Custom Apps",
    description: "Licensed software solutions, ERP systems, POS systems, and custom mobile application development.",
    features: ["Licensed Software", "ERP Solutions", "POS Systems", "Mobile Apps"],
    link: "/services/software"
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Data Backup",
    description: "Secure cloud migration, enterprise backup solutions, and disaster recovery planning.",
    features: ["Cloud Migration", "Data Backup", "Disaster Recovery", "24/7 Monitoring"],
    link: "/services/cloud-computing"
  },
  {
    icon: Globe,
    title: "Web Development & Digital Marketing",
    description: "Modern websites, e-commerce platforms, SEO services, and comprehensive digital marketing strategies.",
    features: ["Website Development", "E-commerce Platforms", "SEO Optimization", "Digital Marketing"],
    link: "/services/web-development"
  },
  {
    icon: GraduationCap,
    title: "Corporate Training",
    description: "Professional ICT training programs including cybersecurity, digital literacy, and certification courses.",
    features: ["Cybersecurity Training", "Digital Literacy", "Certification Programs", "Custom Workshops"],
    link: "/services/training"
  },
  {
    icon: Shield,
    title: "ICT Audits & Security",
    description: "Comprehensive security audits, compliance reviews, and penetration testing for robust protection.",
    features: ["Security Audits", "Compliance Reviews", "Penetration Testing", "Risk Assessment"],
    link: "/services/security"
  },
  {
    icon: Cpu,
    title: "Emerging Solutions",
    description: "Cutting-edge AI solutions, IoT implementations, smart office setups, and fintech integrations.",
    features: ["AI Solutions", "IoT Implementation", "Smart Offices", "Fintech Integration"],
    link: "/services/emerging-tech"
  }
];

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive ICT Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From computer sales to advanced cloud solutions, we provide end-to-end ICT services 
            tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    {index === 0 ? (
                      <Link to="/services/computer-sales">
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          Learn More
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                        onClick={scrollToContact}
                      >
                        Learn More
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="cta" size="lg" onClick={scrollToContact}>
            Request Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};