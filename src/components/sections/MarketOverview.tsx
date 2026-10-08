import React from "react";
import { Container } from "@/components/ui/container";

export function MarketOverview() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border)] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Content Column */}
          <div className="flex flex-col items-start lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
              MARKET PERSPECTIVE
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              A Clearer View of the Market
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              A visual representation of the structured, research-focused approach
              behind our trading solutions.
            </p>

            <div className="pt-4 space-y-4 w-full">
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Research-Driven Methodology
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Systematic observation of market conditions designed to support clear decision-making.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Structured Execution Parameters
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Focus on disciplined risk management principles and consistent analytical guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Market Panel Column */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl space-y-6 relative overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                    ANALYTICS // OVERVIEW
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--gold)] border border-[var(--border-subtle)]">
                  STRUCTURED VIEW
                </span>
              </div>

              {/* Main Abstract Chart Area */}
              <div className="relative h-48 w-full rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-4 flex flex-col justify-between overflow-hidden">
                {/* Subtle Grid overlay */}
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-30"
                  aria-hidden="true"
                />

                {/* SVG Candlesticks & Wave Line */}
                <div className="relative z-10 h-full w-full flex items-center justify-between" aria-hidden="true">
                  <svg
                    className="h-full w-full stroke-[var(--accent)] fill-none"
                    viewBox="0 0 400 120"
                    preserveAspectRatio="none"
                  >
                    {/* Abstract Candlesticks (Decorative) */}
                    <g stroke="#334155" strokeWidth="1">
                      <line x1="30" y1="20" x2="30" y2="100" />
                      <line x1="80" y1="10" x2="80" y2="90" />
                      <line x1="130" y1="30" x2="130" y2="110" />
                      <line x1="180" y1="15" x2="180" y2="85" />
                      <line x1="230" y1="25" x2="230" y2="105" />
                      <line x1="280" y1="5" x2="280" y2="75" />
                      <line x1="330" y1="20" x2="330" y2="95" />
                      <line x1="370" y1="10" x2="370" y2="80" />
                    </g>
                    <g stroke="none">
                      <rect x="22" y="35" width="16" height="40" fill="#10b981" rx="2" opacity="0.8" />
                      <rect x="72" y="25" width="16" height="50" fill="#10b981" rx="2" opacity="0.8" />
                      <rect x="122" y="50" width="16" height="45" fill="#ef4444" rx="2" opacity="0.8" />
                      <rect x="172" y="30" width="16" height="35" fill="#10b981" rx="2" opacity="0.8" />
                      <rect x="222" y="45" width="16" height="40" fill="#10b981" rx="2" opacity="0.8" />
                      <rect x="272" y="15" width="16" height="45" fill="#10b981" rx="2" opacity="0.8" />
                      <rect x="322" y="35" width="16" height="35" fill="#ef4444" rx="2" opacity="0.8" />
                      <rect x="362" y="20" width="16" height="40" fill="#10b981" rx="2" opacity="0.8" />
                    </g>
                    {/* Smoothing Overlay Trendline */}
                    <path
                      d="M 10 70 Q 70 30 130 65 T 230 40 T 330 35 T 390 15"
                      stroke="var(--gold)"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </div>

              {/* Supporting Analysis Modules */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                    SIGNAL FRAMEWORK
                  </span>
                  <span className="text-xs font-semibold text-[var(--accent)] mt-1 block">
                    MULTIVARIATE TREND
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                    RISK MONITOR
                  </span>
                  <span className="text-xs font-semibold text-[var(--gold)] mt-1 block">
                    CAPITAL PRESERVATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
