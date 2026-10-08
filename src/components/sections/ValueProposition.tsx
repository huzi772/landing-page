"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const VALUE_ITEMS: ValueItem[] = [
  {
    number: "01",
    title: "Structured Methodology",
    description: "An organized framework for approaching each requirement.",
  },
  {
    number: "02",
    title: "Transparent Process",
    description: "Clear communication and straightforward information at every step.",
  },
  {
    number: "03",
    title: "Dedicated Support",
    description: "Direct support throughout the process.",
  },
  {
    number: "04",
    title: "Data-Informed Thinking",
    description: "Use relevant market information to support a more considered approach.",
  },
];

export function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-20 md:py-28 lg:py-32 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-16 relative overflow-hidden"
    >
      {/* Subtle atmospheric background accent */}
      <div
        className="pointer-events-none absolute top-1/2 -left-40 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-[120px]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column — Editorial Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--accent)] shadow-sm mb-4 transition-all duration-700 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>WHY A STRUCTURED APPROACH</span>
            </div>

            {/* Section Headline */}
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              Clarity Before Every Decision
            </h2>

            {/* Supporting Paragraph */}
            <p
              className={`mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal transition-all duration-700 delay-200 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              A more organized way to approach the market, with clear communication and a process designed around your requirements.
            </p>

            {/* Accent Line Detail */}
            <div
              className={`mt-8 h-0.5 w-16 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full transition-all duration-700 delay-300 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            />
          </div>

          {/* Right Column — Editorial Stacked Value List */}
          <div className="lg:col-span-7 flex flex-col space-y-0 divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
            {VALUE_ITEMS.map((item, index) => (
              <div
                key={item.number}
                style={{ transitionDelay: `${index * 120 + 200}ms` }}
                className={`group relative py-7 sm:py-8 px-2 sm:px-4 transition-all duration-500 rounded-lg hover:bg-[var(--bg-card)]/40 ${
                  isVisible ? "reveal-visible" : "reveal-hidden"
                }`}
              >
                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-r" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  {/* Numbered Label */}
                  <span className="font-mono text-sm font-bold tracking-widest text-[var(--accent)]/80 group-hover:text-[var(--accent)] transition-colors duration-200 shrink-0">
                    {item.number}
                  </span>

                  {/* Content Container */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--text-primary)] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
