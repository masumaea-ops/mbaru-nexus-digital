import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-400">Your Privacy Matters</h2>
              </div>
              <p className="text-blue-800 dark:text-blue-300">
                At Mbaru Technologies, we are committed to protecting your privacy and personal data in accordance with Kenya's Data Protection Act, 2019.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We collect personal information that you voluntarily provide when using our services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Name, email address, and phone number when you contact us</li>
              <li>Company information when requesting business services</li>
              <li>Technical specifications when you request ICT solutions</li>
              <li>Payment information for service transactions</li>
              <li>Communication records for customer support</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4">Technical Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We automatically collect certain technical information when you visit our website:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Device information and screen resolution</li>
              <li>Referral sources and search terms used</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <Lock className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Service Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Providing ICT services, technical support, and maintaining business relationships with our clients.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <Eye className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Communication</h4>
                <p className="text-sm text-muted-foreground">
                  Responding to inquiries, sending service updates, and providing technical documentation.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We do not sell, rent, or share your personal information with third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in delivering our services</li>
              <li>When required by Kenyan law or legal process</li>
              <li>To protect our rights, property, or safety</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal data:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>SSL encryption for all data transmission</li>
              <li>Secure servers with regular security updates</li>
              <li>Access controls and authentication systems</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Staff training on data protection principles</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Under Kenya's Data Protection Act, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to request deletion of your data</li>
              <li>Right to restrict processing of your data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our website uses cookies to improve user experience and analyze website performance. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We retain personal data only as long as necessary for the purposes outlined in this policy or as required by Kenyan law. Client project data is typically retained for 7 years for tax and legal compliance purposes.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have questions about this privacy policy or wish to exercise your data protection rights, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>Data Protection Officer</strong></p>
              <p className="text-muted-foreground mb-2">Mbaru Technologies Ltd</p>
              <p className="text-muted-foreground mb-2">Adams Arcade, Ngong Road, Nairobi</p>
              <p className="text-muted-foreground mb-2">Email: privacy@mbarutechnologies.co.ke</p>
              <p className="text-muted-foreground">Phone: +254 722 123 456</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;