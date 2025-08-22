import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Phone, CreditCard } from "lucide-react";

export function NextStepsSection() {
  const steps = [
    {
      icon: Download,
      title: "Download our Recruitment Guide",
      description: "Learn how we hire, train, and deploy top remote sales talent.",
      cta: "Download Now →",
      variant: "outline" as const
    },
    {
      icon: FileText,
      title: "Closer Readiness Audit Report",
      description: "Tell us about your offer, funnel, and goals and we'll tell you how to attract the best sales talent.",
      cta: "Get Free Audit →", 
      variant: "outline" as const
    },
    {
      icon: Phone,
      title: "Book a Free Discovery Call",
      description: "Speak with our Success Advisors. Let's assess fit.",
      cta: "Book Free Call →",
      variant: "default" as const
    },
    {
      icon: CreditCard,
      title: "Proceed to Paid Strategy Call – ₹1499",
      description: "Includes detailed audit, roadmap & hiring plan with our Senior Sales Consultants.",
      cta: "Book Strategy Call →",
      variant: "outline" as const
    }
  ];

  const freeResources = [
    "Blog", 
    "Podcast",
    "Sales Training", 
    "Remote Sales Job Opportunities"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-foreground">Ready to Stop Selling Alone?</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Let's Build Your Remote Sales Engine Together.
              </span>
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-gold rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                        <Button 
                          variant={step.variant}
                          className={step.variant === "default" ? "bg-gradient-gold hover:shadow-gold-lg" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
                        >
                          {step.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Free Resources */}
          <div className="bg-card p-8 rounded-xl border border-border mb-16">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Free Resources
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {freeResources.map((resource, index) => (
                  <span key={index} className="px-4 py-2 bg-background rounded-lg border border-border text-foreground font-medium">
                    {resource}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8">
            <div className="bg-gradient-gold-subtle p-8 rounded-xl border border-primary/20">
              <p className="text-xl text-foreground font-semibold mb-6">
                This isn't just another sales agency. This is your long-term revenue partner.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300 text-lg px-8 py-4 h-auto mb-4"
              >
                Apply Now & Book Your Free Call
              </Button>
              <p className="text-sm text-muted-foreground">
                Only 2 new clients onboarded per month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}