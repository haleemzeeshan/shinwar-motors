'use client';

import { useId } from 'react';

export function SedanSVG({
  color = '#3E6AE1',
  size = 160,
}: {
  color?: string;
  size?: number;
}) {
  const id = useId().replace(/:/g, '');
  const g1 = `sg1-${id}`;
  const g2 = `sg2-${id}`;

  return (
    <svg width={size} height={size * 0.42} viewBox="0 0 380 120" fill="none">
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="380" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="0.9" />
          <stop offset="1" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={g2} x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.3)" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M30 75 L65 40 Q75 30 95 30 L285 30 Q305 30 315 40 L350 75 L365 75 Q372 75 372 82 L372 92 Q372 97 365 97 L340 97 Q338 108 325 108 Q312 108 310 97 L70 97 Q68 108 55 108 Q42 108 40 97 L15 97 Q8 97 8 92 L8 82 Q8 75 15 75 Z"
        fill={`url(#${g1})`}
      />
      <path d="M85 70 L100 42 L280 42 L295 70 Z" fill={`url(#${g2})`} opacity="0.6" />
      <circle cx="55" cy="100" r="10" fill="rgba(0,0,0,0.5)" stroke={color} strokeWidth="2" />
      <circle cx="325" cy="100" r="10" fill="rgba(0,0,0,0.5)" stroke={color} strokeWidth="2" />
      <rect x="12" y="80" width="12" height="8" rx="2" fill="#FBBF24" opacity="0.9" />
      <rect x="356" y="80" width="12" height="8" rx="2" fill="#EF4444" opacity="0.9" />
    </svg>
  );
}

export function SUVsvg({
  color = '#E14F9E',
  size = 170,
}: {
  color?: string;
  size?: number;
}) {
  const id = useId().replace(/:/g, '');
  const g1 = `suv1-${id}`;

  return (
    <svg width={size} height={size * 0.42} viewBox="0 0 380 120" fill="none">
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="380" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="0.9" />
          <stop offset="1" stopColor={color} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M20 78 L40 35 Q50 25 70 25 L310 25 Q330 25 340 35 L360 78 L370 78 Q376 78 376 85 L376 95 Q376 100 370 100 L345 100 Q343 111 330 111 Q317 111 315 100 L65 100 Q63 111 50 111 Q37 111 35 100 L10 100 Q4 100 4 95 L4 85 Q4 78 10 78 Z"
        fill={`url(#${g1})`}
      />
      <path d="M65 72 L75 30 L305 30 L315 72 Z" fill="rgba(255,255,255,0.15)" />
      <circle cx="50" cy="103" r="10" fill="rgba(0,0,0,0.5)" stroke={color} strokeWidth="2" />
      <circle cx="330" cy="103" r="10" fill="rgba(0,0,0,0.5)" stroke={color} strokeWidth="2" />
      <rect x="8" y="82" width="14" height="9" rx="2" fill="#FBBF24" opacity="0.9" />
      <rect x="358" y="82" width="14" height="9" rx="2" fill="#EF4444" opacity="0.9" />
    </svg>
  );
}

export function TowTruckSVG({ size = 200 }: { size?: number }) {
  const id = useId().replace(/:/g, '');
  const g1 = `tow1-${id}`;

  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 420 160" fill="none">
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>
      {/* Truck body */}
      <rect x="5" y="55" width="260" height="75" rx="6" fill={`url(#${g1})`} />
      {/* Cab */}
      <path
        d="M170 55 L170 20 Q172 12 182 10 L240 10 Q255 10 265 25 L265 55 Z"
        fill="#FBBF24"
      />
      {/* Cab window */}
      <path
        d="M178 50 L180 18 L240 18 L258 35 L258 50 Z"
        fill="rgba(100,200,255,0.3)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      {/* Tow boom */}
      <rect
        x="30"
        y="30"
        width="145"
        height="10"
        rx="4"
        fill="#1a1a1a"
        transform="rotate(-20 30 55)"
      />
      <rect x="18" y="42" width="12" height="8" rx="2" fill="#888" />
      {/* Hook */}
      <path d="M148 12 Q155 5 162 12 Q162 22 155 22" stroke="#888" strokeWidth="4" fill="none" />
      {/* Wheels */}
      <circle cx="60" cy="135" r="22" fill="#1a1a1a" stroke="#666" strokeWidth="3" />
      <circle cx="60" cy="135" r="10" fill="#333" />
      <circle cx="210" cy="135" r="22" fill="#1a1a1a" stroke="#666" strokeWidth="3" />
      <circle cx="210" cy="135" r="10" fill="#333" />
      <circle cx="295" cy="135" r="22" fill="#1a1a1a" stroke="#666" strokeWidth="3" />
      <circle cx="295" cy="135" r="10" fill="#333" />
      {/* Lights */}
      <rect x="266" y="28" width="18" height="10" rx="3" fill="#FBBF24" opacity="0.9" />
      <rect x="266" y="62" width="14" height="8" rx="2" fill="#EF4444" opacity="0.9" />
      <rect x="5" y="90" width="12" height="8" rx="2" fill="#EF4444" opacity="0.9" />
      {/* Flashing light bar */}
      <rect x="185" y="5" width="60" height="8" rx="4" fill="#EF4444" opacity="0.85" />
      <rect x="195" y="5" width="10" height="8" rx="2" fill="#3E6AE1" opacity="0.85" />
    </svg>
  );
}

export function GlobeAnim() {
  return (
    <svg width="340" height="340" viewBox="0 0 340 340" fill="none" style={{ opacity: 0.7 }}>
      <defs>
        <linearGradient
          id="globeGrad"
          x1="0"
          y1="0"
          x2="340"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3E6AE1" stopOpacity="0.3" />
          <stop offset="1" stopColor="#7B4FE1" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="170" cy="170" r="140" fill="url(#globeGrad)" />
      <g className="globe-ring">
        <ellipse
          cx="170"
          cy="170"
          rx="140"
          ry="40"
          stroke="rgba(62,106,225,0.35)"
          strokeWidth="1"
          fill="none"
        />
      </g>
      <g className="globe-ring-2">
        <ellipse
          cx="170"
          cy="170"
          rx="40"
          ry="140"
          stroke="rgba(123,79,225,0.35)"
          strokeWidth="1"
          fill="none"
        />
      </g>
      <circle
        cx="170"
        cy="170"
        r="100"
        stroke="rgba(62,106,225,0.2)"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="170"
        cy="170"
        r="60"
        stroke="rgba(62,106,225,0.15)"
        strokeWidth="1"
        fill="none"
      />
      {/* Route lines */}
      <path
        d="M80 130 Q170 80 260 140"
        stroke="#3E6AE1"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="5 3"
      />
      <path
        d="M90 200 Q170 240 270 190"
        stroke="#7B4FE1"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="5 3"
      />
      {/* Location dots with pulse */}
      {[
        [80, 130],
        [260, 140],
        [90, 200],
        [270, 190],
        [170, 100],
        [170, 240],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#3E6AE1" />
          <circle
            cx={cx}
            cy={cy}
            r="5"
            fill="none"
            stroke="#3E6AE1"
            strokeWidth="2"
            opacity="0.5"
            style={{
              animation: `pulse-ring 2s ${i * 0.4}s ease-out infinite`,
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
