import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 pb-24 sm:gap-10 sm:px-6 sm:py-14 sm:pb-14 md:grid-cols-3">
        <div>
          <BrandLogo variant="on-dark" className="mb-4" />
          <p className="text-sm text-primary-foreground/80">
            {siteConfig.tagline}
          </p>
          <p className="mt-1 text-sm italic text-accent">
            {siteConfig.subtitle}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-primary-foreground/80">
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {siteConfig.address}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-4 shrink-0" />
            {siteConfig.phone}
          </p>
          <p className="flex items-center gap-2">
            <Mail className="size-4 shrink-0" />
            {siteConfig.email}
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <Share2 className="size-4" />
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <Globe className="size-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
