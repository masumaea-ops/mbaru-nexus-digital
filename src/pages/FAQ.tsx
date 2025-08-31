import { ChevronDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What ICT services does Mbaru Technologies offer?",
      answer: "We provide comprehensive ICT services including computer sales & repairs, cloud computing & data backup, web development & e-commerce, corporate ICT training, networking & infrastructure setup, cybersecurity audits, and custom software development."
    },
    {
      question: "Do you provide on-site ICT support in Nairobi?",
      answer: "Yes, we offer on-site support across Nairobi and surrounding areas. Our technicians can visit your office for installations, repairs, network setup, training sessions, and emergency IT support."
    },
    {
      question: "How much does cloud migration cost for a small business?",
      answer: "Cloud migration costs vary based on your current infrastructure, data volume, and required services. We offer free consultations to assess your needs and provide transparent pricing. Small business packages typically start from KES 50,000."
    },
    {
      question: "Can you help with website development and digital marketing?",
      answer: "Absolutely! We specialize in building responsive websites, e-commerce platforms, mobile apps, and providing digital marketing services including SEO, social media management, and online advertising campaigns."
    },
    {
      question: "Do you offer cybersecurity training for businesses?",
      answer: "Yes, we provide comprehensive cybersecurity training programs for businesses of all sizes. Our training covers threat awareness, password security, phishing prevention, data protection, and compliance with Kenya's Data Protection Act."
    },
    {
      question: "What are your payment terms and do you accept M-Pesa?",
      answer: "We accept various payment methods including M-Pesa, bank transfers, cash, and checks. Payment terms depend on the project scope - typically 50% upfront for new clients and 50% upon completion for one-time projects."
    },
    {
      question: "How long does it take to build a professional website?",
      answer: "Website development timeframes vary by complexity. Simple business websites take 1-2 weeks, while complex e-commerce sites or custom applications may take 4-8 weeks. We provide detailed timelines during project planning."
    },
    {
      question: "Do you provide ongoing IT support and maintenance?",
      answer: "Yes, we offer monthly IT support packages including system monitoring, software updates, security patches, backup management, and 24/7 technical support. Packages are customized based on your business needs."
    },
    {
      question: "Are you certified partners with major technology companies?",
      answer: "Yes, we maintain certifications and partnerships with leading technology providers including Microsoft, Cisco, and various cloud service providers. Our team holds industry certifications in cybersecurity, networking, and cloud technologies."
    },
    {
      question: "Can you help with data recovery if we lose important files?",
      answer: "We provide data recovery services for various scenarios including hardware failures, accidental deletion, and system crashes. We also offer backup solutions to prevent data loss in the future."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our ICT services, pricing, and support options. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </header>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our ICT experts are ready to help you find the right solutions for your business.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;