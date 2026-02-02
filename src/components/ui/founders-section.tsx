import { Button } from "@/components/ui/button";
import { Linkedin, Youtube, Instagram } from "lucide-react";

export function FoundersSection() {
  const founders = [
    {
      name: "Aum Janakiram",
      title: "Co-Founder / Chief Energy Officer",
      description: "Marketing & Sales strategist with 20+ years building revenue systems for agencies, coaches and SaaS founders.",
      image: "/images/Aum_Janakiram.png",
      social: {
        linkedin: "https://www.linkedin.com/in/aumjanakiram/",
        youtube: "https://www.youtube.com/@AumJanakiram",
        instagram: "https://www.instagram.com/aumjanakiram/"
      }
    },
    {
      name: "Aniket Kumar", 
      title: "Co-Founder / Chief People Officer",
      description: "Remote sales expert specializing in finding the right people, helping them grow, NEPQ frameworks, and performance optimization.",
      image: "/images/Aniket_Kumar.png",
      social: {
        linkedin: "https://www.linkedin.com/in/aniket-kumar-a512bb158/",
        youtube: "https://www.youtube.com/@theaniketkumar", 
        instagram: "https://www.instagram.com/theaniketkumarr/"
      }
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Meet the{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Power Duo
            </span>{" "}
            Behind the Engine
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="text-center space-y-6">
              {/* Founder Image */}
              <figure className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-auto object-cover"
                />
              </figure>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  {founder.title}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  {founder.description}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a href={founder.social.linkedin} className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a href={founder.social.youtube} className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a href={founder.social.instagram} className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Founders Story Block */}
        <div className="bg-card border border-border rounded-2xl p-8 mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-center mb-6">Our Story</h3>
          <p className="text-muted-foreground leading-relaxed text-center">
            We started Exclusive Closer after seeing too many brilliant founders trapped in their own sales processes. 
            What began as a mission to help coaches scale has evolved into India's premier remote sales ecosystem. 
            Today, we've helped 30+ companies build million-dollar sales engines while founders focus on what they do best - leading and innovating.
          </p>
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300">
            <a href="https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call" target="_blank" rel="noopener noreferrer">
              Work With Our Leadership →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}