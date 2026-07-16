import { useState } from 'react'
import { Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { shop } from '../data/site.js'

// Static-host friendly: composes a mailto link. No backend required.
// To use a real form service later, swap handleSubmit for a fetch() to Formspree/Getform.
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Booking enquiry — ${form.name || 'Website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    )
    window.location.href = `mailto:${shop.email}?subject=${subject}&body=${body}`
  }

  const field = 'w-full bg-ink border border-line rounded-sm px-4 py-3 text-cream placeholder:text-muted/60 focus:border-gold focus:outline-none transition-colors'

  return (
    <Reveal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="eyebrow block mb-2">Name</label>
          <input className={field} value={form.name} onChange={set('name')} placeholder="Your name" required />
        </div>
        <div>
          <label className="eyebrow block mb-2">Phone</label>
          <input className={field} value={form.phone} onChange={set('phone')} placeholder="(000) 000-0000" type="tel" />
        </div>
        <div>
          <label className="eyebrow block mb-2">Message</label>
          <textarea className={field} rows={4} value={form.message} onChange={set('message')} placeholder="What are you looking for, and when?" required />
        </div>
        <button type="submit" className="btn-gold hover:-translate-y-0.5">
          Send Enquiry <Send size={16} />
        </button>
        <p className="text-xs text-muted/60">
          Opens your email app. Prefer to talk? Call or text{' '}
          <a href={shop.phoneHref} className="text-gold hover:underline">{shop.phone}</a>.
        </p>
      </form>
    </Reveal>
  )
}
