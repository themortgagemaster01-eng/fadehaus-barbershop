import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
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
      <Seo title="Services & Pricing — FadeHaus Barber Shop" description="Haircuts, fades, beard grooming, women\u2019s and kids\u2019 cuts. See the full FadeHaus price list. Mahopac, NY." />
      <PageHero eyebrow="Straightforward" title="Services & Pricing" sub="Prices start from the figures shown; final pricing depends on the service and length. Men, women, and kids all welcome." />
      <section className="mx-auto max-w-4xl px-6 py-20 space-y-14">
        {groups.map((g, gi) => (
          <Reveal key={g.key} delay={gi * 0.05}>
            <h2 className="font-label uppercase tracking-[0.2em] text-gold text-sm border-b border-line pb-3 mb-2">{g.title}</h2>
            <div>
              {services.filter((s) => s.cat === g.key).map((s) => (
                <div key={s.name} className="flex items-center gap-5 py-4 border-b border-line/50">
                  {s.img && (
                    <img
                      src={`${base}${s.img}`}
                      alt={s.name}
                      loading="lazy"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm object-cover border border-gold/30 shrink-0"
                    />
                  )}
                  <div className="flex-1 flex items-baseline justify-between gap-6">
                    <div>
                      <div className="text-lg">{s.name}</div>
                      <div className="text-muted text-sm mt-1">{s.blurb}</div>
                    </div>
                    <div className="font-display text-goldbright text-2xl whitespace-nowrap">{s.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
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
