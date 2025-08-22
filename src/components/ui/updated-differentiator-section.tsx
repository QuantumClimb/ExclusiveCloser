import { Building, Users, GraduationCap, Heart } from "lucide-react";

export function UpdatedDifferentiatorSection() {
  const differentiators = [
    {
      icon: Building,
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
      icon: Heart,
      title: "Retention-Focused",
      description: "Clients stay 12+ months, reps stick because culture scales"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            We Don't Just Drop Reps Into Your Funnel. We{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Engineer Sales Performance.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center space-y-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}