import { ExternalLink, Calendar, Users, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Nairobi Medical Center - Cloud Migration",
      category: "Cloud Computing",
      client: "Healthcare",
      description: "Migrated legacy patient management system to secure cloud infrastructure, improving data accessibility and reducing IT costs by 40%.",
      technologies: ["Microsoft Azure", "SQL Server", "Active Directory", "Office 365"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
      completedDate: "October 2024",
      teamSize: "4 specialists",
      duration: "3 months"
    },
    {
      title: "KenTrade E-commerce Platform",
      category: "Web Development",
      client: "Retail",
      description: "Built comprehensive e-commerce platform with M-Pesa integration, inventory management, and multi-vendor support for local artisans.",
      technologies: ["React", "Node.js", "MongoDB", "M-Pesa API", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      completedDate: "December 2024",
      teamSize: "3 developers",
      duration: "2 months"
    },
    {
      title: "Safaricom Partner Network Setup",
      category: "Networking",
      client: "Telecommunications",
      description: "Designed and implemented secure network infrastructure for 15 retail outlets with centralized management and 24/7 monitoring.",
      technologies: ["Cisco Equipment", "VPN", "CCTV Integration", "Firewall"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      completedDate: "September 2024",
      teamSize: "5 engineers",
      duration: "4 months"
    },
    {
      title: "ABC Bank Cybersecurity Audit",
      category: "Cybersecurity",
      client: "Financial Services",
      description: "Comprehensive security assessment and implementation of enhanced security protocols, achieving 100% compliance with CBK guidelines.",
      technologies: ["Penetration Testing", "Security Frameworks", "Compliance Tools"],
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&q=80",
      completedDate: "August 2024",
      teamSize: "3 security experts",
      duration: "6 weeks"
    },
    {
      title: "University of Nairobi Digital Training",
      category: "Corporate Training",
      client: "Education",
      description: "Delivered comprehensive ICT training program for 200+ staff members covering digital literacy, cybersecurity awareness, and modern productivity tools.",
      technologies: ["Microsoft Office 365", "Teams", "SharePoint", "Security Training"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      completedDate: "November 2024",
      teamSize: "4 trainers",
      duration: "8 weeks"
    },
    {
      title: "Tuskey's Supermarket POS System",
      category: "Software Development",
      client: "Retail",
      description: "Custom point-of-sale system with inventory management, sales analytics, and multi-location synchronization for major supermarket chain.",
      technologies: ["C#", ".NET", "SQL Server", "Windows", "Barcode Integration"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80",
      completedDate: "July 2024",
      teamSize: "4 developers",
      duration: "5 months"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cloud Computing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Web Development":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Networking":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "Cybersecurity":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "Corporate Training":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Software Development":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Success Stories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses across Kenya transform their ICT infrastructure, 
              improve efficiency, and achieve their digital goals.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{project.completedDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-3 w-3" />
                      <span>{project.teamSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-3 w-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-muted/50 p-8 rounded-lg max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join hundreds of satisfied clients who have transformed their businesses with our ICT solutions.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="/#contact">Get Your Free Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;