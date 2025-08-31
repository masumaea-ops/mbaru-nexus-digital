import { ArrowLeft, Calendar, User, Clock, GraduationCap, Laptop, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const IctTrainingDigitalSkills = () => {
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
                Training
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ICT Training: Building Digital Skills for Kenya's Future
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              How corporate ICT training programs are transforming workplaces and preparing Kenyan professionals for the digital economy.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">Grace Trainer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">December 28, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">4 min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="ICT Training Digital Skills Kenya"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-card"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              As Kenya positions itself as a technology hub in East Africa, the demand for digital skills continues to grow. Corporate ICT training has become essential for businesses looking to remain competitive in an increasingly digital world.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400">Skills Gap Crisis</h3>
              </div>
              <p className="text-blue-800 dark:text-blue-300">
                78% of Kenyan employers report difficulty finding workers with adequate digital skills. Training is no longer optional—it's essential for survival.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">The Digital Skills Revolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kenya's Vision 2030 emphasizes the importance of ICT in national development. Companies that invest in employee digital literacy see improved productivity, reduced operational costs, and better competitive positioning in the market.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Essential ICT Training Areas</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <Laptop className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Basic Digital Literacy</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Microsoft Office Suite</li>
                  <li>• Email communication</li>
                  <li>• Internet research skills</li>
                  <li>• File management</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Collaboration Tools</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Video conferencing</li>
                  <li>• Project management</li>
                  <li>• Cloud file sharing</li>
                  <li>• Team communication</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <GraduationCap className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Advanced Skills</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Data analysis</li>
                  <li>• Cybersecurity awareness</li>
                  <li>• Social media marketing</li>
                  <li>• E-commerce platforms</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Training Delivery Methods</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Successful ICT training programs in Kenya combine multiple delivery methods. On-site workshops provide hands-on experience, while online modules offer flexibility for busy professionals. Blended learning approaches yield the best results, with continuous assessments and certifications validating skill acquisition.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Measuring Training Impact</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Organizations that track training effectiveness report average productivity increases of 15-25% within six months. Key performance indicators include reduced IT support tickets, faster task completion times, and improved employee confidence with technology.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Industry-Specific Training Needs</h2>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Banking & Finance:</strong> Digital payment systems, mobile banking platforms, regulatory compliance software</li>
              <li><strong>Healthcare:</strong> Electronic health records, telemedicine platforms, medical device software</li>
              <li><strong>Education:</strong> Learning management systems, virtual classroom tools, educational technology</li>
              <li><strong>Agriculture:</strong> Farm management software, weather monitoring apps, supply chain platforms</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Future-Proofing Your Workforce</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As artificial intelligence and automation reshape the job market, continuous learning becomes crucial. Organizations must create cultures of lifelong learning, with regular skills assessments and updated training curricula that align with emerging technologies.
            </p>

            <div className="bg-muted/50 p-6 md:p-8 rounded-lg mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Invest in Your Team's Digital Future</h3>
              <p className="text-muted-foreground mb-6">
                Mbaru Technologies offers comprehensive corporate ICT training programs tailored to Kenyan businesses. From basic digital literacy to advanced technical skills, we help your team stay competitive in the digital economy.
              </p>
              <Button variant="cta" size="lg" onClick={scrollToContact} className="w-full md:w-auto">
                Schedule Training Consultation
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default IctTrainingDigitalSkills;