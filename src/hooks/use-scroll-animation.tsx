
import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Make the animation more gradual based on intersection ratio
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.15, // Slightly increased threshold for earlier detection
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before element is in full view
      }
    );

    // Observe all elements with data-scroll attribute
    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return isVisible;
};
