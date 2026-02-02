import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Search, Phone, CreditCard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      title: "Download Sales Toolkit",
      description: "Scripts, templates, and frameworks used by top sales teams"
    },
    {
      icon: Search,
      title: "View Case Studies",
      description: "See real results from our clients"
    },
    {
      icon: Phone,
      title: "Schedule Discovery Call",
      description: "Let's discuss your sales challenges"
    },
    {
      icon: CreditCard,
      title: "View Pricing",
      description: "Transparent, performance-based pricing"
    }
  ];

  const resourceLinks = [
    { label: "Download Pitch Template", href: "#" },
    { label: "View Success Stories", href: "#" },
    { label: "Join CloserVerse Community", href: "#" },
    { label: "Explore Pricing Plans", href: "#" }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Everything you need to know about our recruitment, training, and sales team management services.
          </p>

          <Tabs defaultValue="recruitment" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto mb-8 grid-cols-3 h-auto">
              <TabsTrigger value="recruitment" className="text-sm md:text-base py-2">
                Recruitment
              </TabsTrigger>
              <TabsTrigger value="training" className="text-sm md:text-base py-2">
                Sales Training
              </TabsTrigger>
              <TabsTrigger value="fstm" className="text-sm md:text-base py-2">
                Full Sales Team Management
              </TabsTrigger>
            </TabsList>

            {/* Recruitment TAB */}
            <TabsContent value="recruitment" className="w-full">
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {recruitmentFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`recruitment-${index}`}>
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
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {trainingFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`training-${index}`}>
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
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {fstmFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`fstm-${index}`}>
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
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Ready to Transform Your Sales?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctaOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                >
                  <Icon className="w-8 h-8 mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">{option.title}</h4>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card border border-border rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is here to help. Schedule a discovery call to discuss your specific sales challenges and how we can help.
          </p>
          <Button asChild size="lg">
            <a
              href="https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Discovery Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}