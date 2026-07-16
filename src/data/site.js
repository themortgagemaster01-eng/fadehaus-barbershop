// Single source of truth for FadeHaus content.
// All facts verified from the shop's live site + Hudson Valley press (Oct 2025).

export const shop = {
  name: 'FadeHaus',
  full: 'FadeHaus Barber Shop',
  owner: 'Vinny Fidanza',
  address: '987 US-6, Mahopac, NY 10541',
  phone: '(845) 580-3566',
  phoneHref: 'tel:8455803566',
  email: 'fadehausbarbershop@yahoo.com',
  tagline: 'Sharp Fades. Classic Cuts. Timeless Confidence.',
  vision:
    "FadeHaus isn't just about haircuts — it's a higher standard of grooming.",
  visionBy: 'Vinny Fidanza, Owner',
  intro:
    'A modern, upscale barber experience in the heart of Mahopac — the timeless craftsmanship of the classic barber chair, with a fresh, modern edge. Men, women, and kids all welcome.',
}

export const hours = [
  { day: 'Monday',    open: '10:00 AM', close: '7:00 PM', d: 1 },
  { day: 'Tuesday',   open: '10:00 AM', close: '7:00 PM', d: 2 },
  { day: 'Wednesday', open: '10:00 AM', close: '7:00 PM', d: 3 },
  { day: 'Thursday',  open: '10:00 AM', close: '7:00 PM', d: 4 },
  { day: 'Friday',    open: '10:00 AM', close: '7:00 PM', d: 5 },
  { day: 'Saturday',  open: '10:00 AM', close: '6:00 PM', d: 6 },
  { day: 'Sunday',    open: '10:00 AM', close: '4:00 PM', d: 0 },
]

// Pricing from the live site. VERIFY with owner before production.
export const services = [
  { name: "Men's Haircut",        price: '$35+', cat: 'men',   blurb: 'Classic and modern cuts — short back-and-sides to trendy skin fades. Sharp lines, clean finish.', img: 'services/mens-haircut.jpg'  },
  { name: 'Haircut & Beard Trim', price: '$50+', cat: 'men',   blurb: 'A full cut paired with beard shaping and detailing. The complete FadeHaus grooming session.', img: 'services/haircut-beard.jpg'  },
  { name: 'Shape Up',             price: '$25+', cat: 'men',   blurb: 'Crisp line-up and edge work to keep your look sharp between full cuts.', img: 'services/shape-up.jpg'  },
  { name: 'Kids Cut',             price: '$30+', cat: 'kids',  blurb: 'Patient, welcoming cuts for the young ones, 12 and under.', img: 'services/kids-cut.jpg'  },
  { name: "Women's Haircut",      price: '$55+', cat: 'women', blurb: 'Modern shaping and styling with the same detail-obsessed craftsmanship.', img: 'services/womens-haircut.jpg'  },
  { name: 'Cut & Blow Dry',       price: '$75+', cat: 'women', blurb: 'A cut finished with a professional blow-dry and style.', img: 'services/cut-blowdry.jpg'  },
  { name: 'Blow Dry',             price: '$40+', cat: 'women', blurb: 'A polished blow-dry and finish for any occasion.', img: 'services/blowdry.jpg'  },
  { name: 'Beard Grooming',       price: '$25+', cat: 'men',   blurb: 'Trim, shape, and razor detailing with premium oils and balm.', img: 'services/beard-grooming.jpg'  },
]

export const perks = [
  { label: '10% off Active & Retired Servicemen', icon: 'shield' },
  { label: 'Cash & Zelle Accepted',                icon: 'wallet' },
  { label: 'Walk-ins Welcome',                     icon: 'door'   },
  { label: 'Gift Certificates',                    icon: 'gift'   },
]

// Real, verifiable third-party press (Hudson Valley Living / Halston Media, Oct 2025).
export const press = [
  {
    quote:
      'A high-end barber shop serving men, women, and children alike — a modern twist on a classic tradition, combining a relaxed, elevated atmosphere with top-tier skill.',
    source: 'Hudson Valley Living',
  },
  {
    quote:
      'Sharp fades, clean lines, and precise cuts with a keen eye for detail. FadeHaus raises the bar for barbershop culture in Mahopac.',
    source: 'Halston Media News',
  },
  {
    quote: shop.vision,
    source: shop.visionBy,
  },
]

