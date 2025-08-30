import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const CloudTrendsKenya = () => {
  const scrollToContact = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.href = "/#contact";
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Cloud Computing
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Top 5 Cloud Computing Trends in Kenya (2025)
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the latest cloud computing trends shaping businesses across Kenya and how to leverage them for competitive advantage.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>John Mbaru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt="Cloud Computing in Kenya"
              className="w-full h-96 object-cover rounded-lg shadow-card"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As Kenya continues its digital transformation journey, cloud computing has emerged as a critical enabler for businesses seeking scalability, cost-efficiency, and innovation. Here are the top five trends that will define the cloud landscape in Kenya throughout 2025.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">1. Multi-Cloud Strategy Adoption</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kenyan businesses are increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize costs. Companies are leveraging AWS, Microsoft Azure, and Google Cloud simultaneously to maximize benefits and ensure business continuity.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">2. Edge Computing Expansion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With the growth of IoT devices and the need for real-time processing, edge computing is gaining traction in Kenya. Businesses in sectors like agriculture, healthcare, and manufacturing are implementing edge solutions to reduce latency and improve performance.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">3. AI and Machine Learning Integration</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cloud-based AI and ML services are becoming more accessible to Kenyan businesses. From fintech companies using AI for fraud detection to agricultural firms leveraging ML for crop prediction, the integration of intelligent services is accelerating.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">4. Enhanced Security and Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With increasing cyber threats, Kenyan organizations are prioritizing cloud security. Zero-trust architecture, advanced encryption, and compliance with local data protection regulations are becoming standard requirements.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">5. Sustainable Cloud Computing</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Environmental consciousness is driving the adoption of green cloud solutions. Kenyan businesses are choosing cloud providers committed to renewable energy and sustainable practices, aligning with the country's climate goals.
            </p>

            <div className="bg-muted/50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business with Cloud Computing?</h3>
              <p className="text-muted-foreground mb-6">
                At Mbaru Technologies, we help Kenyan businesses navigate the cloud landscape and implement solutions that drive growth and efficiency.
              </p>
              <Button variant="cta" size="lg" onClick={scrollToContact}>
                Schedule Your Cloud Consultation
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CloudTrendsKenya;