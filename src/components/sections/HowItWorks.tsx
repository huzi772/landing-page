"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Search, MessageCircle, ArrowRight, LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Explore",
    description:
      "Start by exploring the available services and understanding which direction may fit your requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Get in touch to discuss your questions, requirements, and the available options.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Move Forward",
    description:
      "Once the right direction is clear, take the next step with a structured understanding of what comes next.",
    icon: ArrowRight,
  },
];

export function HowItWorks() {
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
      id="how-it-works"
      className="py-12 md:py-16 lg:py-20 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-16 relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-wider text-[var(--accent)] shadow-sm transition-all duration-700 ${
              isVisible ? "reveal-visible" : "reveal-hidden"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100 antialiased leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "reveal-visible" : "reveal-hidden"
            }`}
          >
            A Clear Path From First Conversation to Next Steps
          </h2>

          <p
            className={`text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal transition-all duration-700 delay-200 ${
              isVisible ? "reveal-visible" : "reveal-hidden"
            }`}
          >
            Keep the process straightforward, transparent, and focused on understanding what you need.
          </p>
        </div>

        {/* Timeline Journey */}
        <div className="relative mt-12 md:mt-16">
          {/* Desktop Horizontal Connecting Line */}
          <div
            className={`hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/50 to-[var(--border)] z-0 transition-opacity duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Mobile Vertical Connecting Line */}
          <div
            className={`block lg:hidden absolute top-8 bottom-8 left-6 w-0.5 bg-gradient-to-b from-[var(--accent)]/50 via-[var(--border)] to-transparent z-0 transition-opacity duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  className={`group flex flex-col items-start p-6 sm:p-8 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border)] transition-all duration-300 hover:border-[var(--border-subtle)] hover:bg-slate-800/30 ${
                    isVisible ? "reveal-visible" : "reveal-hidden"
                  }`}
                >
                  {/* Step Header with Icon & Badge */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/50 transition-colors duration-200">
                        <Icon className="h-5 w-5 text-[var(--accent)] group-hover:scale-105 transition-transform duration-200" />
                      </div>
                      <span className="font-mono text-sm font-bold tracking-widest text-[var(--accent)]">
                        {step.number}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-semibold text-[var(--gold)]/80 tracking-wider">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mb-2 transition-colors duration-200">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
