import { Button } from "@/components/ui/button";
import { AlertTriangle, X } from "lucide-react";

export function ProblemSection() {
  const problems = [
    "You're still the best closer on the team",
    "Hired \"closers\" underperform or disappear", 
    "Setters don't follow up, or show up untrained",
    "CRM is messy, follow-ups leak, you're stuck managing chaos"
  ];

  const whySalesBreaks = [
    "No consistent sales team management system",
    "No trained appointment setters or remote closers", 
    "No clear accountability or coaching rhythm",
    "No leader to drive daily execution"
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-foreground">Founder-Led Sales Is Not a Business Model.</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                It's a Trap.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              If your calendar is packed with sales calls, follow-ups, and firefighting your team - you're not building a business. You're just burning out.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Problems List */}
            <div className="bg-background p-8 rounded-xl border border-border space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  The Problems You Face
                </h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Sales Breaks */}
            <div className="bg-background p-8 rounded-xl border border-border space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Why Sales Breaks
                </h3>
              </div>
              
              <div className="space-y-4">
                {whySalesBreaks.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mini CTA */}
          <div className="mt-16 bg-gradient-gold-subtle p-8 rounded-xl border border-primary/20">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold">Sound familiar? You're not alone.</span> We've helped 30+ founders escape the sales treadmill and install a <span className="text-primary font-semibold">Killer Sales Engine</span> that performs - every single day.
              </p>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                See how we do it → (Video Explainer)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}