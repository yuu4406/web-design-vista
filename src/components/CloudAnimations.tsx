
import React, { useEffect, useState } from "react";

interface Cloud {
  id: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  scale: number;
  delay: number;
}

const CloudAnimations = () => {
  const [clouds, setClouds] = useState<Cloud[]>([]);
  
  useEffect(() => {
    // Create initial clouds
    const initialClouds: Cloud[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 20, // Position across screen width
      y: Math.random() * 70,      // Position in top 70% of screen
      speed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.4 + 0.6,
      delay: i * 2000, // Stagger start times
    }));
    
    setClouds(initialClouds);
    
    // Animation loop for clouds
    let animationId: number;
    let startTime = Date.now();
    
    const animateClouds = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      setClouds(prevClouds => 
        prevClouds.map(cloud => {
          // Only start moving after delay
          if (elapsed < cloud.delay) {
            return cloud;
          }
          
          let newX = cloud.x + cloud.speed;
          
          // Reset cloud position when it goes off screen
          if (newX > 120) {
            newX = -20;
          }
          
          return {
            ...cloud,
            x: newX
          };
        })
      );
      
      animationId = requestAnimationFrame(animateClouds);
    };
    
    animationId = requestAnimationFrame(animateClouds);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {clouds.map(cloud => (
        <div
          key={cloud.id}
          className="cloud-animation absolute"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            opacity: cloud.opacity,
            transform: `scale(${cloud.scale})`,
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
};

export default CloudAnimations;
