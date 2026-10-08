"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";

export function MarketOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal observer
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
      className="py-16 md:py-24 bg-[var(--bg-secondary)]/80 border-b border-[var(--border)] overflow-hidden relative"
    >
      {/* Soft atmospheric background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual Market Perspective Column (Left on Desktop, Top on Mobile) */}
          <div
            className={`lg:col-span-6 flex justify-center w-full transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)]/70 backdrop-blur-sm p-6 shadow-2xl flex flex-col justify-between overflow-hidden group">
              {/* Subtle background grid geometry */}
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.75rem_1.75rem] opacity-25"
                aria-hidden="true"
              />

              {/* Decorative corner markers */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[var(--accent)]/40" />
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[var(--accent)]/40" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[var(--accent)]/40" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[var(--accent)]/40" />

              {/* Top micro labels - non-misleading neutral conceptual context */}
              <div className="relative z-10 flex items-center justify-between border-b border-[var(--border)]/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="text-[11px] font-mono tracking-wider text-[var(--text-secondary)] uppercase">
                    PERSPECTIVE
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase border border-[var(--border-subtle)] px-2 py-0.5 rounded">
                  CONTEXT
                </span>
              </div>

              {/* Main Artwork: Abstract Flowing Contour Lines & Market Wave Geometry */}
              <div className="relative z-10 my-auto h-48 sm:h-56 w-full flex items-center justify-center overflow-hidden">
                <svg
                  className="w-full h-full text-[var(--accent)]"
                  viewBox="0 0 500 240"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <defs>
                    {/* Emerald Gradient */}
                    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
                    </linearGradient>

                    {/* Gold Accent Gradient */}
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.2" />
                    </linearGradient>

                    {/* Area fill under primary contour */}
                    <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Layered Translucent Background Wave Contours */}
                  <path
                    d="M 20 180 Q 120 210 220 150 T 420 160 T 480 120"
                    stroke="var(--border-subtle)"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                  <path
                    d="M 20 140 Q 140 90 250 130 T 400 100 T 480 80"
                    stroke="var(--border-subtle)"
                    strokeWidth="1"
                    opacity="0.4"
                  />

                  {/* Shaded Area under main curve */}
                  <path
                    d="M 20 160 Q 130 60 240 120 T 380 70 T 480 40 L 480 220 L 20 220 Z"
                    fill="url(#areaFill)"
                  />

                  {/* Primary Abstract Flow Contour Curve */}
                  <path
                    d="M 20 160 Q 130 60 240 120 T 380 70 T 480 40"
                    stroke="url(#emeraldGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={`transition-all duration-1000 ${
                      isVisible ? "animate-draw-path" : ""
                    }`}
                  />

                  {/* Secondary Gold Highlight Curve */}
                  <path
                    d="M 20 120 Q 100 170 200 110 T 360 130 T 480 100"
                    stroke="url(#goldGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />

                  {/* Subtle Abstract Node Points (No numbers) */}
                  <circle cx="130" cy="98" r="3.5" fill="var(--accent)" />
                  <circle cx="130" cy="98" r="8" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />

                  <circle cx="240" cy="120" r="3" fill="var(--gold)" />

                  <circle cx="380" cy="70" r="4" fill="var(--accent)" />
                  <circle cx="380" cy="70" r="10" stroke="var(--accent)" strokeWidth="1" opacity="0.25" />

                  {/* Vertical Guide Lines */}
                  <line x1="130" y1="98" x2="130" y2="210" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="380" y1="70" x2="380" y2="210" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Bottom Micro Context Labels */}
              <div className="relative z-10 flex items-center justify-between border-t border-[var(--border)]/60 pt-3 text-[10px] font-mono text-[var(--text-muted)]">
                <span className="uppercase tracking-wider">ANALYSIS</span>
                <span className="uppercase tracking-wider">MARKET VIEW</span>
              </div>
            </div>
          </div>

          {/* Content Column (Right on Desktop, Bottom on Mobile) */}
          <div
            className={`flex flex-col items-start lg:col-span-6 space-y-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
              MARKET PERSPECTIVE
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl antialiased">
              A Clearer View of the Market
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Markets are constantly changing. A structured approach starts with understanding the broader picture, relevant information, and the conditions surrounding each decision.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-[var(--bg-primary)]/60 border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Macro Perspective
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-normal">
                  Observing broader market themes and underlying liquidity conditions before taking action.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-primary)]/60 border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Disciplined Evaluation
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-normal">
                  Evaluating opportunities through defined risk criteria rather than emotional reaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
