import { Phone, Target, MessageSquare, Crown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CloserVerseSection() {
  const programs = [
    {
      icon: Phone,
      title: "Appointment Setting",
      description: "Master the art of booking qualified prospects"
    },
    {
      icon: Target,
      title: "Remote Closing",
      description: "Close high-ticket deals from anywhere in the world"
    },
    {
      icon: MessageSquare,
      title: "Objection Handling & Mindset",
      description: "Turn resistance into revenue with proven frameworks"
    },
    {
      icon: Crown,
      title: "Leadership Readiness",
      description: "Lead sales teams and scale operations effectively"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-primary -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              CloserVerse
            </span>{" "}
            - India's #1 Remote Sales Training Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every month, our in-house wing trains and certifies top sales talent. Only the top 5% enter our talent pool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="text-center space-y-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center">
                <program.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                {program.title}
              </h3>
              <p className="text-muted-foreground">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual snapshots grid */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <figure className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/images/roleplay.jpg"
                alt="CloserVerse live roleplays training session"
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-4 text-center font-heading font-semibold">Live Roleplays</figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/images/closerverse-vetting.jpg"
                alt="CloserVerse vetting process assessments and checkpoints"
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-4 text-center font-heading font-semibold">Vetting Process</figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/images/closerverse-certified.jpg"
                alt="Certified by CloserVerse badge and certificate"
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-4 text-center font-heading font-semibold">Certified by CloserVerse</figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/images/crm-dashboard.jpg"
                alt="CloserVerse 1% Club leaderboard view"
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-4 text-center font-heading font-semibold">1% Club Leaderboard</figcaption>
            </figure>
          </div>
        </div>

        {/* Aniket talking-head video thumbnail */}
        <div className="max-w-4xl mx-auto">
          <figure className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src="/images/aniket-vetting.jpg"
              alt="Aniket explains our vetting and training process"
              loading="lazy"
              className="w-full h-64 object-cover"
            />
            <button type="button" className="absolute inset-0 flex items-center justify-center">
              <span className="sr-only">Play Aniket video (60 seconds)</span>
              <span className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                <Play className="h-8 w-8 text-background fill-background ml-1" />
              </span>
            </button>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/70 to-transparent p-4">
              <p className="text-sm text-foreground font-medium">Aniket on our Vetting & Training (60s)</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}