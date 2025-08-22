import { Play } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export function SocialProofSection() {
  const clients = [
    { name: "Sandeep Bhansali", role: "Founder, Growth Academy" },
    { name: "Vishal Manocha", role: "CEO, Business Coach" },
    { name: "Gopal Krishnan", role: "Founder, Digital Products" },
    { name: "Suresh Manshermani", role: "Coach & Consultant" },
    { name: "Swastik", role: "SaaS Founder" }
  ];

  const testimonialVideos = [
    {
      name: "Sandeep Bhansali",
      thumbnail: "/placeholder-video-1.jpg",
      title: "From ₹16L to ₹2.3CR with EC's Closers",
      metrics: "₹16L ➔ ₹2.3CR in 12 months",
      growth: [
        { month: "M1", revenue: 16 },
        { month: "M3", revenue: 40 },
        { month: "M6", revenue: 80 },
        { month: "M9", revenue: 150 },
        { month: "M12", revenue: 230 }
      ]
    },
    {
      name: "Vishal Manocha", 
      thumbnail: "/placeholder-video-2.jpg",
      title: "Scaling from 1CR to 2CR per month",
      metrics: "₹1CR ➔ ₹2CR per month",
      growth: [
        { month: "M1", revenue: 100 },
        { month: "M3", revenue: 120 },
        { month: "M6", revenue: 150 },
        { month: "M9", revenue: 180 },
        { month: "M12", revenue: 200 }
      ]
    },
    {
      name: "Gopal Krishnan",
      thumbnail: "/placeholder-video-3.jpg", 
      title: "Building a Remote Sales Engine",
      metrics: "₹50L ➔ ₹1.2CR in 9 months",
      growth: [
        { month: "M1", revenue: 50 },
        { month: "M3", revenue: 60 },
        { month: "M6", revenue: 80 },
        { month: "M8", revenue: 95 },
        { month: "M9", revenue: 120 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Animated Client Ticker */}
        <div className="mb-16">
          <div className="overflow-hidden group/ticker" aria-label="Client marquee">
            <div className="flex animate-scroll gap-8 will-change-transform">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex items-center gap-4 mx-8 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Videos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialVideos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-background fill-background ml-1" />
                  </div>
                </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg mb-1">{video.name}</h3>
                    <p className="text-muted-foreground mb-4">{video.title}</p>
                    <div>
                      <h4 className="font-heading font-semibold">Revenue Growth Timeline</h4>
                      <p className="text-sm text-muted-foreground mb-3">{video.metrics}</p>
                      <ChartContainer
                        className="h-40 w-full"
                        config={{ revenue: { label: "Revenue", color: "hsl(var(--primary))" } }}
                      >
                        <BarChart data={video.growth}>
                          <CartesianGrid vertical={false} strokeDasharray="3 3" />
                          <XAxis dataKey="month" tickLine={false} axisLine={false} />
                          <YAxis tickLine={false} axisLine={false} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4,4,0,0]} isAnimationActive />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}