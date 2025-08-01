'use client'

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal'

export default function CTASection() {
  const points = [
    'AI-powered flashcards',
    'Full syllabus coverage',
    'Mock tests & analytics',
    'Expert doubt-clearing',
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to begin your success story?
        </h2>
        <p className="text-xl md:text-2xl text-accent mb-10">
          Join 10 000+ achievers learning the smart way.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12 text-left">
          {points.map((p) => (
            <div key={p} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span>{p}</span>
            </div>
          ))}
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-accent transition-colors group"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
