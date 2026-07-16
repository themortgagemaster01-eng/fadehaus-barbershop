import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { Package } from 'lucide-react'

const items = [
  { name: 'Matte Pomade', note: 'Strong hold, natural finish' },
  { name: 'Beard Oil', note: 'Conditioning, lightly scented' },
  { name: 'Styling Clay', note: 'Flexible hold, low shine' },
  { name: 'Sea Salt Spray', note: 'Texture and volume' },
  { name: 'Beard Balm', note: 'Shape and soften' },
  { name: 'Gift Certificate', note: 'Any service or product' },
]

export default function Products() {
  return (
    <Page>
      <Seo title="Products — FadeHaus Barber Shop" description="Premium styling products stocked at FadeHaus Barber Shop, Mahopac, NY." />
      <PageHero eyebrow="Take It Home" title="Products" sub="Premium styling products stocked in-shop. Our barbers match the right product to your hair and style. Sample range shown — confirm the real lineup with the shop." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) * 0.06}>
              <div className="bg-ink2 border border-line rounded-sm p-8 h-full">
                <Package className="text-gold mb-4" size={26} />
                <h3 className="font-label uppercase tracking-wide text-lg">{it.name}</h3>
                <p className="mt-2 text-muted text-sm">{it.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  )
}
