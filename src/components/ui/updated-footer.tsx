import { Linkedin, Youtube, Instagram, Music } from "lucide-react";
import { Link } from "react-router-dom";

export function UpdatedFooter() {
  const navigationLinks = [
    { label: "How We Work", href: "/how-we-work" },
    { label: "About", href: "/about" },
    { label: "Sales Training", href: "/sales-training" },
    { label: "Partner with us", href: "/partner" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Music, href: "#", label: "Spotify" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-heading font-bold bg-gradient-gold bg-clip-text text-transparent"
              onClick={scrollToTop}
            >
              Exclusive Closer
            </Link>
            <p className="text-muted-foreground">
              India's #1 Remote Sales Partner for Coaches, SaaS & e-Learning
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <a href="mailto:aum@exclusivecloser.com" className="hover:text-primary transition-colors">
                  aum@exclusivecloser.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="https://exclusivecloser.com" className="hover:text-primary transition-colors">
                  www.exclusivecloser.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Navigation</h4>
            <div className="space-y-2">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={scrollToTop}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={scrollToTop}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Exclusive Closer. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for ambitious founders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}