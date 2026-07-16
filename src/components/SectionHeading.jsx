import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, sub, align = 'left' }) {
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
      <h2 className="font-display uppercase leading-none text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-muted text-base leading-relaxed">{sub}</p>}
      <div className="barber-rule w-24 mt-6" style={align === 'center' ? { marginInline: 'auto' } : {}} />
    </Reveal>
  )
}
