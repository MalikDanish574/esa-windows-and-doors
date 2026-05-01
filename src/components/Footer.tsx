"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Mirror Cut to Size',    href: '/services#mirror' },
    { name: 'Glass Cut to Size',     href: '/services#glass-cut' },
    { name: 'Replace Moisture Glass',href: '/services#moisture' },
    { name: 'Windows & Doors Repair',href: '/services#repair' },
    { name: 'Glass Replacement',     href: '/services#replacement' },
    { name: 'Glass Sealing',         href: '/services#sealing' },
  ],
  company: [
    { name: 'About Us',       href: '/about' },
    { name: 'Our Team',       href: '/about#team' },
    { name: 'Certifications', href: '/about#certifications' },
    { name: 'Insurance',      href: '/about#insurance' },
  ],
  support: [
    { name: 'Contact Us',        href: '/contact' },
    { name: 'Get Quote',         href: '/contact#quote' },
    { name: 'Emergency Service', href: '/contact#emergency' },
    { name: 'Warranty',          href: '/warranty' },
  ],
};

const socialLinks = [
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Wave divider */}
      <div className="overflow-hidden leading-none -mb-1">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="/stock_images/logo.png"
                  alt="ESA Windows & Doors Logo"
                  width={60}
                  height={60}
                  className="object-contain brightness-0 invert"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-wide">ESA</span>
                  <span className="text-xs font-medium opacity-80 tracking-widest">WINDOWS &amp; DOORS</span>
                </div>
              </div>
              <p className="text-primary-foreground/75 mb-6 leading-relaxed text-sm">
                Manufacturing and Installers of UPVC &amp; Aluminium. All repair work with free quotations and quick services.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="bg-primary-foreground/10 p-2.5 rounded-lg hover:bg-primary-foreground/25 hover:scale-110 transition-all duration-200"
                    aria-label={social.label}
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-5 opacity-60">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/75 hover:text-primary-foreground hover:translate-x-1 inline-flex transition-all duration-200 text-sm"
                      data-testid={`link-service-${i}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-5 opacity-60">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/75 hover:text-primary-foreground hover:translate-x-1 inline-flex transition-all duration-200 text-sm"
                      data-testid={`link-company-${i}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-5 opacity-60">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                  <div className="text-primary-foreground/75 text-sm">
                    <p>691 Unit B Green Lane</p>
                    <p>RM8 1UU</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                  <div className="text-primary-foreground/75 text-sm">
                    <p>0208 599 2753</p>
                    <p>Mobile: 0730 5130 643</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0 opacity-60" />
                  <p className="text-primary-foreground/75 text-sm">esa_glazing@hotmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                  <div className="text-primary-foreground/75 text-sm">
                    <p>Mon–Sat: 8:00 AM – 6:30 PM</p>
                    <p>Sunday: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/15 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>© {currentYear} ESA Windows &amp; Doors. All rights reserved.</p>
            <div className="flex gap-6">
              {[
                { label: 'Privacy Policy', href: '/privacy',  testId: 'link-privacy' },
                { label: 'Terms of Service', href: '/terms',  testId: 'link-terms' },
                { label: 'Warranty', href: '/warranty',       testId: 'link-warranty' },
              ].map(({ label, href, testId }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-primary-foreground transition-colors"
                  data-testid={testId}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
