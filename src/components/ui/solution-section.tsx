import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Search, GraduationCap, Crown } from "lucide-react";

export function SolutionSection() {
  const solutions = [
    {
      icon: Users,
      title: "Hire Sales Talent (Setters & Closers)",
      description: "Pre-vetted remote-sales closers & setters",
      timeline: "Onboard within 14–21 days with free replacements",
      bestFor: "₹5L–₹10L/month founders wanting plug-and-play firepower"
    },
    {
      icon: Search,
      title: "Funnel & Sales Process Audit", 
      description: "Full-funnel diagnostics, CRM + script fix",
      timeline: "Complete audit and recommendations in 7-14 days",
      bestFor: "₹10L–₹25L/month founders losing money to leaks"
    },
    {
      icon: GraduationCap,
      title: "Sales Training & Coaching",
      description: "7–14 day ramp-ups, daily drills, live reviews",
      timeline: "Ongoing performance coaching and skill development",
      bestFor: "Founders with decent reps but no performance consistency"
    },
    {
      icon: Crown,
      title: "Full Sales Team Management",
      description: "2 Setters + 3 Closers managed by our team",
      timeline: "Includes recruiter, trainer, leader & consultant for all your sales enablement needs",
      bestFor: "₹25L+ businesses ready to scale without micromanagement"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-foreground">Install a</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Killer Sales Engine
              </span>
              <br />
              <span className="text-foreground">That Closes Daily - Without You Running It</span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              We install the systems, training, leadership, and talent to make your entire sales engine perform like clockwork.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-gold rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <p className="text-foreground font-medium text-sm">
                        {solution.timeline}
                      </p>
                    </div>

                    {/* Best For */}
                    <div className="bg-gradient-gold-subtle p-4 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground mb-1">Best for:</p>
                      <p className="text-foreground font-semibold">
                        {solution.bestFor}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              Book a Discovery Call to find your fit →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}