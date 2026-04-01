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
    "/how-we-work": "How We Work — Systematic Sales Engine Building",
    "/sales-training": "Sales Training & Recruitment — Scale Your Income",
    "/partner": "Partner With Us — Build Your Million Dollar Team",
    "/get-started": "Get Started — Book Your Discovery Call",
    "/about": "About Us — Our Story and Mission",
    "/insights": "Insights — Sales Strategies and Case Studies",
    "/podcast": "Podcast — The Killer Sales Engine",
    "/pricing": "Pricing — Transparent Sales Team Solutions",
    "/remote-sales-jobs": "Remote Sales Jobs — High-Ticket Opportunities",
  };

  const routeDescriptions: Record<string, string> = {
    "/": "India's #1 Remote Sales Partner for Coaches, SaaS & EdTech. We help you scale revenue by installing high-performance remote sales teams.",
    "/how-we-work": "Learn our proven process for auditing, building, and managing remote sales teams that drive consistent revenue.",
    "/sales-training": "Join our 21-day intensive sales training program. Master high-ticket closing and get placed with top global brands.",
    "/partner": "Trusted by India's top coaches. Partner with us to install a fully managed sales team that takes ownership of your pipeline.",
    "/get-started": "Ready to scale? Book a 30-minute discovery call to see how we can build your million-dollar sales engine.",
    "/about": "Founded by Aum Janakiram and Aniket Kumar. We help brilliant founders escape their sales process and focus on growth.",
    "/insights": "Read our latest articles on sales management, revenue scaling, and high-ticket closing strategies.",
    "/podcast": "Listen to the Killer Sales Engine Podcast for interviews with industry leaders on building high-performance teams.",
    "/pricing": "View our flexible pricing options for sales recruitment, training, and fully managed sales team solutions.",
    "/remote-sales-jobs": "Looking for the next step in your career? Browse high-paying remote sales roles for closers and setters.",
  };
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{routeTitles[location.pathname] ?? "Exclusive Closer"}</title>
        <meta name="description" content={routeDescriptions[location.pathname] ?? "India's #1 Remote Sales Partner for Coaches, SaaS & EdTech."} />
        <link rel="canonical" href={globalThis.location?.origin + location.pathname} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={routeTitles[location.pathname] ?? "Exclusive Closer"} />
        <meta property="og:description" content={routeDescriptions[location.pathname] ?? "India's #1 Remote Sales Partner for Coaches, SaaS & EdTech."} />
        <meta property="og:url" content={globalThis.location?.origin + location.pathname} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={routeTitles[location.pathname] ?? "Exclusive Closer"} />
        <meta name="twitter:description" content={routeDescriptions[location.pathname] ?? "India's #1 Remote Sales Partner for Coaches, SaaS & EdTech."} />
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
