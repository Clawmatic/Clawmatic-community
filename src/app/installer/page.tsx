import type { Metadata } from 'next';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'One-Click OpenClaw Installer — Coming Soon',
  description: 'No terminal. No config files. No API setup headaches. The ClawMatic one-click installer is coming soon. Get notified when it launches.',
};

export default function InstallerPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
          <span className="inline-block text-xs font-semibold border border-muted-foreground/30 text-muted-foreground rounded-full px-4 py-1.5 mb-6 tracking-widest uppercase">
            Coming soon
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            One-click OpenClaw installer
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            No terminal. No config files. No API setup headaches. Just click install and you&apos;re running.
          </p>
          <p className="text-sm text-muted-foreground/75 max-w-xl mx-auto mb-10">
            Currently in final testing — launching Q2 2026.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-xl border border-border/50 bg-card p-10 max-w-2xl mx-auto">
            <EmailCapture
              heading="Be first in line for early access"
              subheading="We&apos;re emailing early access links to the list first, plus new guides and OpenClaw updates."
              finePrint="No spam. Unsubscribe anytime."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
