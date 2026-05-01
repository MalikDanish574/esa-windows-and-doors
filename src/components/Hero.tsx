import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-animate"
        style={{ backgroundImage: `url('/stock_images/modern_glass_window__a319ff26.jpg')` }}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Badge */}
        <div className="hero-animate-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          15+ Years of Expert Glazing
        </div>

        <h1 className="hero-animate-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight tracking-tight px-4">
          Professional
          <span className="block text-blue-400 drop-shadow-lg">Windows &amp; Doors</span>
        </h1>

        <p className="hero-animate-3 text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/85 px-4">
          Expert glass installation, window replacement, and commercial glazing solutions with over 15 years of experience
        </p>

        <div className="hero-animate-3 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 px-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              data-testid="button-get-quote"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/gallery">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/70 text-white hover:bg-white hover:text-black px-8 py-4 text-lg backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
              data-testid="button-our-work"
            >
              View Our Work
            </Button>
          </Link>
        </div>

        {/* Glass feature cards */}
        <div className="hero-animate-4 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
          {[
            { icon: Shield, title: 'Quality Guaranteed', desc: 'All work comes with comprehensive warranty' },
            { icon: Clock,  title: 'Quick Turnaround',   desc: 'Fast and efficient installation service' },
            { icon: Users,  title: 'Expert Team',        desc: 'Certified glaziers with 15+ years experience' },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-5 md:p-6 flex flex-col items-center gap-3 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className="bg-primary/80 backdrop-blur-sm p-3 rounded-xl">
                <Icon className="w-6 md:w-7 h-6 md:h-7 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold">{title}</h3>
              <p className="text-white/75 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
