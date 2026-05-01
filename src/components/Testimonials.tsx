import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const testimonials = [
  {
    id: 1,
    name: 'Azmat Sahi',
    rating: 5,
    content: 'I recently had windows installed by Esa Glazing Limited, and I\'m extremely satisfied with their work. From start to finish, the team was professional, punctual, and very skilled. The quality of the materials and installation was top-notch. Highly recommended for anyone looking for reliable and high-quality window installation!',
    initials: 'AS',
  },
  {
    id: 2,
    name: 'Murad Hussein',
    rating: 5,
    content: 'Just recently had some windows made and fitted by this company. Very pleased with the service I received. Very polite, clean and respectful. I\'ve done my whole house now. Excellent work, great people, excellent service — can\'t recommend them enough. 5 stars +.',
    initials: 'MH',
  },
  {
    id: 3,
    name: 'Jabil Miah',
    rating: 5,
    content: 'Excellent company and very friendly. They came out late in the evening to help me out with a door that needed adjusting and wasn\'t closing properly. Really good service. Not the first time they have helped me and always happy to recommend them to others.',
    initials: 'JM',
  },
  {
    id: 4,
    name: 'G Play',
    rating: 5,
    content: 'This company fitted a new composite door for me with an integral full-length frosted glass side panel. The quality of materials used and their craftsmanship was good. I recommend this glazing company to those who want the supply and fit of composite doors and double glazed windows.',
    initials: 'GP',
  },
  {
    id: 5,
    name: 'Behzad Chohan',
    rating: 5,
    content: 'Fantastic professional window fitters. Fitted a first floor bedroom and bathroom window. Clean, and brilliant finish. Will be using for my other windows next year.',
    initials: 'BC',
  },
  {
    id: 6,
    name: 'Fida Hussain',
    rating: 5,
    content: "I'm extremely pleased with the window installation by Esa glazing limited. Their team was professional, efficient, and the quality of the windows is outstanding. I highly recommend them for anyone looking to upgrade their windows.",
    initials: 'FH',
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="w-[340px] flex-shrink-0 bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <div className="relative flex-grow">
        <Quote className="w-7 h-7 text-primary/15 absolute -top-1 -left-1" />
        <p className="text-muted-foreground text-sm leading-relaxed pl-5 line-clamp-4">
          &ldquo;{t.content}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <Avatar className="w-9 h-9">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
            {t.initials}
          </AvatarFallback>
        </Avatar>
        <span className="font-semibold text-sm text-foreground">{t.name}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <span className="section-accent" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what our satisfied customers say about our glazing services.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Marquee rows (full-bleed) */}
      <div className="space-y-5 mb-12">
        {/* Row 1 — scrolls left */}
        <div className="flex overflow-hidden">
          <div className="marquee-track gap-5 px-2.5">
            {doubled.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex overflow-hidden">
          <div className="marquee-track marquee-track-reverse gap-5 px-2.5">
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container mx-auto px-4">
        <AnimateOnScroll from="scale" className="flex flex-wrap justify-center gap-0 max-w-xl mx-auto">
          <div className="flex items-center divide-x divide-border border border-border rounded-2xl overflow-hidden shadow-sm bg-card">
            {[
              { value: '500+',  label: 'Happy Customers' },
              { value: '5 / 5', label: 'Average Rating' },
              { value: '100%',  label: 'Satisfaction Rate' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center px-8 py-5">
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
