import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { PageLayout } from "@/components/ui/page-layout";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LucideIcon, Linkedin, Calendar, FileDown, Rocket, Users, GraduationCap, Handshake, ClipboardCheck } from "lucide-react";

const useSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
  }, [title, description]);
};

const teamMembers = Array.from({ length: 16 }).map((_, i) => ({
  name: [
    "Anusha Malhotra","Rohan Gupta","Priya Sharma","Karan Mehta",
    "Ishita Rao","Vikram Iyer","Neha Verma","Arjun Desai",
    "Meera Nair","Suresh Patil","Aisha Khan","Dev Patel",
    "Simran Kaur","Rahul Batra","Pooja Joshi","Aman Kapoor"
  ][i],
  role: [
    "Senior Recruitment Manager","Head of Delivery","Sales Operations Lead","Client Success Manager",
    "Training Lead","Performance Coach","Talent Acquisition","Sales Analyst",
    "Content Strategist","CRM Specialist","Partnerships Manager","Onboarding Lead",
    "People Ops","Account Strategist","Enablement Lead","Community Manager"
  ][i],
  linkedin: "#"
}));

const clients = Array.from({ length: 25 }).map((_, i) => ({
  name: `Client ${i + 1}`,
  niche: ["Coaching","SaaS","E-Learning","Consulting"][i % 4]
}));

const testimonials = [
  {
    name: "Sandeep Bhansali",
    niche: "Marketing Coach",
    quote: "From ₹16L to ₹2.3CR in 12 months with EC's performance-driven team.",
  },
  {
    name: "Vishal Manocha",
    niche: "Business Coach",
    quote: "Scaled from ₹1CR to ₹2CR/month. Systems, not luck.",
  },
  {
    name: "Ananya Singh",
    niche: "Course Creator",
    quote: "Hired, trained, and managed a sales team that finally performs without me.",
  },
  {
    name: "Rajat Verma",
    niche: "SaaS Founder",
    quote: "Daily reviews, clear KPIs, predictable pipeline. Exactly what we needed.",
  },
  {
    name: "Neha Jain",
    niche: "Health Coach",
    quote: "EC helped us standardize scripts and beat our old close rates by 40%.",
  },
];

const timeline = [
  { year: 2019, text: "Company founded in Mumbai; first 3 clients onboarded" },
  { year: 2020, text: "Launched CloserVerse beta community (200+ members)" },
  { year: 2020, text: "First cohort-based sales bootcamp; 50 certified reps" },
  { year: 2021, text: "Introduced KPI-led daily reviews across all accounts" },
  { year: 2021, text: "Built SOP library for scripts, CRM, and hiring workflows" },
  { year: 2022, text: "Crossed 1,000 talent applications; vetting engine live" },
  { year: 2022, text: "Launched white-label program for partner agencies" },
  { year: 2023, text: "Expanded into SaaS; new training tracks for product demos" },
  { year: 2024, text: "AI-assisted call reviews rolled out; improved close rates" },
  { year: 2025, text: "Closer Readiness Scorecard v2 and ecosystem integrations" },
];

const quickLinks: { title: string; desc: string; href: string; Icon: LucideIcon }[] = [
  { title: "Download Our Recruitment Guide", desc: "Proven frameworks to hire right.", href: "/partner", Icon: FileDown },
  { title: "Take the Readiness Assessment", desc: "Score your sales engine.", href: "/partner", Icon: ClipboardCheck },
  { title: "Book a Free Discovery Call", desc: "Plan your next revenue leap.", href: "/partner", Icon: Calendar },
  { title: "Become a Partner", desc: "Join our ecosystem.", href: "/partner", Icon: Handshake },
  { title: "Apply to Talent Pool", desc: "Join as Setter/Closer.", href: "/partner", Icon: Users },
  { title: "Explore Free Training", desc: "Level up your sales skills.", href: "/sales-training", Icon: GraduationCap },
  { title: "See How We Work", desc: "Our end-to-end process.", href: "/how-we-work", Icon: Rocket },
  { title: "Get Started Now", desc: "Kick off with a plan.", href: "/partner", Icon: Rocket },
];


