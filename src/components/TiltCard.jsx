import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

// Subtle 3D tilt-on-hover + a soft gold glow that follows the cursor.
// Wraps any card content — keeps the tilt gentle (a few degrees) so it reads
// as "alive," not gimmicky. Disabled entirely for prefers-reduced-motion.
export default function TiltCard({ children, className = '', glow = true, maxTilt = 6 }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), { stiffness: 300, damping: 30 })
  const glowX = useTransform(x, [0, 1], ['0%', '100%'])
  const glowY = useTransform(y, [0, 1], ['0%', '100%'])

  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 800 }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative ${className}`}
    >
      {glow && !reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(180px circle at ${glowX} ${glowY}, rgba(224,192,121,.18), transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
