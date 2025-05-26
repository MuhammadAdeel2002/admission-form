"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color?: string;
}

interface ParticlesBackgroundProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minSpeed?: number;
  maxSpeed?: number;
  direction?: "up" | "down" | "left" | "right" | "random";
  className?: string;
  interactive?: boolean;
}

export default function ParticlesBackground({
  count = 50,
  color,
  minSize = 2,
  maxSize = 6,
  minOpacity = 0.1,
  maxOpacity = 0.5,
  minSpeed = 1,
  maxSpeed = 3,
  direction = "up",
  className = "",
  interactive = false,
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Generate random particles on mount
  useEffect(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width, height });
    
    const newParticles: Particle[] = Array.from({ length: count }).map((_, index) => ({
      id: index,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      color: color || (theme === "dark" ? "#ffffff" : "#1a1a1a"),
    }));
    
    setParticles(newParticles);
    
    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count, minSize, maxSize, minOpacity, maxOpacity, minSpeed, maxSpeed, color, theme]);
  
  // Handle mouse movement for interactive particles
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive]);
  
  // Determine animation direction
  const getDirectionAnimation = (direction: string, speed: number) => {
    switch (direction) {
      case "up":
        return {
          y: [0, -dimensions.height],
          x: [null, null],
        };
      case "down":
        return {
          y: [0, dimensions.height],
          x: [null, null],
        };
      case "left":
        return {
          x: [0, -dimensions.width],
          y: [null, null],
        };
      case "right":
        return {
          x: [0, dimensions.width],
          y: [null, null],
        };
      case "random":
        const angle = Math.random() * Math.PI * 2;
        return {
          x: [0, Math.cos(angle) * dimensions.width],
          y: [0, Math.sin(angle) * dimensions.height],
        };
      default:
        return {
          y: [0, -dimensions.height],
          x: [null, null],
        };
    }
  };
  
  // Calculate interactive particle position
  const getInteractivePosition = (particle: Particle) => {
    if (!interactive || !mousePosition.x || !mousePosition.y) return {};
    
    const dx = mousePosition.x - particle.x;
    const dy = mousePosition.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 150;
    
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(dy, dx);
      
      return {
        x: particle.x - Math.cos(angle) * force * 30,
        y: particle.y - Math.sin(angle) * force * 30,
      };
    }
    
    return {};
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => {
        const directionAnim = getDirectionAnimation(direction, particle.speed);
        const interactivePos = getInteractivePosition(particle);
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              x: particle.x,
              y: particle.y,
              ...interactivePos,
            }}
            animate={{
              ...directionAnim,
              opacity: [particle.opacity, 0],
            }}
            transition={{
              duration: 30 / particle.speed,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}

// Preset configurations for easy reuse
export const subtleParticles = {
  count: 50,
  minSize: 1,
  maxSize: 4,
  minOpacity: 0.05,
  maxOpacity: 0.2,
  minSpeed: 0.5,
  maxSpeed: 1.5,
  direction: "up",
  interactive: false,
};

export const prominentParticles = {
  count: 80,
  minSize: 2,
  maxSize: 8,
  minOpacity: 0.1,
  maxOpacity: 0.4,
  minSpeed: 1,
  maxSpeed: 3,
  direction: "random",
  interactive: true,
};

export const glowingParticles = {
  count: 30,
  color: "#d4af37",
  minSize: 3,
  maxSize: 10,
  minOpacity: 0.2,
  maxOpacity: 0.6,
  minSpeed: 0.3,
  maxSpeed: 1,
  direction: "up",
  interactive: true,
}; 