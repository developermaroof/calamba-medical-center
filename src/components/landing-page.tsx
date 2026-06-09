"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Heart,
  Phone,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionSection, SectionHeading } from "@/components/motion-wrapper";
import {
  centersOfExcellence,
  hmoPartners,
  serviceCategories,
  siteConfig,
  stats,
  trustBadges,
  whyCmc,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-primary md:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

const whyIcons = [Heart, Users, Building2];

export function LandingPage() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof serviceCategories)[number]["id"]
  >(serviceCategories[0].id);
  const [formSent, setFormSent] = useState(false);

  const activeServices = serviceCategories.find((c) => c.id === activeCategory);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/buildings.jpg"
          alt="Calamba Medical Center campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-28 text-center text-white sm:px-6 sm:pb-28 sm:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 max-w-full whitespace-normal bg-accent px-3 py-1 text-xs text-accent-foreground sm:mb-6 sm:text-sm">
              ACI Gold Accredited · #16 in Philippines
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg md:text-xl">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href="#excellence"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "w-full sm:w-auto"
                )}
              >
                Explore Our Services
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                )}
              >
                <Phone className="mr-2 size-4" />
                Emergency 24/7
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b bg-card py-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{badge.label}</p>
                <p className="text-xs text-muted-foreground">{badge.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Centers of Excellence */}
      <section id="excellence" className="bg-background py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MotionSection>
            <SectionHeading
              eyebrow="Centers of Excellence"
              title="World-Class Specialty Care"
              description="Dedicated centers delivering advanced treatment across Laguna and Southern Luzon."
            />
          </MotionSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {centersOfExcellence.map((center, i) => (
              <MotionSection key={center.id} delay={i * 0.05}>
                <Card className="group h-full overflow-hidden border-0 shadow-md transition-shadow hover:shadow-xl">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={center.image}
                      alt={center.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{center.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {center.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs font-medium text-primary">
                      {center.phone}
                    </p>
                  </CardContent>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted/40 py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <MotionSection>
            <SectionHeading
              eyebrow="Our Services"
              title="Comprehensive Healthcare"
              description="27 departments and specialty centers under one trusted roof."
            />
          </MotionSection>
          <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
              {serviceCategories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  className="shrink-0"
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="size-5 text-primary" />
                  {activeServices?.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {activeServices?.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="size-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2 sm:gap-10 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* Why CMC */}
      <section className="bg-primary py-14 text-primary-foreground sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            onDark
            eyebrow="Why Choose CMC"
            title="Care with Excellence and Heart"
            description="Kalingang may Husay at Puso — compassion and expertise in every interaction."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {whyCmc.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <MotionSection key={item.title} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="size-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* HMO */}
      <section className="overflow-hidden border-y bg-card py-12">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Accepted HMO & Health Insurance Partners
        </p>
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex gap-8 whitespace-nowrap">
            {[...hmoPartners, ...hmoPartners].map((partner, i) => (
              <span
                key={`${partner}-${i}`}
                className="rounded-full border bg-background px-5 py-2 text-sm font-medium text-foreground"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2">
          <MotionSection>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/buildings.jpg"
                alt="CMC buildings"
                fill
                className="object-cover"
              />
            </div>
          </MotionSection>
          <MotionSection delay={0.15}>
            <Badge variant="outline" className="mb-4">
              <Award className="mr-1 size-3" />
              Since 1989
            </Badge>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Laguna&apos;s Premier Medical Center
            </h2>
            <p className="mt-4 text-muted-foreground">
              From a 25-bed hospital to a 160-bed regional referral center, CMC
              has grown into the Healthcare City of the South — delivering
              ISO-certified quality with patient- and family-centered care.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission: to provide quality and compassionate patient-centered
              care in the community we are honored to serve.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/images/seal.png"
                alt="ACI Accreditation"
                width={60}
                height={60}
              />
              <p className="text-sm text-muted-foreground">
                Only ACI Gold-accredited hospital in Southern Luzon
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-muted/40 py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            description="We're here 24/7 for emergencies and ready to assist with appointments and inquiries."
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send an Inquiry</CardTitle>
                <CardDescription>
                  Fill out the form and our team will get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSent ? (
                  <div className="rounded-lg bg-primary/10 p-6 text-center">
                    <p className="font-semibold text-primary">
                      Thank you for your message!
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSent(true);
                    }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" required placeholder="Juan Dela Cruz" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" required placeholder="09XX XXX XXXX" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs"
                      >
                        {centersOfExcellence.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="space-y-4 pt-6">
                  <p className="flex items-start gap-3 text-sm">
                    <span className="font-semibold text-foreground">Address:</span>
                    {siteConfig.address}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Phone:</span> {siteConfig.phone}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Mobile:</span> {siteConfig.mobile}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span> {siteConfig.email}
                  </p>
                </CardContent>
              </Card>
              <div className="overflow-hidden rounded-xl shadow-md">
                <iframe
                  title="CMC Location"
                  src="https://maps.google.com/maps?q=Calamba+Medical+Center+Laguna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating ER */}
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className={cn(
          "fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full",
          "bg-destructive px-4 py-2.5 text-xs font-semibold text-white shadow-lg sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-sm",
          "transition-transform hover:scale-105 max-md:animate-none md:animate-pulse md:hover:animate-none"
        )}
      >
        <Phone className="size-4 shrink-0" />
        <span className="hidden sm:inline">Emergency?</span> Call ER
      </a>
    </>
  );
}
