import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { services, perks } from '../data/site.js'

const groups = [
  { key: 'men',   title: 'Men' },
  { key: 'women', title: 'Women' },
  { key: 'kids',  title: 'Kids' },
]

export default function Services() {
  const base = import.meta.env.BASE_URL
  return (
    <Page>
      <Seo title="Services & Pricing — FadeHaus Barber Shop" description="Haircuts, fades, beard grooming, women’s and kids’ cuts. See the full FadeHaus price list. Mahopac, NY." />
      <PageHero eyebrow="Straightforward" title="Services & Pricing" sub="Prices start from the figures shown; final pricing depends on the service and length. Men, women, and kids all welcome." />
      <section className="mx-auto max-w-6xl px-6 py-20 space-y-16">
        {groups.map((g, gi) => (
          <div key={g.key}>
            <Reveal delay={gi * 0.05}>
              <h2 className="font-label uppercase tracking-[0.2em] text-gold text-sm border-b border-line pb-3 mb-8">{g.title}</h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.filter((s) => s.cat === g.key).map((s, si) => (
                <Reveal key={s.name} delay={si * 0.06}>
                  <TiltCard className="glass rounded-md overflow-hidden h-full flex flex-col">
                    {s.img && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={`${base}${s.img}`}
                          alt={s.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,17,16,0) 55%, rgba(20,17,16,.75) 100%)' }} />
                        <span className="absolute bottom-3 right-4 font-display text-goldbright text-2xl drop-shadow">{s.price}</span>
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-lg font-label tracking-wide">{s.name}</div>
                      <p className="mt-2 text-muted text-sm leading-relaxed flex-1">{s.blurb}</p>
                      {!s.img && (
                        <div className="mt-4 font-display text-goldbright text-2xl">{s.price}</div>
                      )}
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
        <Reveal>
          <div className="flex flex-wrap gap-3 pt-4">
            {perks.map((p) => (
              <span key={p.label} className="font-label uppercase tracking-wide text-xs bg-panel border border-line rounded-sm px-4 py-3">{p.label}</span>
            ))}
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
