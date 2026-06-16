import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-data";

/** Clinic-only lockup: Calamba Medical Center logo + "Eye Center". */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <Image
        src="/images/logo.png"
        alt={siteConfig.parentName}
        width={170}
        height={48}
        className="h-7 w-auto md:h-8"
        priority
      />
      <span className="hidden h-7 w-px bg-border sm:block" />
      <span className="hidden text-xs font-bold uppercase tracking-[0.16em] text-primary sm:block">
        Eye Center
      </span>
    </div>
  );
}
