'use client';

import { useEffect, useState } from 'react';

type Star = {
  left: string;
  top: string;
  delay: string;
  duration: string;
};

export default function Stars({ count = 30 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  // Generate on the client only to avoid hydration mismatch from Math.random
  useEffect(() => {
    setStars(
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 3}s`,
      })),
    );
  }, [count]);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {stars.map((s, i) => (
        <div
          key={i}
          className="star"
          style={
            {
              left: s.left,
              top: s.top,
              '--d': s.duration,
              '--delay': s.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
