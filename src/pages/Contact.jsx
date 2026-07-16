import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FAQ from '../components/FAQ.jsx'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { shop, hours } from '../data/site.js'

export default function Contact() {
  const today = new Date().getDay()
  return (
    <Page>
      <Seo title="Contact & Book — FadeHaus Barber Shop" description="Visit FadeHaus at 987 US-6, Mahopac, NY. Call or text (845) 580-3566. Open 7 days, walk-ins welcome." />
      <PageHero eyebrow="Come Through" title="Visit The Shop" sub="Walk-ins welcome, appointments available. Open seven days a week." />
      <section className="mx-auto max-w-6xl px-6 py-20 grid gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-6">
            <a href={`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`} className="flex items-start gap-4 hover:text-gold">
              <MapPin className="text-gold shrink-0 mt-1" size={22} />
              <div><div className="eyebrow mb-1">Location</div><div>{shop.address}</div></div>
            </a>
            <a href={shop.phoneHref} className="flex items-start gap-4 hover:text-gold">
              <Phone className="text-gold shrink-0 mt-1" size={22} />
              <div><div className="eyebrow mb-1">Call / Text</div><div>{shop.phone}</div></div>
            </a>
            <a href={`mailto:${shop.email}`} className="flex items-start gap-4 hover:text-gold">
              <Mail className="text-gold shrink-0 mt-1" size={22} />
              <div><div className="eyebrow mb-1">Email</div><div className="break-all">{shop.email}</div></div>
            </a>

            <div className="pt-4">
              <div className="eyebrow mb-3">Hours</div>
              {hours.map((h) => (
                <div key={h.day} className={`flex justify-between py-2.5 border-b border-line text-sm ${h.d === today ? 'text-goldbright' : ''}`}>
                  <span className="font-label uppercase tracking-wide text-muted">{h.day}</span>
                  <span>{h.open} – {h.close}</span>
                </div>
              ))}
            </div>

            <a href={shop.phoneHref} className="btn-gold hover:-translate-y-0.5 mt-4">Book Your Fade <ArrowRight size={18} /></a>
          </div>
        </Reveal>

        <div className="space-y-8">
          <ContactForm />
          <Reveal delay={0.1}>
            <div className="min-h-[300px] border border-line rounded-sm overflow-hidden">
              <iframe
                title="FadeHaus location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(shop.address)}&output=embed`}
                className="w-full h-full min-h-[300px]"
                style={{ border: 0, filter: 'grayscale(0.35) contrast(1.05)' }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-line bg-ink2">
        <FAQ />
      </div>
    </Page>
  )
}
