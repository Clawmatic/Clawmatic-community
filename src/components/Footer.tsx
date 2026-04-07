import Link from 'next/link';
import { Zap } from 'lucide-react';

const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/7p3PVFq3';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-base font-bold text-foreground">
                Claw<span className="text-primary">Matic</span>
                <span className="text-muted-foreground font-normal text-sm ml-1.5">Community</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The unofficial hub for OpenClaw AI users.
              <br />
              <span className="mt-1 inline-block">🇧🇪 Made in Belgium</span>
              <br />
              <span className="text-xs text-muted-foreground/50">Not affiliated with OpenClaw Inc.</span>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Content</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Guides', href: '/guides' },
                { label: 'Skill Packs', href: '/toolkit' },
                { label: 'AI Stack Packages', href: '/packages' },
                { label: 'Stack Recommender', href: '/quiz' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Community</p>
            <ul className="space-y-2.5">
              <li>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/installer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Installer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6">
          <p className="text-xs text-muted-foreground/60 text-center">
            © 2026 ClawMatic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
