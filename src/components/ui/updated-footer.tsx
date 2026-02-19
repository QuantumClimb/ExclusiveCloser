import { Linkedin, Youtube, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function UpdatedFooter() {
  const resourceLinks = [
    { label: "Sales Warrior Masterclass", href: "https://live.exclusivecloser.com/register" },
    { label: "Killer Sales Engine Podcast", href: "https://www.youtube.com/watch?v=fsZN1ZYLljQ&list=PLNxSncvu_zq7fIFpy31xTstAol5P-L8FY" },
    { label: "Webinar Follow Masterclass", href: "https://kse.exclusivecloser.com/" },
    { label: "Sales Team Management Masterclass", href: "https://youtu.be/Xb0opOSH6RI" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/exclusive-closer/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@exclusivecloser", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/exclusive_closer/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/918939719388?text=Hi%20I%20am%20interested%20to%20work%20with%20you", label: "WhatsApp" }
  ];

  const legalLinks = [
    { label: "Terms & Conditions", href: "https://exclusivecloser.com/terms-conditions/" },
    { label: "Privacy Policy", href: "https://exclusivecloser.com/privacy-policy/" },
    { label: "Contact Us", href: "https://exclusivecloser.com/contact-us/" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Address */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-heading font-bold bg-gradient-gold bg-clip-text text-transparent"
              onClick={scrollToTop}
            >
              Exclusive Closer
            </Link>
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
            <h4 className="font-heading font-semibold text-foreground">Insightful Resources</h4>
            <div className="space-y-2">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Exclusive Closer Private Limited. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with Love by <a href="https://www.quantum-climb.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Quantum Climb</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}