// PLACEHOLDER reviews — swap for real Google reviews via an embed once the owner is on board.
// Kept obviously generic on purpose; do not present as real named customers.
export const reviewsArePlaceholder = true
export const reviews = [
  { text: 'Best fade I’ve had in the area. Clean shop, great attention to detail.', name: 'Placeholder Review', meta: 'Replace with live Google review' },
  { text: 'Took my son for his first real cut — friendly, patient, and sharp work.', name: 'Placeholder Review', meta: 'Replace with live Google review' },
  { text: 'Finally found my go-to barber. Upscale feel without the attitude.',        name: 'Placeholder Review', meta: 'Replace with live Google review' },
]

export const nav = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'Products', to: '/products' },
  { label: 'Contact',  to: '/contact' },
]

// "Book Now" is a call-to-book action, not a route — links to the phone.
export const bookNow = { label: 'Book Now', href: shop.phoneHref }

// Owner profile. Shop reads as solo — one profile, not an invented team.
export const owner = {
  name: 'Vinny Fidanza',
  role: 'Owner & Master Barber',
  bio: "Vinny opened FadeHaus to bring a higher standard of grooming to Mahopac — a place where classic barbering craft meets a modern, upscale experience. Every cut is done with an eye for detail and a commitment to sending you out looking sharp and feeling confident.",
  quote: shop.vision,
  // Swap for a real photo of Vinny on owner sign-off.
  photoPlaceholder: true,
}

// Real shop walkthrough clip.
export const video = {
  isPlaceholder: false,
  src: `${import.meta.env.BASE_URL}showroom.mp4`,
  poster: `${import.meta.env.BASE_URL}showroom-poster.jpg`,
  caption: 'A look inside FadeHaus',
  note: 'A walkthrough of the shop.',
}

// Gallery: Pexels stock (free license) as placeholders. Swap for real shop photos on sign-off.
// ratio drives the masonry tile height.
// g10 is a real interior render of the shop (not stock) — the AI-generated showroom walkthrough still frame.
export const galleryImages = [
  { src: 'gallery/g10.jpg', alt: 'FadeHaus showroom interior', ratio: 1.5, isShopRender: true },
  { src: 'gallery/g1.jpg', alt: 'Fresh fade haircut', ratio: 1.5 },
  { src: 'gallery/g4.jpg', alt: 'Barber detailing a cut', ratio: 0.67 },
  { src: 'gallery/g2.jpg', alt: 'Clean lineup and taper', ratio: 1.5 },
  { src: 'gallery/g7.jpg', alt: 'Beard trim in progress', ratio: 0.67 },
  { src: 'gallery/g3.jpg', alt: 'Classic barber chair', ratio: 1.5 },
  { src: 'gallery/g5.jpg', alt: 'Styling and finish', ratio: 0.67 },
  { src: 'gallery/g6.jpg', alt: 'Precision clipper work', ratio: 1.5 },
  { src: 'gallery/g8.jpg', alt: 'Comb and cut detail', ratio: 0.67 },
  { src: 'gallery/g9.jpg', alt: 'Finished look', ratio: 0.67 },
]
export const galleryIsStock = true

// FAQ — answers verified from the shop's real info.
export const faqs = [
  { q: 'Do I need an appointment?', a: 'Walk-ins are always welcome. Appointments are available too — call or text (845) 580-3566 to lock in your chair.' },
  { q: 'What are your hours?', a: 'Open seven days: Mon–Fri 10 AM–7 PM, Saturday 10 AM–6 PM, Sunday 10 AM–4 PM.' },
  { q: 'Do you cut women’s and kids’ hair?', a: 'Yes. FadeHaus serves men, women, and children — from skin fades to women’s cuts, blow-dries, and kids’ cuts.' },
  { q: 'What forms of payment do you take?', a: 'We accept Cash and Zelle. Gift certificates are also available for any service or product.' },
  { q: 'Is there a military discount?', a: 'Yes — 10% off for active and retired servicemen. Just let your barber know.' },
  { q: 'Where are you located?', a: 'We’re at 987 US-6, Mahopac, NY 10541, with parking out front.' },
]
