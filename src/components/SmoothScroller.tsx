import { ReactLenis } from '@studio-freight/react-lenis';
import type { ReactNode } from 'react';

export default function SmoothScroller({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children as any}
    </ReactLenis>
  );
}
