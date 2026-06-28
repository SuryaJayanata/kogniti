import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
      
      gsap.from(".hero-avatars", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const avatars = Array.from({ length: 5 }).map((_, i) => (
    `https://i.pravatar.cc/150?img=${i + 12}`
  ));

  return (
    <section className="relative min-h-screen flex flex-col bg-secondary">
      <div 
        ref={containerRef}
        id="home"
        className="relative flex-1 overflow-hidden flex flex-col justify-between p-8 md:p-16"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940&h=1960"
            alt="Marketing Team"
            className="w-full h-full object-cover opacity-50 blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-secondary/10" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center mt-16 md:mt-24">
          <div className="flex flex-col items-start max-w-lg w-full">
            
            <div className="hero-text flex flex-col items-start w-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-primary rounded-lg animate-pulse" />
                <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
                  Data-Driven Marketing
                </span>
              </div>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                We engineer digital campaigns and build modern strategies through deep consumer research for startups and giants alike.
              </p>
              <div className="flex gap-4">
                <Button variant="primary" className="bg-primary text-white hover:bg-primary/90 border-none px-6 md:px-8 py-3 text-sm">
                  View Projects ↗
                </Button>
                <Button variant="outline" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-6 md:px-8 py-3 text-sm">
                  Reach Out ↗
                </Button>
              </div>
            </div>

          </div>
        </div>

        <div className="relative z-10 mt-16 pt-12 md:pt-16 border-t border-white/10 w-full">
          
          <h1 className="hero-text text-5xl md:text-7xl lg:text-[7vw] font-medium text-white leading-[1.0] tracking-tight pb-4 md:w-[85%]">
            Next-Gen Marketing <br /> 
            <span className="whitespace-nowrap">Agency for Growing Brands.</span>
          </h1>

          <div className="hero-avatars absolute top-8 md:top-12 right-0 flex flex-col items-end hidden sm:flex">
            <div className="flex items-center">
              {avatars.map((src, idx) => (
                <div 
                  key={idx} 
                  className="w-8 h-8 md:w-12 md:h-12 rounded-lg border-2 border-secondary overflow-hidden -ml-3 md:-ml-4 first:ml-0 shadow-lg"
                  style={{ zIndex: avatars.length - idx }}
                >
                  <img src={src} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-2 md:mt-3 text-white text-[10px] md:text-xs text-right">
              <span className="font-bold block">500+</span>
              <span className="text-white/60">Happy Clients</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
