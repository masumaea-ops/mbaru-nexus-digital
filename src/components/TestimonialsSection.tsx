import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. Sarah Wanjiku",
    title: "Medical Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&q=80",
    rating: 5,
    text: "Mbaru Technologies transformed our healthcare IT infrastructure. Their cloud migration saved us 40% on IT costs while improving data security and accessibility. Outstanding professional service!"
  },
  {
    name: "James Kiprotich",
    title: "IT Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    text: "The cybersecurity audit conducted by Mbaru Technologies was comprehensive and professional. They helped us achieve 100% compliance with industry guidelines. Highly recommended for organizations."
  },
  {
    name: "Mary Achieng",
    title: "Operations Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616c639749e?w=150&q=80",
    rating: 5,
    text: "Our e-commerce platform built by Mbaru Technologies has revolutionized our business. M-Pesa integration and mobile optimization increased our sales by 300%. Excellent work!"
  },
  {
    name: "Prof. David Mwangi",
    title: "Deputy Vice-Chancellor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "The ICT training program delivered to our staff was exceptional. 200+ employees gained valuable digital skills. The trainers were knowledgeable and engaging throughout the program."
  },
  {
    name: "Grace Mutua",
    title: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    rating: 5,
    text: "The custom POS system developed by Mbaru Technologies streamlined our operations across all locations. Real-time inventory tracking and sales analytics have improved our decision-making significantly."
  },
  {
    name: "Michael Njoroge",
    title: "Network Administrator",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&q=80",
    rating: 5,
    text: "Mbaru Technologies delivered a robust network infrastructure for our retail outlets. The centralized management and 24/7 monitoring have reduced downtime to nearly zero. Professional team!"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what leading businesses across Kenya 
            say about our ICT services and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary opacity-20" />
                  <div className="flex ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 brightness-0"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};