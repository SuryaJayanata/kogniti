import { Command } from "lucide-react";
import { cn } from "../../utils/cn";
import { useScroll } from "../../hooks/useScroll";
import { NAV_LINKS } from "../../constants/data";

export default function Navbar() {
  const scrolled = useScroll(20);

  return (
    <nav className={cn(
      "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out",
      scrolled ? "top-4 md:top-6 px-4 md:px-8" : "top-0 px-0"
    )}>
      <div 
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-in-out",
          scrolled 
            ? "w-full max-w-5xl rounded-lg px-5 md:px-6 py-2.5 md:py-1 bg-accent1 text-secondary shadow-xl border border-secondary/5" 
            : "w-full max-w-none rounded-none px-8 md:px-16 py-6 bg-transparent text-white border-transparent shadow-none"
        )}
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          <Command className={cn("w-5 h-5 md:w-6 md:h-6 transition-colors duration-500", scrolled ? "text-secondary" : "text-white")} strokeWidth={2.5} />
          <span className="text-lg md:text-xl font-medium tracking-tight">
            Kogniti<sup className="text-[10px] relative -top-2 left-0.5">TM</sup>
          </span>
        </div>

        <div className={cn(
          "hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] transition-colors duration-500",
          scrolled ? "text-secondary/70" : "text-white/80"
        )}>
          {NAV_LINKS.map((link, idx) => (
            <a key={idx} href={link.href} className={cn("transition-colors duration-300", scrolled ? "hover:text-secondary" : "hover:text-white")}>{link.label}</a>
          ))}
        </div>

        <button className="group relative overflow-hidden bg-primary text-white text-[10px] md:text-xs font-bold tracking-widest px-5 md:px-6 py-1 md:py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40">
          <span className="relative z-10">BOOK A CALL</span>
          <div className="absolute inset-0 bg-accent2 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </button>
      </div>
    </nav>
  );
}
