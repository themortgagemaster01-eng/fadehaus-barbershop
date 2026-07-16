import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { faqs } from '../data/site.js'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Good To Know" title="FAQ" align="center" />
      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((f, i) => {
          const isOpen = openIdx === i
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="font-label uppercase tracking-wide text-sm sm:text-base">{f.q}</span>
                <span className="text-gold shrink-0">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-muted leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
