import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+254XXXXXXXXX"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Hello! I'm interested in your ICT services. Could you please provide more information?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-14 w-14 shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};