import { Card } from "@/components/ui/card";
import { GraduationCap, Laptop, Users, Target } from "lucide-react";

export function ClientsSection() {
  const idealClients = [
    {
      icon: GraduationCap,
      title: "Coaches & Course Creators",
      description: "doing ₹5L+/mo",
      details: "Scale your high-ticket coaching programs with trained closers"
    },
    {
      icon: Laptop,
      title: "SaaS & B2B Founders", 
      description: "need plug-and-play sales execution",
      details: "Focus on product while we handle your entire sales process"
    },
    {
      icon: Users,
      title: "Agencies & Fractional CMOs",
      description: "need white-labeled teams",
      details: "Offer sales services to your clients with our expert teams"
    },
    {
      icon: Target,
      title: "Consultants & Experts",
      description: "who want to focus on delivery, not sales ops",
      details: "Let us handle sales while you focus on what you do best"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-foreground">We Work With</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Growth-Stage Founders
              </span>
              <br />
              <span className="text-foreground">Ready to Scale</span>
            </h2>
          </div>

          {/* Ideal Clients Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {idealClients.map((client, index) => {
              const Icon = client.icon;
              return (
                <Card key={index} className="p-8 bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-gold rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          {client.title}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {client.description}
                        </p>
                        <p className="text-muted-foreground">
                          {client.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Our Team */}
          <div className="bg-background p-8 rounded-xl border border-border">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Our Team
              </h3>
              <div className="text-left space-y-4">
                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-semibold">Aniket Kumar</span> - Co-founder of Exclusive Closer & CloserVerse. Sales Leaders, Trainers, Coaches - NEPQ, funnel, objection, CRM mastery.
                </p>
                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-semibold">Enablement Stack</span> - Full backend execution engine.
                </p>
              </div>
              <div className="bg-gradient-gold-subtle p-6 rounded-lg border border-primary/20">
                <p className="text-lg text-foreground font-semibold">
                  "We don't give you freelancers. We build your revenue engine."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}