import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { disclaimer, navLinks, siteConfig } from "@/lib/site-data";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0 1.62c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18-.21-.55-.47-.94-.88-1.35-.41-.41-.8-.67-1.35-.88-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.75-.07zm0 2.76a5.46 5.46 0 110 10.92 5.46 5.46 0 010-10.92zm0 9a3.54 3.54 0 100-7.08 3.54 3.54 0 000 7.08zm6.95-9.22a1.27 1.27 0 11-2.55 0 1.27 1.27 0 012.55 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-zeiss-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:py-14">
        <div className="md:col-span-5">
          <p className="text-xl font-bold tracking-tight">
            ZEISS <span className="font-medium text-white/85">SMILE pro</span>
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            {siteConfig.procedureTag}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Freedom of Vision at {siteConfig.clinicName}, offered by{" "}
            {siteConfig.parentName} — the only FDA-approved lenticule extraction
            procedure.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Explore
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" className="transition-colors hover:text-white">
                Book an Appointment
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            {siteConfig.clinicName}
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-zeiss-sky" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-zeiss-sky" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="size-4 shrink-0 text-zeiss-sky" />
              <a
                href={`https://wa.me/${siteConfig.whatsappHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp {siteConfig.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-zeiss-sky" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-6 text-xs leading-relaxed text-white/45 sm:px-6">
          <p>{disclaimer}</p>
          <p>
            © {new Date().getFullYear()} {siteConfig.clinicName} ·{" "}
            {siteConfig.parentName}. ZEISS, the ZEISS logo and ZEISS SMILE pro are
            trademarks of Carl Zeiss AG, used with permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
