import {
  useState, useEffect, MutableRefObject,
} from 'react';

export function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>, rootMargin = '0px',
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (isIntersecting) {
      observer.unobserve(ref.current);
    }

    const currentRef = ref.current;

    return () => observer.unobserve(currentRef);
  }, [isIntersecting, setIntersecting]);

  return isIntersecting;
}
