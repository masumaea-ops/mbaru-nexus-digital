import { CheckCircle, Award, Users, Clock, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Expert Support",
    description: "Certified professionals with years of experience in ICT solutions"
  },
  {
    icon: Award,
    title: "Licensed Solutions", 
    description: "Genuine software and hardware from authorized vendors"
  },
  {
    icon: Shield,
    title: "Secure Cloud",
    description: "Enterprise-grade security for all your data and applications"
  },
  {
    icon: Clock,
    title: "Local Experience",
    description: "Deep understanding of Kenyan business needs since 2017"
  },
  {
    icon: Zap,
    title: "Customer-Centric Service",
    description: "Tailored solutions with ongoing support and maintenance"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Trusted ICT Partner Since 2017
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2017, Mbaru Technologies has simplified ICT for businesses and individuals 
                in Nairobi and beyond. We combine innovation, trust, and expertise to deliver 
                reliable digital solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Over 500 successful projects delivered across various industries in Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep understanding of local business challenges and regulatory requirements
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">End-to-End Solutions</h3>
                  <p className="text-muted-foreground">
                    From consultation to implementation and ongoing support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Why Choose Mbaru Technologies?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};