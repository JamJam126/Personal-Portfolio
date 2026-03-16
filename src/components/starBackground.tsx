/* eslint-disable react-hooks/purity */
"use client";
import React, { useEffect, useState, useMemo } from "react";
import "../app/StarBackground.css";

interface StarBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  starCount?: number;
}

export default function StarBackground({
  starCount = 640,
}: StarBackgroundProps) {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleResize = () => setShowStars(window.innerWidth >= 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: starCount }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.5 ? 1 : 2,
        duration: 50 + Math.random() * 100,
      })),
    [starCount],
  );

  if (!showStars) return null; 

  return (
    <div className="starfield fixed top-60 left-0 w-screen h-screen -z-10">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
