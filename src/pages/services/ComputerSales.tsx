import { ArrowLeft, Monitor, Laptop, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const ComputerSales = () => {
  const services = [
    {
      icon: Monitor,
      title: "Desktop Computers",
      description: "High-performance desktop computers for business and personal use",
      features: ["Intel & AMD Processors", "Custom Configurations", "Business Grade Hardware", "Warranty Support"]
    },
    {
      icon: Laptop,
      title: "Laptops & Notebooks",
      description: "Portable computing solutions for mobile professionals",
      features: ["Business Laptops", "Gaming Notebooks", "Ultrabooks", "2-in-1 Devices"]
    },
    {
      icon: Settings,
      title: "Repairs & Upgrades",
      description: "Professional computer repair and hardware upgrade services",
      features: ["Hardware Diagnostics", "Component Replacement", "Performance Upgrades", "Data Recovery"]
    },
    {
      icon: Shield,
      title: "Maintenance Support",
      description: "Ongoing maintenance and technical support services",
      features: ["Regular Maintenance", "Software Updates", "Virus Removal", "Remote Support"]
    }
  ];

  const scrollToContact = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.href = "/#contact";
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Computer Sales & Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Premium computers, laptops, repairs, and maintenance services for businesses and individuals across Nairobi and Kenya.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Computer Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From sales to support, we provide comprehensive computer solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Upgrade Your Technology?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and personalized quote.
            </p>
            <Button variant="cta" size="lg" onClick={scrollToContact}>
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComputerSales;