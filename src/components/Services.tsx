import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home,
  Building,
  Shield,
  Wrench,
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    icon: Home,
    title: 'Residential Glazing',
    description: 'Window installation, replacement, and repair for homes. Energy-efficient solutions that enhance comfort and reduce costs.',
    features: ['Window replacement', 'Double glazing', 'Energy efficient glass', 'Emergency repairs'],
  },
  {
    icon: Building,
    title: 'Commercial Glazing',
    description: 'Professional glazing services for offices, retail, and industrial buildings. Large-scale installations with precision.',
    features: ['Curtain walls', 'Storefronts', 'Safety glass', 'Structural glazing'],
  },
  {
    icon: Shield,
    title: 'Safety & Security Glass',
    description: 'Specialized safety glass installations including tempered, laminated, and security glass for enhanced protection.',
    features: ['Tempered glass', 'Laminated glass', 'Security glazing', 'Fire-rated glass'],
  },
  {
    icon: Wrench,
    title: 'Glass Repair',
    description: 'Quick and reliable glass repair services for emergency situations and scheduled maintenance.',
    features: ['Emergency repairs', 'Seal replacement', 'Frame repair', '24/7 service'],
  },
  {
    icon: Zap,
    title: 'Energy Efficient Solutions',
    description: 'Advanced glazing technologies that improve insulation and reduce energy consumption significantly.',
    features: ['Low-E glass', 'Triple glazing', 'Insulated units', 'Smart glass'],
  },
  {
    icon: Sparkles,
    title: 'Custom Glass Work',
    description: 'Bespoke glass solutions tailored to your specific requirements and architectural vision.',
    features: ['Custom designs', 'Decorative glass', 'Colored glass', 'Textured options'],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <span className="section-accent" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive glazing solutions for residential and commercial properties with expert craftsmanship and premium materials.
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <AnimateOnScroll stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300 flex flex-col h-full group overflow-hidden border hover:border-primary/30 hover:shadow-lg"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="service-icon-wrap bg-primary/10 group-hover:bg-primary p-3 rounded-xl transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full group-hover:border-primary/40 group-hover:text-primary transition-colors duration-300"
                      data-testid={`button-learn-more-${index}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimateOnScroll>

        {/* Featured Projects */}
        <AnimateOnScroll stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              src: '/stock_images/project_image_01.jpeg',
              title: 'Commercial Projects',
              subtitle: 'Large-scale glazing solutions',
              desc: 'Professional commercial glazing services for offices, retail spaces, and industrial buildings.',
              testId: 'button-commercial-projects',
              label: 'View Commercial Work',
            },
            {
              src: '/stock_images/project_image_08.jpeg',
              title: 'Residential Projects',
              subtitle: 'Home window installations',
              desc: "Expert residential glazing services to enhance your home's comfort and energy efficiency.",
              testId: 'button-residential-projects',
              label: 'View Residential Work',
            },
          ].map((item) => (
            <Card key={item.title} className="overflow-hidden hover-elevate group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-0.5">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.subtitle}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <Link href="/gallery">
                  <Button variant="outline" data-testid={item.testId}>
                    {item.label}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll className="text-center mt-16">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get in touch with our expert team for a free consultation and quote tailored to your specific needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8 hover:scale-105 transition-transform duration-300" data-testid="button-get-started">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
