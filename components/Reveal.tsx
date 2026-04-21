'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

type Direction = 'up' | 'left' | 'right' | 'down' | 'fade' | 'scale';

const variantsFor = (direction: Direction): Variants => {
  const hidden = (() => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 40 };
      case 'down':
        return { opacity: 0, y: -40 };
      case 'left':
        return { opacity: 0, x: 60 };
      case 'right':
        return { opacity: 0, x: -60 };
      case 'scale':
        return { opacity: 0, scale: 0.9 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  })();

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration,
  once = true,
  amount = 0.2,
  className,
  style,
  as,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'article' | 'header';
}) {
  const Component = (motion[as ?? 'div'] ?? motion.div) as typeof motion.div;
  const variants = variantsFor(direction);

  return (
    <Component
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration: duration ?? 0.7,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      {children}
    </Component>
  );
}

export function RevealStagger({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.05,
  className,
  style,
  amount = 0.15,
}: {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  style?: CSSProperties;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  direction = 'up',
  className,
  style,
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  style?: CSSProperties;
}) {
  const variants = variantsFor(direction);

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </motion.div>
  );
}
