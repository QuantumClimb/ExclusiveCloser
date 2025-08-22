import { Linkedin, Youtube, Instagram, Music } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Music, href: "#", label: "Spotify" }
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms", href: "#" },
    { text: "Disclaimer", href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Contact
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <a href="mailto:aum@exclusivecloser.com" className="hover:text-primary transition-colors">
                    aum@exclusivecloser.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="https://www.exclusivecloser.com" className="hover:text-primary transition-colors">
                    www.exclusivecloser.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 text-center">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Follow Us
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4 text-center md:text-right">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Legal
              </h3>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Exclusive Closer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}