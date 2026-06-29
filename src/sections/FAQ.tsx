import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQ_DATA } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
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
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-white text-[#111111]">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        <div className="w-full lg:w-1/3">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-sm" />
            <span className="uppercase tracking-widest text-[11px] font-semibold text-gray-400">
              FAQ
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.05]">
            Common <br/>Questions.
          </h2>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item border-b border-black/10 py-8 lg:py-10 cursor-pointer transition-colors group ${openIndex === index ? 'text-primary' : 'hover:text-gray-600'}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center gap-6">
                <h3 className={`text-2xl md:text-3xl font-medium tracking-tight ${openIndex === index ? 'text-primary' : 'text-[#111111] group-hover:text-primary'}`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-10 h-10 rounded-lg border border-black/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-primary border-primary text-white' : 'bg-gray-50 group-hover:border-primary group-hover:text-primary'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-64 opacity-100 mt-6 md:mt-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-2xl font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
