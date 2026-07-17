import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Auto-rotating single-review carousel. Pauses on hover/focus so it never
// yanks a review away mid-read. Real reviews only — see data/site.js.
export default function ReviewsCarousel({ reviews }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % reviews.length), [reviews.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + reviews.length) % reviews.length), [reviews.length])

  useEffect(() => {
    if (paused || reviews.length <= 1) return
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [paused, next, reviews.length])

  const r = reviews[index]

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="glass rounded-md p-8 sm:p-10 min-h-[220px] flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="flex gap-1 mb-4 text-gold">{'★★★★★'}</div>
            <p className="text-cream/90 leading-relaxed text-lg font-serif italic">“{r.text}”</p>
            <p className="mt-6 font-label uppercase tracking-wide text-xs text-goldbright">{r.name}</p>
            <p className="text-[10px] text-muted/60 mt-1">{r.meta}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {reviews.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous review"
            className="hidden sm:flex absolute top-1/2 -left-14 -translate-y-1/2 w-10 h-10 rounded-full glass items-center justify-center text-gold hover:text-goldbright transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="hidden sm:flex absolute top-1/2 -right-14 -translate-y-1/2 w-10 h-10 rounded-full glass items-center justify-center text-gold hover:text-goldbright transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-gold' : 'w-1.5 bg-line'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
