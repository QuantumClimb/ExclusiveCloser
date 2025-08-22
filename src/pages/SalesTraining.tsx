import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayCircle, Users, Rocket, Briefcase } from "lucide-react";

// Local types
type VideoItem = {
  title: string;
  author: string;
  thumb: string;
};

const recruitmentVideos: VideoItem[] = [
  { title: "Sourcing Framework 101", author: "With Aniket Kumar", thumb: "/images/closerverse-vetting.jpg" },
  { title: "Vetting Playbook", author: "With Team Trainers", thumb: "/images/aniket-vetting.jpg" },
  { title: "Placement Workflow", author: "With Aum Janakiram", thumb: "/images/crm-dashboard.jpg" },
  { title: "Interview Scoring System", author: "With Team Trainers", thumb: "/images/closerverse-certified.jpg" },
  { title: "Onboarding to First Wins", author: "With Aniket Kumar", thumb: "/images/roleplay.jpg" },
  { title: "Client Fit Mapping", author: "With Aum Janakiram", thumb: "/images/closerverse-vetting.jpg" },
];

const closingVideos: VideoItem[] = [
  { title: "Call Breakdown: Objections", author: "With Aum", thumb: "/images/roleplay.jpg" },
  { title: "Script Clinic: Offers", author: "With Aniket", thumb: "/images/closerverse-certified.jpg" },
  { title: "Handling Price Pushback", author: "With Team Trainers", thumb: "/images/closerverse-vetting.jpg" },
  { title: "NEPQ Deep Dive", author: "With Aum", thumb: "/images/crm-dashboard.jpg" },
  { title: "Discovery That Converts", author: "With Aniket", thumb: "/images/aniket-vetting.jpg" },
  { title: "Follow-up Systems", author: "With Team Trainers", thumb: "/images/roleplay.jpg" },
];

const leadershipVideos: VideoItem[] = [
  { title: "Weekly KPI Dashboard", author: "With Aum", thumb: "/images/crm-dashboard.jpg" },
  { title: "Call Reviews at Scale", author: "With Team Trainers", thumb: "/images/roleplay.jpg" },
  { title: "Coach Like a Pro", author: "With Aniket", thumb: "/images/closerverse-certified.jpg" },
  { title: "Hiring for Potential", author: "With Aum", thumb: "/images/closerverse-vetting.jpg" },
  { title: "Culture & Mindset", author: "With Team Trainers", thumb: "/images/aniket-vetting.jpg" },
  { title: "Quarterly Planning", author: "With Aum", thumb: "/images/crm-dashboard.jpg" },
];

function useSEO() {
  useEffect(() => {
    const title = "Free Sales Training | Exclusive Closer";
    const description =
      "Watch free sales masterclasses on recruitment, closing, and leadership from Exclusive Closer.";
    document.title = title;

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta("description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: window.location.href,
    } as const;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      // Optional cleanup: remove injected JSON-LD to avoid duplicates on route changes
      document.head.removeChild(script);
    };
  }, []);
}

