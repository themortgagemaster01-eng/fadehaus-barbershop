import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import OwnerProfile from '../components/OwnerProfile.jsx'
import VideoBlock from '../components/VideoBlock.jsx'
import { shop } from '../data/site.js'

export default function About() {
  return (
    <Page>
      <Seo title="About FadeHaus — Mahopac Barber Shop" description="Meet Vinny Fidanza and the FadeHaus story — a higher standard of grooming in Mahopac, NY." />
      <PageHero eyebrow="The Vision" title="A Higher Standard" sub={shop.intro} />

      {/* Storytelling */}
      <section className="mx-auto max-w-4xl px-6 py-20 space-y-8">
        <Reveal>
          <p className="font-serif text-2xl leading-relaxed">
            FadeHaus is more than a barber shop — it’s a modern, upscale experience right here in Mahopac,
            balancing the timeless craftsmanship of the classic barber chair with a fresh, modern edge.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted leading-relaxed">
            It started with a simple belief: a great haircut should feel like an experience, not an errand.
            The shop was built around comfort, style, and detail — a place where you can settle into the chair,
            relax, and trust that you’ll walk out looking your sharpest.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-muted leading-relaxed">
            The team specializes in men’s, women’s, and children’s cuts, precision beard trims, and much more.
            Whether you’re stopping in for a quick fade or looking for your new go-to stylist, FadeHaus is the
            place to look sharp, feel confident, and enjoy the vibe. Walk-ins are always welcome, and
            appointments are available.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <blockquote className="border-l-2 border-gold pl-6 py-2">
            <p className="font-serif italic text-xl">“{shop.vision}”</p>
            <p className="mt-3 eyebrow">— {shop.visionBy}</p>
          </blockquote>
        </Reveal>
      </section>

      {/* Owner profile */}
      <div className="border-t border-line">
        <OwnerProfile />
      </div>

      {/* Video */}
      <div className="border-t border-line">
        <VideoBlock />
      </div>
    </Page>
  )
}
