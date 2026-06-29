import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES_DATA } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-primary text-secondary relative">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight text-secondary max-w-2xl leading-[1.05]">
            Things We Serve<span className="text-accent1">.</span>
          </h2>
          <p className="max-w-md text-sm text-secondary/60 leading-relaxed pt-2 md:pt-6 font-medium">
            Unleash your brand's potential across diverse industries. We leverage deep cognitive knowledge and data-driven marketing to empower your brand success.
          </p>
        </div>

        <div className="flex flex-col relative pb-32">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index} 
              style={{ top: `calc(10vh + ${index * 1.5}rem)` }}
              className="service-item sticky w-full bg-primary border-t border-secondary/10 pt-16 md:pt-24 pb-12 mb-24 lg:mb-40 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 group"
            >
              
              <div className="w-full lg:w-[30%] flex flex-col">
                <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium tracking-tight mb-10 group-hover:text-accent1 transition-colors duration-500 leading-tight mt-2">
                  {service.title}
                </h3>
                <div className="flex flex-col w-full">
                  {service.subServices.map((sub, idx) => (
                    <div key={idx} className="py-4 border-b border-secondary/5 text-sm font-medium text-secondary/60 flex items-center hover:text-accent1 transition-colors cursor-pointer">
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-[40%] flex justify-center lg:px-4">
                <div className="w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-secondary/5 border border-secondary/5">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
              </div>

              <div className="w-full lg:w-[30%] flex flex-col pt-4 lg:pt-16 lg:pl-10">
                <div className="border-t border-secondary/10 pt-4 mb-5">
                  <span className="text-[10px] font-bold tracking-wider text-accent1 uppercase">
                    Feature Project
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-balance leading-[1.2] text-secondary">
                  {service.featureTitle}
                </h4>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  {service.featureDesc}
                </p>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
