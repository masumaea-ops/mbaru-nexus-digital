import { Shield, Award, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "Microsoft Certified Partner",
    category: "Cloud Solutions",
    icon: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=80&q=80",
    description: "Certified for Microsoft Azure, Office 365, and Windows Server solutions",
    level: "Gold Partner",
    year: "2024"
  },
  {
    name: "Cisco Networking Academy",
    category: "Networking",
    icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&q=80",
    description: "Advanced certification in network infrastructure and security",
    level: "Premier Partner",
    year: "2023"
  },
  {
    name: "AWS Cloud Partner",
    category: "Cloud Computing",
    icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=80&q=80",
    description: "Certified for Amazon Web Services cloud solutions and migration",
    level: "Select Tier",
    year: "2024"
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    category: "Cybersecurity",
    icon: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=80&q=80",
    description: "Advanced penetration testing and cybersecurity assessment",
    level: "Master Level",
    year: "2024"
  },
  {
    name: "ISO 27001 Implementation",
    category: "Information Security",
    icon: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=80&q=80",
    description: "Information Security Management System implementation expertise",
    level: "Lead Implementer",
    year: "2023"
  },
  {
    name: "Kenya Data Protection Act",
    category: "Compliance",
    icon: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=80&q=80",
    description: "Certified compliance with Kenya's Data Protection Act 2019",
    level: "Full Compliance",
    year: "2024"
  }
];

const achievements = [
  { icon: Award, title: "8+ Years Experience", subtitle: "Serving Kenya since 2017" },
  { icon: CheckCircle, title: "500+ Projects Completed", subtitle: "Across various industries" },
  { icon: Star, title: "98% Client Satisfaction", subtitle: "Based on client feedback" },
  { icon: Shield, title: "Zero Security Breaches", subtitle: "In systems we've secured" }
];

export const CertificationsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Partnerships
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team maintains industry-leading certifications and partnerships with 
            major technology providers to deliver world-class ICT solutions.
          </p>
        </div>

        {/* Achievements Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {cert.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{cert.name}</h3>
                    <Badge variant="outline" className="text-xs mb-2">
                      {cert.level}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted/50 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-muted-foreground mb-6">
              Our certifications and partnerships ensure you receive the highest quality 
              ICT services backed by industry standards and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline">Microsoft Gold Partner</Badge>
              <Badge variant="outline">Cisco Premier Partner</Badge>
              <Badge variant="outline">AWS Select Tier</Badge>
              <Badge variant="outline">ISO 27001 Certified</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};