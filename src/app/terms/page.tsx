import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: 'Service Agreement',
    content: [
      'These terms govern the glazing services provided by ESA Windows & Doors.',
      'By engaging our services, you agree to these terms and conditions.',
      'Services include window installation, glass repair, and commercial glazing solutions.',
      'All work will be performed according to industry standards and local building codes.',
    ],
  },
  {
    title: 'Quotes and Pricing',
    content: [
      'All quotes are valid for 30 days from the date of issue.',
      'Prices may vary based on material costs and project specifications.',
      'Additional costs may apply for changes to the original scope of work.',
      'Payment terms will be specified in your service agreement.',
    ],
  },
  {
    title: 'Project Timeline',
    content: [
      'Estimated completion times are provided as guidance and may vary.',
      'Weather conditions and material availability may affect timelines.',
      'We will provide regular updates on project progress.',
      'Any delays will be communicated promptly with revised timelines.',
    ],
  },
  {
    title: 'Warranty Coverage',
    content: [
      'All workmanship is covered by our 10-year warranty.',
      'Material warranties are provided by manufacturers and vary by product.',
      'Warranty coverage requires proper maintenance and normal use.',
      'Damage due to extreme weather or accidents is not covered under warranty.',
    ],
  },
  {
    title: 'Liability and Insurance',
    content: [
      'ESA Windows & Doors maintains full liability insurance for all projects.',
      'Our liability is limited to the cost of repair or replacement of defective work.',
      'We are not responsible for damage to personal property not related to our work.',
      'Customers are responsible for providing safe access to work areas.',
    ],
  },
  {
    title: 'Payment Terms',
    content: [
      'Deposit may be required for large projects or custom orders.',
      'Final payment is due upon completion of work.',
      'We accept cash, cheque, and major credit cards.',
      'Late payment fees may apply for overdue accounts.',
    ],
  },
  {
    title: 'Cancellation Policy',
    content: [
      'Projects may be cancelled up to 48 hours before scheduled start.',
      'Custom orders cannot be cancelled once materials are ordered.',
      'Cancellation fees may apply depending on project status.',
      'Deposits for cancelled projects are subject to material and administrative costs.',
    ],
  },
  {
    title: 'Safety and Access',
    content: [
      'Customers must provide safe and clear access to work areas.',
      'All safety regulations and building codes will be followed.',
      'Work areas may be temporarily inaccessible during installation.',
      'Customers are responsible for securing pets and valuables during work.',
    ],
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/5 pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-primary/5 pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="hero-animate-1 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="hero-animate-2 text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="hero-animate-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              These terms and conditions govern the glazing services provided by ESA Windows &amp; Doors.
              Please read them carefully before engaging our services.
            </p>
            <p className="hero-animate-4 text-sm text-muted-foreground mt-4">Last updated: September 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <AnimateOnScroll key={index} delay={index * 40}>
                  <Card className="hover-elevate group hover:border-primary/25 hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md tabular-nums">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {section.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}

              {/* Important Notice */}
              <AnimateOnScroll from="scale" delay={sections.length * 40}>
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-destructive">Important Notice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      These terms constitute a legal agreement between you and ESA Windows &amp; Doors.
                      If you do not agree to these terms, please do not engage our services.
                      For questions about these terms, please contact us before proceeding with any work.
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              {/* Contact */}
              <AnimateOnScroll from="scale" delay={sections.length * 40 + 80}>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Questions About Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="font-semibold">ESA Windows &amp; Doors</p>
                      <p className="text-muted-foreground">691 Unit B Green Lane, RM8 1UU</p>
                      <p className="text-muted-foreground">Email: esa_glazing@hotmail.com</p>
                      <p className="text-muted-foreground">Phone: 0208 599 2753</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
