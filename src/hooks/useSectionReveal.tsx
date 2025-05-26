
import { useEffect, useRef, useState } from "react";

export function useSectionReveal(threshold: number = 0.14) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
