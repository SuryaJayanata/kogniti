import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-elem", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  ];

  return (
    <section className="w-full bg-primary px-0 md:px-12 pt-0 md:pt-8 font-sans">
      <div ref={containerRef} className="relative h-[100dvh] md:h-[90vh] min-h-[600px] w-full flex flex-col bg-secondary overflow-hidden md:rounded-lg md:shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3000&auto=format&fit=crop" 
            alt="Marketing Team Hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-secondary/10" />
        </div>

        <div className="relative z-10 flex flex-col justify-end w-full h-full px-6 pb-10 md:px-12 md:pb-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-8">
            
            <div className="flex flex-col items-start gap-4 lg:gap-5 max-w-3xl lg:w-2/3">
              
              <div className="hero-elem flex items-center gap-2 bg-secondary rounded-lg px-3 py-1.5 w-max border border-primary/10 shadow-md">
                <svg className="w-3.5 h-3.5 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-primary/80 text-[11px] md:text-xs font-medium tracking-wide">
                  Data-Driven Marketing
                </span>
              </div>
              
              <div className="hero-elem flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatars.map((src, i) => (
                    <img 
                      key={i} 
                      src={src} 
                      className="w-7 h-7 rounded-full border border-secondary/50 object-cover relative shadow-sm" 
                      style={{ zIndex: 10 - i }} 
                      alt="Client avatar"
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="text-primary/80 text-[11px] leading-none">Trusted by 500+ growing brands</span>
                  <div className="flex items-center gap-1 text-[10px] text-primary/60">
                    <svg className="w-3 h-3 text-[#FBBF24] fill-[#FBBF24]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>Rated 4.9 out of 5.0</span>
                  </div>
                </div>
              </div>

              <h1 className="hero-elem text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-normal text-primary tracking-tight mt-1 max-w-[90%] md:max-w-full">
                Next-Gen Marketing Agency<br />
                for Growing Brands
              </h1>
            </div>

            <div className="hero-elem flex flex-col items-start lg:items-end w-full lg:w-1/3 mb-1">
              
              <div className="bg-accent1 text-primary p-4 md:p-5 rounded-lg w-full max-w-[280px] flex flex-col gap-6 shadow-2xl transition-transform hover:scale-[1.02] cursor-pointer group">
                <div className="flex justify-between items-start">
                  <svg className="w-5 h-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                
                <div className="flex justify-between items-end w-full">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-medium opacity-90 leading-none text-primary/90">Strategy session</span>
                    <span className="text-[15px] font-bold tracking-tight leading-none">Start a project</span>
                  </div>
                  <div className="bg-primary text-accent1 p-2 rounded-lg shadow-sm">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              <span className="text-primary/40 text-[9px] mt-2 lg:mr-2 text-left lg:text-right w-full max-w-[280px] font-medium tracking-wide uppercase">
                No pressure. Just modern strategies.
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
