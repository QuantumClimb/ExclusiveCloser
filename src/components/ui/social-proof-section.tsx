import { Play } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";

interface TestimonialVideo {
  name: string;
  thumbnail: string;
  title: string;
  metrics: string;
  caseStudyUrl: string;
  growth: Array<{ month: string; revenue: number }>;
}

export function SocialProofSection() {
  const getVideoEmbed = (index: number, video: TestimonialVideo) => {
    const videoUrls = [
      "https://www.youtube.com/embed/IwGOYr4azR4",
      "https://www.youtube.com/embed/5iuarxMXZCI",
      "https://www.youtube.com/embed/ICLmnYUwpMQ"
    ];

    if (index < videoUrls.length) {
      return (
        <div className="aspect-video">
          <iframe 
            src={videoUrls[index]} 
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    return (
      <div className="aspect-video bg-muted flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
          <Play className="h-6 w-6 text-background fill-background ml-1" />
        </div>
      </div>
    );
  };

  const clients = [
    { name: "Dev Gadhvi", role: "Coach", image: "/images/clients/EC Clients 00 - Dev Gadhvi.jpg" },
    { name: "Ankit Neerav", role: "Coach", image: "/images/clients/EC Clients 01 - Ankit Neerav.jpg" },
    { name: "Kshitij Sehrawat", role: "Coach", image: "/images/clients/EC Clients 02 - Kshitij Sehrawat.jpg" },
    { name: "Swastik Nandakumar", role: "Coach", image: "/images/clients/EC Clients 03 - Swastik Nandakumar.jpg" },
    { name: "Shankar Kulkarni", role: "Coach", image: "/images/clients/EC Clients 04 - Shankar Kulkarni.jpg" },
    { name: "Nishkarsh Sharma", role: "Coach", image: "/images/clients/EC Clients 05 - Nishkarsh Sharma.jpg" },
    { name: "Kewal Kishan", role: "Coach", image: "/images/clients/EC Clients 06 - Kewal Kishan.jpg" },
    { name: "Suresh Manshermani", role: "Coach", image: "/images/clients/EC Clients 07 - Suresh Manshermani.jpg" },
    { name: "Sandeep Bhansali", role: "Coach", image: "/images/clients/EC Clients 08 - Sandeep Bhansali.jpg" },
    { name: "Vishal Manocha", role: "Coach", image: "/images/clients/EC Clients 09 - Vishal Manocha.jpg" },
    { name: "Gopal Kishnan", role: "Coach", image: "/images/clients/EC Clients 10 - Gopal Kishnan.jpg" },
    { name: "Nivetha Muralidharan", role: "Coach", image: "/images/clients/EC Clients 11 - Nivetha Muralidharan.jpg" },
    { name: "Gurleen Kaur", role: "Coach", image: "/images/clients/EC Clients 12 - Gurleen Kaur.jpg" },
    { name: "Chef Arvind", role: "Coach", image: "/images/clients/EC Clients 13 - Chef Arvind.jpg" },
    { name: "Avi Arya", role: "Coach", image: "/images/clients/EC Clients 14 - Avi Arya.jpg" },
    { name: "Jyothi Nookla", role: "Coach", image: "/images/clients/EC Clients 15 - Jyothi Nookla.jpg" },
    { name: "Sriram Benur", role: "Coach", image: "/images/clients/EC Clients 16 - Sriram Benur.jpg" }
  ];

  const testimonialVideos: TestimonialVideo[] = [
    {
      name: "Sandeep Bhansali",
      thumbnail: "/placeholder-video-1.jpg",
      title: "Hindi Digital Marketing Coach",
      metrics: "₹2L ➔ ₹30L in 12 months",
      caseStudyUrl: "https://docs.google.com/document/d/1hTuWS4M22nNQUL7anTiOvK6wZUVUAbfSCdNbHeUSLqg/edit?usp=drivesdk",
      growth: [
        { month: "M1", revenue: 2 },
        { month: "M3", revenue: 14 },
        { month: "M6", revenue: 18 },
        { month: "M9", revenue: 25 },
        { month: "M12", revenue: 30 }
      ]
    },
    {
      name: "Vishal Manocha", 
      thumbnail: "/placeholder-video-2.jpg",
      title: "Career Grooming Coach",
      metrics: "₹4L ➔ ₹47L in 12 months",
      caseStudyUrl: "https://docs.google.com/document/d/1C4ZulqRx6FOjQ2bpE3_cVs69IJsJ_1kybWXbXdh8LFg/edit?usp=drivesdk",
      growth: [
        { month: "M1", revenue: 4 },
        { month: "M3", revenue: 35 },
        { month: "M6", revenue: 86 },
        { month: "M9", revenue: 38 },
        { month: "M12", revenue: 47 }
      ]
    },
    {
      name: "Jyothi Nookla",
      thumbnail: "/placeholder-video-3.jpg", 
      title: "AI Product Management Coach",
      metrics: "0 to ₹1.63CR in 6 Months",
      caseStudyUrl: "https://docs.google.com/document/d/1Ukk4UdoUcIM1GUvbJnH_eYTbL1hdn4yNjAX_qRfUwbY/edit?usp=drivesdk",
      growth: [
        { month: "M1", revenue: 10 },
        { month: "M2", revenue: 21 },
        { month: "M3", revenue: 24 },
        { month: "M4", revenue: 33 },
        { month: "M5", revenue: 29 },
        { month: "M6", revenue: 45 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Client Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Trusted by India's Top Coaches & Experts
            </h2>
            <p className="text-muted-foreground text-lg">
              Over 50+ businesses have scaled their sales with our remote sales teams
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{client.name}</p>
                  <p className="text-xs text-muted-foreground">{client.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Videos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialVideos.map((video, index) => (
            <div key={video.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {getVideoEmbed(index, video)}
                  <div className="p-6 overflow-hidden">
                    <h3 className="font-heading font-bold text-lg mb-1">{video.name}</h3>
                    <p className="text-muted-foreground mb-4">{video.title}</p>
                    <div>
                      <h4 className="font-heading font-semibold">Revenue Growth Timeline</h4>
                      <p className="text-sm text-muted-foreground mb-3">{video.metrics}</p>
                      <div className="overflow-hidden w-full">
                        <ChartContainer
                          className="h-32 md:h-40 w-full"
                          config={{ revenue: { label: "Revenue", color: "#F9A825" } }}
                        >
                        <BarChart data={video.growth} margin={{ left: -20, right: 10 }}>
                          <CartesianGrid vertical={false} strokeDasharray="3 3" />
                          <XAxis dataKey="month" tickLine={false} axisLine={false} />
                          <YAxis 
                            tickLine={false} 
                            axisLine={false} 
                            width={30}
                            hide={typeof window !== 'undefined' && window.innerWidth < 480}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4,4,0,0]} isAnimationActive />
                        </BarChart>
                        </ChartContainer>
                      </div>
                      <Button 
                        asChild 
                        size="sm" 
                        className="w-full mt-4 bg-gradient-gold hover:shadow-gold-lg transition-all duration-300"
                      >
                        <a href={video.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                          View Case Study
                        </a>
                      </Button>
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