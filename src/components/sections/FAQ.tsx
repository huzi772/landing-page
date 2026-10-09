"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    number: "01",
    question: "What type of trading solutions do you provide?",
    answer:
      "We provide structured trading-related guidance, market analysis, and personalized support. The exact service depends on your requirements.",
  },
  {
    number: "02",
    question: "Is trading guaranteed to be profitable?",
    answer:
      "No. Trading involves risk, and no legitimate service can guarantee profits or specific financial results.",
  },
  {
    number: "03",
    question: "How do I get started?",
    answer:
      "Start by reviewing the available services and then connect with us to discuss your requirements and the available options.",
  },
  {
    number: "04",
    question: "Can I discuss my requirements before getting started?",
    answer:
      "Yes. You can get in touch first to ask questions, explain your requirements, and understand the available options.",
  },
  {
    number: "05",
    question: "What kind of support is available?",
    answer:
      "Support is focused on helping you understand the service, your requirements, and the next steps throughout the process.",
  },
  {
    number: "06",
    question: "Where can I contact you?",
    answer:
      "Our primary contact channel will be Telegram. The final Telegram link will be added once the business details are finalized.",
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
      className="py-16 sm:py-20 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-20 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Editorial Header Column */}
          <div className="flex flex-col items-start lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
              FAQ
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl antialiased leading-[1.15]">
              Frequently Asked Questions
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
              Clear answers to common questions before you get started.
            </p>
          </div>

          {/* Right Column — Editorial Accordion List */}
          <div className="lg:col-span-7 divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = Boolean(openIndexes[index]);
              const triggerId = `faq-trigger-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <div key={index} className="group py-1 transition-colors">
                  <h3>
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm cursor-pointer"
                    >
                      <div className="flex items-start gap-4 sm:gap-6 pr-2">
                        <span className="text-xs sm:text-sm font-mono font-semibold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors pt-0.5">
                          {item.number}
                        </span>
                        <span
                          className={`font-semibold text-base sm:text-lg transition-colors leading-snug ${
                            isOpen ? "text-[var(--accent)]" : "text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] group-hover:border-[var(--accent)]/40 transition-colors mt-0.5">
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                            isOpen ? "rotate-180 text-[var(--accent)]" : "group-hover:text-[var(--text-primary)]"
                          }`}
                          aria-hidden="true"
                        />
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
                      <p className="pl-8 sm:pl-12 pr-4 pb-6 pt-1 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
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
