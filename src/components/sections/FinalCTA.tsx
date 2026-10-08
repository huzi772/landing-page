"use client";

import React from "react";
import { Container } from "@/components/ui/container";

/**
 * TELEGRAM CONFIGURATION
 * Provide the full Telegram link when available (e.g. "https://t.me/yourusername").
 * Leave empty ("") if contact link is not yet configured.
 */
const TELEGRAM_URL: string = "";

export function FinalCTA() {
  const isConfigured = Boolean(TELEGRAM_URL && TELEGRAM_URL.trim() !== "");

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[var(--bg-primary)] border-b border-[var(--border)] scroll-mt-16 relative overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Prominent Card Container */}
          <div className="relative rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-secondary)] p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden">
            {/* Subtle decorative background accent */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--accent)]/5 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--gold)]/5 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl mx-auto">
              {/* Eyebrow */}
              <span className="inline-block px-3.5 py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20 uppercase tracking-wider">
                READY TO GET STARTED?
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                Let&apos;s Discuss the Right Approach for You
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Have questions or want to understand which solution may fit your
                needs? Get in touch to discuss your requirements and the next steps.
              </p>

              {/* Primary CTA Button / Anchor */}
              <div className="pt-4 flex flex-col items-center space-y-4 w-full sm:w-auto">
                {isConfigured ? (
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-hover)] transition-all shadow-lg hover:shadow-[var(--accent-glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer"
                  >
                    <TelegramIcon />
                    <span>Connect on Telegram</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-hover)] transition-all shadow-lg hover:shadow-[var(--accent-glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer"
                  >
                    <TelegramIcon />
                    <span>Connect on Telegram</span>
                  </button>
                )}

                {/* Supporting text */}
                <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
                  We&apos;ll discuss your requirements and provide information about the
                  available options.
                </p>
              </div>
            </div>
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
