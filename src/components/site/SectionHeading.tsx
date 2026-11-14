import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}

export function Eyebrow({ children, index }: { children: ReactNode; index?: string }) {
  return (
    <span className="eyebrow">
      {index && <span className="text-muted-foreground">{index}</span>}
      <span aria-hidden="true" className="h-px w-6 bg-gradient-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, index, title, description, align = "left", className, action }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        action && "md:flex-row md:items-end md:justify-between md:gap-12",
        className,
      )}
    >
      <div className={cn("flex max-w-3xl flex-col gap-5", align === "center" && "items-center")}>
        {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
        <h2 className="display-lg text-foreground">{title}</h2>
        {description && <p className="lead max-w-2xl">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
