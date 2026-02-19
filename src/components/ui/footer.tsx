import { Linkedin, Youtube, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const resourceLinks = [
    { text: "Sales Warrior Masterclass", href: "https://live.exclusivecloser.com/register" },
    { text: "Killer Sales Engine Podcast", href: "https://www.youtube.com/watch?v=fsZN1ZYLljQ&list=PLNxSncvu_zq7fIFpy31xTstAol5P-L8FY" },
    { text: "Webinar Follow Masterclass", href: "https://kse.exclusivecloser.com/" },
    { text: "Sales Team Management Masterclass", href: "https://youtu.be/Xb0opOSH6RI" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/exclusive-closer/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@exclusivecloser", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/exclusive_closer/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/918939719388?text=Hi%20I%20am%20interested%20to%20work%20with%20you", label: "WhatsApp" }
  ];

  const legalLinks = [
    { text: "Terms & Conditions", href: "https://exclusivecloser.com/terms-conditions/" },
    { text: "Privacy Policy", href: "https://exclusivecloser.com/privacy-policy/" },
    { text: "Contact Us", href: "https://exclusivecloser.com/contact-us/" }
  ];

  return (
    <footer className="bg-[#000000] border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Address
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Exclusive Closer Private Limited</p>
                <p>Oyo Innov8, 44 BACKARY PORTION</p>
                <p>2ND FLR, REGAL BLDG</p>
                <p>Connaught Place 2,</p>
                <p>Central Delhi – 110001</p>
                <p className="mt-3">
                  <a href="mailto:support@exclusivecloser.com" className="hover:text-primary transition-colors">
                    Email: support@exclusivecloser.com
                  </a>
                </p>
              </div>
            </div>

            {/* Insightful Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Insightful Resources
              </h3>
              <div className="space-y-2">
                {resourceLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Follow Us
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Legal
              </h3>
              <div className="space-y-2">
                {legalLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center space-y-2">
            <p className="text-muted-foreground text-sm">
              © 2026 Exclusive Closer Private Limited. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with Love by <a href="https://www.quantum-climb.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quantum Climb</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}