import React from "react";
import { Container } from "@/components/ui/container";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors">
      <Container className="py-12 md:py-16">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-bold text-lg tracking-tight text-[var(--text-primary)] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-slate-950 font-extrabold text-sm">
                TS
              </span>
              <span className="bg-gradient-to-r from-[var(--text-primary)] via-slate-200 to-[var(--text-secondary)] bg-clip-text text-transparent">
                BRAND NAME
              </span>
            </a>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-sm">
              Professional trading solutions built around a structured and transparent
              approach.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block py-1 hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Action / CTA */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Get Started
            </p>
            <p className="text-xs text-[var(--text-muted)] max-w-xs leading-relaxed">
              Ready to discuss your trading requirements and available options?
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-xs font-bold bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-hover)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© 2026 BRAND NAME. All rights reserved.</p>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            <span>Back to top</span>
            <svg
              className="h-3.5 w-3.5 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
