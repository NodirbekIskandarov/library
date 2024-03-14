import React, { useState, useEffect, useRef } from 'react';

const CounterAnimation = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(counterRef.current);

    return () => {
      observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animationDuration = 2000; // Animation duration in milliseconds
      const animationFrames = 100; // Total frames

      const increment = props.count / animationFrames;

      let currentFrame = 0;

      const animationInterval = setInterval(() => {
        if (currentFrame >= animationFrames) {
          clearInterval(animationInterval);
        }

        const currentCount = Math.round(increment * currentFrame) + 1;
        setCount(currentCount);

        currentFrame++;
      }, animationDuration / animationFrames);
    }
  }, [isVisible]);

  return (
    <div className={`counter ${isVisible ? 'animated' : ''}`} ref={counterRef}>
      {count}
    </div>
  );
};

export default CounterAnimation;