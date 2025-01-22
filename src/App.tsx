import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DataCenter from "./pages/services/DataCenter";
import ManagedServices from "./pages/services/ManagedServices";
import DigitalBanking from "./pages/services/DigitalBanking";
import Cybersecurity from "./pages/services/Cybersecurity";
import EnterpriseApplications from "./pages/services/EnterpriseApplications";
import ITSupplies from "./pages/services/ITSupplies";
import TechnologyResourcing from "./pages/services/TechnologyResourcing";
import BespokeDevelopment from "./pages/services/BespokeDevelopment";
import TechnologyTraining from "./pages/services/TechnologyTraining";
import NOTAPCertificate from "./pages/services/NOTAPCertificate";
import ManageEngine from "./pages/services/ManageEngine";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/data-center" element={<DataCenter />} />
            <Route path="/services/managed-services" element={<ManagedServices />} />
            <Route path="/services/digital-banking" element={<DigitalBanking />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/enterprise-applications" element={<EnterpriseApplications />} />
            <Route path="/services/it-supplies" element={<ITSupplies />} />
            <Route path="/services/technology-resourcing" element={<TechnologyResourcing />} />
            <Route path="/services/bespoke-development" element={<BespokeDevelopment />} />
            <Route path="/services/technology-training" element={<TechnologyTraining />} />
            <Route path="/services/notap-certificate" element={<NOTAPCertificate />} />
            <Route path="/services/manage-engine" element={<ManageEngine />} />
            {/* Catch all route - redirects to home if no match is found */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;