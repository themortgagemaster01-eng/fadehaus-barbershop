import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { galleryImages, galleryIsStock } from '../data/site.js'

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const open = index !== null
  const base = import.meta.env.BASE_URL

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % galleryImages.length), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, prev, next])

  return (
    <Page>
      <Seo title="Gallery — FadeHaus Barber Shop" description="A look at the craft at FadeHaus Barber Shop in Mahopac, NY." />
      <PageHero
        eyebrow="The Work"
        title="Gallery"
        sub="A look at the craft. Tap any image to view it full size."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Masonry via CSS columns */}
        <div className="[column-count:1] sm:[column-count:2] lg:[column-count:3] [column-gap:1rem]">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setIndex(i)}
              className="mb-4 block w-full overflow-hidden rounded-sm border border-line group relative break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            >
              <img
                src={`${base}${img.src}`}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
            </motion.button>
          ))}
        </div>

        {galleryIsStock && (
          <p className="mt-8 text-center text-xs text-muted/60 italic">
            Stock imagery shown for layout. Replace with real FadeHaus shop photos before launch —
            never use a client’s social photos without permission.
          </p>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button className="absolute top-5 right-5 text-cream hover:text-gold" onClick={close} aria-label="Close">
              <X size={30} />
            </button>
            <button
              className="absolute left-4 sm:left-8 text-cream hover:text-gold"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 sm:right-8 text-cream hover:text-gold"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={index}
              src={`${base}${galleryImages[index].src}`}
              alt={galleryImages[index].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm border border-line"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="font-label uppercase tracking-widest text-xs text-muted">
                {index + 1} / {galleryImages.length} · {galleryImages[index].alt}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  )
}
