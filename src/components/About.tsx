import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CountUp from '@/components/CountUp';

interface AboutProps {
  isHomePage?: boolean;
}

const stats = [
  { icon: Calendar, end: 15,   suffix: '+', unit: ' Years',    description: 'In Business' },
  { icon: Users,    end: 500,  suffix: '+', unit: '',          description: 'Happy Clients' },
  { icon: CheckCircle, end: 1000, suffix: '+', unit: '',       description: 'Projects Completed' },
  { icon: Award,    end: 100,  suffix: '%', unit: '',          description: 'Satisfaction Rate' },
];

const achievements = [
  'Manufacturing and Installers of UPVC & Aluminium',
  'All Repair Work Available',
  'Free Quotations Provided',
  'Quick Services Guaranteed',
  'Mirror and Glass Cutting',
  'Professional Installation',
];

export default function About({ isHomePage = false }: AboutProps) {
  if (isHomePage) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose ESA Windows &amp; Doors?
            </h2>
            <span className="section-accent" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manufacturing and Installers of UPVC &amp; Aluminium. All repair work with free quotations and quick services.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {stats.map((stat, i) => (
              <Card key={i} className="text-center hover-elevate group hover:border-primary/40 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-xl w-fit mx-auto mb-4 transition-colors duration-300">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                    {stat.unit}
                  </h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </AnimateOnScroll>

          <AnimateOnScroll className="text-center" delay={100}>
            <Link href="/about">
              <Button size="lg" data-testid="button-learn-more">
                Learn More About Us
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    );
  }

  // Full about page
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            About ESA Windows &amp; Doors
          </h1>
          <span className="section-accent" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manufacturing and Installers of UPVC &amp; Aluminium. Your trusted partner for professional glazing services.
          </p>
        </AnimateOnScroll>

        <div className="space-y-24">
          {/* Image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimateOnScroll from="left" className="order-2 lg:order-1">
              <Image
                src="/stock_images/project_image_32.jpeg"
                alt="Professional glazier at work"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </AnimateOnScroll>
            <AnimateOnScroll from="right" className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
              <div className="h-1 w-12 bg-primary rounded-full mb-6" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ESA Windows &amp; Doors specializes in manufacturing and installing UPVC &amp; Aluminium windows and doors. We provide comprehensive repair services with free quotations and quick turnaround times.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our services include mirror cutting, glass cutting to size, moisture glass replacement, window and door repairs, glass replacement, and professional sealing services.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Content left, stats right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimateOnScroll from="left">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Expertise</h2>
              <div className="h-1 w-12 bg-primary rounded-full mb-6" />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We pride ourselves on providing comprehensive glazing solutions with a focus on quality materials and professional installation. Our team is experienced in working with UPVC and Aluminium systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/70 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll stagger from="right" className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <Card key={i} className="text-center hover-elevate group hover:border-primary/40 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 group-hover:bg-primary/20 p-2.5 rounded-xl w-fit mx-auto mb-3 transition-colors duration-300">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                      {stat.unit}
                    </h3>
                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </AnimateOnScroll>
          </div>

          {/* Recent Projects */}
          <div>
            <AnimateOnScroll className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground">Recent Projects</h2>
              <span className="section-accent" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Take a look at some of our recent glazing projects showcasing our expertise and quality workmanship.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: '/stock_images/project_image_02.jpeg', title: 'Luxury Home Windows', desc: 'Triple-glazed energy efficient windows' },
                { src: '/stock_images/project_image_12.jpeg', title: 'Office Building',      desc: 'Complete glazing solution' },
                { src: '/stock_images/project_image_24.jpeg', title: 'Window Replacement',   desc: 'Modern frames and energy efficient glass' },
              ].map(({ src, title, desc }) => (
                <Card key={title} className="overflow-hidden hover-elevate group">
                  <div className="overflow-hidden">
                    <Image
                      src={src}
                      alt={title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </AnimateOnScroll>
            <AnimateOnScroll className="mt-8 text-center" delay={200}>
              <Link href="/gallery">
                <Button variant="outline" size="lg">View All Projects</Button>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Mission */}
          <AnimateOnScroll from="scale">
            <div className="text-center bg-primary/5 border border-primary/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-6" />
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To provide exceptional glazing services including manufacturing and installation of UPVC &amp; Aluminium windows and doors. We are committed to delivering quality workmanship, free quotations, and quick services for all your glazing needs.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
