
import { useEffect, useState, useRef } from 'react';

export function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return { ref, isInView };
}

export function useScrollFadeIn(
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  duration = 1,
  delay = 0
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const { top } = element.getBoundingClientRect();
      const inView = top < window.innerHeight * 0.8;
      
      if (inView) {
        let translateValue = '0';
        
        switch (direction) {
          case 'up':
            translateValue = 'translateY(0)';
            break;
          case 'down':
            translateValue = 'translateY(0)';
            break;
          case 'left':
            translateValue = 'translateX(0)';
            break;
          case 'right':
            translateValue = 'translateX(0)';
            break;
          default:
            translateValue = 'translateY(0)';
        }
        
        element.style.opacity = '1';
        element.style.transform = translateValue;
      }
    };

    // Initial starting position
    let initialTranslate = '';
    switch (direction) {
      case 'up':
        initialTranslate = 'translateY(30px)';
        break;
      case 'down':
        initialTranslate = 'translateY(-30px)';
        break;
      case 'left':
        initialTranslate = 'translateX(30px)';
        break;
      case 'right':
        initialTranslate = 'translateX(-30px)';
        break;
      default:
        initialTranslate = 'translateY(30px)';
    }

    element.style.opacity = '0';
    element.style.transform = initialTranslate;
    element.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [direction, duration, delay]);

  return { ref };
}
