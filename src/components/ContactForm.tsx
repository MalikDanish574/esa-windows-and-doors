"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  isFullPage?: boolean;
}

const contactInfo = [
  { icon: MapPin, title: 'Office Location',  details: ['691 Unit B Green Lane', 'RM8 1UU'] },
  { icon: Phone,  title: 'Phone Numbers',    details: ['0208 599 2753', '0730 5130 643'] },
  { icon: Mail,   title: 'Email Address',    details: ['esa_glazing@hotmail.com'] },
  { icon: Clock,  title: 'Business Hours',   details: ['Monday to Saturday: 8:00 AM – 6:30 PM', 'Sunday: Emergency only'] },
];

const services = [
  'Mirror Cut to Size',
  'Glass Cut to Size',
  'Replace Moisture Glass',
  'Windows & Doors Repair',
  'Glass Replacement',
  'Glass Sealing',
  'Other',
];

export default function ContactForm({ isFullPage = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const serviceValue = watch('service');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        toast({ title: 'Message sent successfully!', description: "We'll get back to you within 24 hours." });
        reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({ title: 'Error sending message', description: 'Please try again or contact us directly.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isFullPage) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
            <span className="section-accent" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your glazing project? Contact us for a free consultation and quote.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <AnimateOnScroll from="left" className="space-y-5">
              {contactInfo.slice(0, 2).map((info, index) => (
                <Card key={index} className="hover-elevate group hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 group-hover:bg-primary p-3 rounded-xl transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        {info.details.map((detail, di) => (
                          <p key={di} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </AnimateOnScroll>

            <AnimateOnScroll from="right">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Quick Quote Request</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input {...register('name')} id="name" placeholder="Your full name" className="mt-1" data-testid="input-name" />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input {...register('phone')} id="phone" placeholder="Your phone number" className="mt-1" data-testid="input-phone" />
                        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <input type="hidden" value="Quick quote request from compact form" {...register('message')} />

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input {...register('email')} id="email" type="email" placeholder="your.email@example.com" className="mt-1" data-testid="input-email" />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <Label>Service Type *</Label>
                      <Select value={serviceValue} onValueChange={(v) => setValue('service', v)}>
                        <SelectTrigger className="mt-1" data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-destructive text-sm mt-1">{errors.service.message}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting} onClick={handleSubmit(onSubmit)} data-testid="button-submit">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>
                      ) : (
                        <>Request Quote <Send className="ml-2 w-4 h-4" /></>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    );
  }

  // Full contact page
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
          <span className="section-accent" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our glazing experts. We&apos;re here to help with all your glass installation and repair needs.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact info */}
          <AnimateOnScroll from="left" className="space-y-5">
            <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-elevate group hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 group-hover:bg-primary p-3 rounded-xl transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      {info.details.map((detail, di) => (
                        <p key={di} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 text-destructive">24/7 Emergency Service</h3>
              <p className="text-muted-foreground">
                For emergency glass repairs, call our emergency hotline. We provide rapid response for urgent situations.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll from="right">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} data-testid="button-send-another">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full-name">Full Name *</Label>
                        <Input {...register('name')} id="full-name" placeholder="Your full name" className="mt-1" data-testid="input-full-name" />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="full-phone">Phone Number *</Label>
                        <Input {...register('phone')} id="full-phone" placeholder="Your phone number" className="mt-1" data-testid="input-full-phone" />
                        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="full-email">Email Address *</Label>
                      <Input {...register('email')} id="full-email" type="email" placeholder="your.email@example.com" className="mt-1" data-testid="input-full-email" />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <Label>Service Required *</Label>
                      <Select value={serviceValue} onValueChange={(v) => setValue('service', v)}>
                        <SelectTrigger className="mt-1" data-testid="select-full-service">
                          <SelectValue placeholder="Select the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-destructive text-sm mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        {...register('message')}
                        id="message"
                        placeholder="Please describe your project requirements, timeline, and any specific details..."
                        className="mt-1 min-h-32"
                        data-testid="textarea-message"
                      />
                      {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting} onClick={handleSubmit(onSubmit)} data-testid="button-full-submit">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Sending Message...</>
                      ) : (
                        <>Send Message <Send className="ml-2 w-5 h-5" /></>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
