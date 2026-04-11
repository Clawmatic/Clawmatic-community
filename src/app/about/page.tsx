import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About ClawMatic Community',
  description: 'The unofficial hub for OpenClaw AI users. Free guides, curated model setups, skill packs, and a growing community of builders.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-14 relative border-b border-border/50">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Built for OpenClaw users.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ClawMatic Community is the unofficial hub for OpenClaw AI — free guides, curated model setups, skill packs, and a growing community of builders figuring it out together.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="space-y-10">
            <div>
              <p className="text-base text-muted-foreground leading-relaxed">
                This is a solo project, built openly and not affiliated with OpenClaw Inc. Feedback from the community drives what gets built next. I&apos;m Robin — based in Belgium, building this alongside the ClawMatic agency. If you find something broken or missing, I want to know.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">The mission</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Make OpenClaw accessible. Whether you&apos;re installing it for the first time or building complex automations — there should be a place with clear guides, tested tools, and people who can help. That&apos;s what this is.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">What&apos;s here</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ['Free guides', 'For every skill level'],
                  ['AI stack packages', 'API key included, done for you'],
                  ['Skill packs', 'Drop into OpenClaw, they work'],
                  ['Discord', 'Questions, help, and showing your builds'],
                  ['Installer', 'Coming soon, one-click setup'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-xl border border-border/50 bg-card p-5">
                    <p className="text-sm font-semibold mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" asChild>
                <a href="https://discord.gg/7p3PVFq3" target="_blank" rel="noopener noreferrer">
                  Join the Discord <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link href="/guides">
                  Browse the guides <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
