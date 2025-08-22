import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { PageLayout } from '@/components/ui/page-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Users, BookOpen } from 'lucide-react';

const Pricing = () => {
  const comparison = [
    { aspect: "Hiring Time", internal: "3-6 months", ec: "14-21 days" },
    { aspect: "Training Cost", internal: "₹2-5L per rep", ec: "Included" },
    { aspect: "Management Time", internal: "2-4 hours daily", ec: "Zero" },
    { aspect: "Systems Setup", internal: "6+ months", ec: "Week 1" },
    { aspect: "Performance Risk", internal: "High", ec: "Guaranteed" },
    { aspect: "Replacement Cost", internal: "Full restart", ec: "Free" }
  ];

  const tiers = [
    {
      name: "Pure Sales Rep Recruitment",
      price: "₹30,000",
      period: "per resource",
      description: "Flat fee per role with placement guarantee",
      features: [
        "14–21 day placement window",
        "60-day replacement guarantee",
        "Pre-vetted talent from CloserVerse",
        "Basic role onboarding",
        "Performance baseline setup"
      ],
      bestFor: "Founders who want quality talent without the recruitment hassle",
      highlight: false,
      billing: "One-time fee"
    },
    {
      name: "Recruitment + Training", 
      price: "₹60,000",
      period: "per month",
      description: "2 Sales Resources (Setter + Closer) with complete training",
      features: [
        "Tier 1 + 2-week onboarding",
        "Daily training + CRM setup",
        "Custom scripts + live roleplays",
        "Funnel walkthrough",
        "Weekly performance reviews",
        "Objection handling training"
      ],
      bestFor: "Growing businesses ready to scale with trained professionals",
      highlight: true,
      billing: "Billed Quarterly"
    },
    {
      name: "Full Sales Team Management",
      price: "₹1,10,000",
      period: "per month",
      description: "Done-for-you team with complete leadership support",
      features: [
        "2 Setters + 2-3 Closers",
        "Weekly coaching + KPI reviews",
        "Lead allocation + CRM oversight", 
        "Performance dashboards",
        "Leadership support",
        "Weekly reports",
        "Monthly sales consultancy"
      ],
      bestFor: "Established businesses ready to scale without micromanagement",
      highlight: false,
      billing: "Billed Quarterly"
    }
  ];

  const addOns = [
    { name: "Funnel & Sales Process Audit", price: "₹75,000", description: "Full-funnel diagnostics & CRM fixes" },
    { name: "Sales Training & Coaching", price: "₹25,000/month", description: "7-14 day ramp-ups & daily drills" },
    { name: "Additional Closer", price: "₹45,000/month", description: "Scale your team as needed" },
    { name: "Additional Setter", price: "₹25,000/month", description: "More appointments, more opportunities" }
  ];

  const ctas = [
    { text: "Download Guide", icon: <Download className="w-5 h-5 mr-2" /> },
    { text: "Join Masterclass", variant: "outline" as const, icon: <Users className="w-5 h-5 mr-2" /> },
    { text: "Watch Sales Training", variant: "secondary" as const, icon: <BookOpen className="w-5 h-5 mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <PageLayout
        title="Simple Pricing. No Guesswork."
        subtitle="Transparent, fixed, and designed for scale."
        intro="Our pricing is transparent, fixed, and designed to save founders from the hidden costs of building a sales team internally. When compared to hiring, training, managing, and retaining sales talent on your own - we're not only cost-effective, we're a no-brainer. Whether you're just starting to scale or ready to offload sales leadership entirely - we've got a plan tailored for you."
      ctas={ctas}
    >
      <div className="container mx-auto max-w-6xl px-4 space-y-24">
        
        {/* Why Our Pricing Makes Sense */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Cost Comparison</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Why Our Pricing Makes Sense</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building an internal sales team vs. partnering with Exclusive Closer. The numbers speak for themselves.
            </p>
          </div>
          
          <Card className="p-8 border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-lg font-semibold">Aspect</th>
                    <th className="text-center py-4 px-4 text-lg font-semibold text-muted-foreground">Internal Team</th>
                    <th className="text-center py-4 px-4 text-lg font-semibold text-primary">Exclusive Closer</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b border-border/30">
                      <td className="py-4 px-4 font-medium">{item.aspect}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{item.internal}</td>
                      <td className="py-4 px-4 text-center text-primary font-semibold">{item.ec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Tier Breakdown */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Pricing Tiers</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Choose Your Sales Engine</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From individual talent to complete sales teams. Pick what fits your stage and scale.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card key={index} className={`p-8 relative ${tier.highlight ? 'border-primary/50 shadow-gold' : 'border-border/50'}`}>
                {tier.highlight && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{tier.billing}</p>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Best for:</span> {tier.bestFor}
                  </p>
                </div>
                
                <Button 
                  className="w-full" 
                  variant={tier.highlight ? 'default' : 'outline'}
                  size="lg"
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-On Services */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Add-On Services</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your sales engine with specialized services and additional talent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6 border-border/50">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{addon.name}</h3>
                  <span className="text-lg font-bold text-primary">{addon.price}</span>
                </div>
                <p className="text-muted-foreground">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Ready to Get Started?</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Take the Next Step</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the option that best fits where you are in your sales journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-border/50 text-center">
              <h3 className="font-heading font-bold mb-2">Ready to Build?</h3>
              <p className="text-sm text-muted-foreground mb-4">For founders ready to build their sales engine</p>
              <Button className="w-full bg-gradient-gold">Book a Discovery Call →</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <h3 className="font-heading font-bold mb-2">Need Guidance?</h3>
              <p className="text-sm text-muted-foreground mb-4">Includes checklists + templates</p>
              <Button variant="outline" className="w-full">Download Our Recruitment Guide →</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <h3 className="font-heading font-bold mb-2">Still Learning?</h3>
              <p className="text-sm text-muted-foreground mb-4">For those still learning the model</p>
              <Button variant="outline" className="w-full">Attend Remote Sales Warrior Masterclass →</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <h3 className="font-heading font-bold mb-2">Want Training?</h3>
              <p className="text-sm text-muted-foreground mb-4">For teams looking to scale with structure</p>
              <Button variant="secondary" className="w-full">Watch 30-Min Sales Leadership Training →</Button>
            </Card>
          </div>
        </div>

      </div>
      </PageLayout>
      <UpdatedFooter />
    </div>
  );
};

export default Pricing;