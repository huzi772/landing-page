"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border)]">
      {/* Background ambient lighting accents */}
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-80 w-80 rounded-full bg-[var(--gold)]/5 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>PROFESSIONAL TRADING SOLUTIONS</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-5xl/tight">
              Trade With a More{" "}
              <span className="bg-gradient-to-r from-[var(--text-primary)] via-emerald-200 to-[var(--accent)] bg-clip-text text-transparent">
                Professional Approach
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-base text-[var(--text-secondary)] sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore professional trading solutions designed to help you approach the market with greater clarity and a structured process.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const el = document.querySelector("#services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust / Value Indicators */}
            <div className="mt-10 pt-6 border-t border-[var(--border)] w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                  Professional Approach
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5 sm:text-xs">
                  Structured methodology
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                  Transparent Process
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5 sm:text-xs">
                  Clear analytical guidelines
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-primary)] sm:text-sm">
                  Dedicated Support
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5 sm:text-xs">
                  Active team assistance
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="flex items-center justify-center lg:col-span-5" aria-hidden="true">
            <div className="relative w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-2xl overflow-hidden">
              {/* Card top bar */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)]">
                  MARKET_ANALYTICS // LIVE
                </div>
              </div>

              {/* Abstract SVG Financial Chart Visualization */}
              <div className="space-y-4">
                <div className="flex items-end justify-between h-40 pt-4 px-2 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)] relative overflow-hidden">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />

                  {/* SVG Trendline */}
                  <svg
                    className="absolute inset-0 h-full w-full stroke-[var(--accent)] fill-none"
                    viewBox="0 0 300 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 90 Q 50 70 80 85 T 160 40 T 230 55 T 300 15"
                      strokeWidth="3"
                    />
                    <path
                      d="M 0 90 Q 50 70 80 85 T 160 40 T 230 55 T 300 15 L 300 120 L 0 120 Z"
                      className="fill-[var(--accent)]/10 stroke-none"
                    />
                  </svg>
                </div>

                {/* Abstract Visual Indicators */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                      Execution Model
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-primary)] mt-1 block">
                      Disciplined Risk
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                      Market Clarity
                    </span>
                    <span className="text-sm font-semibold text-[var(--gold)] mt-1 block">
                      Real-Time Analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
