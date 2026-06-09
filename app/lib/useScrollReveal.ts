'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.18): [React.RefObject<Element>, boolean] {
  const ref = useRef<Element>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  //@ts-ignore
  return [ ref, visible];
}