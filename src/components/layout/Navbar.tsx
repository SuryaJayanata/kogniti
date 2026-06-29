import { Command } from "lucide-react";
import { cn } from "../../utils/cn";
import { useScroll } from "../../hooks/useScroll";
import { NAV_LINKS } from "../../constants/data";

export default function Navbar() {
  const scrolled = useScroll(20);

  return (
    <nav className={cn(
      "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out",
      scrolled 
        ? "top-4 md:top-6 px-4 md:px-8" 
        : "top-8 md:top-10 px-12 md:px-24" 
    )}>
      <div 
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-out w-full",
          scrolled 
            ? "max-w-5xl rounded-lg px-5 md:px-6 py-2.5 md:py-2 bg-accent1/95 backdrop-blur-md text-secondary shadow-2xl border border-secondary/10" 
            : "max-w-none px-0 py-3 md:py-4 bg-transparent text-white border-transparent shadow-none"
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
            <a key={idx} href={link.href} className={cn("transition-colors duration-300", scrolled ? "hover:text-secondary" : "hover:text-white")}>
              {link.label}
            </a>
          ))}
        </div>

        <button 
          className={cn(
            "group flex items-center gap-2 md:gap-2.5 rounded-lg pl-1.5 pr-4 py-1.5 transition-all duration-500 font-semibold text-[10px] md:text-[11px] uppercase tracking-wider shadow-lg hover:-translate-y-0.5",
            scrolled 
              ? "bg-secondary text-white hover:shadow-secondary/30" 
              : "bg-white text-secondary hover:shadow-white/20"
          )}
        >
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
            alt="Agent" 
            className="w-6 h-6 md:w-7 md:h-7 rounded-full object-cover shadow-sm transition-all duration-500"
          />
          <span>Book a Call</span>
          <svg 
            className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
