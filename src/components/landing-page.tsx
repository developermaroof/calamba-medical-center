"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  CalendarCheck,
  Check,
  ChevronDown,
  Cpu,
  Droplet,
  Eye,
  Feather,
  Globe,
  MessageCircle,
  Phone,
  Play,
  Quote,
  Scan,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Target,
  Timer,
  Users,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionSection, SectionHeading } from "@/components/motion-wrapper";
import {
  about,
  benefits,
  booking,
  doctors,
  eligibility,
  faqs,
  hero,
  procedure,
  siteConfig,
  solutions,
  stats,
  testimonials,
  usps,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap = {
  sunrise: Sunrise,
  sparkles: Sparkles,
  activity: Activity,
  timer: Timer,
  scan: Scan,
  feather: Feather,
  target: Target,
  shield: ShieldCheck,
  globe: Globe,
  eye: Eye,
  droplet: Droplet,
  badge: Award,
  cpu: Cpu,
  users: Users,
} as const;

type IconKey = keyof typeof iconMap;
function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name as IconKey] ?? Sparkles;
  return <Cmp className={className} />;
}

const primaryCta = "h-12 rounded-full px-7 text-[0.95rem]";

/* Animated counter for the trust-stats band */
function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStarted(true),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 40;
    const inc = value / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(Math.floor(cur));
    }, 1100 / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1.5 text-sm text-white/70">{label}</p>
    </div>
  );
}

function Spectrum({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 font-heading text-sm font-bold uppercase tracking-wide",
        className
      )}
    >
      {hero.spectrum.map((word, i) => (
        <span key={word} className="flex items-center gap-2">
          <span>{word}</span>
          {i < hero.spectrum.length - 1 && (
            <span className="text-zeiss-sky">›</span>
          )}
        </span>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-base font-bold text-foreground sm:text-lg">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-primary transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
          {a}
        </p>
      </div>
    </div>
  );
}

function BookingForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-secondary p-10 text-center">
        <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-7" />
        </div>
        <p className="font-heading text-xl font-bold text-foreground">
          Request received!
        </p>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you — our {siteConfig.clinicName} team will reach out shortly to
          confirm your consultation.
        </p>
      </div>
    );
  }
  return (
    <form
      className="space-y-4 rounded-2xl bg-card p-6 shadow-soft sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" required placeholder="Juan" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" required placeholder="Dela Cruz" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" required placeholder="you@email.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact">Contact Number</Label>
          <Input id="contact" type="tel" required placeholder="09XX XXX XXXX" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="doctor">Preferred Doctor</Label>
          <select
            id="doctor"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            <option value="">No preference</option>
            {doctors.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name} — {d.title}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" type="date" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="time">Preferred Time</Label>
          <Input id="time" type="time" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="source">How did you hear about us?</Label>
          <Input id="source" placeholder="Facebook, friend, search…" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={3} placeholder="Anything we should know?" />
      </div>
      <Button type="submit" className={cn(primaryCta, "w-full")}>
        {booking.submit}
        <ArrowRight className="ml-1.5 size-4" />
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Demo form — submissions are not stored.
      </p>
    </form>
  );
}

const sectionX = "mx-auto max-w-7xl px-4 sm:px-6";

