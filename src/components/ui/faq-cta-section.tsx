import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Search, Phone, CreditCard } from "lucide-react";

export function FAQCTASection() {
  const faqs = [
    {
      question: "How quickly can you deploy sales talent?",
      answer: "We can have trained closers and setters onboarded and making calls within 14-21 days. Our talent pool is pre-vetted and continuously trained through CloserVerse."
    },
    {
      question: "What if the hired talent doesn't perform?",
      answer: "We offer free replacements for the first 90 days. Our rigorous screening and training process ensures 95%+ retention rates, but we stand behind our placements."
    },
    {
      question: "Do you work with companies outside of coaching?",
      answer: "Absolutely. We work with SaaS founders, B2B service providers, consultants, and any business selling high-ticket offers remotely."
    },
    {
      question: "What's included in your full team management?",
      answer: "Complete sales infrastructure: 2 setters, 3 closers, dedicated team leader, CRM setup, training protocols, daily coaching, and monthly performance reviews."
    },
    {
      question: "How do you ensure quality control?",
      answer: "Every rep goes through CloserVerse certification, daily coaching calls, recorded call reviews, and performance tracking. We maintain strict KPIs and provide transparent reporting."
    }
  ];

  const ctaOptions = [
    {
      icon: Download,
      title: "Download Guide",
      description: "Free Remote Sales Hiring Guide",
      variant: "outline" as const
    },
    {
      icon: Search,
      title: "Closer Readiness Audit",
      description: "Get your custom roadmap",
      variant: "outline" as const
    },
    {
      icon: Phone,
      title: "Free Discovery Call",
      description: "Speak with our advisors",
      variant: "default" as const
    },
    {
      icon: CreditCard,
      title: "Paid Strategy Call - ₹1499",
      description: "Detailed audit & hiring plan",
      variant: "outline" as const
    }
  ];

  const resourceLinks = [
    { label: "Sales Training", href: "/sales-training" },
    { label: "Partner with us", href: "/partner" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold mb-2">
            Ready to Stop Selling Alone?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Let's Build Your Remote Sales Engine Together.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {ctaOptions.map((option, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                <option.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="font-heading font-bold mb-2">{option.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <Button variant={option.variant} size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-gold/10 border border-primary/20 rounded-2xl p-8 text-center max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-heading font-bold mb-4">
            This isn't just another sales agency. This is your long-term revenue partner.
          </h3>
          <Button size="lg" className="bg-gradient-gold hover:shadow-gold-lg transition-all duration-300 mb-2">
            Apply Now & Book Your Free Call
          </Button>
          <p className="text-sm text-muted-foreground">
            Only 2 new clients onboarded per month.
          </p>
        </div>

        {/* Resource Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {resourceLinks.map((link, index) => (
            <Button key={index} variant="ghost" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}