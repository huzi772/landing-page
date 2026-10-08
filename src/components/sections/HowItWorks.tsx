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

        {/* Open Timeline Journey (No Card Containers) */}
        <div className="relative mt-14 md:mt-20">
          {/* Desktop Horizontal Connecting Progression Line */}
          <div
            className={`hidden lg:block absolute top-[21px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[var(--border-subtle)] via-[var(--accent)]/50 to-[var(--border-subtle)] z-0 transition-opacity duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Mobile Vertical Connecting Progression Line */}
          <div
            className={`block lg:hidden absolute top-6 bottom-6 left-[21px] w-0.5 bg-gradient-to-b from-[var(--accent)]/50 via-[var(--border-subtle)] to-[var(--border-subtle)] z-0 transition-opacity duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Open Desktop & Mobile Timeline Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  className={`group flex flex-row lg:flex-col items-start gap-5 lg:gap-6 transition-all duration-300 ${
                    isVisible ? "reveal-visible" : "reveal-hidden"
                  }`}
                >
                  {/* Timeline Node Marker */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-subtle)] group-hover:border-[var(--accent)] transition-colors duration-300 shadow-md">
                      <span className="font-mono text-xs font-bold text-[var(--accent)]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:scale-110 transition-all duration-200 shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight transition-colors duration-200">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                      {step.description}
                    </p>
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
