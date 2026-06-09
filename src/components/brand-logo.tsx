import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-data";

type BrandLogoVariant = "default" | "hero" | "on-dark";

function CmcLogoImage({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt={siteConfig.name}
      width={180}
      height={56}
      className={cn("h-6 w-auto sm:h-8 md:h-10", className)}
      priority
    />
  );
}

export function BrandLogo({
  variant = "default",
  className,
}: {
  variant?: BrandLogoVariant;
  className?: string;
}) {
  if (variant === "hero" || variant === "on-dark") {
    return (
      <div
        className={cn(
          "flex w-fit items-center rounded-lg bg-white shadow-sm",
          variant === "on-dark" ? "px-3 py-2.5" : "px-2.5 py-1.5 shadow-md",
          className
        )}
      >
        <CmcLogoImage className={variant === "on-dark" ? "h-9 md:h-11" : undefined} />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <CmcLogoImage />
    </div>
  );
}
