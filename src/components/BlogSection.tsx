import { Calendar, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Top 5 Cloud Computing Trends in Kenya (2025)",
    excerpt: "Discover the latest cloud computing trends shaping businesses across Kenya and how to leverage them for competitive advantage.",
    author: "John Mbaru",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    link: "/blog/cloud-computing-trends-kenya-2025"
  },
  {
    title: "How to Secure Your Business IT Infrastructure Against Cyber Threats",
    excerpt: "Essential cybersecurity strategies every Kenyan business should implement to protect against evolving digital threats.",
    author: "Sarah Tech",
    date: "January 10, 2025", 
    readTime: "7 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80",
    link: "/blog/cybersecurity-business-protection"
  },
  {
    title: "Why E-Commerce Websites Fail in Nairobi and How to Succeed",
    excerpt: "Learn from common e-commerce mistakes and discover proven strategies for building successful online stores in the Kenyan market.",
    author: "Mike Developer",
    date: "January 5, 2025",
    readTime: "6 min read", 
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "/blog/ecommerce-success-nairobi"
  },
  {
    title: "ICT Training: Building Digital Skills for Kenya's Future",
    excerpt: "How corporate ICT training programs are transforming workplaces and preparing Kenyan professionals for the digital economy.",
    author: "Grace Trainer",
    date: "December 28, 2024",
    readTime: "4 min read",
    category: "Training",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    link: "/blog/ict-training-digital-skills-kenya"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest ICT trends, tips, and industry insights 
            tailored for businesses in Kenya and East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 p-0 h-auto">
                  <span className="flex items-center justify-center py-2 px-4 w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};