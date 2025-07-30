'use client';

import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef, type HTMLAttributes } from 'react';

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  noVertical?: boolean;
}

export function FadeIn({ children, className, noVertical, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  const variants = {
    hidden: { opacity: 0, y: noVertical ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
