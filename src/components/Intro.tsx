import { useEffect, useRef } from "react";
import { Command } from "lucide-react";
import gsap from "gsap";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 100);
      }
    });

    tl.to([logoRef.current, textRef.current], {
      y: "0%",
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2
    });

    tl.to([logoRef.current, textRef.current], {
      y: "-120%",
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.inOut",
      delay: 0.6
    });

    tl.to(containerRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-accent1"
    >
      <div className="flex items-center gap-3 text-primary overflow-hidden px-4 pt-4 pb-6">
        <div ref={logoRef} className="translate-y-[120%]">
          <Command className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2.5} />
        </div>
        <div ref={textRef} className="translate-y-[120%]">
          <span className="text-4xl md:text-5xl font-medium tracking-tight">
            Kogniti<sup className="text-sm relative -top-4 left-0.5">TM</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
