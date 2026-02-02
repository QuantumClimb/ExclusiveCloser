import { Button } from "@/components/ui/button";
import { Check, Play } from "lucide-react";

export function HeroSection() {
  const valueBullets = [
    "Hire highly trained remote sales talent within 14 days",
    "Install our proven systems and processes - battle-tested for scaling",
    "Complete sales team training & management handled by experts",
    "Proven with 30+ coaching and digital product companies across India & the US"
  ];

  const clientNames = [
    "Sandeep Bhansali",
    "Vishal Manocha", 
    "Gopal Krishnan",
    "Suresh Manshermani",
    "Swastik"
  ];

  const testimonials = [
    {
      quote: "We went from closing ₹16L in the first few months to ₹2.3CR in a span of a year with EC's closers.",
      author: "Sandeep Bhansali",
      image: "/images/Sandeep Bhansali.jpg"
    },
    {
      quote: "Instrumental in helping scale from 1CR to 2CR per month.",
      author: "Vishal Manocha",
      image: "/images/Vishal Manocha.jpg"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-gold opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-gold opacity-5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                <span className="text-foreground">India's #1</span>
                <br />
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Remote Sales Partner
                </span>
                <br />
                <span className="text-foreground">
                  for Coaches, SaaS & e-Learning
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
                We help you scale revenue by installing high-performance remote sales teams - trained high-ticket closers, appointment setters, and sales leaders who take full ownership of your sales pipeline.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-2">
              <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300 text-lg px-8 py-4 h-auto">
                <a href="https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call" target="_blank" rel="noopener noreferrer">
                  Book Your Free Discovery Call
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-gold-lg aspect-video">
              <iframe 
                src="https://www.youtube.com/embed/41DkD4WzSh0" 
                title="Exclusive Closer Video" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <blockquote className="text-foreground font-medium mb-3">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-primary font-semibold">- {testimonial.author}</cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}