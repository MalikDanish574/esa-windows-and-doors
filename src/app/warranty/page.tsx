import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, CheckCircle, AlertTriangle, Phone, Mail, Sparkles, Search, Wrench } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const warrantyTypes = [
  {
    icon: Shield,
    title: 'Workmanship Warranty',
    duration: '10 Years',
    description: 'Our comprehensive workmanship warranty covers all installation and repair work performed by our certified glaziers.',
    coverage: ['Installation defects', 'Seal failures', 'Frame alignment issues', 'Hardware malfunctions'],
  },
  {
    icon: Clock,
    title: 'Material Warranty',
    duration: 'Varies by Manufacturer',
    description: 'Material warranties are provided directly by manufacturers and vary depending on the specific products used.',
    coverage: ['Glass defects', 'Frame material issues', 'Hardware failures', 'Weatherstripping deterioration'],
  },
];

const warrantyProcess = [
  { step: '01', title: 'Contact Us',  description: 'Call our warranty line or email us with details about the issue you\'re experiencing.' },
  { step: '02', title: 'Assessment',  description: 'We\'ll schedule a free assessment to evaluate the issue and determine warranty coverage.' },
  { step: '03', title: 'Resolution',  description: 'If covered, we\'ll repair or replace the affected components at no cost to you.' },
  { step: '04', title: 'Follow-up',   description: 'We\'ll follow up to ensure you\'re completely satisfied with the warranty service.' },
];

const exclusions = [
  'Damage caused by extreme weather events (hurricanes, tornadoes, hail)',
  'Impact damage from accidents or vandalism',
  'Damage resulting from improper maintenance',
  'Normal wear and tear from regular use',
  'Modifications made by unauthorised persons',
  'Damage from settling or structural movement of building',
];

const maintenanceTips = [
  { icon: Sparkles, bg: 'bg-blue-100 dark:bg-blue-900/30',   label: 'Regular Cleaning',     desc: 'Clean glass and frames regularly with appropriate cleaning solutions.' },
  { icon: Search,   bg: 'bg-green-100 dark:bg-green-900/30', label: 'Annual Inspections',   desc: 'Schedule annual inspections to catch issues early.' },
  { icon: Wrench,   bg: 'bg-purple-100 dark:bg-purple-900/30',label: 'Prompt Repairs',      desc: 'Address small issues quickly to prevent larger problems.' },
];

export default function Warranty() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="hero-animate-1 bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="hero-animate-2 text-4xl md:text-5xl font-bold mb-5">Warranty Information</h1>
            <p className="hero-animate-3 text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/85">
              We stand behind our work with comprehensive warranty coverage. Your satisfaction and peace of mind are our priority.
            </p>
            <div className="hero-animate-4 flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Badge variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground text-xs">10 Year</Badge>
                <span>Workmanship Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Badge variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground text-xs">100%</Badge>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl font-bold">Our Warranty Coverage</h2>
              <span className="section-accent" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive warranty protection for both our workmanship and the materials we use
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {warrantyTypes.map((warranty, index) => (
                <Card key={index} className="hover-elevate group hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-primary/10 group-hover:bg-primary p-3 rounded-xl transition-colors duration-300">
                        <warranty.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{warranty.title}</CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">{warranty.duration}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{warranty.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Coverage Includes</h4>
                    <ul className="space-y-2">
                      {warranty.coverage.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </AnimateOnScroll>
          </div>
        </section>

        {/* Warranty Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl font-bold">Warranty Claim Process</h2>
              <span className="section-accent" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our simple 4-step process ensures quick resolution of any warranty issues
              </p>
            </AnimateOnScroll>

            <div className="relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 pointer-events-none" />

              <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {warrantyProcess.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div
                      className="step-number w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-5 shadow-lg group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300 z-10 relative"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll className="text-center mt-14" delay={200}>
              <h3 className="text-xl font-semibold mb-5">Need to File a Warranty Claim?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="tel:07305130643">
                  <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-medium shadow-md" data-testid="button-call-warranty">
                    <Phone className="w-5 h-5" />
                    Call: 0730 5130 643
                  </button>
                </Link>
                <Link href="mailto:esa_glazing@hotmail.com">
                  <button className="inline-flex items-center gap-2 border border-border bg-background hover:bg-muted hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-medium" data-testid="button-email-warranty">
                    <Mail className="w-5 h-5" />
                    esa_glazing@hotmail.com
                  </button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimateOnScroll from="scale">
              <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-900/10 dark:border-amber-800/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-2.5 rounded-xl">
                      <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle className="text-xl text-amber-700 dark:text-amber-400">Warranty Exclusions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-5 text-sm">
                    While our warranty coverage is comprehensive, the following conditions are not covered:
                  </p>
                  <ul className="space-y-3">
                    {exclusions.map((exclusion, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl font-bold">Maintaining Your Warranty</h2>
              <span className="section-accent" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proper maintenance helps ensure your warranty remains valid and your glazing performs optimally
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {maintenanceTips.map((tip, i) => (
                <Card key={i} className="text-center hover-elevate group hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`${tip.bg} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <tip.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{tip.label}</h3>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="text-center mb-10">
              <h2 className="text-3xl font-bold">Warranty Support</h2>
              <span className="section-accent" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our dedicated warranty team is here to help with any questions or concerns about your coverage
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Phone, title: 'Phone',  sub: 'Mon–Sat 8:00 AM – 6:30 PM', value: '0208 599 2753',         href: 'tel:02085992753' },
                { icon: Mail,  title: 'Email',  sub: 'Response within 24 hours',  value: 'esa_glazing@hotmail.com', href: 'mailto:esa_glazing@hotmail.com' },
              ].map(({ icon: Icon, title, sub, value, href }) => (
                <Link key={title} href={href}>
                  <Card className="hover-elevate group hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary/10 group-hover:bg-primary p-3 rounded-xl w-fit mx-auto mb-4 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-semibold mb-1">{title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{sub}</p>
                      <p className="font-semibold text-primary text-sm">{value}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
