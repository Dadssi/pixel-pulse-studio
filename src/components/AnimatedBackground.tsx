import { motion } from 'framer-motion';

interface FloatingShape {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
  delay: number;
}

const shapes: FloatingShape[] = [
  { id: 1, x: '10%', y: '20%', size: 300, color: 'brand-orange', delay: 0 },
  { id: 2, x: '80%', y: '30%', size: 200, color: 'brand-blue', delay: 0.5 },
  { id: 3, x: '70%', y: '70%', size: 250, color: 'brand-coral', delay: 1 },
  { id: 4, x: '20%', y: '80%', size: 180, color: 'brand-blue-light', delay: 1.5 },
  { id: 5, x: '50%', y: '10%', size: 150, color: 'brand-purple', delay: 2 },
];

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated gradient orbs */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full blur-[100px] opacity-20`}
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            background: `hsl(var(--${shape.color}))`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border border-primary/20 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-secondary/20 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-12 h-12 border-2 border-accent/20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
};
