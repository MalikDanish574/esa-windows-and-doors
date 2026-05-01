import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Lock } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal Information: Name, email address, phone number, and address when you contact us or request services.',
      'Project Information: Details about your glazing needs, property information, and project specifications.',
      'Communication Records: Records of our interactions including emails, phone calls, and service appointments.',
      'Website Usage: Information about how you use our website, including pages visited and time spent.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'Provide glazing services and customer support.',
      'Communicate about your projects and appointments.',
      'Send quotes, estimates, and service updates.',
      'Improve our services and customer experience.',
      'Comply with legal obligations and safety requirements.',
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We may share information with trusted service providers who assist in our operations.',
      'We may disclose information when required by law or to protect our rights and safety.',
      'Information may be shared with insurance companies for warranty and claim purposes.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate security measures to protect your personal information.',
      'All data transmission is encrypted using industry-standard protocols.',
      'Access to personal information is restricted to authorised personnel only.',
      'We regularly review and update our security practices.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'Access: You can request a copy of the personal information we hold about you.',
      'Correction: You can request correction of inaccurate or incomplete information.',
      'Deletion: You can request deletion of your personal information, subject to legal requirements.',
      'Opt-out: You can unsubscribe from marketing communications at any time.',
    ],
  },
  {
    title: 'Cookies and Tracking',
    content: [
      'We use cookies to improve website functionality and user experience.',
      'Essential cookies are necessary for basic website operation.',
      'Analytics cookies help us understand how visitors use our website.',
      'You can control cookie settings through your browser preferences.',
    ],
  },
];

export default function Privacy() {
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
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="hero-animate-2 text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="hero-animate-3 text-lg text-muted-foreground max-w-3xl mx-auto">
              At ESA Windows &amp; Doors, we are committed to protecting your privacy and personal information.
              This policy explains how we collect, use, and safeguard your data.
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

              {/* Contact */}
              <AnimateOnScroll from="scale" delay={sections.length * 40}>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Us About Privacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
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

              {/* Updates notice */}
              <AnimateOnScroll from="scale" delay={sections.length * 40 + 80}>
                <Card className="bg-muted/40">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Policy Updates</h3>
                    <p className="text-muted-foreground text-sm">
                      We may update this Privacy Policy from time to time. We will notify you of any significant changes
                      by posting the new policy on our website and updating the &quot;Last updated&quot; date.
                    </p>
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
