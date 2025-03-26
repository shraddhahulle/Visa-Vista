
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Eligibility from "./pages/Eligibility";
import VisaTypes from "./pages/VisaTypes";
import Documents from "./pages/Documents";
import UKCities from "./pages/UKCities";
import UKOfficesMap from "./pages/UKOfficesMap";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Healthcare from "./pages/Healthcare";
import CostCalculator from "./pages/CostCalculator";
import VisaKnowledge from "./pages/VisaKnowledge";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/visa-types" element={<VisaTypes />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/uk-cities" element={<UKCities />} />
          <Route path="/uk-offices-map" element={<UKOfficesMap />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/visa-knowledge" element={<VisaKnowledge />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
