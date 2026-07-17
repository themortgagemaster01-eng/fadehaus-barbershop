import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { Package } from 'lucide-react'

const items = [
  { name: 'Matte Pomade', note: 'Strong hold, natural finish', img: 'products/pomade.jpg' },
  { name: 'Beard Oil', note: 'Conditioning, lightly scented', img: 'products/beard-oil.jpg' },
  { name: 'Styling Clay', note: 'Flexible hold, low shine', img: 'products/styling-clay.jpg' },
  { name: 'Sea Salt Spray', note: 'Texture and volume', img: 'products/sea-salt-spray.jpg' },
  { name: 'Beard Balm', note: 'Shape and soften', img: 'products/beard-balm.jpg' },
  { name: 'Gift Certificate', note: 'Any service or product', img: 'products/gift-certificate.jpg' },
]

export default function Products() {
  const base = import.meta.env.BASE_URL
  return (
    <Page>
      <Seo title="Products — FadeHaus Barber Shop" description="Premium styling products stocked at FadeHaus Barber Shop, Mahopac, NY." />
      <PageHero eyebrow="Take It Home" title="Products" sub="Premium styling products stocked in-shop. Our barbers match the right product to your hair and style. Sample range shown — confirm the real lineup with the shop." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) * 0.06}>
              <div className="bg-ink2 border border-line rounded-sm h-full overflow-hidden group">
                {it.img && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`${base}${it.img}`}
                      alt={it.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,17,16,0) 60%, rgba(20,17,16,.9) 100%)' }} />
                    <Package className="absolute top-3 left-3 text-gold drop-shadow" size={22} />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-label uppercase tracking-wide text-lg">{it.name}</h3>
                  <p className="mt-2 text-muted text-sm">{it.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  )
}
