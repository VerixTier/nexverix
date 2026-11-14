import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const THEME_KEY = "nexverix-theme";

/** Runs before paint (inlined in <head>) so the stored theme applies without a flash. Dark is the default. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');var d=document.documentElement;if(t==='light'){d.classList.remove('dark')}else{d.classList.add('dark')}}catch(e){}})();`;

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable — preference applies for this visit only */
    }
  };

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      className={cn(
        "relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
        className,
      )}
    >
      <Sun className={cn("absolute h-4 w-4 transition-all duration-500", isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
      <Moon className={cn("absolute h-4 w-4 transition-all duration-500", isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")} />
    </button>
  );
}
