"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home',    path: '/' },
  { name: 'About',   path: '/about' },
  { name: 'Services',path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-primary text-primary-foreground transition-shadow duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm border-b border-primary-foreground/20">
          <div className="flex items-center gap-6">
            <a href="tel:02085992753" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span>0208 599 2753</span>
            </a>
            <a href="tel:07305130643" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span>0730 5130 643</span>
            </a>
            <a href="mailto:esa_glazing@hotmail.com" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
              <Mail className="w-4 h-4" />
              <span>esa_glazing@hotmail.com</span>
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/stock_images/logo.png"
              alt="ESA Windows & Doors Logo"
              width={65}
              height={65}
              className="object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide">ESA</span>
              <span className="text-xs font-medium opacity-80 tracking-widest">WINDOWS &amp; DOORS</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-primary-foreground transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-foreground after:transition-all after:duration-300 ${
                  pathname === item.path
                    ? 'after:w-full opacity-100'
                    : 'after:w-0 hover:after:w-full opacity-80 hover:opacity-100'
                }`}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                data-testid="button-quote"
              >
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 py-4 border-t border-primary-foreground/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-primary-foreground font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  pathname === item.path
                    ? 'bg-primary-foreground/15'
                    : 'hover:bg-primary-foreground/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full mt-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                data-testid="button-mobile-quote"
              >
                Get Quote
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
