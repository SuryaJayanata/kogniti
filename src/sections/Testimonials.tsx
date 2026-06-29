import { useState } from "react";
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
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        <div className="w-full lg:w-3/5 bg-secondary rounded-lg p-10 lg:p-16 flex flex-col justify-between text-white min-h-[480px]">
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight max-w-sm leading-[1.1]">
              What our customer<br/>are saying
            </h2>
            <div className="flex flex-col gap-2 opacity-40 hidden md:flex">
              <div className="h-4 w-16 bg-white rounded-lg ml-auto" />
              <div className="h-4 w-24 bg-white rounded-lg" />
              <div className="h-4 w-20 bg-white rounded-lg ml-auto" />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xl lg:text-2xl leading-relaxed font-medium mb-12 text-white/90">
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
                <span className="text-sm text-white/50">{current.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary hover:bg-red-700 transition-colors text-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 bg-accent1 rounded-lg p-10 lg:p-16 flex flex-col justify-between text-secondary min-h-[480px]">
          <h2 className="text-4xl lg:text-[3.25rem] font-medium tracking-tight leading-[1.05]">
            Ready to start<br/>your success<br/>journey?
          </h2>
          
          <div className="flex items-end justify-between mt-auto pt-12">
            <p className="font-medium max-w-[200px] text-lg leading-tight">
              Get started with a free consultation
            </p>
            <button className="w-16 h-16 flex items-center justify-center rounded-lg bg-secondary hover:bg-black transition-colors text-white shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
