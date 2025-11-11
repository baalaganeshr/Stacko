import { useEffect, useState, useRef } from "react";

const CursorGlow = () => {
  const [isEnabled, setEnabled] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const tertiaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion.matches || isTouch) {
      setEnabled(false);
      return;
    }

    let rafId: number;

    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        // Primary glow (closest to cursor)
        if (primaryRef.current) {
          primaryRef.current.style.transform = `translate(${clientX - 140}px, ${clientY - 140}px)`;
        }
        
        // Secondary glow (medium distance)  
        if (secondaryRef.current) {
          secondaryRef.current.style.transform = `translate(${clientX - 100}px, ${clientY - 100}px)`;
        }
        
        // Tertiary ambient glow (furthest, most subtle)
        if (tertiaryRef.current) {
          tertiaryRef.current.style.transform = `translate(${clientX - 200}px, ${clientY - 200}px)`;
        }
      });
    };

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .glass-button, .hover-lift')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      {/* Primary cursor glow - most prominent */}
      <div 
        ref={primaryRef}
        className={`cursor-glow-primary ${isHovering ? 'cursor-glow-active' : ''} transition-transform duration-150 ease-out`}
        style={{ 
          position: 'fixed',
          width: '280px',
          height: '280px',
          pointerEvents: 'none',
          zIndex: -1,
          transform: 'translate(-300px, -300px)'
        }}
        aria-hidden 
      />
      
      {/* Secondary glow - medium prominence */}
      <div
        ref={secondaryRef}
        className={`cursor-glow-secondary ${isHovering ? 'cursor-glow-active' : ''} transition-transform duration-200 ease-out`}
        style={{
          position: 'fixed',
          width: '200px', 
          height: '200px',
          pointerEvents: 'none',
          zIndex: -1,
          transform: 'translate(-300px, -300px)'
        }}
        aria-hidden
      />
      
      {/* Tertiary ambient glow - most subtle */}
      <div
        ref={tertiaryRef}
        className={`cursor-glow-tertiary ${isHovering ? 'cursor-glow-active' : ''} transition-transform duration-300 ease-out`}
        style={{
          position: 'fixed',
          width: '400px',
          height: '400px', 
          pointerEvents: 'none',
          zIndex: -1,
          transform: 'translate(-300px, -300px)'
        }}
        aria-hidden
      />
    </>
  );
};

export default CursorGlow;
