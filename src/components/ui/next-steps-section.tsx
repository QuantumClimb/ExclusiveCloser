import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Phone, CreditCard } from "lucide-react";

export function NextStepsSection() {
  const steps = [
    {
      icon: Download,
      title: "Download Guide",
      description: "Free Remote Sales Hiring Guide",
      cta: "Get Started",
      href: "/get-started"
    },
    {
      icon: FileText,
      title: "Closer Readiness Audit",
      description: "Get your custom roadmap",
      cta: "Get Started", 
      href: "/get-started"
    },
    {
      icon: Phone,
      title: "Free Discovery Call",
      description: "Speak with our advisors",
      cta: "Get Started",
      href: "/get-started"
    },
    {
      icon: CreditCard,
      title: "Paid Strategy Call - ₹1499",
      description: "Detailed audit & hiring plan",
      cta: "Get Started",
      href: "/get-started"
    }
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
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div className="space-y-4 text-center">
                    <div className="flex justify-center">
                      <div className="p-3 bg-gradient-gold rounded-lg">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                    <Button 
                      asChild
                      className="w-full bg-gradient-gold hover:shadow-gold-lg transition-all duration-300"
                    >
                      <a href={step.href}>{step.cta}</a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <p className="text-xl text-foreground font-semibold mb-6">
                This isn't just another sales agency. This is your long-term revenue partner.
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300 text-lg px-8 py-4 h-auto mb-4"
              >
                <a href="/get-started">Apply Now & Book Your Free Call</a>
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