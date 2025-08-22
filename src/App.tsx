import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowWeWork from "./pages/HowWeWork";
import SalesTraining from "./pages/SalesTraining";
import PartnerWithUs from "./pages/PartnerWithUs";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Insights from "./pages/Insights";
import Podcast from "./pages/Podcast";
import Pricing from "./pages/Pricing";
import RemoteSalesJobs from "./pages/RemoteSalesJobs";

const queryClient = new QueryClient();

function AppRoutes() {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/how-we-work" element={<HowWeWork />} />
      <Route path="/sales-training" element={<SalesTraining />} />
      <Route path="/partner" element={<PartnerWithUs />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/about" element={<About />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/remote-sales-jobs" element={<RemoteSalesJobs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
