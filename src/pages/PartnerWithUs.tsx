import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { PageLayout } from '@/components/ui/page-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Handshake, Target, Users, TrendingUp, Phone, UserPlus, Award } from 'lucide-react';

const PartnerWithUs = () => {
  const partnerRoles = [
    {
      title: "Hunter – The Connector",
      description: "Refer top-tier sales talent or warm leads. Set appointments with potential clients and earn payouts for each successful conversion.",
      earning: "Conversion-based payouts",
      requirements: ["Recruiters, connectors, ex-sales pros", "Network in sales industry", "Eye for talent and connections"],
      commitment: "Flexible",
      idealFor: "Recruiters, connectors, ex-sales pros"
    },
    {
      title: "Sales Trainer Partner",
      description: "Co-host cohorts with us and deliver outcome-based bootcamps to develop high-performing sales professionals.",
      earning: "Revenue share + co-hosting fees",
      requirements: ["High-ticket sales experience", "Training/coaching expertise", "Proven track record"],
      commitment: "Part-time/Full-time",
      idealFor: "Trainers with high-ticket sales experience"
    },
    {
      title: "Closer – The Deal Maker",
      description: "Close high-ticket sales for coaching & SaaS brands. Access weekly reviews and high-paying opportunities.",
      earning: "₹1L - ₹3L+/month",
      requirements: ["Persuasive closing skills", "Consistency in performance", "High-ticket experience"],
      commitment: "Full-time",
      idealFor: "Persuasive, consistent closers"
    },
    {
      title: "Leader – The Growth Officer",
      description: "Coach setters and closers. Lead performance reviews across client accounts and drive team growth.",
      earning: "₹1.5L - ₹4L+/month", 
      requirements: ["Strategic sales management", "Team coaching experience", "Performance optimization skills"],
      commitment: "Full-time",
      idealFor: "Strategic sales managers"
    },
    {
      title: "White Label Partner – The Salespreneur",
      description: "Build your own sales consulting business backed by Exclusive Closer. Own relationships, drive execution — we support you with credibility, SOPs, and talent.",
      earning: "Own business + EC backing",
      requirements: ["Existing client relationships", "Sales consulting experience", "Entrepreneurial drive"],
      commitment: "Partnership",
      idealFor: "Agencies, consultants, and sales coaches"
    },
    {
      title: "SaaS & Consulting Powerhouses – The Solution Partners",
      description: "Bundle your proven tool or offer into our ecosystem. We co-create bundles, plug into our client delivery, or refer you as a preferred vendor.",
      earning: "Revenue sharing + referrals",
      requirements: ["Proven B2B tool/service", "Sales-focused solution", "Integration capabilities"],
      commitment: "Strategic Partnership",
      idealFor: "B2B SaaS tools, CRMs, automation platforms, analytics, funnel builders"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Transparent Payouts",
      description: "Clear, fair compensation structures with no hidden fees or surprise deductions"
    },
    {
      icon: "📈",
      title: "Skill-Based Growth Paths",
      description: "Structured development opportunities to advance within our ecosystem"
    },
    {
      icon: "🏆",
      title: "High-Performance Culture",
      description: "Work alongside top performers in a results-driven environment"
    },
    {
      icon: "🌐",
      title: "Scalable Opportunities",
      description: "Access to multiple portfolios and diverse client opportunities across industries"
    }
  ];

  const whyPartner = [
    "We're building India's largest remote sales ecosystem",
    "Proven track record with 30+ successful client partnerships",
    "Growing demand for remote sales talent and training",
    "Multiple revenue streams and growth opportunities",
    "Strong brand reputation and market credibility",
    "Comprehensive support and infrastructure"
  ];

  const ctas = [
    { text: "Book a Partner Call", icon: <Phone className="w-5 h-5 mr-2" /> },
    { text: "Apply Based on Role", variant: "outline" as const, icon: <UserPlus className="w-5 h-5 mr-2" /> },
    { text: "Schedule Strategy Session", variant: "secondary" as const, icon: <Target className="w-5 h-5 mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <PageLayout
        title="Your Role in the Remote Sales Ecosystem"
        subtitle="Let's build the future of high-ticket sales — together."
        intro="Remote Sales is not just growing — it's exploding. The digital economy is producing more high-ticket offers than ever, but there's a shortage of trained, high-performing sales professionals. That's where you come in. Whether you're a recruiter, trainer, closer, sales leader, agency, consultant or SaaS company for sales enablement — our ecosystem needs your skill, experience, and solutions. At Exclusive Closer, we don't just fill roles. We build businesses, empower professionals, and enable predictable revenue at scale. This isn't a one-off transaction — it's a long-term partnership."
        ctas={ctas}
      >
        <div className="container mx-auto max-w-6xl px-4 space-y-24">
          
          {/* Why Partner With Us */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Partnership Vision</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Why You Should Partner With Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the fastest-growing remote sales ecosystem where your expertise creates scalable value.
            </p>
            </div>
            
            <Card className="p-8 border-border/50 bg-card/50">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyPartner.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Partner Roles */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Partnership Opportunities</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Choose Your Role in the Remote Sales Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six distinct partnership opportunities based on your skills, experience, and business goals.
            </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {partnerRoles.map((role, index) => (
                <Card key={index} className="p-8 border-border/50 hover:border-primary/20 transition-colors">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <Badge variant="outline">{role.commitment}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    <div className="text-lg font-bold bg-gradient-gold bg-clip-text text-transparent">
                      {role.earning}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-semibold">Requirements:</div>
                    {role.requirements.map((req, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">• {req}</div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-foreground mb-1">Ideal for:</div>
                    <div className="text-sm text-primary">{role.idealFor}</div>
                  </div>
                  
                  <Button className="w-full">Apply for {role.title.split(' –')[0]}</Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4">Partner Benefits</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">What You Get</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partnership benefits designed to help you succeed and scale within our ecosystem.
            </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-8 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div>
            <Card className="p-8 border-border/50 bg-card/50">
              <div className="text-center mb-8">
                <Badge className="mb-4">Partner Success</Badge>
                <h2 className="text-3xl font-heading font-bold mb-6">Partner Success Stories</h2>
                <p className="text-xl text-muted-foreground">
                  Real results from our ecosystem partners.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                    ₹15L+
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Monthly Partner Earnings</div>
                  <div className="text-xs text-muted-foreground">Top sales trainer earning</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                    150+
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Successful Placements</div>
                  <div className="text-xs text-muted-foreground">By our talent hunters</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                    40%
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Revenue Share</div>
                  <div className="text-xs text-muted-foreground">For white label partners</div>
                </div>
              </div>
            </Card>
          </div>

        {/* Application Options */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Ready to Partner?</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Want In?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your partnership path and let's explore your fit within our ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-border/50 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold mb-2">Referrers / Hunters</h3>
              <p className="text-sm text-muted-foreground mb-4">Connect talent and opportunities</p>
              <Button className="w-full bg-gradient-gold">Apply as Hunter</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold mb-2">Trainers & Coaches</h3>
              <p className="text-sm text-muted-foreground mb-4">Develop high-performing teams</p>
              <Button className="w-full bg-gradient-gold">Apply as Trainer</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold mb-2">Agencies / Salespreneurs</h3>
              <p className="text-sm text-muted-foreground mb-4">White-label partnership model</p>
              <Button className="w-full bg-gradient-gold">Apply as Partner</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold mb-2">Tech & SaaS Collaborators</h3>
              <p className="text-sm text-muted-foreground mb-4">Solution integration partnerships</p>
              <Button className="w-full bg-gradient-gold">Apply as Solution Partner</Button>
            </Card>
          </div>
        </div>

        {/* Main CTA */}
        <div>
          <Card className="p-8 border-border/50 bg-gradient-gold/10">
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to Join the Remote Sales Revolution?</h2>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Book a call to explore your fit and discover how you can build scalable income within our ecosystem.
              </p>
              <Button size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300">
                Book a Call to Explore Your Fit →
              </Button>
            </div>
          </Card>
        </div>

        </div>
      </PageLayout>
      <UpdatedFooter />
    </div>
  );
};

export default PartnerWithUs;