export function LandingPage() {
  return (
    <>
      <Header />

      {/* ─────────────── Hero ─────────────── */}
      <section className="relative overflow-hidden bg-hero-sky pt-28 pb-16 sm:pt-32 md:pb-24">
        <div className={cn(sectionX, "grid items-center gap-10 lg:grid-cols-2 lg:gap-8")}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary sm:text-base">
              {hero.sub}
            </p>
            <h1 className="mt-2 font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-zeiss-navy sm:text-6xl md:text-7xl">
              <span className="text-gradient-zeiss">Freedom</span>
              <br />
              of Vision
            </h1>
            <Spectrum className="mt-4 text-zeiss-navy" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#book" className={cn(buttonVariants(), primaryCta)}>
                {hero.ctaPrimary}
                <ArrowRight className="ml-1.5 size-4" />
              </a>
              <a
                href="#how"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full px-6 text-[0.95rem]"
                )}
              >
                {hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <Image
                src="/images/zeiss/fda-approved.png"
                alt="The only FDA-approved"
                width={52}
                height={52}
                className="size-12 shrink-0 object-contain"
              />
              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                {hero.microtrust}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/zeiss/kv-portrait-1600.jpg"
                alt="Freedom of Vision with ZEISS SMILE pro"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white/90 px-5 py-3 shadow-soft backdrop-blur sm:block">
              <p className="font-heading text-2xl font-bold text-primary">&lt;10s</p>
              <p className="text-xs text-muted-foreground">laser time / eye</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Benefits (3 outcomes) ─────────────── */}
      <section className="py-16 sm:py-20">
        <div className={sectionX}>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <MotionSection key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-soft">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon name={b.icon} className="size-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── About ─────────────── */}
      <section id="about" className="bg-sky-fade py-16 sm:py-24">
        <div className={cn(sectionX, "grid items-center gap-10 lg:grid-cols-2")}>
          <MotionSection className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/zeiss/gentle-square.jpg"
                alt="Living life with Freedom of Vision"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </MotionSection>
          <MotionSection delay={0.1} className="order-1 lg:order-2">
            <p className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              {about.eyebrow}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {about.description}
            </p>
            <a
              href="#book"
              className={cn(buttonVariants(), primaryCta, "mt-7 inline-flex")}
            >
              Start Your Journey
              <ArrowRight className="ml-1.5 size-4" />
            </a>
          </MotionSection>
        </div>
      </section>

      {/* ─────────────── Solution overview (7) ─────────────── */}
      <section id="benefits" className="bg-sky-band py-16 sm:py-24">
        <div className={sectionX}>
          <SectionHeading
            eyebrow="Why ZEISS SMILE pro"
            title="Seven Reasons to Choose Freedom of Vision"
            description="Next-generation laser vision correction — fast, flapless, and built around your comfort."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <MotionSection key={s.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl bg-card p-6 transition-shadow hover:shadow-soft">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon name={s.icon} className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── How it works (procedure + compare) ─────────────── */}
      <section id="how" className="py-16 sm:py-24">
        <div className={sectionX}>
          <SectionHeading
            eyebrow="How It Works"
            title="Three Gentle Steps to Clear Vision"
            description="A minimally invasive, flapless procedure — most of it done in seconds."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {procedure.steps.map((step, i) => (
              <MotionSection key={step.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7">
                  <span className="font-heading text-5xl font-bold text-secondary">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>

          {/* comparison */}
          <MotionSection className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-3 bg-secondary text-center font-heading text-xs font-bold uppercase tracking-wide text-secondary-foreground sm:text-sm">
                <span className="px-3 py-3">Procedure</span>
                <span className="px-3 py-3">Approach</span>
                <span className="px-3 py-3">Typical recovery</span>
              </div>
              {procedure.compare.map((row) => (
                <div
                  key={row.name}
                  className={cn(
                    "grid grid-cols-3 items-center border-t border-border text-center text-sm",
                    row.highlight && "bg-primary/5"
                  )}
                >
                  <span className="px-3 py-4 text-left font-semibold text-foreground sm:text-center">
                    {row.highlight && (
                      <span className="mr-1.5 inline-block align-middle text-primary">
                        ●
                      </span>
                    )}
                    {row.name}
                  </span>
                  <span className="px-3 py-4 text-muted-foreground">{row.flap}</span>
                  <span className="px-3 py-4 text-muted-foreground">
                    {row.recovery}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Recovery varies per individual — your surgeon will advise based on a
              professional assessment.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* ─────────────── Eligibility (4) ─────────────── */}
      <section id="eligibility" className="bg-sky-fade py-16 sm:py-24">
        <div className={sectionX}>
          <SectionHeading
            eyebrow="Who Is Eligible"
            title="Could You Unlock Freedom of Vision?"
            description="ZEISS SMILE pro corrects a wide range of vision needs. A professional assessment confirms your suitability."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eligibility.map((e, i) => (
              <MotionSection key={e.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-card p-6 text-center shadow-soft">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon name={e.icon} className="size-7" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {e.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-zeiss-sky">
                    {e.note}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#book" className={cn(buttonVariants(), primaryCta)}>
              Check Your Eligibility
              <ArrowRight className="ml-1.5 size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── Trust stats band ─────────────── */}
      <section className="bg-zeiss-blue py-14 sm:py-16">
        <div className={sectionX}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/70">
            The only FDA-approved Small Incision Lenticule Extraction procedure in
            the world.
          </p>
        </div>
      </section>

      {/* ─────────────── Booking ─────────────── */}
      <section id="book" className="py-16 sm:py-24">
        <div className={cn(sectionX, "grid items-start gap-10 lg:grid-cols-2")}>
          <MotionSection>
            <p className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-primary">
              {booking.eyebrow}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {booking.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {booking.description}
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <Phone className="size-5" />
                </span>
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <MessageCircle className="size-5" />
                </span>
                WhatsApp {siteConfig.whatsapp}
              </a>
              <p className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <CalendarCheck className="size-5" />
                </span>
                {siteConfig.address}
              </p>
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <BookingForm />
          </MotionSection>
        </div>
      </section>

      {/* ─────────────── More about (video) ─────────────── */}
      <section className="bg-sky-band py-16 sm:py-24">
        <div className={sectionX}>
          <SectionHeading
            eyebrow="More About ZEISS SMILE pro"
            title="See How Freedom of Vision Works"
            description="Watch the ZEISS SMILE pro patient animation to understand the gentle, flapless procedure."
          />
          <MotionSection>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-soft">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/zeiss/kv-landscape-1600.jpg"
                className="aspect-video w-full bg-black object-cover"
              >
                <source
                  src="/images/zeiss/smile-pro-patient-video.mp4"
                  type="video/mp4"
                />
              </video>
              <span className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                <Play className="size-3" /> Patient animation
              </span>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ─────────────── Testimonials ─────────────── */}
      <section className="py-16 sm:py-24">
        <div className={sectionX}>
          <SectionHeading
            eyebrow="What Others Say"
            title="Regain Your Freedom"
            description="Real freedom, in their words. (Representative testimonials.)"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <MotionSection key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                  <Quote className="size-8 text-zeiss-light" />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Why choose this clinic ─────────────── */}
      <section className="bg-sky-fade py-16 sm:py-24">
        <div className={sectionX}>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Freedom of Vision at ${siteConfig.clinicName}`}
            description="ZEISS-grade technology, delivered with trusted local care."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {usps.map((u, i) => (
              <MotionSection key={u.title} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl bg-card p-7">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon name={u.icon} className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {u.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {u.description}
                    </p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Doctors ─────────────── */}
      <section id="doctors" className="py-16 sm:py-24">
        <div className={sectionX}>
          <SectionHeading
            eyebrow="Meet Our Eye Doctors"
            title="In Expert, Caring Hands"
            description="Your Freedom of Vision is guided by an experienced refractive team."
          />
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {doctors.map((d, i) => (
              <MotionSection key={`${d.name}-${i}`} delay={i * 0.08}>
                <div className="flex h-full items-center gap-5 rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary font-heading text-xl font-bold text-primary">
                    Dr
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {d.name}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-zeiss-sky">
                      {d.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.bio}
                    </p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section id="faq" className="bg-sky-band py-16 sm:py-24">
        <div className={cn(sectionX, "max-w-3xl")}>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you want to know about ZEISS SMILE pro."
          />
          <div className="rounded-2xl bg-card px-6 shadow-soft sm:px-8">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating CTA */}
      <a
        href="#book"
        className={cn(
          "fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3",
          "text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
        )}
      >
        <CalendarCheck className="size-4 shrink-0" />
        Book Now
      </a>
    </>
  );
}
