import { Phone } from 'lucide-react'
import { shop, bookNow } from '../data/site.js'

// Persistent mobile-only "Book Now" bar, pinned to the bottom of the
// viewport on every page. Desktop already has a Book button in the navbar,
// so this only renders below the md breakpoint.
export default function FloatingBookBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-[140] glass"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <a
        href={shop.phoneHref || bookNow.href}
        className="flex items-center justify-center gap-2 py-3.5 font-label font-semibold uppercase tracking-[0.14em] text-sm text-ink bg-gradient-to-b from-goldbright to-gold"
      >
        <Phone size={16} /> {bookNow.label}
      </a>
    </div>
  )
}
