import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-elem", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-24 px-6 md:px-12 bg-primary relative z-10">
      <div className="w-full max-w-7xl mx-auto bg-secondary rounded-2xl overflow-hidden shadow-2xl relative px-8 py-20 md:px-16 md:py-32 flex flex-col items-center justify-center text-center">

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <div className="cta-elem flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-accent1 rounded-sm" />
            <span className="uppercase tracking-widest text-[11px] font-bold text-primary/60">
              Let's Work Together
            </span>
          </div>
          
          <h2 className="cta-elem text-4xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-primary leading-[1.05] mb-8 text-balance">
            Ready to elevate your digital presence?
          </h2>
          
          <p className="cta-elem text-base md:text-lg text-primary/60 max-w-xl mb-12 leading-relaxed">
            Partner with us to create data-driven experiences that resonate with your audience and drive measurable growth.
          </p>
          
          <div className="cta-elem">
            <button className="flex items-center gap-3 bg-accent1 hover:bg-accent1/90 text-primary rounded-lg pl-8 pr-2 py-2 transition-all duration-300 w-max group hover:-translate-y-1">
              <span className="text-sm font-bold tracking-wide">Start a Project</span>
              <div className="w-10 h-10 rounded-lg bg-primary text-accent1 flex items-center justify-center group-hover:scale-95 transition-transform">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
