import { Users, GraduationCap, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function FeatureSection() {
  const features = [
    {
      icon: Users,
      title: "Recruit",
      description: "Hire highly trained remote sales talent within 14 days"
    },
    {
      icon: GraduationCap,
      title: "Train", 
      description: "Tangible, measurable training systems for scalable growth"
    },
    {
      icon: Target,
      title: "Manage",
      description: "Daily oversight by sales leaders who've generated Crores"
    }
  ];

  const slides = [
    {
      src: heroImage as unknown as string,
      alt: "Team training and onboarding in action",
      caption: "Weekly Zoom roleplays to sharpen objection handling"
    },
    {
      src: "/images/roleplay.jpg",
      alt: "Sales script roleplay screenshot with two team members",
      caption: "Script-driven roleplays to standardize winning conversations"
    },
    {
      src: "/images/crm-dashboard.jpg",
      alt: "CRM and lead dashboard analytics preview",
      caption: "Live CRM dashboards tracking KPIs and pipeline health"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            We Don't Just Hire Closers. We Build{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Killer Sales Engines
            </span>{" "}
            That Perform.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
