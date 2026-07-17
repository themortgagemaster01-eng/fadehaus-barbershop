import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Scissors, Sparkles, ShieldCheck, Wallet, DoorOpen, Gift, Quote, Volume2, VolumeX } from 'lucide-react'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import VideoBlock from '../components/VideoBlock.jsx'
import FAQ from '../components/FAQ.jsx'
import Seo from '../components/Seo.jsx'
import { shop, services, perks, press, reviews, reviewsArePlaceholder } from '../data/site.js'

const perkIcons = { shield: ShieldCheck, wallet: Wallet, door: DoorOpen, gift: Gift }

export default function Home() {
  const featured = services.filter((s) => ['Men’s Haircut', "Men's Haircut", 'Haircut & Beard Trim', 'Beard Grooming', "Women's Haircut"].includes(s.name)).slice(0, 4)
  const heroVideoRef = useRef(null)
  const [heroMuted, setHeroMuted] = useState(true)
  const toggleHeroSound = () => {
    const v = heroVideoRef.current
    if (!v) return
    v.muted = !v.muted
    setHeroMuted(v.muted)
  }

  return (
    <Page>
      <Seo title="FadeHaus Barber Shop — Mahopac, NY" description="A higher standard of grooming in Mahopac, NY. Sharp fades, classic cuts, and precision beard work. Open 7 days, walk-ins welcome." />
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={heroVideoRef}
            src={`${import.meta.env.BASE_URL}hero-barber.mp4`}
            poster={`${import.meta.env.BASE_URL}hero-barber-poster.jpg`}
            className="h-full w-full object-cover object-[62%_28%] contrast-[1.08] saturate-[1.12] brightness-[1.06]"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,17,16,.5) 0%, rgba(20,17,16,.08) 38%, rgba(20,17,16,.78) 100%), linear-gradient(90deg, rgba(20,17,16,.78) 0%, rgba(20,17,16,.28) 46%, rgba(20,17,16,0) 100%)' }} />
          <button
            onClick={toggleHeroSound}
            aria-label={heroMuted ? 'Turn on sound' : 'Mute sound'}
            className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-ink/60 border border-gold/40 text-gold flex items-center justify-center backdrop-blur-sm hover:bg-ink/80 transition-colors"
          >
            {heroMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="w-7 h-px bg-gold" /> Mahopac, NY · Open 7 Days
            </div>
            <h1 className="font-display uppercase leading-[0.85] drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
              <span className="block text-cream text-[16vw] sm:text-[12vw] lg:text-[8.5rem]">FADEHAUS</span>
              <span className="block text-gold text-[11vw] sm:text-[8vw] lg:text-[5.5rem] mt-1">BARBER SHOP</span>
            </h1>
            <p className="mt-6 font-serif text-2xl sm:text-3xl max-w-xl">{shop.tagline}</p>
            <p className="mt-4 text-muted max-w-md leading-relaxed">Premium products. Expert craftsmanship. Built for the modern man — and everyone who walks through the door.</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={shop.phoneHref} className="btn-gold hover:-translate-y-0.5">Book Your Fade <ArrowRight size={18} /></a>
              <Link to="/services" className="btn-ghost">View Pricing <ArrowRight size={18} /></Link>
            </div>

            <div className="mt-14 flex gap-10 sm:gap-14">
              {[
                { Icon: Sparkles, a: 'Premium', b: 'Products' },
                { Icon: Scissors, a: 'Expert', b: 'Barbers' },
                { Icon: ShieldCheck, a: 'Quality', b: 'You Can Trust' },
              ].map(({ Icon, a, b }, i) => (
                <div key={i} className="text-center">
                  <Icon size={30} className="mx-auto mb-2.5 text-gold" />
                  <p className="font-label text-[11px] uppercase tracking-widest text-muted leading-tight">{a}<br />{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO STRIP ================= */}
      <section className="bg-ink2 border-y border-line">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <Reveal>
            <Quote className="mx-auto text-gold mb-5" size={34} />
            <p className="font-serif text-2xl sm:text-3xl leading-snug">{shop.vision}</p>
            <p className="mt-5 eyebrow">— {shop.visionBy}</p>
          </Reveal>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <VideoBlock />

      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-line">
        <SectionHeading eyebrow="The Craft" title="What We Do" sub={shop.intro} />
        <div className="mt-14 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <div className="h-full bg-ink2 transition-colors hover:bg-panel group overflow-hidden">
                {s.img && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${s.img}`}
                      alt={s.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,17,16,0) 55%, rgba(20,17,16,.85) 100%)' }} />
                    <Scissors className="absolute top-3 left-3 text-gold drop-shadow" size={22} />
                    <span className="absolute top-3 right-3 font-display text-goldbright text-lg drop-shadow">{s.price}</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-label font-bold uppercase tracking-wide text-lg">{s.name}</h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{s.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Link to="/services" className="btn-ghost">Full Price List <ArrowRight size={18} /></Link>
        </Reveal>
      </section>

      {/* ================= PERKS ================= */}
      <section className="bg-ink2 border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => {
            const Icon = perkIcons[p.icon]
            return (
              <Reveal key={p.label} delay={i * 0.06}>
                <div className="flex items-center gap-4 bg-panel border border-line rounded-sm p-5 h-full">
                  <Icon className="text-gold shrink-0" size={26} />
                  <span className="font-label uppercase tracking-wide text-sm">{p.label}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ================= PRESS (real, verifiable) ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Featured In" title="The Word Around Town" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {press.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full bg-ink2 border border-line rounded-sm p-8 flex flex-col">
                <Quote className="text-gold mb-4" size={26} />
                <blockquote className="font-serif text-lg leading-relaxed flex-1">{p.quote}</blockquote>
                <figcaption className="mt-5 eyebrow">{p.source}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= REVIEWS (placeholder) ================= */}
      <section className="bg-ink2 border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="From The Chair" title="Client Reviews" align="center" />
          {reviewsArePlaceholder && (
            <p className="mt-4 text-center text-xs text-muted/70 italic">
              Placeholder content — real Google reviews embed here once connected.
            </p>
          )}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-panel border border-line rounded-sm p-8">
                  <div className="flex gap-1 mb-4 text-gold">{'★★★★★'}</div>
                  <p className="text-cream/90 leading-relaxed">{r.text}</p>
                  <p className="mt-5 font-label uppercase tracking-wide text-xs text-muted">{r.name}</p>
                  <p className="text-[10px] text-muted/60 mt-1">{r.meta}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FAQ />

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display uppercase text-4xl sm:text-6xl leading-none">Ready For A Sharper Look?</h2>
            <p className="mt-5 text-muted max-w-lg mx-auto">Walk in during shop hours, or call ahead to lock in your chair. Open seven days a week.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href={shop.phoneHref} className="btn-gold hover:-translate-y-0.5">Call {shop.phone}</a>
              <Link to="/contact" className="btn-ghost">Find The Shop <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
        <div className="barber-rule" />
      </section>
    </Page>
  )
}
