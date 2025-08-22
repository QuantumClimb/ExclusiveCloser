import { useEffect, useMemo } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Linkedin, Youtube, Instagram, Music, Podcast } from "lucide-react";

const GetStarted = () => {
  useEffect(() => {
    document.title = "Get Started | Exclusive Closer";

    const metaDesc = document.querySelector('meta[name="description"]');
    const description =
      "Get started with Exclusive Closer: book a discovery call, download guides, take the assessment, apply to the talent pool, become a partner, or explore free training.";
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = description;
      document.head.appendChild(m);
    }

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    const href = window.location.href;
    if (linkCanonical) {
      linkCanonical.setAttribute("href", href);
    } else {
      const l = document.createElement("link");
      l.rel = "canonical";
      l.href = href;
      document.head.appendChild(l);
    }
  }, []);

  const faqLD = useMemo(() => {
    const qa = [
      // 1. Book a Free Discovery Call
      [
        "Who is this call for?",
        "Founders and teams evaluating if Exclusive Closer is the right fit to build or scale a sales engine.",
      ],
      [
        "How long does it take?",
        "Typically 20–30 minutes to understand your goals and outline next steps.",
      ],
      [
        "What should I prepare before the call?",
        "Your offer, current sales process, and any targets or blockers you’re facing.",
      ],
      [
        "Will I get a sales audit on the call?",
        "We provide high-level insights and may schedule a deeper audit if needed.",
      ],
      [
        "Can I bring my co-founder or team member?",
        "Yes, we encourage key stakeholders to join for clarity and alignment.",
      ],
      // 2. Download Our Recruitment Guide
      [
        "What’s included in the guide?",
        "SOPs, scorecards, interview rubrics, onboarding checklists, and best practices.",
      ],
      [
        "Is it suitable for solopreneurs?",
        "Yes, it’s designed to help both solo operators and established teams.",
      ],
      [
        "Will this help if I already have a team?",
        "Absolutely-use it to standardize hiring and ramping across roles.",
      ],
      [
        "Can I share it with my internal team?",
        "Yes, you may share it within your company for implementation.",
      ],
      [
        "Do I need to be a client to access this?",
        "No, it’s available to help you implement proven recruiting systems.",
      ],
      // 3. Take the Closer Readiness Assessment
      [
        "What does this assessment measure?",
        "Your readiness to install a remote sales team across systems, offer, and talent.",
      ],
      [
        "How long does it take to complete?",
        "About 8–10 minutes.",
      ],
      [
        "Do I need tech knowledge?",
        "No technical expertise required-just honest answers.",
      ],
      [
        "Will I get a report?",
        "Yes, you’ll receive a summary with suggested next steps.",
      ],
      [
        "Is this free?",
        "Yes, it’s completely free.",
      ],
      // 4. Join Our Talent Pool
      [
        "Who is this for?",
        "Aspiring or experienced setters, closers, and sales coaches.",
      ],
      [
        "Do I need experience?",
        "Experience helps but isn’t required-we value attitude and coachability.",
      ],
      [
        "What’s the application process like?",
        "Apply online, complete skills review, and interview if shortlisted.",
      ],
      [
        "Do I get access to paid clients?",
        "Yes-certified talent can be matched with vetted opportunities.",
      ],
      [
        "Can I join part-time or freelance?",
        "Yes, flexible and contract opportunities are available.",
      ],
      // 5. Become a Partner
      [
        "What are the different partner roles?",
        "Affiliate, trainer, and recruiter partnerships are available.",
      ],
      [
        "Is there a minimum requirement?",
        "Basic professionalism, alignment with our values, and audience or expertise.",
      ],
      [
        "How is commission handled?",
        "Transparent tracking with standard payout schedules.",
      ],
      [
        "Can I white-label your offer?",
        "Certain partnerships include co-branded or white-label options.",
      ],
      [
        "Do you support agencies?",
        "Yes, we collaborate with agencies on recruiting and training.",
      ],
      // 6. Explore Free Sales Training
      [
        "What types of training are available?",
        "Masterclasses, call breakdowns, frameworks, and playbooks.",
      ],
      [
        "Who are the instructors?",
        "Senior coaches and operators from the Exclusive Closer network.",
      ],
      [
        "Is this free?",
        "Yes, a curated selection is free to access.",
      ],
      [
        "Can I download lessons?",
        "Some resources may be downloadable; others are streaming only.",
      ],
      [
        "Is this suitable for founders or only reps?",
        "Both-founders, team leads, and reps will all find value.",
      ],
    ];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: qa.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main className="container mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Build Your Killer Sales Engine. Step-by-Step.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Whether you’re here to recruit closers, scale a team, get trained, or explore partnerships - you’re in the right place.
          </p>
        </header>

        {/* Quick Access Grid */}
        <section aria-labelledby="quick-access" className="mb-16">
          <h2 id="quick-access" className="sr-only">
            Quick Access
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Book a Free Discovery Call",
                desc: "Understand how we work and if we’re the right fit.",
                cta: "Book Free Call",
              },
              {
                title: "Download Our Recruitment Guide",
                desc: "Get SOPs, scorecards, onboarding checklists.",
                cta: "Download Now",
              },
              {
                title: "Take the Closer Readiness Assessment",
                desc: "Evaluate if you’re ready to install a remote sales team.",
                cta: "Start Assessment",
              },
              {
                title: "Join Our Talent Pool",
                desc: "Apply to become a certified setter, closer, or coach.",
                cta: "Apply Now",
              },
              {
                title: "Become a Partner",
                desc: "Explore affiliate, trainer, or recruiter opportunities.",
                cta: "Partner With Us",
              },
              {
                title: "Explore Free Sales Training",
                desc: "Watch our masterclasses and sales call breakdowns.",
                cta: "Start Learning",
              },
            ].map((card) => (
              <article key={card.title} className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Top FAQs:</p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="q1">
                          <AccordionTrigger className="text-sm">Who is this for?</AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground">
                            This section is designed for prospects evaluating options. Synthetic answer: a brief 2–3 sentence overview tailored to your context.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q2">
                          <AccordionTrigger className="text-sm">How long does it take?</AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground">
                            Most actions take 5–30 minutes depending on the path you choose. Synthetic answer for demonstration purposes.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="q3">
                          <AccordionTrigger className="text-sm">Is this free?</AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground">
                            Some resources are free; others may require an application or engagement. This is placeholder text for UI testing.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{card.cta}</Button>
                  </CardFooter>
                </Card>
              </article>
            ))}
          </div>
        </section>

        {/* Follow & Subscribe */}
        <section aria-labelledby="follow-subscribe" className="max-w-3xl mx-auto text-center">
          <h2 id="follow-subscribe" className="font-heading text-2xl sm:text-3xl font-semibold mb-2">
            Stay Connected With Us
          </h2>
          <p className="text-muted-foreground mb-6">
            Weekly insights on building elite sales teams and scaling with clarity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <a href="#" aria-label="LinkedIn" className="hover-scale text-muted-foreground hover:text-primary transition-colors">
              <Linkedin />
            </a>
            <a href="#" aria-label="YouTube" className="hover-scale text-muted-foreground hover:text-primary transition-colors">
              <Youtube />
            </a>
            <a href="#" aria-label="Instagram" className="hover-scale text-muted-foreground hover:text-primary transition-colors">
              <Instagram />
            </a>
            <a href="#" aria-label="Spotify" className="hover-scale text-muted-foreground hover:text-primary transition-colors">
              <Music />
            </a>
          </div>
          <Button variant="secondary" className="inline-flex items-center gap-2">
            <Podcast className="size-4" />
            Subscribe to the Podcast
          </Button>
        </section>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLD) }}
        />
      </main>
      <UpdatedFooter />
    </div>
  );
};

export default GetStarted;