const About: React.FC = () => {
  useSEO("About | Exclusive Closer", "About Exclusive Closer: why we exist, vision & mission, founders story, team, clients, timeline, and quick links to get started.");

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  

  // Auto-advance testimonials
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <PageLayout
        title="About Exclusive Closer"
        subtitle="We exist to build performance, not just placements."
        intro="We believe digital product companies deserve real sales partners - not generic placements. Our clients don’t just need closers. They need clarity, leadership, and a Killer Sales engine that works without them."
        ctas={[
          { text: "Get Started →", variant: "default" as const },
          { text: "See How We Work →", variant: "outline" as const },
        ]}
      >
        <div className="container mx-auto max-w-6xl px-4 space-y-24">
          {/* Why We Exist */}
          <section className="animate-fade-in">
            <div className="text-center mb-10">
              <Badge className="mb-4">Why We Exist</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">The Problem We Set Out to Solve</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We exist because we see too many talented educators spending time on sales calls instead of doing what they love - creating.
                And on the flip side, we saw gifted sales professionals stuck in toxic work cultures, treated like disposable resources.
                Both deserve better - and that's where we started.
              </p>
            </div>
            <Card className="p-8 border-border/50 bg-card/50">
              <p className="text-foreground text-lg leading-relaxed">
                We believe digital product companies deserve real sales partners - not generic placements. Our clients don’t just need closers.
                They need clarity, leadership, and a Killer Sales engine that works without them.
              </p>
            </Card>
          </section>

          {/* Vision & Mission */}
          <section className="py-12 rounded-2xl bg-muted animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold mb-4">Vision</h3>
                <p className="text-xl font-heading bg-gradient-gold bg-clip-text text-transparent">
                  Build the largest remote sales ecosystem in the world - trusted by transformational digital product brands.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold mb-4">Mission</h3>
                <p className="text-xl text-foreground">
                  Build long lasting real relationships with the RIGHT people to drivee sustainable revenue growth for our partners
                </p>
              </div>
            </div>
          </section>

          {/* Founders Story (Video) */}
          <section className="animate-fade-in">
            <div className="text-center mb-8">
              <Badge className="mb-4">Founders Story</Badge>
              <h2 className="text-3xl font-heading font-bold">What Makes a Killer Sales Rep?</h2>
              <p className="text-muted-foreground">A brief philosophy from Aum or Aniket on hiring, training, and mindset.</p>
            </div>
            <div className="rounded-xl border border-border overflow-hidden bg-card">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full flex items-center justify-center bg-muted relative">
                  <img src="/placeholder.svg" alt="Founder video placeholder" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                  <Button className="relative z-10 bg-gradient-gold hover-scale">Play</Button>
                </div>
              </AspectRatio>
            </div>
          </section>

          {/* Team Grid 4x4 */}
          <section className="animate-fade-in">
            <div className="text-center mb-10">
              <Badge className="mb-4">Team</Badge>
              <h2 className="text-4xl font-heading font-bold">The Backbone Behind Exclusive Closer’s Success</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <Card key={idx} className="p-6 text-center hover-scale">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border border-border">
                    <img src="/placeholder.svg" alt={`${member.name} headshot`} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-heading font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                  <a href={member.linkedin} className="inline-flex items-center gap-2 story-link" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </Card>
              ))}
            </div>
          </section>

          {/* Clients + Testimonials */}
          <section className="animate-fade-in">
            <div className="text-center mb-10">
              <Badge className="mb-4">Clients & Testimonials</Badge>
              <h2 className="text-4xl font-heading font-bold">Trusted by Top 1% Mentors and Coaching Businesses in India</h2>
            </div>
            {/* 5x5 client grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
              {clients.map((c, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border border-border mb-3">
                    <img src="/placeholder.svg" alt={`${c.name} headshot - ${c.niche}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.niche}</div>
                </div>
              ))}
            </div>

            {/* Auto-scrolling testimonial carousel */}
            <div className="relative max-w-3xl mx-auto">
              <Card className="p-8 text-center">
                <blockquote className="text-lg leading-relaxed">“{testimonials[activeTestimonial].quote}”</blockquote>
                <div className="mt-4 text-sm text-muted-foreground">
                  - {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].niche}
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2 w-2 rounded-full ${idx === activeTestimonial ? 'bg-primary' : 'bg-border'}`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Company Timeline */}
          <section className="animate-fade-in">
            <div className="text-center mb-10">
              <Badge className="mb-4">Company Timeline</Badge>
              <h2 className="text-4xl font-heading font-bold">Our Journey from Vision to Impact</h2>
            </div>
            <Timeline items={timeline} />
          </section>

          {/* Quick Links */}
          <section className="animate-fade-in">
            <div className="text-center mb-10">
              <Badge className="mb-4">Get Started</Badge>
              <h2 className="text-4xl font-heading font-bold">Ready to Get Started?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((item, idx) => (
                <Card key={idx} className="p-6 flex flex-col gap-4 hover-scale">
                  <item.Icon className="h-6 w-6 text-primary" />
                  <h4 className="font-heading font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <div className="mt-auto">
                    <Link to={item.href} className="inline-block">
                      <Button size="sm" variant="outline">Go →</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </PageLayout>
      <UpdatedFooter />
    </div>
  );
};

export default About;
