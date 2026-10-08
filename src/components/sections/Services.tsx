import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Trading Guidance",
    description:
      "Structured guidance focused on understanding market information, planning, and maintaining a disciplined approach.",
  },
  {
    number: "02",
    title: "Market Analysis",
    description:
      "Research and analysis designed to provide a clearer view of relevant market conditions and opportunities.",
  },
  {
    number: "03",
    title: "Personalized Support",
    description:
      "Direct support throughout the process, with clear communication and practical next steps.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border)] scroll-mt-16"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
            OUR SERVICES
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Trading Solutions Built Around a Structured Process
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Explore our range of trading-focused solutions and choose the
            approach that best fits your needs.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <Card
              key={service.number}
              hoverable
              className="flex flex-col justify-between h-full bg-[var(--bg-card)] border-[var(--border)] transition-all duration-200"
            >
              <CardHeader className="mb-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[var(--bg-primary)] text-[var(--accent)] border border-[var(--border-subtle)]">
                    SERVICE {service.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-bold text-[var(--text-primary)]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
