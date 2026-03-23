import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorDotX = useSpring(0, { stiffness: 1000, damping: 40 });
  const cursorDotY = useSpring(0, { stiffness: 1000, damping: 40 });
  
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if desktop
    const checkIsDesktop = () => {
      setIsDesktop(typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      cursorDotX.set(e.clientX - 4);
      cursorDotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, cursorDotX, cursorDotY]);

  if (!isDesktop) return null;

  return (
    <>
      <style>{`
        @media (min-width: 1024px) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-[var(--neon-pink)] drop-shadow-[0_0_8px_rgba(255,45,139,0.8)]"
        style={{ x: cursorDotX, y: cursorDotY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9998] flex items-center justify-center backdrop-blur-sm"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'var(--neon-pink)' : 'var(--neon-teal)',
          backgroundColor: isHovering ? 'rgba(255, 45, 139, 0.1)' : 'rgba(0, 205, 184, 0.1)'
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.2 }}
      />
    </>
  );
}
