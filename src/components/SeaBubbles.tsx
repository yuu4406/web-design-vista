
import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const SeaBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create a new bubble occasionally when mouse moves
      if (Math.random() > 0.85) {
        const newBubble = {
          id: Date.now(),
          x: e.clientX + (Math.random() * 20 - 10),
          y: e.clientY + (Math.random() * 20 - 10),
          size: Math.random() * 15 + 5,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3
        };
        
        setBubbles(prev => [...prev, newBubble]);
        
        // Limit the number of bubbles
        if (bubbles.length > 25) {
          setBubbles(prev => prev.slice(1));
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Animation frame to move bubbles upward
    let animationId: number;
    const animateBubbles = () => {
      setBubbles(prev => 
        prev
          .map(bubble => ({
            ...bubble,
            y: bubble.y - bubble.speed,
            opacity: bubble.opacity > 0.1 ? bubble.opacity - 0.005 : 0
          }))
          .filter(bubble => bubble.y > -bubble.size && bubble.opacity > 0)
      );
      
      animationId = requestAnimationFrame(animateBubbles);
    };
    
    animationId = requestAnimationFrame(animateBubbles);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [bubbles.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="sea-bubble absolute rounded-full"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default SeaBubbles;
