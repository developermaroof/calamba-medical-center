"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck, Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const ctaClass = "rounded-full px-5 text-sm";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 md:px-6">
        <Link
          href="#"
          aria-label={`${siteConfig.brand} at ${siteConfig.clinicName}`}
          className="min-w-0 shrink"
        >
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#book"
            className={cn(buttonVariants({ variant: "default" }), ctaClass, "h-10")}
          >
            <CalendarCheck className="mr-1.5 size-4" />
            Book an Appointment
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-10 shrink-0 md:hidden"
            )}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full flex-col gap-0 p-0 sm:max-w-sm"
          >
            <SheetHeader className="border-b px-5 py-4">
              <BrandLogo />
              <SheetTitle className="sr-only">
                {siteConfig.brand} at {siteConfig.clinicName}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <SheetFooter className="border-t px-5 py-5">
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: "lg" }), "h-12 w-full rounded-full")}
              >
                <CalendarCheck className="mr-2 size-4" />
                Book an Appointment
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
