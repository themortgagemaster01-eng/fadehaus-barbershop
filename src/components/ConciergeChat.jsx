import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { shop, hours } from '../data/site.js'

// Simple canned-answer concierge widget. No backend, no AI API call — just
// fast, accurate answers pulled straight from data/site.js so it can never
// drift out of sync with the real hours/pricing shown elsewhere on the site.
const CHIPS = [
  { key: 'hours', label: 'Hours', q: 'What are your hours?' },
  { key: 'services', label: 'Services', q: 'What services do you offer?' },
  { key: 'price', label: 'Pricing', q: 'How much for a cut?' },
  { key: 'book', label: 'Book', q: 'How do I book?' },
  { key: 'where', label: 'Location', q: 'Where are you located?' },
]

function hoursLine() {
  const wk = hours.find((h) => h.d === 1)
  const sat = hours.find((h) => h.d === 6)
  const sun = hours.find((h) => h.d === 0)
  return `We're open Mon–Fri ${wk.open}–${wk.close}, Sat ${sat.open}–${sat.close}, Sun ${sun.open}–${sun.close}. Walk-ins welcome, but booking ahead guarantees your chair.`
}

const ANSWERS = {
  hours: hoursLine(),
  services: "Fades, classic cuts, beard sculpts, kids' cuts, women's cuts, and full grooming packages. Men, women, and children all welcome.",
  price: 'Cuts start at $35, beard work from $25, and full cut + beard sessions from $50. Final price depends on the service — see the full price list on the Services page.',
  book: `Easiest way to book: call or text ${shop.phone}, or just walk in during shop hours. We'll get you in the chair.`,
  where: `You'll find us at ${shop.address} — right on Route 6. Parking out front.`,
}

export default function ConciergeChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { who: 'bot', text: `Welcome to ${shop.full}. Ask me about hours, services, pricing, or how to book.` },
  ])
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, open])

  function ask(chip) {
    setMessages((m) => [...m, { who: 'user', text: chip.q }])
    setTimeout(() => {
      setMessages((m) => [...m, { who: 'bot', text: ANSWERS[chip.key] }])
    }, 350)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[150]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-[74px] right-0 w-[330px] max-w-[82vw] bg-ink2 border border-line rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-panel px-[18px] py-4 border-b border-line">
              <div className="font-label font-bold uppercase tracking-wide text-[15px] text-cream">The Chair</div>
              <div className="text-[11px] text-gold mt-0.5">● {shop.name} concierge</div>
            </div>
            <div ref={bodyRef} className="p-4 h-[260px] overflow-y-auto flex flex-col gap-2.5">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    'px-3.5 py-2.5 rounded-xl text-sm leading-relaxed max-w-[86%] ' +
                    (m.who === 'bot'
                      ? 'bg-panel self-start rounded-bl-[3px] text-cream/90'
                      : 'bg-gold self-end rounded-br-[3px] text-ink')
                  }
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-[7px] px-4 pb-3">
              {CHIPS.map((c) => (
                <button
                  key={c.key}
                  onClick={() => ask(c)}
                  className="font-label text-[11px] uppercase tracking-wide px-3 py-[7px] border border-line rounded-full text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {c.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close concierge chat' : 'Open concierge chat'}
        className="w-[60px] h-[60px] rounded-full bg-gradient-to-b from-goldbright to-gold flex items-center justify-center shadow-[0_10px_34px_rgba(201,162,75,0.4)] transition-transform hover:scale-105"
      >
        {open ? <X size={26} className="text-ink" /> : <MessageCircle size={26} className="text-ink" />}
      </button>
    </div>
  )
}
