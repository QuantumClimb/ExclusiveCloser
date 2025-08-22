import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { PageLayout } from '@/components/ui/page-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Users, CheckCircle, Target } from 'lucide-react';

const RemoteSalesJobs = () => {
  const jobTypes = [
    {
      title: "High-Ticket Closers",
      earning: "₹50K - ₹2L+/month",
      description: "Close deals worth ₹1L-₹10L+. Commission-based with unlimited earning potential.",
      requirements: ["2+ years sales experience", "Proven track record", "English fluency"],
      commitment: "Full-time"
    },
    {
      title: "Appointment Setters", 
      earning: "₹25K - ₹75K/month",
      description: "Book qualified appointments for high-ticket offers. Perfect for getting started.",
      requirements: ["Basic sales skills", "Good communication", "Reliable internet"],
      commitment: "Part-time/Full-time"
    },
    {
      title: "Sales Team Leaders",
      earning: "₹1L - ₹3L+/month",
      description: "Manage teams of 5-15 reps. Train, coach, and drive performance.",
      requirements: ["5+ years sales experience", "Team management", "Leadership skills"],
      commitment: "Full-time"
    }
  ];

  const currentOpenings = [
    {
      title: "Senior High-Ticket Closer",
      company: "SaaS Coaching Company",
      type: "Full-time Remote",
      earning: "₹80K - ₹2L/month",
      location: "India",
      tags: ["B2B SaaS", "Commission", "Proven Track Record Required"]
    },
    {
      title: "Appointment Setter",
      company: "Digital Marketing Agency", 
      type: "Part-time Remote",
      earning: "₹30K - ₹60K/month",
      location: "India",
      tags: ["Entry Level", "Training Provided", "Growth Opportunity"]
    },
    {
      title: "Sales Team Leader",
      company: "Online Coaching Business",
      type: "Full-time Remote", 
      earning: "₹1.5L - ₹2.5L/month",
      location: "India",
      tags: ["Leadership", "Team Management", "Performance Bonuses"]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out our detailed application form with your experience and goals."
    },
    {
      step: 2,
      title: "Skills Assessment",
      description: "Complete our sales skills assessment and role-play scenarios."
    },
    {
      step: 3,
      title: "Interview Process",
      description: "1-on-1 interview with our recruitment team and role-specific evaluation."
    },
    {
      step: 4,
      title: "Training & Onboarding",
      description: "14-21 day intensive training program before starting with clients."
    }
  ];

  const ctas = [
    { text: "Apply Now", icon: <Target className="w-5 h-5 mr-2" /> },
    { text: "Join the Waitlist", variant: "outline" as const, icon: <Users className="w-5 h-5 mr-2" /> },
    { text: "Explore Open Roles", variant: "secondary" as const, icon: <CheckCircle className="w-5 h-5 mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <PageLayout
        title="High-Ticket Remote Sales Jobs"
        subtitle="Work from anywhere. Earn like a closer."
        intro="Stop trading time for money in low-paying jobs. Join India's top remote sales professionals earning ₹50K-₹2L+ per month working with growth-stage companies worldwide. All positions are 100% remote with performance-based compensation."
        ctas={ctas}
      >
      <div className="container mx-auto max-w-6xl px-4 space-y-24">
        
        {/* Who It's For */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Career Opportunities</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Who These Jobs Are For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're experienced in sales or just getting started, we have opportunities that match your skill level.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {jobTypes.map((job, index) => (
              <Card key={index} className="p-8 border-border/50">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-3">
                    {job.earning}
                  </div>
                  <Badge variant="outline" className="mb-4">{job.commitment}</Badge>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="text-sm font-semibold">Requirements:</div>
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full">Apply for {job.title}</Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Available Now</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Current Job Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Live opportunities from our partner companies. Apply today to start your remote sales career.
            </p>
          </div>
          
          <div className="space-y-6">
            {currentOpenings.map((job, index) => (
              <Card key={index} className="p-8 border-border/50 hover:border-primary/20 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="text-lg font-bold text-primary">{job.earning}</div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Button size="lg">Apply Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">How It Works</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Application Flow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our thorough screening process ensures you're set up for success before starting with any client.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="p-8 border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Remote Sales */}
        <div>
          <Card className="p-8 border-border/50 bg-card/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Remote Sales?</h2>
              <p className="text-xl text-muted-foreground">
                The benefits of building a career in high-ticket remote sales.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                  🌍
                </div>
                <h3 className="text-lg font-semibold mb-2">Location Freedom</h3>
                <p className="text-muted-foreground text-sm">Work from anywhere with reliable internet</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                  💰
                </div>
                <h3 className="text-lg font-semibold mb-2">Unlimited Earning</h3>
                <p className="text-muted-foreground text-sm">Performance-based compensation with no ceiling</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                  🚀
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground text-sm">Clear progression from setter to closer to leader</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-lg font-semibold mb-2">Skill Development</h3>
                <p className="text-muted-foreground text-sm">Continuous training and mentorship</p>
              </div>
            </div>
          </Card>
        </div>

      </div>
      </PageLayout>
      <UpdatedFooter />
    </div>
  );
};

export default RemoteSalesJobs;