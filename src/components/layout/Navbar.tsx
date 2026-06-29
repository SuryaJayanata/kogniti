import { useState } from "react";
import { Command, ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { useScroll } from "../../hooks/useScroll";
import { NAV_LINKS } from "../../constants/data";

export default function Navbar() {
  const scrolled = useScroll(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={cn(
      "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out pointer-events-none",
      scrolled 
        ? "top-4 md:top-6 px-4 md:px-8" 
        : "top-6 md:top-10 px-6 md:px-24" 
    )}>
        <div 
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-out w-full pointer-events-auto",
          scrolled 
            ? "md:max-w-5xl md:rounded-lg md:px-6 py-2 md:py-2 md:bg-primary/95 md:backdrop-blur-md md:text-secondary md:shadow-2xl md:border md:border-secondary/10" 
            : "max-w-none px-0 py-2 md:py-4 bg-transparent text-primary border-transparent shadow-none"
        )}
      >
        <div className={cn(
          "flex items-center gap-1.5 md:gap-2 z-50 transition-all duration-500",
          scrolled && !isMobileMenuOpen ? "opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0 pointer-events-none md:pointer-events-auto" : "opacity-100 translate-y-0"
        )}>
          <Command className={cn("w-5 h-5 md:w-6 md:h-6 transition-colors duration-500", scrolled || isMobileMenuOpen ? "text-secondary" : "text-primary")} strokeWidth={2.5} />
          <span className={cn("text-lg md:text-xl font-medium tracking-tight transition-colors duration-500", (scrolled && !isMobileMenuOpen) || isMobileMenuOpen ? "md:text-secondary" : "text-primary", isMobileMenuOpen && "text-secondary")}>
            Kogniti<sup className="text-[10px] relative -top-2 left-0.5">TM</sup>
          </span>
        </div>

        <div className={cn(
          "hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] transition-colors duration-500",
          scrolled ? "text-secondary/70" : "text-primary/80"
        )}>
          {NAV_LINKS.map((link, idx) => (
            <a key={idx} href={link.href} className={cn("transition-colors duration-300", scrolled ? "hover:text-secondary" : "hover:text-primary")}>
              {link.label}
            </a>
          ))}
        </div>

        <button 
          className={cn(
            "group hidden md:flex items-center gap-2 md:gap-2.5 rounded-lg pl-1.5 pr-4 py-1.5 transition-all duration-500 font-semibold text-[10px] md:text-[11px] uppercase tracking-wider shadow-lg hover:-translate-y-0.5 z-50",
            scrolled 
              ? "bg-secondary text-primary hover:shadow-secondary/30" 
              : "bg-primary text-secondary hover:shadow-primary/20"
          )}
        >
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
            alt="Agent" 
            className="w-6 h-6 md:w-7 md:h-7 rounded-lg object-cover shadow-sm transition-all duration-500"
          />
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
        </button>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-50 transition-all duration-300 ml-auto pointer-events-auto", 
            scrolled && !isMobileMenuOpen 
              ? "bg-secondary text-primary rounded-full shadow-xl" 
              : isMobileMenuOpen 
                ? "text-secondary" 
                : "text-primary"
          )}
        >
          <span className={cn("w-5 h-[2px] bg-current block transition-all", isMobileMenuOpen && "rotate-45 translate-y-[4px]")}></span>
          <span className={cn("w-5 h-[2px] bg-current block transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-[4px]")}></span>
        </button>
      </div>

      <div 
        className={cn(
          "fixed inset-0 w-full h-[100dvh] bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link, idx) => (
          <a 
            key={idx} 
            href={link.href} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-widest text-secondary hover:text-accent1 transition-colors uppercase"
          >
            {link.label}
          </a>
        ))}
        <button className="mt-8 flex items-center gap-3 bg-accent1 text-primary px-8 py-4 rounded-lg hover:bg-accent1/90 transition-colors font-semibold uppercase tracking-wider text-sm shadow-xl">
          Start a Project
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
