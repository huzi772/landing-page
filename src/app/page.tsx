import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MarketOverview } from "@/components/sections/MarketOverview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  const colorSwatches = [
    { name: "--bg-primary", label: "Primary BG", var: "bg-[var(--bg-primary)]", border: true },
    { name: "--bg-secondary", label: "Secondary BG", var: "bg-[var(--bg-secondary)]", border: true },
    { name: "--bg-card", label: "Card BG", var: "bg-[var(--bg-card)]", border: true },
    { name: "--accent", label: "Emerald Accent", var: "bg-[var(--accent)]", textColor: "text-slate-950" },
    { name: "--gold", label: "Gold Accent", var: "bg-[var(--gold)]", textColor: "text-slate-950" },
    { name: "--text-primary", label: "Primary Text", var: "bg-[var(--text-primary)]", textColor: "text-slate-950" },
    { name: "--text-secondary", label: "Secondary Text", var: "bg-[var(--text-secondary)]", textColor: "text-slate-950" },
    { name: "--border", label: "Border Token", var: "bg-[var(--border)]", border: true },
    { name: "--success", label: "Success Token", var: "bg-[var(--success)]", textColor: "text-slate-950" },
    { name: "--warning", label: "Warning Token", var: "bg-[var(--warning)]", textColor: "text-slate-950" },
    { name: "--error", label: "Error Token", var: "bg-[var(--error)]", textColor: "text-white" },
  ];

  return (
    <div id="top" className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Services />
      <HowItWorks />
      <MarketOverview />
      <FAQ />
      <FinalCTA />
      <Footer />

      <main className="py-12">
        <Container className="space-y-16">
          {/* Banner */}
          <div className="border-b border-[var(--border)] pb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--gold-muted)] text-[var(--gold)] border border-[var(--gold)]/20 mb-3">
              TEMPORARY DESIGN SYSTEM SHOWCASE
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Visual Design Foundation
            </h2>
            <p className="mt-2 text-[var(--text-secondary)] text-base max-w-2xl">
              Centralized design tokens, typography scale, reusable UI components, and color palette for the trading platform.
            </p>
          </div>

          {/* 1. Color System Swatches */}
          <section className="space-y-6">
            <div className="border-l-2 border-[var(--accent)] pl-4">
              <h3 className="text-2xl font-semibold tracking-tight">1. Color Palette Tokens</h3>
              <p className="text-sm text-[var(--text-secondary)]">Semantic CSS Custom Properties</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {colorSwatches.map((s) => (
                <div
                  key={s.name}
                  className={`p-4 rounded-lg border ${
                    s.border ? "border-[var(--border-subtle)]" : "border-transparent"
                  } ${s.var} flex flex-col justify-between h-28 shadow-sm`}
                >
                  <span className={`text-xs font-mono font-medium ${s.textColor || "text-[var(--text-primary)]"}`}>
                    {s.name}
                  </span>
                  <span className={`text-xs font-semibold ${s.textColor || "text-[var(--text-secondary)]"}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Typography Scale */}
          <section className="space-y-6">
            <div className="border-l-2 border-[var(--accent)] pl-4">
              <h3 className="text-2xl font-semibold tracking-tight">2. Typography Hierarchy</h3>
              <p className="text-sm text-[var(--text-secondary)]">Geist Sans font system with high mobile readability</p>
            </div>
            <div className="space-y-6 p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <div>
                <span className="text-xs text-[var(--text-muted)] font-mono block mb-1">Display Heading (3xl to 5xl)</span>
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  Institutional-Grade Trading Signals
                </p>
              </div>
              <div>
                <span className="text-xs text-[var(--text-muted)] font-mono block mb-1">H1 Heading Example</span>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  Precision Market Intelligence
                </p>
              </div>
              <div>
                <span className="text-xs text-[var(--text-muted)] font-mono block mb-1">H2 Heading (xl to 3xl)</span>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Transparent Performance Metrics
                </p>
              </div>
              <div>
                <span className="text-xs text-[var(--text-muted)] font-mono block mb-1">H3 Heading (lg to 2xl)</span>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Risk-Managed Execution Strategies
                </p>
              </div>
              <div>
                <span className="text-xs text-[var(--text-muted)] font-mono block mb-1">Body Text (base)</span>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                  Our algorithmic analysis monitors key forex, crypto, and commodity liquidity pools in real time. Standard body text ensures clear legibility across mobile and desktop interfaces.
                </p>
              </div>
              <div>
                <span className="text-xs text-[var(--text-muted)] font-mono block mb-1">Small / Caption Text (sm / xs)</span>
                <p className="text-xs text-[var(--text-muted)]">
                  * Past performance does not guarantee future results. Trading involves financial risk.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Button Foundation */}
          <section className="space-y-6">
            <div className="border-l-2 border-[var(--accent)] pl-4">
              <h3 className="text-2xl font-semibold tracking-tight">3. Button Variants & States</h3>
              <p className="text-sm text-[var(--text-secondary)]">Accessible contrast, minimum 44px touch targets on mobile</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Button</CardTitle>
                  <CardDescription>High emphasis actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Button variant="primary" size="lg" className="w-full">
                      Primary Action (Large)
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" size="md" className="w-full">
                      Primary Action (Medium)
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" size="sm" className="w-full">
                      Primary Action (Small)
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secondary Button</CardTitle>
                  <CardDescription>Medium emphasis actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Button variant="secondary" size="lg" className="w-full">
                      Secondary Action (Large)
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary" size="md" className="w-full">
                      Secondary Action (Medium)
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary" size="sm" className="w-full">
                      Secondary Action (Small)
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ghost & Disabled</CardTitle>
                  <CardDescription>Low emphasis and inactive states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Button variant="ghost" size="md" className="w-full">
                      Ghost Action
                    </Button>
                  </div>
                  <div>
                    <Button variant="primary" disabled size="md" className="w-full">
                      Disabled Primary
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary" disabled size="md" className="w-full">
                      Disabled Secondary
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 4. Card Foundation */}
          <section className="space-y-6">
            <div className="border-l-2 border-[var(--accent)] pl-4">
              <h3 className="text-2xl font-semibold tracking-tight">4. Card Components</h3>
              <p className="text-sm text-[var(--text-secondary)]">Subtle dark backgrounds with optional hover states</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hoverable>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                      Interactive Card
                    </span>
                    <span className="text-xs text-[var(--gold)] font-medium">Hover Effect</span>
                  </div>
                  <CardTitle className="mt-2">Algorithmic Signal Engine</CardTitle>
                  <CardDescription>
                    Demonstration of card elevation with subtle border hover highlight.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Standard container designed for future features, service summaries, or statistics displays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                      Static Card
                    </span>
                    <span className="text-xs text-[var(--success)] font-medium">Standard</span>
                  </div>
                  <CardTitle className="mt-2">Risk Management Protocol</CardTitle>
                  <CardDescription>
                    Static card structure without hover transitions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Clean contrast and clear typography hierarchy for long-form reading or information display.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer info */}
          <div className="pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--text-muted)]">
            Trading Service Landing Page — Design System Foundation v1.0
          </div>
        </Container>
      </main>
    </div>
  );
}
