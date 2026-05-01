import Header from '@/components/Header';
import ServicesComponent from '@/components/Services';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, ArrowRight, Phone, Ruler, Wrench, Star } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const serviceDetails = [
  {
    title: 'Mirror Cut to Size',
    description: 'Professional mirror cutting service to your exact specifications',
    features: ['Precision cutting to exact measurements', 'Various mirror thicknesses available', 'Edge polishing included', 'Quick turnaround service'],
    pricing: 'Starting from £25',
    timeframe: 'Same day available',
  },
  {
    title: 'Glass Cut to Size',
    description: 'Custom glass cutting for windows, doors, and other applications',
    features: ['All glass types available', 'Precise measurements', 'Safety glass options', 'Professional installation'],
    pricing: 'Starting from £15',
    timeframe: '1–2 days typical',
  },
  {
    title: 'Replace Moisture Glass',
    description: 'Specialized service for replacing fogged or moisture-damaged double glazing',
    features: ['Double glazing replacement', 'Moisture removal', 'Seal restoration', 'Energy efficiency improvement'],
    pricing: 'Starting from £80',
    timeframe: 'Same day available',
  },
  {
    title: 'Windows & Doors Repair',
    description: 'Complete repair service for UPVC and aluminium windows and doors',
    features: ['Hardware replacement', 'Seal repairs', 'Lock mechanisms', 'Frame restoration'],
    pricing: 'Starting from £45',
    timeframe: '1–3 days typical',
  },
  {
    title: 'Glass Replacement',
    description: 'Professional glass replacement for all types of windows and doors',
    features: ['Safety glass options', 'Energy-efficient glazing', 'Quick installation', 'Clean up included'],
    pricing: 'Starting from £60',
    timeframe: 'Same day available',
  },
  {
    title: 'Glass Sealing',
    description: 'Professional sealing service to prevent moisture and air leakage',
    features: ['Weatherproof sealing', 'Long-lasting materials', 'Energy efficiency improvement', 'Professional application'],
    pricing: 'Starting from £35',
    timeframe: '1–2 hours per unit',
  },
];

const processSteps = [
  { icon: Phone,   number: '01', title: 'Consultation', desc: 'Free on-site assessment and consultation — we come to you.' },
  { icon: Ruler,   number: '02', title: 'Measurement',  desc: 'Precise measurements and full design planning for your project.' },
  { icon: Wrench,  number: '03', title: 'Installation', desc: 'Professional installation by certified, experienced glaziers.' },
  { icon: Star,    number: '04', title: 'Completion',   desc: 'Full quality check, clean-up, and warranty activation.' },
];

const certifications = [
  'Manufacturing and Installers of UPVC & Aluminium',
  'All Repair Work',
  'Free Quotations',
  'Quick Services',
  'Fully Licensed & Insured',
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="hero-animate-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free Quotations on All Services
            </div>
            <h1 className="hero-animate-2 text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Our Services
            </h1>
            <p className="hero-animate-3 text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/85">
              Manufacturing and Installers of UPVC &amp; Aluminium. All repair work with free quotations and quick services.
            </p>
            <div className="hero-animate-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl font-bold">Detailed Service Information</h2>
              <span className="section-accent" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn more about our specialised glazing services and what&apos;s included
              </p>
            </AnimateOnScroll>

            <div className="space-y-6">
              {serviceDetails.map((service, index) => (
                <AnimateOnScroll key={index} from="left" delay={index * 50}>
                  <Card className="hover-elevate shimmer-hover group border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-start gap-4">
                          {/* Numbered badge */}
                          <div className="bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors duration-300">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-2 flex-shrink-0">
                          <Badge variant="outline" className="whitespace-nowrap">{service.timeframe}</Badge>
                          <p className="text-sm font-semibold text-primary">{service.pricing}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">What&apos;s Included</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature, fi) => (
                              <li key={fi} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col gap-3 justify-center">
                          <Link href="/contact">
                            <Button className="w-full hover:scale-105 transition-transform duration-200" data-testid={`button-quote-${index}`}>
                              Get Quote
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl font-bold">Our Process</h2>
              <span className="section-accent" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From initial consultation to final installation — a smooth, professional experience every time
              </p>
            </AnimateOnScroll>

            {/* Timeline with connector line */}
            <div className="relative max-w-5xl mx-auto">
              {/* Horizontal connector (desktop) */}
              <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 pointer-events-none" />

              <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    {/* Number circle */}
                    <div
                      className="step-number relative w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-5 shadow-lg group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300 z-10"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <step.icon className="w-7 h-7 icon-float" style={{ animationDelay: `${i * 0.4}s` }} />
                      <span className="absolute -top-1 -right-1 bg-background border-2 border-primary text-primary text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl font-bold">Certifications &amp; Credentials</h2>
              <span className="section-accent" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to quality is backed by industry certifications and credentials
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl border bg-card hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-primary/10 group-hover:bg-primary p-2.5 rounded-xl transition-colors duration-300 flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="font-medium text-sm">{cert}</p>
                </div>
              ))}
            </AnimateOnScroll>
          </div>
        </section>

        <ServicesComponent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
