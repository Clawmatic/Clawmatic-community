import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Curated AI Stack Packages',
  description:
    "Stop guessing which AI model to use. We've done the research — these packages tell you exactly which model to use on OpenClaw and how to get the best results.",
};

const packages = [
  {
    id: 'copywriter',
    name: 'The Copywriter Stack',
    price: '€29',
    bestFor: 'Marketers, content creators, freelance writers',
    description: 'The perfect AI setup for anyone who writes for a living.',
    includes: [
      'Pre-loaded OpenRouter API key (€10 credits included)',
      'Pre-configured model setup — best model for writing, drop-in ready',
      '30 prompt templates for copywriting, emails, and social content',
      'Recommended skill list with one-command install',
      'Step-by-step setup guide — live in 15 minutes',
      '1 week of priority Discord support',
    ],
    creditsNote: '€10 of credits covers roughly 1–2 months of normal writing use. When you run out, top up directly on OpenRouter — takes 2 minutes.',
    buttonText: 'Get the Copywriter Stack — we handle the setup',
    gumroadUrl: 'https://clawmatic.gumroad.com/l/jymqu',
    highlight: false,
  },
  {
    id: 'support-bot',
    name: 'The Support Bot Stack',
    price: '€39',
    bestFor: 'Small businesses, e-commerce, service businesses',
    description: 'Build a support bot that actually helps your customers.',
    includes: [
      'Pre-loaded OpenRouter API key (€15 credits included)',
      'Pre-configured model setup — best model for Q&A and support',
      'Example conversation flows for common support scenarios',
      'Custom OpenClaw config file — drop it in, your bot is ready',
      'Recommended skill list with one-command install',
      'Step-by-step setup guide — live in 15 minutes',
      '30-min onboarding call with ClawMatic',
      '1 week of priority Discord support',
    ],
    creditsNote: '€15 of credits covers a significant volume of customer interactions. When you run out, top up directly on OpenRouter — takes 2 minutes.',
    buttonText: 'Get the Support Bot Stack — we handle the setup',
    gumroadUrl: 'https://clawmatic.gumroad.com/l/imsche',
    highlight: true,
  },
  {
    id: 'research',
    name: 'The Research Stack',
    price: '€34',
    bestFor: 'Consultants, analysts, researchers, students',
    description: 'Deep research, faster. The right model, set up the right way.',
    includes: [
      'Pre-loaded OpenRouter API key (€12 credits included)',
      'Pre-configured model setup — best model for reasoning and analysis',
      'Research workflow guide with step-by-step process',
      '30 prompt templates for research, summarisation, and analysis',
      'Recommended skill list with one-command install',
      'Step-by-step setup guide — live in 15 minutes',
      '1 week of priority Discord support',
    ],
    creditsNote: '€12 of credits covers months of research use at normal volumes. When you run out, top up directly on OpenRouter — takes 2 minutes.',
    buttonText: 'Get the Research Stack — we handle the setup',
    gumroadUrl: 'https://clawmatic.gumroad.com/l/pcdgmu',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'Do I need to create an OpenRouter account?',
    a: "No. We create and configure everything on our end. You receive a ready-to-use API key by email — just paste it into OpenClaw and you're done.",
  },
  {
    q: 'What exactly do you set up for me?',
    a: 'Everything. We create your API key, load it with credits, and prepare a custom config file for your specific package. All you do is install OpenClaw and paste in what we send you.',
  },
  {
    q: 'When do I receive my key and files?',
    a: "Within 24 hours of purchase, by email. If you haven't heard from us after 24 hours, message us on Discord: https://discord.gg/7p3PVFq3",
  },
  {
    q: 'What happens when my credits run out?',
    a: 'You top up directly on OpenRouter — it takes 2 minutes and you add whatever amount you want. Most users spend €5–15/month depending on usage.',
  },
  {
    q: 'Do I need to install anything before buying?',
    a: 'Just OpenClaw itself. Our setup guide walks you through it in 15 minutes. The one-click installer is coming soon and will make this even easier.',
  },
  {
    q: 'Can I use my own API key instead?',
    a: 'Yes. If you already have an OpenRouter account, you can use your own key. The config files and templates work with any provider. The included key is simply so you don\'t have to think about it.',
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-14 relative border-b border-border/50">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Curated packages
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Stop guessing. Use the right model.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            OpenRouter gives you access to dozens of AI models. The problem? Choosing the right one is overwhelming. We&apos;ve done the research — these packages tell you exactly which model to use, how to set it up in OpenClaw, and how to get the best results.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">We handle everything for you</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { n: '1', t: 'You buy a package', d: 'Pick the stack that fits your use case.' },
                { n: '2', t: 'We configure everything', d: "Within 24h we set up your API key, load credits, and prepare your config." },
                { n: '3', t: 'Paste and go', d: "You receive everything by email. Paste your key and you're running AI in under 15 minutes." },
              ].map((step) => (
                <div key={step.n} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1">{step.t}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-xl border p-7 flex flex-col card-hover ${
                  pkg.highlight ? 'border-primary/30 bg-primary/5 relative' : 'border-border/50 bg-card'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most popular
                  </span>
                )}
                <div className="mb-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-lg font-bold">{pkg.name}</h2>
                    <span className={`text-xl font-bold flex-shrink-0 ${pkg.highlight ? 'text-primary' : 'text-foreground'}`}>{pkg.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground/70">Best for:</strong> {pkg.bestFor}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">What&apos;s included</p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground/70 leading-relaxed mb-6 italic">{pkg.creditsNote}</p>
                <Button variant={pkg.highlight ? 'hero' : 'hero-outline'} asChild className="w-full">
                  <a href={pkg.gumroadUrl} target="_blank" rel="noopener noreferrer">
                    {pkg.buttonText} <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground/60 text-center mt-3">We personally configure everything within 24 hours of purchase.</p>
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
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz CTA */}
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-1">Not sure which one fits?</p>
              <p className="font-bold text-lg leading-snug">Take the 2-minute quiz</p>
              <p className="text-sm text-muted-foreground mt-1">Answer 5 quick questions and get a personalised recommendation.</p>
            </div>
            <Button variant="hero" asChild className="flex-shrink-0">
              <Link href="/quiz">Find my stack <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
