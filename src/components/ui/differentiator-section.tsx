import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, Users, GraduationCap, Shield, Check, X } from "lucide-react";

export function DifferentiatorSection() {
  const differentiators = [
    {
      icon: Settings,
      title: "Infrastructure-First",
      description: "CRM, SOPs, dashboards built in"
    },
    {
      icon: Users,
      title: "Leadership-Driven", 
      description: "Recruiter, trainer, leader & consultant in every project"
    },
    {
      icon: GraduationCap,
      title: "Training-Obsessed",
      description: "Daily roleplays, call reviews, frameworks like NEPQ"
    },
    {
      icon: Shield,
      title: "Retention-Focused",
      description: "Clients stay 12+ months, reps stick because culture scales"
    }
  ];

  const comparisonData = [
    {
      feature: "Talent Quality",
      randomAgency: "Unvetted, low accountability",
      exclusiveCloser: "Trained via CloserVerse"
    },
    {
      feature: "Training",
      randomAgency: "None",
      exclusiveCloser: "Daily, real-time coaching"
    },
    {
      feature: "Systems",
      randomAgency: "Missing",
      exclusiveCloser: "SOPs, CRM, full tracking"
    },
    {
      feature: "Support",
      randomAgency: "One rep",
      exclusiveCloser: "Recruiter + Trainer + Leader + Consultant"
    },
    {
      feature: "Results",
      randomAgency: "Inconsistent",
      exclusiveCloser: "Scalable revenue systems"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-foreground">We Don't Just Drop Reps Into Your Funnel.</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                We Engineer Sales Performance.
              </span>
            </h2>
          </div>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold text-center">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {diff.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {diff.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div className="bg-card p-8 rounded-xl border border-border mb-12">
            <h3 className="text-2xl font-heading font-semibold text-center mb-8 text-foreground">
              Side-by-Side Comparison
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-muted-foreground font-semibold">Random Agency</th>
                    <th className="text-center py-4 px-4 text-primary font-semibold">Exclusive Closer</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4 text-foreground font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="h-4 w-4 text-destructive" />
                          <span className="text-muted-foreground">{row.randomAgency}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-foreground font-medium">{row.exclusiveCloser}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CloserVerse Description */}
          <div className="bg-gradient-gold-subtle p-8 rounded-xl border border-primary/20 mb-12">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                CloserVerse
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                India's top remote sales training ecosystem. Every month, our in-house wing trains and certifies Appointment Setters, High-Ticket Closers, and Sales Leaders. <span className="text-primary font-semibold">Only the top 5% enter our talent pool.</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              Book Your Free Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}