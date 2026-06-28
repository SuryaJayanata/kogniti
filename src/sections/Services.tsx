import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 px-8 md:px-16 bg-secondary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-lg" />
              <span className="uppercase tracking-widest text-xs font-semibold text-white/70">
                Services
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent2">Expertise</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/60 leading-relaxed">
            Kami merancang sistem digital bertenaga data dan wawasan psikologis untuk hasil yang nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="service-item group cursor-pointer border-t border-white/10 pt-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl md:text-3xl font-medium group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
