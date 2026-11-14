import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/nexverix-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt=""
      aria-hidden="true"
      width={64}
      height={64}
      className={cn("h-9 w-9 shrink-0 object-contain", className)}
    />
  );
}

export function Logo({ className, showTagline = false }: { className?: string; showTagline?: boolean }) {
  return (
    <Link to="/" className={cn("group flex min-w-0 items-center gap-2.5", className)} aria-label="NexVerix — home">
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[8deg]" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-[1.15rem] font-extrabold tracking-[-0.02em] text-foreground">
          Nex<span className="text-primary">Verix</span>
        </span>
        {showTagline && (
          <span className="mt-1 truncate font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            Engineering Digital Experiences
          </span>
        )}
      </span>
    </Link>
  );
}
