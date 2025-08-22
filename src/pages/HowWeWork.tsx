import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { PageLayout } from '@/components/ui/page-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, Users, TrendingUp, Phone, PlayCircle, DollarSign, ArrowRight, Star, Award, Calendar, FileText, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowWeWork = () => {
  const clientSuccessStories = [
    {
      name: "Sandeep Bhansali",
      niche: "Business Coach",
      headshot: "/api/placeholder/80/80",
      metrics: "₹16L ➝ ₹2.3CR in 12 months",
      href: "#case-study-sandeep"
    },
    {
      name: "Vishal Manocha", 
      niche: "Sales Training",
      headshot: "/api/placeholder/80/80",
      metrics: "41% close rate achieved",
      href: "#case-study-vishal"
    },
    {
      name: "Gopal Krishnan",
      niche: "SaaS Founder",
      headshot: "/api/placeholder/80/80", 
      metrics: "3x conversion boost",
      href: "#case-study-gopal"
    },
    {
      name: "Rajesh Kumar",
      niche: "Coaching Platform",
      headshot: "/api/placeholder/80/80",
      metrics: "₹50L ARR in 8 months",
      href: "#case-study-rajesh"
    }
  ];

  const differences = [
    {
      title: "Full-Stack Sales Engines",
      description: "Unlike most companies who just throw setters or closers at your funnel and hope for the best, we build full-stack sales engines designed to scale sustainably."
    },
    {
      title: "Build, Train & Lead",
      description: "We don't 'staff and forget' — we build, train, and lead your team like it's our own. Every rep is sourced, screened, vetted and upskilled if required."
    },
    {
      title: "Proven Retention",
      description: "Our performance is backed by 12+ months average client retention. We combine recruitment, onboarding, leadership, and week-on-week optimization."
    },
    {
      title: "Full Team Access",
      description: "You get access to a full team: recruiter, coach, trainer, and sales leader — led by real operators, not just consultants."
    }
  ];

  const process = [
    { 
      step: 1, 
      icon: Phone,
      title: "Discovery Call", 
      description: "Fit check and expectations\nAlignment on growth goals" 
    },
    { 
      step: 2, 
      icon: BarChart,
      title: "Sales Audit (Paid)", 
      description: "Funnel, offer, CRM analysis\nTeam readiness assessment" 
    },
    { 
      step: 3, 
      icon: CheckCircle,
      title: "Readiness Scorecard", 
      description: "Identify gaps & growth levers\nCustom implementation roadmap" 
    },
    { 
      step: 4, 
      icon: Users,
      title: "Recruitment + Vetting", 
      description: "From the CloserVerse ecosystem\nRigorous screening process" 
    },
    { 
      step: 5, 
      icon: Target,
      title: "Onboarding + Training", 
      description: "Systems, scripts, CRM SOPs\nComplete team integration" 
    },
    { 
      step: 6, 
      icon: TrendingUp,
      title: "Management & Optimization", 
      description: "Daily reviews, KPIs, reporting\nContinuous performance tuning" 
    }
  ];

  const outcomes = [
    {
      client: "Sandeep Bhansali",
      result: "₹16L → ₹2.3CR in 12 months",
      metric: "1,337% revenue growth",
      description: "Complete sales engine transformation with systematic scaling approach"
    },
    {
      client: "Vishal Manocha", 
      result: "41% close rate achieved",
      metric: "EC-trained reps",
      description: "High-performance team delivering consistent results with proven methodologies"
    },
    {
      client: "Gopal Krishnan",
      result: "High-ticket conversion boost",
      metric: "Webinar funnel optimization",
      description: "Complete funnel overhaul resulting in significantly improved conversion rates"
    }
  ];

  const testimonials = [
    {
      quote: "They didn't just send closers - they rebuilt our entire sales system.",
      author: "Vishal Manocha",
      company: "Business Coach"
    }
  ];

  const finalCtas = [
    {
      icon: Calendar,
      title: "Book Your Free Discovery Call",
      benefit: "Get a custom growth strategy session",
      buttonText: "Schedule Now"
    },
    {
      icon: FileText,
      title: "Download the Recruitment Guide",
      benefit: "Complete hiring templates & checklists",
      buttonText: "Get Free Guide"
    },
    {
      icon: Award,
      title: "Take the Closer Readiness Assessment",
      benefit: "Know if your team is ready to scale",
      buttonText: "Start Assessment"
    }
  ];

  const ctas = [
    { text: "Get Started →", variant: "default" as const, href: "/partner" },
    { text: "Book a Discovery Call →", variant: "outline" as const }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <PageLayout
        title="Not Just Staff. Full-Stack Sales Engines."
        subtitle="We don't send people. We build performance."
        intro="Unlike most sales enablement companies who just throw setters or closers at your funnel and hope for the best, we build full-stack sales engines designed to scale sustainably. We combine recruitment, onboarding, leadership, and week-on-week optimization into one seamless system — led by real operators, not just consultants."
        ctas={ctas}
      >
        <div className="container mx-auto max-w-6xl px-4 space-y-24">
          
          {/* Client Success Fold */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Proven. Predictable. Scalable.</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">Here's how we've helped coaching and SaaS brands build revenue engines that don't rely on founder hustle.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientSuccessStories.map((client, index) => (
                <Card key={index} className="p-6 border-border/50 hover:border-primary/20 transition-all group cursor-pointer">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-subtle rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Star className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{client.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{client.niche}</p>
                    <div className="text-primary font-bold text-lg mb-4">{client.metrics}</div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      See How We Did It
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Why We're Different */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Advantage</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">Why We're Different</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                While others focus on staffing, we focus on systems. Here's what sets us apart from generic sales firms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {differences.map((diff, index) => (
                <Card key={index} className="p-8 border-border/50 hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
                      <p className="text-muted-foreground">{diff.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Method</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">We Don't Just Build Sales Teams. We Engineer Performance.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our Killer Sales Engine – Step by Step
              </p>
            </div>
            
            {/* Horizontal Process Flow */}
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                {process.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 relative">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Founder Philosophy Video */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Founder Philosophy</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">What Makes a Killer Sales Rep?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Why 90% of our talent is sourced from our own training ecosystem.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-subtle rounded-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors">
                      <PlayCircle className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Watch Our Approach</p>
                    <p className="text-sm text-muted-foreground">Click to play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Outcomes */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Proven Results</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">Client Outcomes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from real clients who trusted us to build their sales engines.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <Card key={index} className="p-8 border-border/50 text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                      {outcome.result}
                    </div>
                    <div className="text-lg text-primary font-semibold mb-1">{outcome.metric}</div>
                    <div className="text-sm text-muted-foreground">- {outcome.client}</div>
                  </div>
                  <p className="text-muted-foreground">{outcome.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Client Feedback</Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">What Our Clients Say</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 border-border/50 text-center">
                  <blockquote className="text-xl text-foreground font-medium mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-primary font-semibold">
                    - {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-gradient-subtle rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-6">Ready to Build a Sales Team That Performs Without You?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {finalCtas.map((cta, index) => {
                const IconComponent = cta.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{cta.title}</h3>
                    <p className="text-muted-foreground mb-6">{cta.benefit}</p>
                    <Button className="w-full" size="lg">
                      {cta.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </PageLayout>
      <UpdatedFooter />
    </div>
  );
};

export default HowWeWork;