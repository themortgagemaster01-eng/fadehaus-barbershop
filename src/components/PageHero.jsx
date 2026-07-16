import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="pt-36 pb-14 border-b border-line bg-ink2">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="eyebrow mb-3">{eyebrow}</div>
          <h1 className="font-display uppercase leading-none text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
          {sub && <p className="mt-5 text-muted max-w-2xl leading-relaxed">{sub}</p>}
          <div className="barber-rule w-28 mt-6" />
        </motion.div>
      </div>
    </section>
  )
}
