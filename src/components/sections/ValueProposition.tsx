import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const VALUE_ITEMS: ValueItem[] = [
  {
    number: "01",
    title: "Professional Approach",
    description:
      "A structured and professional approach to every client interaction.",
  },
  {
    number: "02",
    title: "Transparent Process",
    description:
      "Clear communication and straightforward processes from the beginning.",
  },
  {
    number: "03",
    title: "Dedicated Support",
    description:
      "Responsive support to help clients understand the process and next steps.",
  },
  {
    number: "04",
    title: "Data-Informed Thinking",
    description:
      "A focus on research, information, and structured decision-making.",
  },
];

export function ValueProposition() {
  return (
    <section
      id="why-us"
      className="py-16 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-16"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            A More Structured Approach to Trading
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Our approach focuses on clarity, transparency, and a professional
            process designed around the needs of each client.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_ITEMS.map((item) => (
            <Card
              key={item.number}
              hoverable
              className="flex flex-col justify-between h-full bg-[var(--bg-card)] border-[var(--border)] transition-all duration-200"
            >
              <CardHeader className="mb-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[var(--bg-secondary)] text-[var(--accent)] border border-[var(--border-subtle)]">
                    {item.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-bold text-[var(--text-primary)]">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
