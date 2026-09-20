"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FluidGradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  colors?: string[];
  animate?: boolean;
}

export function FluidGradientText({
  text,
  colors = [
    "#ffaa40",
    "#9c40ff",
    "#ffaa40",
  ],
  animate = true,
  className,
  ...props
}: FluidGradientTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the element, constrained to 0-100%
      const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      setMousePosition({ x, y });
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      setMousePosition({ x: 50, y: 50 });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative inline-block text-transparent bg-clip-text font-bold",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${colors.join(', ')})`,
        transition: "background-position 0.2s ease",
        backgroundSize: animate ? "200% 200%" : "100% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: animate ? (isHovering ? "none" : "fluid-gradient-pulse 4s ease-in-out infinite alternate") : "none",
      }}
      {...props}
    >
      {text}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fluid-gradient-pulse {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `
      }} />
    </span>
  );
}
