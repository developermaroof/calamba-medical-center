"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
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

const mobileNavLinkClass =
  "block rounded-lg px-3 py-3.5 text-base font-medium text-foreground outline-none transition-colors hover:bg-muted active:bg-muted focus-visible:ring-2 focus-visible:ring-primary/25";

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
          ? "border-b bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 md:h-20 md:px-6">
        <Link href="#" className="min-w-0 shrink">
          <BrandLogo variant={scrolled ? "default" : "hero"} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className={buttonVariants({
              variant: scrolled ? "default" : "secondary",
              size: "sm",
            })}
          >
            <Phone className="mr-2 size-4" />
            Call Now
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "shrink-0 md:hidden",
              !scrolled && "text-white hover:bg-white/10 hover:text-white"
            )}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-sm">
            <SheetHeader className="border-b px-5 py-4">
              <BrandLogo variant="default" />
              <SheetTitle className="sr-only">{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={mobileNavLinkClass}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <SheetFooter className="border-t px-5 py-5">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: "lg" }), "h-12 w-full")}
              >
                <Phone className="mr-2 size-4" />
                {siteConfig.phone}
              </a>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
