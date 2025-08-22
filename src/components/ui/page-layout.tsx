import React from 'react';
import { Button } from './button';
import { ArrowRight, Phone, PlayCircle } from 'lucide-react';

interface PageLayoutProps {
  title: string;
  subtitle: string;
  intro: string;
  children: React.ReactNode;
  ctas?: Array<{
    text: string;
    variant?: 'default' | 'outline' | 'secondary';
    icon?: React.ReactNode;
  }>;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  intro,
  children,
  ctas = []
}) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        {children}
      </section>

      {/* CTA Section */}
      {ctas.length > 0 && (
        <section className="py-24 bg-card/50">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h2 className="text-3xl font-heading font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent">
              Ready to Take Action?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctas.map((cta, index) => (
                <Button
                  key={index}
                  variant={cta.variant || 'default'}
                  size="lg"
                  className="text-lg"
                >
                  {cta.icon}
                  {cta.text}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};