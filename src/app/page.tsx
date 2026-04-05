"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Package, Puzzle, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCapture from "@/components/EmailCapture";

const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/7p3PVFq3";

const tiles = [
  {
    icon: BookOpen,
    title: "Free guides",
    desc: "Setup tutorials, skill walkthroughs, and tips.",
    href: "/guides",
    cta: "Browse guides",
  },
  {
    icon: Package,
    title: "AI stack packages",
    desc: "The right model, configured for you. API key included.",
    href: "/packages",
    cta: "View packages",
  },
  {
    icon: Puzzle,
    title: "Skill packs",
    desc: "Ready-made skills that drop straight into OpenClaw.",
    href: "/toolkit",
    cta: "Browse skill packs",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-25" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              The unofficial OpenClaw AI hub
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Everything you need to get the most{" "}
            <span className="gradient-text">out of OpenClaw AI.</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Free guides, curated AI model setups, skill packs, and a community of builders. All in one place.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button variant="hero" size="lg" asChild className="text-base px-8 py-6 min-w-[200px]">
              <Link href="/guides">
                Browse free guides
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="text-base px-8 py-6 min-w-[200px]">
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-1.5 h-4 w-4" />
                Join the Discord
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Feature tiles */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiles.map((tile, i) => (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-card p-8 flex flex-col card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <tile.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold mb-2">{tile.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{tile.desc}</p>
                <Link href={tile.href} className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                  {tile.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto rounded-2xl border border-primary/20 px-8 py-12 text-center"
            style={{ background: "linear-gradient(135deg, rgba(78,204,163,0.08) 0%, rgba(94,106,210,0.06) 100%)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Join the community</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
              Ask questions, share automations, and get help from other OpenClaw users.
            </p>
            <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                Join Discord
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <EmailCapture
              heading="Get notified when the installer launches"
              subheading="Plus weekly OpenClaw tips, new guides, and skill pack updates."
              finePrint="No spam. Unsubscribe anytime."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
