import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsExpanded(true);
    const handleMouseLeave = () => setIsExpanded(false);

    document.addEventListener('mousemove', handleMouseMove);
    
    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setRingPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(followCursor);
    };

    const raf = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(raf);
  }, [position]);

  return (
    <>
      <div 
        className="custom-cursor hidden md:block"
        style={{ left: position.x, top: position.y }}
      />
      <div 
        className={`custom-cursor-ring hidden md:block ${isExpanded ? 'expanded' : ''}`}
        style={{ left: ringPosition.x, top: ringPosition.y }}
      />
    </>
  );
}
