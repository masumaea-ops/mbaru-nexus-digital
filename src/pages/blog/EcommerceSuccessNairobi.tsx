import { ArrowLeft, Calendar, User, Clock, ShoppingCart, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const EcommerceSuccessNairobi = () => {
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
                Web Development
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why E-Commerce Websites Fail in Nairobi and How to Succeed
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Learn from common e-commerce mistakes and discover proven strategies for building successful online stores in the Kenyan market.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">Mike Developer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">January 5, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">6 min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
              alt="E-commerce Success in Nairobi Kenya"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-card"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              E-commerce in Kenya is booming, but many online stores struggle to gain traction. Understanding the unique challenges of the Kenyan market is crucial for building a successful e-commerce business.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/30 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-400">Market Reality Check</h3>
              </div>
              <p className="text-yellow-800 dark:text-yellow-300">
                68% of e-commerce startups in Nairobi fail within their first two years. Here's how to avoid common pitfalls.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Common Reasons for E-commerce Failure</h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">1. Poor Mobile Experience</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Over 80% of Kenyan internet users browse on mobile devices. E-commerce sites that aren't mobile-optimized lose customers immediately. Slow loading times and difficult navigation are conversion killers.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">2. Limited Payment Options</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              M-Pesa dominates the Kenyan payment landscape. Sites that don't integrate popular local payment methods struggle to convert visitors into customers. Credit card-only checkout is a major barrier.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">3. Inadequate Logistics Planning</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Last-mile delivery in Nairobi is complex. Many e-commerce businesses underestimate logistics costs and delivery timeframes, leading to poor customer experiences and negative reviews.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Strategies for E-commerce Success</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <ShoppingCart className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">User Experience</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mobile-first design approach</li>
                  <li>• Fast loading times (&lt;3 seconds)</li>
                  <li>• Intuitive navigation and search</li>
                  <li>• Clear product descriptions and images</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Local Market Adaptation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• M-Pesa and mobile money integration</li>
                  <li>• Local language support (Swahili)</li>
                  <li>• Kenya-specific shipping zones</li>
                  <li>• Local customer service hours</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Technical Requirements for Success</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>SSL certificates and secure payment processing</li>
              <li>Inventory management system integration</li>
              <li>Customer relationship management (CRM) tools</li>
              <li>Analytics and conversion tracking setup</li>
              <li>Search engine optimization (SEO) for local keywords</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Marketing in the Kenyan Context</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Social media marketing, particularly on WhatsApp and Facebook, drives significant traffic. Influencer partnerships with local personalities can boost brand awareness. Community-based marketing resonates well with Kenyan consumers.
            </p>

            <div className="bg-muted/50 p-6 md:p-8 rounded-lg mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Ready to Launch Your E-commerce Success Story?</h3>
              <p className="text-muted-foreground mb-6">
                Mbaru Technologies specializes in building e-commerce platforms optimized for the Kenyan market. From M-Pesa integration to mobile-first design, we handle the technical details so you can focus on growing your business.
              </p>
              <Button variant="cta" size="lg" onClick={scrollToContact} className="w-full md:w-auto">
                Start Your E-commerce Project
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default EcommerceSuccessNairobi;