import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComputerSales from "./pages/services/ComputerSales";
import CloudTrendsKenya from "./pages/blog/CloudTrendsKenya";
import CybersecurityBusinessProtection from "./pages/blog/CybersecurityBusinessProtection";
import EcommerceSuccessNairobi from "./pages/blog/EcommerceSuccessNairobi";
import IctTrainingDigitalSkills from "./pages/blog/IctTrainingDigitalSkills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/computer-sales" element={<ComputerSales />} />
          <Route path="/blog/cloud-trends-kenya-2025" element={<CloudTrendsKenya />} />
          <Route path="/blog/cybersecurity-business-protection" element={<CybersecurityBusinessProtection />} />
          <Route path="/blog/ecommerce-success-nairobi" element={<EcommerceSuccessNairobi />} />
          <Route path="/blog/ict-training-digital-skills-kenya" element={<IctTrainingDigitalSkills />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
