import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/feature-section";
import { SocialProofSection } from "@/components/ui/social-proof-section";
import { UpdatedProblemSection } from "@/components/ui/updated-problem-section";
import { HireTalentSection, FunnelAuditSection, TrainingSection, FullTeamSection } from "@/components/ui/solutions-sections";
import { CaseStudyCarousel } from "@/components/ui/case-study-carousel";
import { UpdatedDifferentiatorSection } from "@/components/ui/updated-differentiator-section";
import { CloserVerseSection } from "@/components/ui/closerverse-section";
import { FoundersSection } from "@/components/ui/founders-section";
import { FAQCTASection } from "@/components/ui/faq-cta-section";
import { UpdatedFooter } from "@/components/ui/updated-footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <SocialProofSection />
      <UpdatedProblemSection />
      <HireTalentSection />
      <FunnelAuditSection />
      <TrainingSection />
      <FullTeamSection />
      <CaseStudyCarousel />
      <UpdatedDifferentiatorSection />
      <CloserVerseSection />
      <FoundersSection />
      <FAQCTASection />
      <UpdatedFooter />
    </div>
  );
};

export default Index;
