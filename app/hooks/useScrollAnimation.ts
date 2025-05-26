"use client";

import { useEffect, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
): { hasScrolled: boolean; ref: React.RefObject<HTMLElement> } {
  const { threshold = 0.1, once = true } = options;
  const [hasScrolled, setHasScrolled] = useState(false);
  const [ref, setRef] = useState<React.RefObject<HTMLElement>>({ current: null });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasScrolled(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setHasScrolled(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, once]);

  return {
    hasScrolled,
    ref: { current: null, set: setRef },
  } as unknown as { hasScrolled: boolean; ref: React.RefObject<HTMLElement> };
} 