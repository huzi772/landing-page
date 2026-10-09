"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Lightweight Active Section Observer
  useEffect(() => {
    const sectionIds = ["services", "how-it-works", "why-us", "faq"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible sections
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or proximity to top
          const topMost = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(`#${topMost.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.3, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg-primary)]/90 backdrop-blur-md transition-colors">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo Placeholder */}
          <a
            href="#top"
            className="flex items-center gap-2 font-bold text-lg tracking-tight text-[var(--text-primary)] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-slate-950 font-extrabold text-sm">
              TS
            </span>
            <span className="bg-gradient-to-r from-[var(--text-primary)] via-slate-200 to-[var(--text-secondary)] bg-clip-text text-transparent">
              BRAND NAME
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm flex items-center gap-1.5 ${
                    isActive
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] inline-block shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-[var(--text-primary)] transition-transform duration-200" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 text-[var(--text-primary)] transition-transform duration-200" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Backdrop & Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden flex flex-col">
          {/* Restrained Backdrop Overlay */}
          <div
            className="fixed inset-0 top-16 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Drawer Content */}
          <div
            id="mobile-menu"
            className="relative z-50 border-b border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-6 shadow-2xl transition-all duration-200"
          >
            <Container className="space-y-6">
              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-2 text-base font-medium py-2 px-3 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                        isActive
                          ? "bg-[var(--accent-muted)] text-[var(--accent)] font-semibold"
                          : "text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]"
                      }`}
                    >
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                      )}
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>
              <div className="pt-4 border-t border-[var(--border)]">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    closeMenu();
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
