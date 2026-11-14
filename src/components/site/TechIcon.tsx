import type { Technology } from "@/data/technologies";
import { cn } from "@/lib/utils";

export function TechIcon({ tech, className }: { tech: Technology; className?: string }) {
  if (tech.path) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("h-5 w-5 fill-current", className)}>
        <path d={tech.path} />
      </svg>
    );
  }
  const Icon = tech.icon;
  return Icon ? <Icon aria-hidden="true" className={cn("h-5 w-5", className)} /> : null;
}
