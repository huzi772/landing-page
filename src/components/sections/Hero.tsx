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

    // Restrained max tilt angle (max 2.5 degrees)
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

          {/* Right Visual Column — Abstract Cinematic Financial Visual */}
          <div
            className="animate-hero-visual-reveal flex items-center justify-center lg:col-span-5 w-full mt-4 lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={visualRef}
              className="relative w-full max-w-lg aspect-[4/3] rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-card)]/90 via-[var(--bg-secondary)]/80 to-[var(--bg-primary)] p-6 md:p-8 shadow-2xl transition-transform duration-300 ease-out overflow-hidden flex flex-col justify-between"
              style={{ transformStyle: "preserve-3d" }}
              aria-hidden="true"
            >
              {/* Subtle background ambient atmospheric glows */}
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />

              {/* Minimal Grid & Radial Masking overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

              {/* Top ambient accent dot framing */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]/60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-subtle)]" />
                </div>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
              </div>

              {/* Core Abstract Financial Flow Canvas (Raw Vector Artwork) */}
              <div className="relative my-auto h-48 sm:h-56 w-full flex items-center justify-center">
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  viewBox="0 0 400 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="emeraldFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                      <stop offset="40%" stopColor="#10b981" stopOpacity="0.9" />
                      <stop offset="80%" stopColor="#34d399" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
                    </linearGradient>

                    <linearGradient id="goldFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.05" />
                      <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.15" />
                    </linearGradient>

                    <linearGradient id="glowArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Atmospheric Grid Reference Lines */}
                  <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
                  <line x1="0" y1="165" x2="400" y2="165" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

                  {/* Translucent gradient fill beneath flow curve */}
                  <path
                    d="M 0 170 Q 100 150, 160 115 T 280 85 T 400 35 L 400 220 L 0 220 Z"
                    fill="url(#glowArea)"
                  />

                  {/* Secondary Champagne/Gold Accent Curve */}
                  <path
                    d="M 0 185 Q 120 170, 190 135 T 320 95 T 400 55"
                    stroke="url(#goldFlow)"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    fill="none"
                  />

                  {/* Primary Emerald Fluid Vector Curve */}
                  <path
                    d="M 0 170 Q 100 150, 160 115 T 280 85 T 400 35"
                    stroke="url(#emeraldFlow)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-draw-path"
                  />

                  {/* Abstract Focal Node Points */}
                  <circle cx="160" cy="115" r="3.5" fill="#10b981" className="animate-pulse" />
                  <circle cx="160" cy="115" r="7.5" stroke="#10b981" strokeOpacity="0.35" fill="none" />

                  <circle cx="280" cy="85" r="3.5" fill="#f59e0b" />
                  <circle cx="280" cy="85" r="6.5" stroke="#f59e0b" strokeOpacity="0.25" fill="none" />

                  <circle cx="365" cy="45" r="3" fill="#34d399" className="animate-pulse" />
                  <circle cx="365" cy="45" r="8" stroke="#34d399" strokeOpacity="0.2" fill="none" />
                </svg>
              </div>

              {/* Bottom Subtle Ambient Accent Line */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[var(--border)]/60">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent opacity-80" />
                <div className="h-1 w-1 rounded-full bg-[var(--gold)]/50" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
