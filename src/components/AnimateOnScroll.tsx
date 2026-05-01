"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: 'up' | 'left' | 'right' | 'scale';
  stagger?: boolean;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  from = 'up',
  stagger = false,
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const trigger = () => el.classList.add('in-view');
          if (delay > 0) {
            setTimeout(trigger, delay);
          } else {
            trigger();
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const fromClass = stagger
    ? ''
    : from === 'left'
    ? 'from-left'
    : from === 'right'
    ? 'from-right'
    : from === 'scale'
    ? 'from-scale'
    : '';

  const baseClass = stagger ? 'stagger-children' : 'scroll-animate';

  return (
    <div ref={ref} className={`${baseClass} ${fromClass} ${className}`}>
      {children}
    </div>
  );
}
