import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function UpdatedProblemSection() {
  const problems = [
    "You're still the best closer on the team",
    "Hired 'closers' underperform or disappear", 
    "Setters don't follow up, or show up untrained",
    "CRM is messy, follow-ups leak, you're stuck managing chaos"
  ];

  const reasons = [
    "No consistent sales team management system",
    "No trained appointment setters or remote closers",
    "No clear accountability or coaching rhythm",
    "No leader to drive daily execution"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Founder-Led Sales Is Not a Business Model.{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              It's a Trap.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            If your calendar is packed with sales calls, follow-ups, and firefighting your team - you're not building a business. You're just burning out.
          </p>
        </div>

        {/* Blueprint video widget */}
        <div className="mb-16">
          <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden border border-border bg-card aspect-video">
            <iframe 
              src="https://www.youtube.com/embed/mx_SF4VPSjA" 
              title="Sales Engine Blueprint" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Problems You Face */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              The Problems You Face
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0" />
                  <p className="text-foreground font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Sales Breaks */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Why Sales Breaks
            </h3>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 border border-border rounded-lg">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-3 flex-shrink-0" />
                  <p className="text-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Sound familiar? You're not alone. We've helped 30+ founders escape the sales treadmill and install a Killer Sales Engine that performs - every single day.
          </p>
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video max-w-4xl mx-auto">
            <iframe 
              src="https://www.youtube.com/embed/5lPiUfjfxH4" 
              title="How We Do It - Video Explainer" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}