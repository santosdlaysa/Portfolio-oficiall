import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false
}: UseIntersectionObserverOptions = {}): [React.RefObject<HTMLDivElement>, boolean] {
  const [isIntersecting, setIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const frozen = isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!frozen) {
          setIntersecting(entry.isIntersecting);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return [elementRef, isIntersecting];
}

export function useScrollAnimation(options?: UseIntersectionObserverOptions) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
    ...options
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (isIntersecting) {
      element.classList.add('is-visible');
    }
  }, [isIntersecting, ref]);

  return ref;
}