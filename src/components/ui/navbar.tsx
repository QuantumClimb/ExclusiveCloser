import React from 'react';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/how-we-work", label: "How We Work" },
    { href: "/about", label: "About" },
    { href: "/sales-training", label: "Training" },
    { href: "/partner", label: "Partner With Us" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={scrollToTop}
            >
              <img 
                src="/logo.png" 
                alt="Exclusive Closer" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden */}
          {/* Navigation links hidden */}

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-gradient-gold">
              <a 
                href="https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile CTA Button - Replaces Hamburger Menu */}
          <div className="flex md:hidden">
            <Button asChild size="sm" className="bg-gradient-gold font-semibold">
              <a 
                href="https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#000000] border-b border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                  location.pathname === link.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild size="sm" className="w-full bg-gradient-gold">
                <a 
                  href="https://share.synamate.com/widget/bookings/exclusivecloser-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};