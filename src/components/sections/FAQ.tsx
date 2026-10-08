"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What type of trading solutions do you provide?",
    answer:
      "We provide trading-focused solutions and support designed around a structured and professional approach. The exact services and available options can be discussed based on your requirements.",
  },
  {
    question: "Is trading guaranteed to be profitable?",
    answer:
      "No. Trading involves risk, and no legitimate service can guarantee profits or specific financial results.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start by reviewing the available services and then connect with us to discuss your requirements and the next steps.",
  },
  {
    question: "Can I discuss my requirements before getting started?",
    answer:
      "Yes. You can discuss your questions, requirements, and available options before deciding how you would like to proceed.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "Support options will depend on the final service selected. The available process and support details can be discussed before proceeding.",
  },
  {
    question: "Where can I contact you?",
    answer:
      "The final contact channel will be added once the business contact details are configured.",
  },
];

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-16"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Find answers to some common questions about our approach and services.
          </p>
        </div>

        {/* Continuous Accordion Group */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] divide-y divide-[var(--border)] overflow-hidden shadow-xl">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = Boolean(openIndexes[index]);
              const triggerId = `faq-trigger-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <div key={index} className="transition-colors">
                  <h3>
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-semibold text-base sm:text-lg text-[var(--text-primary)] hover:text-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)] cursor-pointer"
                    >
                      <span className="leading-snug">{item.question}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                            isOpen ? "rotate-180 text-[var(--accent)]" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                        {item.answer}
                      </p>
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
