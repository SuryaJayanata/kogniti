import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS_DATA } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-primary rounded-lg" />
          <span className="uppercase tracking-widest text-xs font-semibold text-secondary">
            By The Numbers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col">
              <span className="text-6xl md:text-7xl font-light text-secondary tracking-tighter mb-4">
                {stat.number}
              </span>
              <div className="h-px w-full bg-gray-200 mb-4 border-t border-dashed border-gray-300" />
              <span className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wide">
                {stat.label}
              </span>
              <p className="text-sm text-gray-500 leading-relaxed text-balance">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
