import { useState } from "react";
import { ArrowUpRight, Command } from "lucide-react";
import { TESTIMONIALS_DATA } from "../constants/data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-primary">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        <div className="w-full lg:w-3/5 bg-secondary rounded-lg p-10 lg:p-16 flex flex-col justify-between text-primary min-h-[480px]">
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight max-w-sm leading-[1.1]">
              What our customer<br/>are saying
            </h2>
            <div className="hidden md:flex opacity-80">
              <Command className="w-10 h-10 text-primary" strokeWidth={2} />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xl lg:text-2xl leading-relaxed font-medium mb-12 text-primary/90">
              "{current.quote}"
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between mt-auto gap-8">
            <div className="flex items-center gap-4">
              <img 
                src={current.avatar} 
                alt={current.author} 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{current.author}</span>
                <span className="text-sm text-primary/50">{current.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent1 hover:bg-accent1/90 transition-colors text-primary"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 bg-accent1 rounded-lg p-10 lg:p-16 flex flex-col justify-between text-primary min-h-[480px]">
          <h2 className="text-4xl lg:text-[3.25rem] font-medium tracking-tight leading-[1.05]">
            Ready to start<br/>your success<br/>journey?
          </h2>
          
          <div className="flex items-end justify-between mt-auto pt-12">
            <p className="font-medium max-w-[200px] text-lg leading-tight">
              Get started with a free consultation
            </p>
            <button className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary hover:bg-secondary hover:text-primary transition-colors text-secondary shrink-0 group">
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
