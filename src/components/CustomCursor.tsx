import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTextTarget, setIsTextTarget] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer trailing ring
  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check for touch / coarse pointers or reduced motion
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isCoarse || prefersReducedMotion || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, [role="button"], input[type="radio"], input[type="checkbox"], select');
      const textInput = target.closest('input[type="text"], input[type="email"], textarea');
      const card = target.closest('[data-cursor-label], .cursor-card');

      if (textInput) {
        setIsTextTarget(true);
        setIsPointer(false);
        setHoverLabel(null);
      } else if (card) {
        setIsTextTarget(false);
        setIsPointer(true);
        const label = card.getAttribute('data-cursor-label') || 'VIEW';
        setHoverLabel(label);
      } else if (interactive) {
        setIsTextTarget(false);
        setIsPointer(true);
        setHoverLabel(null);
      } else {
        setIsTextTarget(false);
        setIsPointer(false);
        setHoverLabel(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300" style={{ opacity: isVisible && !isTextTarget ? 1 : 0 }}>
      {/* Outer Spring-Damped Tracking Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-mono pointer-events-none transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: hoverLabel ? 68 : isPointer ? 48 : 28,
          height: hoverLabel ? 68 : isPointer ? 48 : 28,
          border: isPointer ? '1.5px solid rgba(217, 119, 6, 0.9)' : '1.5px solid rgba(245, 158, 11, 0.4)',
          backgroundColor: isPointer ? 'rgba(217, 119, 6, 0.15)' : 'rgba(34, 18, 12, 0.25)',
          backdropFilter: isPointer ? 'blur(2px)' : 'none',
          boxShadow: isPointer ? '0 0 20px rgba(217, 119, 6, 0.25)' : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {hoverLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] tracking-widest font-semibold text-amber-300 select-none uppercase"
          >
            {hoverLabel}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Dot (Zero Lag) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-amber-400 pointer-events-none shadow-sm shadow-amber-500/50"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: hoverLabel ? 0 : isPointer ? 6 : 4,
          height: hoverLabel ? 0 : isPointer ? 6 : 4,
          opacity: hoverLabel ? 0 : 1,
        }}
      />
    </div>
  );
};
