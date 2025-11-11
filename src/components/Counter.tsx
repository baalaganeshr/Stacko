import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

const Counter = ({ value, duration = 1600, prefix = "", suffix = "" }: CounterProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [isAnimated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  useEffect(() => {
    if (!isAnimated || !spanRef.current) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(value * easeOut);
      
      if (spanRef.current) {
        spanRef.current.textContent = prefix + currentValue.toString() + suffix;
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isAnimated, value, duration, prefix, suffix]);

  return <span ref={spanRef} className="stat-emphasis font-semibold text-white" />;
};

export default Counter;
