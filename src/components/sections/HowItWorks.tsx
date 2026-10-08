import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Explore",
    description:
      "Review the available trading solutions and understand which approach may be relevant to your needs.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Get in touch to discuss your requirements, questions, and the type of support you are looking for.",
  },
  {
    number: "03",
    title: "Move Forward",
    description:
      "After discussing your needs, receive clear information about the next steps and available options.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-16"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            A Simple Process to Get Started
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            A straightforward process designed to make the next steps clear
            from the beginning.
          </p>
        </div>

        {/* 3 Process Steps Grid with Connecting Line */}
        <div className="relative mt-16">
          {/* Decorative Connecting Line on Desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[var(--border)] via-[var(--accent)]/40 to-[var(--border)] -translate-y-6 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <Card
                key={step.number}
                hoverable
                className="flex flex-col justify-between h-full bg-[var(--bg-card)] border-[var(--border)] transition-all duration-200"
              >
                <CardHeader className="mb-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center font-mono text-sm font-bold rounded-full bg-[var(--bg-secondary)] text-[var(--accent)] border border-[var(--border-subtle)] shadow-sm">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold text-[var(--gold)]">
                      STEP {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-[var(--text-primary)]">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
