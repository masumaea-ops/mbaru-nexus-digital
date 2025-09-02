import { Download, FileText, Monitor, Shield, Cloud, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  {
    title: "ICT Security Checklist",
    description: "Essential cybersecurity measures for Kenyan businesses",
    icon: Shield,
    fileSize: "2.1 MB",
    type: "PDF"
  },
  {
    title: "Cloud Migration Guide",
    description: "Step-by-step guide to migrating your business to the cloud",
    icon: Cloud,
    fileSize: "3.5 MB",
    type: "PDF"
  },
  {
    title: "Network Setup Guide",
    description: "Best practices for setting up business networks",
    icon: Wifi,
    fileSize: "1.8 MB",
    type: "PDF"
  },
  {
    title: "Computer Buying Guide",
    description: "How to choose the right computers for your business",
    icon: Monitor,
    fileSize: "1.2 MB",
    type: "PDF"
  }
];

export const DownloadableResources = () => {
  const handleDownload = (title: string) => {
    // Real file download - files should be uploaded to /public/downloads/
    const filename = title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.target = '_blank';
    
    // Check if file exists before attempting download
    fetch(link.href, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert(`File not found: ${filename}. Please upload the PDF files to /public/downloads/ folder.`);
        }
      })
      .catch(() => {
        alert(`Error accessing file: ${filename}. Please ensure the file exists in /public/downloads/`);
      });
  };

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Free ICT Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download our comprehensive guides and checklists to help you make informed ICT decisions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="text-xs text-muted-foreground mb-4">
                    {resource.type} • {resource.fileSize}
                  </div>
                  <Button
                    onClick={() => handleDownload(resource.title)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Need a custom guide for your specific ICT needs? 
            <Button variant="link" className="p-0 ml-1 h-auto text-sm">
              Contact our experts
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};