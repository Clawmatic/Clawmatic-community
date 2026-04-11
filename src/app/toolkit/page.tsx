import type { Metadata } from 'next';
import { ArrowRight, Download, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'OpenClaw Skill Packs',
  description: 'Ready-made skills you can drop straight into OpenClaw. Tested, documented, and ready to use. Instant download.',
};

const packs = [
  {
    id: 'productivity',
    name: 'The Productivity Pack',
    price: '€19',
    description: 'Skills for email, scheduling, and task management. The essential toolkit for getting your day under control with AI.',
    tags: ['Email', 'Calendar', 'Tasks'],
    gumroadUrl: 'https://clawmatic.gumroad.com/l/jxhzr',
    comingSoon: false,
  },
  {
    id: 'research',
    name: 'The Research Pack',
    price: '€29',
    description: 'Skills for web research, summarisation, and analysis. Turn your AI into a research assistant that actually delivers.',
    tags: ['Research', 'Analysis', 'Web'],
    gumroadUrl: '#',
    comingSoon: true,
  },
  {
    id: 'support-bot',
    name: 'The Support Bot Pack',
    price: '€24',
    description: 'Customer support automation skills. Build an AI support agent that handles FAQs, triage, and escalation.',
    tags: ['Support', 'Automation', 'Q&A'],
    gumroadUrl: '#',
    comingSoon: true,
  },
  {
    id: 'writing',
    name: 'The Writing Pack',
    price: '€19',
    description: 'Content creation and copywriting skills. Draft emails, blog posts, social copy, and more — at speed.',
    tags: ['Copywriting', 'Content', 'Email'],
    gumroadUrl: '#',
    comingSoon: true,
  },
];

const faqs = [
  {
    q: 'What exactly is a skill pack?',
    a: 'A set of ready-made OpenClaw skill files (.md format) that you install with a single command. Each skill teaches your AI agent to do something specific — triage email, manage your calendar, search the web, and so on. No configuration needed, they work out of the box.',
  },
  {
    q: 'How do I install a skill pack?',
    a: 'One command in your terminal: openclaw skills install clawmatic-[pack-name]\nFull instructions are included with every pack.',
  },
  {
    q: 'Do I need an API key to use skill packs?',
    a: "Yes — skill packs work with any OpenClaw setup. If you don't have an API key yet, check out our packages — they include a pre-configured key with credits, fully set up by us.",
  },
  {
    q: "What's the difference between a pack and a package?",
    a: 'Packages (/packages) are complete done-for-you setups — we handle your API key, config, and everything else. Skill packs are the skill files themselves, for people who are already set up and want to extend what OpenClaw can do.',
  },
  {
    q: "What's the difference between individual packs and ClawMatic Pro?",
    a: 'Pro gives you every skill pack (current and future) plus priority support, early access to guides, and monthly office hours — all for €5/month. If you think you\'ll want more than one pack, Pro is better value.',
  },
];

export default function ToolkitPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-14 relative border-b border-border/50">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Skill packs
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">OpenClaw Skill Packs</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready-made skills you can drop straight into OpenClaw. Tested, documented, and ready to use.
          </p>
          <p className="text-sm text-muted-foreground/75 leading-relaxed mt-4">
            One pack available now, three more in development. New packs release monthly.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs text-primary border border-primary/20 bg-primary/5 rounded-full px-3 py-1.5">
              <Download className="h-3.5 w-3.5" />
              Instant download
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1.5">
              <Package className="h-3.5 w-3.5" />
              Drop into OpenClaw
            </span>
          </div>
        </div>
      </section>

      {/* Pricing section: Individual packs vs ClawMatic Pro */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Individual packs */}
            <div className="rounded-xl border border-border/50 bg-card p-8 flex flex-col">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">One-time purchase</p>
              <h2 className="text-2xl font-bold mb-3">Individual packs</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Buy only what you need. Each pack is a set of ready-to-install OpenClaw skill files for a specific use case. Install in one command, works immediately.
              </p>
              <p className="text-2xl font-bold text-foreground mt-auto">From €19 <span className="text-base font-normal text-muted-foreground">per pack</span></p>
            </div>

            {/* ClawMatic Pro */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 flex flex-col relative">
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                Recommended
              </span>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Monthly membership</p>
              <h2 className="text-2xl font-bold mb-1">ClawMatic Pro</h2>
              <p className="text-3xl font-bold text-primary mb-4">€5 <span className="text-base font-normal text-muted-foreground">/ month</span></p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                All skill packs included. Priority support. Early access to new guides and the installer. The best way to get the most out of OpenClaw.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'All current and future skill packs',
                  'Priority Discord support — responses within 24h',
                  'Early access to new guides before they go public',
                  'First access to the one-click installer at launch',
                  'Monthly office hours — live Q&A call with ClawMatic',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" asChild className="w-full mt-auto">
                {/* TODO: replace with Gumroad subscription link */}
                <a href="#">
                  Join ClawMatic Pro <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {packs.map((pack) => (
              <div key={pack.id} className="rounded-xl border border-border/50 bg-card p-6 flex flex-col card-hover relative">
                {pack.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50 font-medium">
                    Coming soon
                  </span>
                )}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h2 className="text-base font-bold leading-snug pr-2">{pack.name}</h2>
                  <span className="text-lg font-bold text-primary flex-shrink-0">{pack.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{pack.description}</p>
                {!pack.comingSoon && (
                  <p className="text-xs text-muted-foreground/80 mb-5 leading-relaxed">
                    What you&apos;ll be able to do: Triage your inbox, schedule follow-ups, and manage your task list — all without touching your keyboard.
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pack.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded border border-border/50 text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <Button variant={pack.comingSoon ? 'hero-outline' : 'hero'} asChild className="w-full" disabled={pack.comingSoon}>
                  {pack.comingSoon ? (
                    <span className="opacity-60 cursor-not-allowed">Coming soon</span>
                  ) : (
                    <a href={pack.gumroadUrl} target="_blank" rel="noopener noreferrer">
                      Get this pack <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-8">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-border/50 pb-6">
                  <p className="font-semibold text-sm mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
