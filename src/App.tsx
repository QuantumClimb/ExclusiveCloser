import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { ThemeProvider } from "next-themes";
import React, { Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HowWeWork = lazy(() => import("./pages/HowWeWork"));
const SalesTraining = lazy(() => import("./pages/SalesTraining"));
const PartnerWithUs = lazy(() => import("./pages/PartnerWithUs"));
const About = lazy(() => import("./pages/About"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const Insights = lazy(() => import("./pages/Insights"));
const Podcast = lazy(() => import("./pages/Podcast"));
const Pricing = lazy(() => import("./pages/Pricing"));
const RemoteSalesJobs = lazy(() => import("./pages/RemoteSalesJobs"));

const queryClient = new QueryClient();

function AppRoutes() {
  useScrollToTop();

  // Basic per-route SEO titles. Extend with descriptions as needed.
  const routeTitles: Record<string, string> = {
    "/": "Exclusive Closer — India’s #1 Remote Sales Partner",
    "/how-we-work": "How We Work — Exclusive Closer",
    "/sales-training": "Sales Training — Exclusive Closer",
    "/partner": "Partner With Us — Exclusive Closer",
    "/get-started": "Get Started — Exclusive Closer",
    "/about": "About Us — Exclusive Closer",
    "/insights": "Insights — Exclusive Closer",
    "/podcast": "Podcast — Exclusive Closer",
    "/pricing": "Pricing — Exclusive Closer",
    "/remote-sales-jobs": "Remote Sales Jobs — Exclusive Closer",
  };
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{routeTitles[location.pathname] ?? "Exclusive Closer"}</title>
        <link rel="canonical" href={globalThis.location?.origin + location.pathname} />
      </Helmet>
      <Suspense fallback={<div className="p-6 text-muted-foreground">Loading…</div>}>
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
      </Suspense>
    </>
  );
}

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
