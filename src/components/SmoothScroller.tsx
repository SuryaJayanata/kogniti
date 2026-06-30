import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { type ReactNode, useEffect } from 'react';

function AnchorHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hash = anchor.getAttribute('href');
        
        if (hash === '#start') {
          window.location.hash = hash;
          return;
        }

        if (hash === '#') {
           if (window.location.hash === '#start') {
             window.location.hash = '';
           }
           lenis.scrollTo(0, { duration: 1.2 });
        } else if (hash) {
           lenis.scrollTo(hash, { duration: 1.2, offset: -50 });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroller({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <AnchorHandler />
      {children as any}
    </ReactLenis>
  );
}
