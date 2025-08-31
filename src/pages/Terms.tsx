import { FileText, AlertCircle, Scale, Shield } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/30 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
                <h2 className="text-xl font-bold text-yellow-900 dark:text-yellow-400">Important Notice</h2>
              </div>
              <p className="text-yellow-800 dark:text-yellow-300">
                By using our services, you agree to these terms and conditions. Please read them carefully before engaging our ICT services.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">1. About Mbaru Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mbaru Technologies Ltd is a company incorporated under the laws of Kenya, providing comprehensive ICT services including but not limited to computer sales, cloud computing, web development, cybersecurity, and corporate training services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">2. Service Agreement</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">Service Delivery</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>All services are provided in accordance with agreed specifications and timelines</li>
              <li>Changes to project scope must be agreed in writing and may incur additional charges</li>
              <li>We reserve the right to subcontract certain services to qualified third parties</li>
              <li>Service delivery may be affected by factors beyond our control</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Client Responsibilities</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Provide accurate information and requirements for service delivery</li>
              <li>Grant necessary access to systems and facilities as required</li>
              <li>Make timely payments according to agreed terms</li>
              <li>Cooperate with our team during project implementation</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">3. Payment Terms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <Scale className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Payment Schedule</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 50% upfront payment for new clients</li>
                  <li>• Balance due upon project completion</li>
                  <li>• Monthly payments for ongoing support</li>
                  <li>• Overdue accounts subject to interest</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Accepted Methods</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• M-Pesa and mobile money</li>
                  <li>• Bank transfers (RTGS/EFT)</li>
                  <li>• Cash payments (receipted)</li>
                  <li>• Company checks</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Custom software and applications developed for clients remain client property upon full payment</li>
              <li>Pre-existing tools, frameworks, and methodologies remain our intellectual property</li>
              <li>We retain the right to use non-confidential techniques and know-how in future projects</li>
              <li>Client data and confidential information is treated with strict confidentiality</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">5. Warranties and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">Service Warranties</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Hardware sales include manufacturer warranties</li>
              <li>Software development includes 90-day bug fix warranty</li>
              <li>Network installations include 12-month workmanship warranty</li>
              <li>Training services include course completion certificates</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our liability is limited to the value of services provided. We are not liable for indirect damages, lost profits, or consequential losses except where required by Kenyan law.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">6. Data Protection and Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We comply with Kenya's Data Protection Act, 2019:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Client data is processed lawfully and securely</li>
              <li>Access to client systems is strictly controlled</li>
              <li>Data breaches are reported within 72 hours</li>
              <li>Clients retain ownership of their data</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">7. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are not liable for delays or failures due to circumstances beyond our control including natural disasters, government actions, power outages, internet disruptions, or other force majeure events.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Either party may terminate services with 30 days written notice. Immediate termination is allowed for material breach. All outstanding payments remain due upon termination.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">9. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Disputes will be resolved through:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Direct negotiation between parties</li>
              <li>Mediation through Kenya Association of Manufacturers</li>
              <li>Arbitration under Kenyan Arbitration Act</li>
              <li>Kenyan courts as final resort</li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These terms are governed by the laws of Kenya. Any legal proceedings will be conducted in Kenyan courts with jurisdiction in Nairobi.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-2">For questions about these terms and conditions:</p>
              <p className="text-muted-foreground mb-2">Mbaru Technologies Ltd</p>
              <p className="text-muted-foreground mb-2">Adams Arcade, Ngong Road, Nairobi</p>
              <p className="text-muted-foreground mb-2">Email: legal@mbarutechnologies.co.ke</p>
              <p className="text-muted-foreground">Phone: +254 722 123 456</p>
            </div>

            <p className="text-sm text-muted-foreground">
              These terms may be updated periodically. Continued use of our services constitutes acceptance of any modifications.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;