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
      { threshold: 0, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-[var(--bg-secondary)]/80 border-b border-[var(--border)] overflow-hidden relative"
    >
      {/* Soft atmospheric ambient glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual Column (Left on Desktop, Top on Mobile) — Open Abstract Artwork */}
          <div
            className={`lg:col-span-6 flex justify-center w-full transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* Radial gradient mask for borderless open grid */}
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]"
                aria-hidden="true"
              />

              {/* Main Artwork: Open Abstract Flowing Curves & Geometry */}
              <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
                <svg
                  className="w-full h-full text-[var(--accent)]"
                  viewBox="0 0 500 280"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  <defs>
                    {/* Primary Emerald Gradient */}
                    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.15" />
                    </linearGradient>

                    {/* Secondary Gold Gradient */}
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.15" />
                    </linearGradient>

                    {/* Atmospheric Area Fill */}
                    <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.14" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Layered Background Contours */}
                  <path
                    d="M 10 210 Q 120 240 230 170 T 430 180 T 490 140"
                    stroke="var(--border-subtle)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.4"
                  />
                  <path
                    d="M 10 160 Q 140 100 260 150 T 420 110 T 490 90"
                    stroke="var(--border-subtle)"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Soft Atmospheric Shading */}
                  <path
                    d="M 10 180 Q 130 70 250 140 T 390 85 T 490 50 L 490 260 L 10 260 Z"
                    fill="url(#areaFill)"
                  />

                  {/* Primary Flowing Curve */}
                  <path
                    d="M 10 180 Q 130 70 250 140 T 390 85 T 490 50"
                    stroke="url(#emeraldGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={`transition-all duration-1000 ${
                      isVisible ? "animate-draw-path" : ""
                    }`}
                  />

                  {/* Secondary Restrained Gold Curve */}
                  <path
                    d="M 10 130 Q 110 190 210 120 T 370 145 T 490 110"
                    stroke="url(#goldGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />

                  {/* Minimal Abstract Node Points */}
                  <circle cx="138" cy="108" r="3.5" fill="var(--accent)" />
                  <circle cx="138" cy="108" r="9" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />

                  <circle cx="250" cy="140" r="3" fill="var(--gold)" />

                  <circle cx="390" cy="85" r="4" fill="var(--accent)" />
                  <circle cx="390" cy="85" r="11" stroke="var(--accent)" strokeWidth="1" opacity="0.2" />

                  {/* Subtle Vertical Accent Lines */}
                  <line x1="138" y1="108" x2="138" y2="240" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
                  <line x1="390" y1="85" x2="390" y2="240" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Column (Right on Desktop, Bottom on Mobile) — Open Editorial Layout */}
          <div
            className={`flex flex-col items-start lg:col-span-6 space-y-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
              MARKET PERSPECTIVE
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl antialiased leading-[1.15]">
              A Clearer View of the Market
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Markets are constantly changing. A structured approach starts with understanding the broader picture, relevant information, and the conditions surrounding each decision.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
