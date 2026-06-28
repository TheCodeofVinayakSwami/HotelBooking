import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import HotelBooking from "./pages/HotelBooking";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/cab-booking" element={<Placeholder title="Cab Booking" description="Multi-step cab booking interface with vehicle selection, journey details, passenger information, and payment options." />} />
          <Route path="/about-kolhapur" element={<Placeholder title="About Kolhapur" description="Discover the rich history, culture, food, temples, forts, shopping, and best time to visit Kolhapur." />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" description="Get in touch with our team through phone, email, WhatsApp, or our contact form." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
