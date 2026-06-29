import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Command } from "lucide-react";
import { ABOUT_TEXT } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const words = ABOUT_TEXT.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.to(".lyric-word", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: 1,
        },
        color: "var(--color-secondary)",
        stagger: 0.2,
      });

      gsap.from(imagesRef.current?.children || [], {
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-primary text-secondary rounded-t-lg -mt-8 relative z-20">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent1 rounded-lg" />
            <span className="uppercase tracking-widest text-xs font-bold text-secondary/50">
              Who We Are
            </span>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <h2 
            ref={textRef} 
            className="text-3xl md:text-5xl lg:text-[4rem] font-medium leading-[1.2] tracking-tight max-w-6xl text-balance flex flex-wrap gap-x-3 md:gap-x-5 gap-y-2 md:gap-y-4"
          >
            {words.map((word, i) => (
              <span key={i} className="lyric-word text-secondary/20 transition-colors duration-100">
                {word}
              </span>
            ))}
          </h2>
        </div>

        <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[500px]">
          
          <div className="md:col-span-7 w-full h-[300px] md:h-full overflow-hidden rounded-lg relative group">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600" 
              alt="Kogniti team brainstorming" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
            

            <div className="absolute bottom-6 right-6 bg-primary rounded-lg p-3 md:p-5 shadow-2xl flex items-center gap-3 z-20">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-lg flex items-center justify-center text-primary shrink-0">
                <Command className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-secondary font-bold text-sm leading-none mb-1">Trusted by</span>
                <span className="text-secondary/60 text-[10px] md:text-xs leading-none">500+ Brands</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 w-full h-full rounded-lg bg-secondary text-primary p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="uppercase tracking-widest text-[10px] text-primary/50 font-bold mb-4 block">
                Our Approach
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.15] text-balance">
                Data-Driven Strategy & Innovation
              </h3>
            </div>
            
            <div className="pt-8 border-t border-primary/10 mt-8 md:mt-12">
              <p className="text-primary/70 text-sm md:text-sm leading-relaxed mb-8">
                We help you achieve your vision and scale with confidence through precision targeting and creative excellence across your digital journey.
              </p>
              <button className="flex items-center gap-3 bg-accent1 hover:bg-accent1/90 text-primary rounded-lg pl-6 pr-1.5 py-1.5 transition-all duration-300 w-max group">
                <span className="text-sm font-semibold">Start a Project</span>
                <div className="w-8 h-8 rounded-lg bg-primary text-accent1 flex items-center justify-center group-hover:scale-95 transition-transform">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>

        </div>

        <a href="#about-more" className="group flex md:hidden items-center justify-between w-full mt-12 text-sm font-bold uppercase tracking-wider border-b border-secondary pb-4 hover:text-accent1 transition-colors">
          <span>About The Agency</span>
          <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        </a>

      </div>
    </section>
  );
}
