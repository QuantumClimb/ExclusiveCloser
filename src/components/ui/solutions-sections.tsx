import { Button } from "@/components/ui/button";
import { Users, Search, GraduationCap, Settings } from "lucide-react";

export function HireTalentSection() {
  const benefits = [
    "Pre-vetted remote-sales closers & setters",
    "Onboard within 14–21 days with free replacements",
    "Best for: ₹5L–₹10L/month founders wanting plug-and-play firepower"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Build Your Bench of Top Remote Sales Talent -{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                in 14 Days
              </span>
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left max-w-2xl mx-auto">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300">
            Book a Talent Match Call
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FunnelAuditSection() {
  const benefits = [
    "Full-funnel diagnostics, CRM + script fix",
    "Identify and plug revenue leaks",
    "Best for: ₹10L–₹25L/month founders losing money to leaks"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Search className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Fix the Leaks in Your Sales Funnel -{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                and Close More
              </span>
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left max-w-2xl mx-auto">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300">
            Request Funnel Audit
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TrainingSection() {
  const benefits = [
    "7–14 day ramp-ups, daily drills, live reviews",
    "Transform underperforming reps into closers",
    "Best for: Founders with decent reps but no performance consistency"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Turn Your Sales Reps into Killers -{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                with Daily Coaching
              </span>
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left max-w-2xl mx-auto">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300">
            Talk to a Sales Coach
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FullTeamSection() {
  const benefits = [
    "2 Setters + 3 Closers managed by our team",
    "Includes recruiter, trainer, leader & consultant for all your sales enablement needs",
    "Best for: ₹25L+ businesses ready to scale without micromanagement"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Settings className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Done-for-You Sales Team -{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Built to Scale Without You
              </span>
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left max-w-2xl mx-auto">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300">
            Start with a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}