import { ArrowLeft, Calendar, User, Clock, Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const CybersecurityBusinessProtection = () => {
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
                Cybersecurity
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              How to Secure Your Business IT Infrastructure Against Cyber Threats
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Essential cybersecurity strategies every Kenyan business should implement to protect against evolving digital threats.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">Sarah Tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">January 10, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">7 min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&q=80"
              alt="Cybersecurity Business Protection in Kenya"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-card"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              In today's digital landscape, Kenyan businesses face an increasing number of cyber threats. From ransomware attacks to data breaches, the cost of inadequate cybersecurity can be devastating. Here's how to protect your business infrastructure.
            </p>

            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-900 dark:text-red-400">Critical Security Alert</h3>
              </div>
              <p className="text-red-800 dark:text-red-300">
                Over 70% of Kenyan businesses experienced at least one cyber attack in 2024. Don't become a statistic.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">1. Implement Multi-Factor Authentication (MFA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              MFA adds an extra layer of security beyond passwords. Even if credentials are compromised, unauthorized access becomes significantly more difficult. Implement MFA for all business accounts, especially those with administrative privileges.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">2. Regular Security Audits & Penetration Testing</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Conduct quarterly security assessments to identify vulnerabilities before attackers do. Professional penetration testing can reveal weaknesses in your network, applications, and security policies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">3. Employee Cybersecurity Training</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Human error remains the biggest security risk. Train employees to recognize phishing attempts, social engineering tactics, and suspicious activities. Regular awareness sessions can prevent costly mistakes.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">4. Backup & Disaster Recovery Planning</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Implement automated, secure backups stored in multiple locations. Test recovery procedures regularly to ensure business continuity in case of ransomware attacks or system failures.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">5. Network Segmentation & Access Control</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Segment your network to limit the spread of potential breaches. Implement the principle of least privilege, ensuring users only have access to resources necessary for their roles.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <Lock className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Encryption</h4>
                <p className="text-sm text-muted-foreground">Protect data at rest and in transit with enterprise-grade encryption.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Eye className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Monitoring</h4>
                <p className="text-sm text-muted-foreground">24/7 network monitoring and threat detection systems.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Response</h4>
                <p className="text-sm text-muted-foreground">Rapid incident response and threat mitigation protocols.</p>
              </div>
            </div>

            <div className="bg-muted/50 p-6 md:p-8 rounded-lg mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Secure Your Business Today</h3>
              <p className="text-muted-foreground mb-6">
                Don't wait for a cyber attack to happen. Mbaru Technologies offers comprehensive cybersecurity audits and implementation services to protect your business.
              </p>
              <Button variant="cta" size="lg" onClick={scrollToContact} className="w-full md:w-auto">
                Get Your Security Assessment
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CybersecurityBusinessProtection;