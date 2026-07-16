import { User, Quote } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { owner } from '../data/site.js'

export default function OwnerProfile() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="The Barber" title="Meet Vinny" />
      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] items-start">
        <Reveal>
          <div className="aspect-[4/5] bg-ink2 border border-line rounded-sm flex flex-col items-center justify-center text-muted/40">
            {owner.photoPlaceholder ? (
              <>
                <User size={40} />
                <span className="mt-3 text-xs font-label uppercase tracking-widest">Owner Photo</span>
                <span className="mt-1 text-[10px] text-muted/50">Add a real photo of Vinny</span>
              </>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="font-label uppercase tracking-[0.2em] text-gold text-sm">{owner.role}</div>
          <h3 className="mt-2 font-display uppercase text-4xl">{owner.name}</h3>
          <p className="mt-5 text-muted leading-relaxed max-w-xl">{owner.bio}</p>
          <blockquote className="mt-8 border-l-2 border-gold pl-6">
            <Quote className="text-gold mb-2" size={22} />
            <p className="font-serif italic text-xl">“{owner.quote}”</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
