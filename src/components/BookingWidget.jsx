import { useState } from 'react'
import { MessageSquareText, Phone } from 'lucide-react'
import { shop, services, hours } from '../data/site.js'

// Lightweight "quick book" widget — no backend, no fake real-time
// availability. Builds a pre-filled SMS to the shop's real number so
// Vinny gets the request directly and confirms the slot himself.
const isIOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

export default function BookingWidget() {
  const [name, setName] = useState('')
  const [service, setService] = useState(services[0]?.name || '')
  const [day, setDay] = useState(hours[0]?.day || '')
  const [time, setTime] = useState('')

  const message = `Hi Vinny! I'd like to book a ${service}${day ? ` on ${day}` : ''}${
    time ? ` around ${time}` : ''
  }.${name ? ` — ${name}` : ''}`

  const digits = shop.phone.replace(/[^\d+]/g, '')
  const smsHref = `sms:${digits}${isIOS ? '&' : '?'}body=${encodeURIComponent(message)}`

  return (
    <div className="glass rounded-md p-6 sm:p-10 max-w-xl mx-auto">
      <div className="eyebrow mb-1">Quick Book</div>
      <h3 className="font-display uppercase text-2xl sm:text-3xl text-cream mb-7">
        Book Your Appointment
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block font-label text-[11px] uppercase tracking-wide text-muted mb-1.5">
            Your Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="John Smith"
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block font-label text-[11px] uppercase tracking-wide text-muted mb-1.5">
            Service
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
          >
            {services.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-label text-[11px] uppercase tracking-wide text-muted mb-1.5">
            Preferred Day
          </label>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
          >
            {hours.map((h) => (
              <option key={h.day} value={h.day}>
                {h.day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-label text-[11px] uppercase tracking-wide text-muted mb-1.5">
            Preferred Time
          </label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="text"
            placeholder="e.g. 2:00 PM"
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-4">
        <a href={smsHref} className="btn-gold hover:-translate-y-0.5">
          <MessageSquareText size={18} /> Text To Book
        </a>
        <a href={shop.phoneHref} className="btn-ghost">
          <Phone size={18} /> Call Instead
        </a>
      </div>
      <p className="mt-4 text-xs text-muted/70 leading-relaxed">
        Opens your messaging app with the details filled in — Vinny confirms your slot
        personally. No account needed.
      </p>
    </div>
  )
}
