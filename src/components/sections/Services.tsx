"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Compass, ChartCandlestick, UserRoundCheck, ArrowUpRight, LucideIcon } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Trading Guidance",
    description:
      "Structured guidance designed to help you approach your trading requirements with greater clarity.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Market Analysis",
    description:
      "Market-focused analysis to help you better understand relevant trends, conditions, and information.",
    icon: ChartCandlestick,
  },
  {
    number: "03",
    title: "Personalized Support",
    description:
      "Direct support tailored around your questions, requirements, and next steps.",
    icon: UserRoundCheck,
  },
];

export function Services() {
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
      { threshold: 0, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-12 md:py-16 lg:py-20 bg-[var(--bg-secondary)] border-b border-[var(--border)] scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative restrained abstract background geometry */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 opacity-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full text-[var(--accent)] stroke-current"
          fill="none"
          strokeWidth="0.75"
        >
          <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="55" />
          <circle cx="100" cy="100" r="30" strokeDasharray="2 2" />
          <line x1="20" y1="100" x2="180" y2="100" opacity="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" opacity="0.5" />
          <circle cx="100" cy="45" r="2.5" fill="var(--accent)" />
          <circle cx="155" cy="100" r="2.5" fill="var(--gold)" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column — Large Section Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-24">
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--accent)] shadow-sm mb-4 transition-all duration-700 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>WHAT WE OFFER</span>
            </div>

            {/* Headline */}
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100 antialiased leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              Solutions Built Around Your Needs
            </h2>

            {/* Supporting Paragraph */}
            <p
              className={`mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal transition-all duration-700 delay-200 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            >
              Explore a structured range of trading services designed to provide clarity, market perspective, and dedicated support.
            </p>

            {/* Accent Line Detail */}
            <div
              className={`mt-6 h-0.5 w-16 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full transition-all duration-700 delay-300 ${
                isVisible ? "reveal-visible" : "reveal-hidden"
              }`}
            />
          </div>

          {/* Right Column — Asymmetric Vertically Stacked Service List */}
          <div className="lg:col-span-7 flex flex-col space-y-0 divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
            {SERVICES_DATA.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  style={{ transitionDelay: `${index * 120 + 200}ms` }}
                  className={`group relative py-6 sm:py-7 px-3 sm:px-5 transition-all duration-300 rounded-lg hover:bg-slate-800/30 ${
                    isVisible ? "reveal-visible" : "reveal-hidden"
                  }`}
                >
                  {/* Subtle left accent bar on hover */}
                  <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-r" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 flex-1">
                      {/* Numbered Label */}
                      <span className="font-mono text-sm font-bold tracking-widest text-[var(--accent)]/80 group-hover:text-[var(--accent)] transition-colors duration-200 shrink-0">
                        {service.number}
                      </span>

                      {/* Content Container */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2.5">
                          <Icon className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-200 shrink-0" />
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight transition-colors duration-200">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Restrained Arrow Indicator */}
                    <div className="mt-1 sm:mt-0 p-1.5 rounded-full text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