const VideoCard: React.FC<{ item: VideoItem }> = ({ item }) => (
  <article className="group">
    <div className="relative overflow-hidden rounded-lg border border-border bg-card">
      <AspectRatio ratio={16 / 9}>
        <img
          src={item.thumb}
          alt={`${item.title} thumbnail – ${item.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-sm text-foreground shadow">
            <PlayCircle className="h-4 w-4" />
            <span>Play</span>
          </div>
        </div>
      </AspectRatio>
    </div>
    <div className="mt-3">
      <h3 className="line-clamp-1 font-medium text-foreground">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.author}</p>
    </div>
  </article>
);

const SalesTraining = () => {
  useSEO();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* HERO 1: Remote Sales Warrior Masterclass */}
        <header className="relative">
          <section className="relative">
            <div className="relative h-[36rem] md:h-96 overflow-hidden">
              <img
                src="/images/aniket-vetting.jpg"
                alt="Aniket Kumar - Remote Sales Warrior Masterclass"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-background/60" />
              <div className="container mx-auto flex h-full max-w-7xl items-center justify-center md:justify-start px-4 relative z-10">
                <div className="max-w-2xl space-y-4 text-center md:text-left">
                  <h1 className="text-3xl font-heading font-bold leading-tight sm:text-4xl">
                    The Masterclass That Started a Movement
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Learn the proven mindset, rituals, and playbooks behind India’s top-performing closers.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Button asChild>
                      <a href="#" aria-label="Watch Free Masterclass">Watch Free Masterclass</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>

        {/* HERO 2: Sales Leadership Masterclass by Aum */}
        <section className="relative border-t border-border/50">
          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="mx-auto max-w-4xl text-center space-y-4">
              <h2 className="text-2xl font-heading font-bold sm:text-3xl">
                How to Build & Lead a High-Performance Remote Sales Team
              </h2>
              <p className="text-muted-foreground">
                A masterclass by Aum Janakiram, co-founder of Exclusive Closer
              </p>
            </div>

            <div className="mt-8">
              <figure className="overflow-hidden rounded-2xl border border-border bg-card">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="/images/crm-dashboard.jpg"
                    alt="Sales Leadership Masterclass by Aum - video thumbnail"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="secondary" className="gap-2">
                      <PlayCircle className="h-5 w-5" />
                      Watch the Masterclass
                    </Button>
                  </div>
                </AspectRatio>
              </figure>
            </div>
          </div>
        </section>

        {/* Section 1: Sales Team Recruitment (Carousel) */}
        <section className="relative border-t border-border/50" aria-labelledby="recruitment">
          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="mb-6">
              <h2 id="recruitment" className="text-xl font-heading font-bold sm:text-2xl">
                Build Your Dream Team
              </h2>
              <p className="text-sm text-muted-foreground">
                Learn how we source, vet, and place elite sales talent for top Indian and global brands.
              </p>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="relative">
              <CarouselContent>
                {recruitmentVideos.map((item, idx) => (
                  <CarouselItem key={idx} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <VideoCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="mt-6 flex justify-center">
              <Button variant="outline" asChild>
                <a href="#">See All Recruitment Trainings</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Sales Closing (Grid) */}
        <section className="relative border-t border-border/50" aria-labelledby="closing">
          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="mb-6">
              <h2 id="closing" className="text-xl font-heading font-bold sm:text-2xl">
                Master High-Ticket Closing
              </h2>
              <p className="text-sm text-muted-foreground">
                Real calls. Real breakdowns. Real results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {closingVideos.map((item, idx) => (
                <VideoCard key={idx} item={item} />
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline" asChild>
                <a href="#">See All Closing Lessons</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 3: Sales Leadership (Grid) */}
        <section className="relative border-t border-border/50" aria-labelledby="leadership">
          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="mb-6">
              <h2 id="leadership" className="text-xl font-heading font-bold sm:text-2xl">
                Lead with Clarity, Coach with Confidence
              </h2>
              <p className="text-sm text-muted-foreground">
                Training for Sales Managers, Founders & Team Leads
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {leadershipVideos.map((item, idx) => (
                <VideoCard key={idx} item={item} />
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline" asChild>
                <a href="#">See All Sales Leadership Content</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative border-t border-border/50" aria-labelledby="final-cta">
          <div className="container mx-auto max-w-7xl px-4 py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="final-cta" className="mb-8 text-2xl font-heading font-bold sm:text-3xl">
                Ready to Go Deeper?
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">Understand our full-stack process</p>
                  <Button asChild className="w-full">
                    <Link to="/how-we-work">How We Work</Link>
                  </Button>
                </Card>

                <Card className="p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">See all the ways to engage with us</p>
                  <Button asChild className="w-full">
                    <Link to="/partner">Partner with us</Link>
                  </Button>
                </Card>

                <Card className="p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">Apply to become a certified setter, closer, or coach</p>
                  <Button asChild className="w-full" variant="secondary">
                    <Link to="/remote-sales-jobs">Join Our Talent Pool</Link>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <UpdatedFooter />
    </div>
  );
};

export default SalesTraining;
