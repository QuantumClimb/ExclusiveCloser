import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

export function CaseStudyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const caseStudies = [
    {
      name: "Sandeep Bhansali",
      company: "Growth Academy",
      metrics: "₹16L → ₹2.3CR in 12 months",
      quote: "We went from closing ₹16L in the first few months to ₹2.3CR in a span of a year with EC's closers.",
      videoThumbnail: "/placeholder-video-1.jpg",
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
      company: "Business Coach",
      metrics: "1CR → 2CR per month",
      quote: "Instrumental in helping scale from 1CR to 2CR per month with their systematic approach.",
      videoThumbnail: "/placeholder-video-2.jpg",
      growth: [
        { month: "M1", revenue: 100 },
        { month: "M3", revenue: 120 },
        { month: "M6", revenue: 150 },
        { month: "M9", revenue: 180 },
        { month: "M12", revenue: 200 }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 px-4">
            What Happens When You{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Stop Selling Alone
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Real founders. Real sales engines. Real growth.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.name} className="w-full flex-shrink-0 px-4 md:px-0">
                  <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-[calc(100vw-32px)] md:max-w-none mx-auto">
                    {/* Video Thumbnail */}
                    <div className="relative group cursor-pointer">
                      <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-background fill-background ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                          {study.name}
                        </h3>
                        <p className="text-muted-foreground">{study.company}</p>
                      </div>
                      
                      <div className="text-2xl md:text-3xl font-heading font-bold bg-gradient-gold bg-clip-text text-transparent">
                        {study.metrics}
                      </div>
                      
                      <blockquote className="text-lg text-foreground leading-relaxed">
                        "{study.quote}"
                      </blockquote>

                      {/* Revenue Growth Graph */}
                      <div className="pt-2">
                        <h4 className="font-heading font-semibold">Revenue Growth Timeline</h4>
                        <p className="text-sm text-muted-foreground mb-3">{study.metrics}</p>
                        <ChartContainer
                          className="h-48 w-full"
                          config={{ revenue: { label: "Revenue", color: "hsl(var(--primary))" } }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={study.growth} margin={{ left: isMobile ? -35 : -20, right: 10, top: 10 }}>
                              <CartesianGrid vertical={false} strokeDasharray="3 3" />
                              <XAxis dataKey="month" tickLine={false} axisLine={false} />
                              <YAxis 
                                tickLine={false} 
                                axisLine={false} 
                                width={35}
                                hide={isMobile}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4,4,0,0]} isAnimationActive />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {caseStudies.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button 
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
                aria-label="Previous case study"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
                aria-label="Next case study"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}