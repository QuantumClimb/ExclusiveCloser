import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, GraduationCap, Users } from "lucide-react";

export function ProofSection() {
  const successStories = [
    {
      icon: Users,
      title: "Hire Sales Talent",
      quote: "We hired 2 closers from EC in January...by March, we were at ₹34L/month.",
      results: "₹2L → ₹75L in 4 months, 45% close rate",
      client: "Jyothi Nookla"
    },
    {
      icon: Target,
      title: "Funnel Fix", 
      quote: "They found 7 critical gaps and doubled our conversions.",
      results: "+25% sales in 60 days, CRM + funnel clean-up",
      client: "Kshitij Sehrawat"
    },
    {
      icon: GraduationCap,
      title: "Training",
      quote: "Closing rate jumped from 18% to 37% in 5 weeks.",
      results: "Sales consistency, team NPS 9.2/10",
      client: "Training Client"
    },
    {
      icon: TrendingUp,
      title: "Full Sales Team",
      quote: "They run my entire sales engine. I focus on growth.",
      results: "1.5CR revenue in 90 days across 3 offers",
      client: "Full Service Client"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-foreground">Every Service We Offer Has Been</span>
              <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Battle-Tested
              </span>
              <br />
              <span className="text-foreground">with Growth-Stage Founders Like You</span>
            </h2>
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {successStories.map((story, index) => {
              const Icon = story.icon;
              return (
                <Card key={index} className="p-8 bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
                  <div className="space-y-6">
                    {/* Service Tag */}
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-gold rounded-lg">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                        {story.title}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg text-foreground font-medium leading-relaxed">
                      "{story.quote}"
                    </blockquote>

                    {/* Results */}
                    <div className="bg-gradient-gold-subtle p-4 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground mb-1">Results:</p>
                      <p className="text-foreground font-semibold">
                        {story.results}
                      </p>
                    </div>

                    {/* Client */}
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <cite className="text-primary font-semibold">- {story.client}</cite>
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
              Book Your Free Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}