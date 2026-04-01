import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Search, Phone, Briefcase, UserCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";

export function FAQCTASection() {
  const recruitmentFaqs = [
    {
      question: "What exactly is included in Exclusive Closer's Recruitment Service?",
      answer: "Our recruitment service covers end-to-end hiring for remote sales roles: Talent avatar & role clarity (Setter / Closer / Sales Manager), Sourcing via ads, databases, referrals, and internal pools, Multi-stage screening (resume, interview, communication, mindset), Shortlisting only sales-ready candidates, Interview coordination till final selection. We don't just 'send resumes.' We filter for performance potential, not just experience."
    },
    {
      question: "What kind of candidates do you typically recruit?",
      answer: "We recruit: Appointment Setters (Inbound / Outbound / WhatsApp / DM-based), High-Ticket Closers (₹50K–₹5L ticket experience), Fixed Salary + variable profiles. Commission Only Closers are a bonus find, Remote-first, India-based sales professionals. Candidates are vetted on: Sales fundamentals, Communication & tonality, Coachability, Work ethic & stability. Not freshers unless explicitly requested."
    },
    {
      question: "How long does the recruitment process usually take?",
      answer: "Typical timelines: 7–10 days: Sourcing + screening begins, 10–21 days: Shortlisted candidates shared, 21–30 days: Final selection & joining. Timelines depend on: Role complexity, Salary + incentive attractiveness, Interview turnaround from client side. Fast feedback = faster hiring. Delays usually come from slow interview loops."
    },
    {
      question: "What happens if a candidate doesn't work out?",
      answer: "We offer a 60-day free replacement guarantee, tracked from the candidate's joining date. Replacement applies if: Candidate leaves voluntarily, Performance is clearly misaligned, Role expectations were met as discussed. Does NOT apply if: Salary or incentives are changed post-hire, Lead quality or offer is misrepresented, Candidate is asked to do non-sales work. Clear role clarity upfront prevents most issues."
    },
    {
      question: "Does recruitment include training or management?",
      answer: "No. Recruitment is a standalone service. However we do offer affordable training ramp up packs to get a taste of our training services. What it includes: Hiring the right people. What it does NOT include: Sales training, Script building, Daily performance management, Call reviews or KPIs. However, recruitment is designed as the entry point. Most clients upgrade to Training or Full Sales Team Management once hiring is complete to ensure ROI and performance stability."
    },
    {
      question: "How do you charge for Recruitment services?",
      answer: "We charge a flat, one-time placement fee, which varies based on: Role type (Setter / Closer / Sales Manager), Seniority & experience level, Location and Specialisation. We do not charge a percentage of salary or recurring fees for recruitment. Why this is better than the typical 'one-month salary' model: No inflated cost for senior hires, Predictable, upfront hiring cost, No pressure to push higher salaries just to increase fees, You pay for outcomes (right hire), not payroll size. Most agencies benefit when salaries go up. Our model benefits when the right person stays and performs."
    }
  ];

  const trainingFaqs = [
    {
      question: "What exactly is included in Exclusive Closer's Sales Training?",
      answer: "Our training focuses on making your sales team sales-ready fast, not theory. It typically includes: Sales process & funnel understanding, Objection handling frameworks, Discovery & qualification structure, Pitch flow, closing logic & next-step control, Live roleplays and call breakdowns. Training is practical, role-specific, and aligned to your actual offer, not generic sales gyaan."
    },
    {
      question: "Who is this training designed for?",
      answer: "Training is ideal for: Newly hired Setters or Closers, Existing sales teams with low conversion or confidence, Founders who want consistent sales conversations, Teams transitioning from low-ticket to high-ticket selling. Works for: Fixed + incentive teams, Commission-only closers, Remote or hybrid sales teams. Training is customised based on skill level and deal size."
    },
    {
      question: "How is the training delivered and over what timeline?",
      answer: "Training is delivered live and interactive: Zoom-based live sessions, Roleplays, mock calls & feedback, Call review support (where applicable), Session recordings provided. Typical structure: 2–4 weeks ramp-up, Multiple sessions per week, Clear pre-work and post-session action items. Training without execution support doesn't work. We ensure application."
    },
    {
      question: "What does training NOT include?",
      answer: "Training does not include: Daily team management, Lead allocation or CRM ownership, Performance tracking or accountability, Revenue ownership. Training equips the team with skills and clarity, but execution discipline still needs management. That's why many clients move to Full Sales Team Management (FSTM) after training."
    },
    {
      question: "How do you charge for Sales Training?",
      answer: "Training is charged as a flat professional fee paid quarterly, based on: Number of team members, Number of funnels, Customisation depth, Role complexity (Setter / Closer / Manager). We do not charge per sale or per revenue for training. Why this model works better: Focus stays on skill-building, not short-term numbers, No pressure selling during training, Clear scope, clear outcomes."
    }
  ];

  const fstmFaqs = [
    {
      question: "What exactly is included in Full Sales Team Management (FSTM)?",
      answer: "FSTM is an end-to-end sales ownership model. We don't just advise, we operate. It includes: Recruitment of Setters, Closers, Sales training and continuous skill upgrades, Daily huddles, call reviews & roleplays, KPI tracking, dashboards & reporting, Lead flow discipline & follow-up structure, Performance management & corrective actions. In short: People + Process + Performance, handled under one system."
    },
    {
      question: "Who is FSTM ideal for?",
      answer: "FSTM is ideal for: Coaches, course creators & SaaS founders, Businesses doing ₹10L+ monthly revenue, Founders tired of daily sales firefighting, Teams with leads but inconsistent conversions. If you want revenue growth without micro-managing sales, FSTM is built for you."
    },
    {
      question: "How is accountability handled in FSTM?",
      answer: "Accountability is structured, not emotional. We track: Appointments booked vs attended, Conversion rates per closer, Revenue per rep, Follow-ups, ageing leads & win-loss data. We take responsibility for: Team discipline, Sales quality, Process adherence. However, accountability is shared on: Lead quality & volume, Offer-market fit, Pricing and fulfilment. Sales can't outperform a broken offer."
    },
    {
      question: "What does FSTM NOT include?",
      answer: "FSTM does not include: Lead generation or paid ads management, Marketing creatives or funnel building, Fulfilment or delivery of your program, Product pricing decisions without founder input. We optimise sales, not replace marketing or product teams. We do collaborate closely to align all three."
    },
    {
      question: "How do you charge for FSTM?",
      answer: "FSTM is offered on a fixed monthly or quarterly engagement, depending on: Team size, Level of ownership, Sales complexity, Revenue stage of the business. We avoid pure commission-only models because: They create short-term behaviour, They reduce system quality, They hurt team stability. Our pricing aligns us as long-term operators, not transactional closers."
    }
  ];

  const ctaOptions = [
    {
      icon: Download,
      title: "Download Guide",
      description: "Free Remote Sales Hiring Guide",
      highlighted: false,
      href: "https://recguide.exclusivecloser.com/"
    },
    {
      icon: Search,
      title: "Closer Readiness Audit",
      description: "Get your custom roadmap",
      highlighted: false,
      href: "https://forms.gle/4QWTTzjJWwXJN5ny6"
    },
    {
      icon: Phone,
      title: "Free Discovery Call",
      description: "Speak with our advisors",
      highlighted: true,
      href: "https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call"
    }
  ];

  const resourceLinks = [
    { label: "Download Pitch Template", href: "#" },
    { label: "View Success Stories", href: "#" },
    { label: "Join CloserVerse Community", href: "#" },
    { label: "Explore Pricing Plans", href: "#" }
  ];

  const allFaqs = [...recruitmentFaqs, ...trainingFaqs, ...fstmFaqs];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about our recruitment, training, and sales team management services.
            </p>
          </div>

          <Tabs defaultValue="recruitment" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto mb-12 grid-cols-3 h-auto p-1.5">
              <TabsTrigger value="recruitment" className="text-sm md:text-base py-3 px-4 data-[state=active]:bg-gradient-gold data-[state=active]:text-black">
                Recruitment
              </TabsTrigger>
              <TabsTrigger value="training" className="text-sm md:text-base py-3 px-4 data-[state=active]:bg-gradient-gold data-[state=active]:text-black">
                Training
              </TabsTrigger>
              <TabsTrigger value="fstm" className="text-sm md:text-base py-3 px-4 data-[state=active]:bg-gradient-gold data-[state=active]:text-black">
                Management
              </TabsTrigger>
            </TabsList>

            {/* Recruitment TAB */}
            <TabsContent value="recruitment" className="w-full">
              <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-card rounded-lg border border-border p-4 md:p-6">
                {recruitmentFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`recruitment-${index}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Training TAB */}
            <TabsContent value="training" className="w-full">
              <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-card rounded-lg border border-border p-4 md:p-6">
                {trainingFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`training-${index}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* FSTM TAB */}
            <TabsContent value="fstm" className="w-full">
              <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-card rounded-lg border border-border p-4 md:p-6">
                {fstmFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`fstm-${index}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Options */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Stop Selling Alone?
            </h3>
            <p className="text-lg text-muted-foreground">
              Let's Build Your Remote Sales Engine Together.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {ctaOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className={`flex flex-col items-center text-center p-6 rounded-lg border h-full ${
                      option.highlighted
                        ? 'border-primary/50 bg-card/50'
                        : 'border-border bg-card'
                    }`}
                  >
                    <Icon className="w-8 h-8 mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">{option.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{option.description}</p>
                    <Button
                      asChild
                      className={option.highlighted ? "bg-gradient-gold" : ""}
                      variant={option.highlighted ? "default" : "outline"}
                      size="sm"
                    >
                      <a
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Work with Us CTA */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Work with Us
            </h3>
            <p className="text-lg text-muted-foreground">
              Join our network of top-performing sales professionals
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card h-full">
                <UserCheck className="w-8 h-8 mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Closer / Setter</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Apply to join as a sales professional
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfVLw2ZQXFUMQ2pwa5XfoT06go3NwacBkzXQwyAaXbA_-N1kg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card h-full">
                <Briefcase className="w-8 h-8 mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Sales Leader</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Apply for sales leadership positions
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSceTgp0tsZMlnnjRjw2UfmoFHvPCfG4TPoBWd4zW6LC53CgkQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card border border-border rounded-lg p-8 md:p-12">
          <p className="text-xl md:text-2xl font-bold mb-6">
            This isn't just another sales agency. This is your long-term revenue partner.
          </p>
          <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300 mb-4">
            <a
              href="https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now & Book Your Free Call
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Only 10 new clients onboarded per month.
          </p>
        </div>
      </div>
    </section>
  );
}