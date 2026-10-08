"use client";

import React, { useRef, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current) return;
    // Check if user prefers reduced motion or device is touch/small screen
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 1024) {
      return;
    }

    const rect = visualRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Restrained max tilt angle (max 3 degrees)
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    visualRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!visualRef.current) return;
    visualRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 border-b border-[var(--border)]">
      {/* Background ambient lighting accents */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[120px] animate-ambient-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 -z-10 h-96 w-96 rounded-full bg-[var(--gold)]/5 blur-[100px] animate-ambient-pulse delay-500"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow Badge */}
            <div className="animate-hero-fade-up delay-100 mb-5 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>STRUCTURED TRADING SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-hero-fade-up delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-5xl/tight font-extrabold tracking-tight text-[var(--text-primary)]">
              Approach the Market With{" "}
              <span className="bg-gradient-to-r from-[var(--text-primary)] via-emerald-200 to-[var(--accent)] bg-clip-text text-transparent">
                Greater Clarity
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="animate-hero-fade-up delay-300 mt-5 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal">
              Professional trading solutions designed around a structured process, clear communication, and a disciplined approach to the market.
            </p>

            {/* CTA Buttons */}
            <div className="animate-hero-fade-up delay-400 mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
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
                className="w-full sm:w-auto transition-all duration-300 hover:border-[var(--border-subtle)] hover:-translate-y-0.5"
                onClick={() => {
                  const el = document.querySelector("#services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust / Value Indicators */}
            <div className="animate-hero-fade-up delay-500 mt-12 pt-8 border-t border-[var(--border)] w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Structured Methodology
                </p>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Disciplined execution framework
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Transparent Process
                </p>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Clear analytical guidelines
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Dedicated Support
                </p>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Active team assistance
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column — Abstract Financial Market Visual */}
          <div
            className="animate-hero-visual-reveal flex items-center justify-center lg:col-span-5 w-full mt-4 lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={visualRef}
              className="relative w-full max-w-lg rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-secondary)] p-6 md:p-8 shadow-2xl transition-transform duration-200 ease-out overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
              aria-hidden="true"
            >
              {/* Subtle background ambient panel highlight */}
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[var(--accent)]/15 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[var(--gold)]/10 blur-2xl pointer-events-none" />

              {/* Grid pattern background overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

              {/* Header visual framing elements */}
              <div className="relative flex items-center justify-between pb-6 mb-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[var(--gold)]/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[var(--border-subtle)]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-[11px] font-mono tracking-wider text-[var(--text-muted)] uppercase">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
              </div>

              {/* Main SVG Abstract Financial Geometry Canvas */}
              <div className="relative h-52 sm:h-60 w-full rounded-xl bg-[var(--bg-primary)]/60 border border-[var(--border)] backdrop-blur-sm p-4 overflow-hidden flex flex-col justify-between">
                {/* SVG Curves and Rays */}
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  viewBox="0 0 400 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
                      <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="fillArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal visual reference lines */}
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#1e293b" strokeDasharray="3 3" strokeWidth="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#1e293b" strokeDasharray="3 3" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#1e293b" strokeDasharray="3 3" strokeWidth="1" />

                  {/* Area fill beneath primary curve */}
                  <path
                    d="M 0 160 Q 90 140, 150 110 T 270 80 T 400 30 L 400 200 L 0 200 Z"
                    fill="url(#fillArea)"
                  />

                  {/* Gold accent line */}
                  <path
                    d="M 0 175 Q 110 160, 180 130 T 310 95 T 400 60"
                    stroke="url(#goldGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                  />

                  {/* Main Emerald Animated Line */}
                  <path
                    d="M 0 160 Q 90 140, 150 110 T 270 80 T 400 30"
                    stroke="url(#emeraldGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    className="animate-draw-path"
                  />

                  {/* Abstract Node Data Points */}
                  <circle cx="150" cy="110" r="4" fill="#10b981" className="animate-pulse" />
                  <circle cx="150" cy="110" r="8" stroke="#10b981" strokeOpacity="0.4" fill="none" />

                  <circle cx="270" cy="80" r="4" fill="#f59e0b" />
                  <circle cx="270" cy="80" r="7" stroke="#f59e0b" strokeOpacity="0.3" fill="none" />

                  <circle cx="370" cy="38" r="4" fill="#34d399" className="animate-pulse" />
                </svg>

                {/* Layered Glassmorphic Info Badge Overlay (Left Top) */}
                <div className="relative z-10 self-start rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1.5 shadow-md">
                  <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase block">
                    ANALYTICAL FRAMEWORK
                  </span>
                  <span className="text-xs font-medium text-[var(--text-primary)]">
                    Structured Analysis
                  </span>
                </div>

                {/* Layered Glassmorphic Info Badge Overlay (Right Bottom) */}
                <div className="relative z-10 self-end rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1.5 shadow-md">
                  <span className="text-[10px] font-mono tracking-wider text-[var(--gold)] uppercase block">
                    RISK CONTROL
                  </span>
                  <span className="text-xs font-medium text-[var(--text-primary)]">
                    Disciplined Parameters
                  </span>
                </div>
              </div>

              {/* Bottom Translucent Info Panel */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/80 p-3 backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase block">
                    EXECUTION MODEL
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-primary)] mt-0.5 block">
                    Systematic Approach
                  </span>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/80 p-3 backdrop-blur-sm">
                  <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase block">
                    MARKET FOCUS
                  </span>
                  <span className="text-xs font-semibold text-[var(--accent)] mt-0.5 block">
                    Clear Methodology
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
