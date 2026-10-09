"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";

/**
 * TELEGRAM CONFIGURATION
 * Provide the full Telegram link when available (e.g. "https://t.me/yourusername").
 * Leave empty ("") if contact link is not yet configured.
 */
const TELEGRAM_URL: string = "";

export function FinalCTA() {
  const isConfigured = Boolean(TELEGRAM_URL && TELEGRAM_URL.trim() !== "");
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
      id="contact"
      className="py-20 sm:py-24 md:py-32 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-16 relative overflow-hidden text-center"
    >
      {/* Decorative Top Accent Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />

      {/* Abstract Background Artwork — Soft Radial Glows & Concentric Rings */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[var(--accent)]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] rounded-full bg-[var(--gold)]/5 blur-2xl"
        aria-hidden="true"
      />

      {/* Decorative Concentric SVG Rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25" aria-hidden="true">
        <svg className="w-[48rem] h-[48rem] text-[var(--border-subtle)]" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block px-3.5 py-1 text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
              READY TO GET STARTED?
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] antialiased leading-[1.12] transition-all duration-700 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Let&apos;s Discuss the Right Approach for You
          </h2>

          {/* Supporting Text */}
          <p
            className={`text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Have questions or want to understand which solution may fit your needs?
            Get in touch to discuss your requirements and the next steps.
          </p>

          {/* Primary CTA Button & Supporting Note */}
          <div
            className={`pt-2 flex flex-col items-center space-y-4 transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {isConfigured ? (
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-hover)] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer"
              >
                <TelegramIcon />
                <span>Connect on Telegram</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-hover)] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer"
              >
                <TelegramIcon />
                <span>Connect on Telegram</span>
              </button>
            )}

            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
              We&apos;ll discuss your requirements and provide information about the available options.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TelegramIcon() {
  return (
    <svg
      className="h-5 w-5 fill-current shrink-0"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.81-1.59 4.6-1.87 5.12-1.88.11 0 .37.03.54.18.14.12.18.28.19.45-.01.07.01.21 0 .33z" />
    </svg>
  );
}
