import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-data";

/**
 * Co-brand lockup: ZEISS SMILE pro wordmark + clinic logo (provider),
 * mirroring the official in-clinic lockup (ZEISS-led, clinic shown as provider).
 */
export function BrandLogo({
  className,
  showTag = true,
}: {
  className?: string;
  showTag?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <div className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight sm:text-lg">
          <span className="text-primary">ZEISS</span>{" "}
          <span className="font-medium text-foreground">SMILE pro</span>
        </span>
        {showTag && (
          <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]">
            {siteConfig.procedureTag}
          </span>
        )}
      </div>
      <span className="hidden h-7 w-px bg-border sm:block" />
      <Image
        src="/images/logo.png"
        alt={siteConfig.clinicName}
        width={150}
        height={48}
        className="hidden h-6 w-auto sm:block md:h-7"
        priority
      />
    </div>
  );
}
