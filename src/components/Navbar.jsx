import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { nav, shop, bookNow } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-x-0 border-t-0 rounded-none' : 'border-b border-transparent'
      }`}
    >
      <div className="bg-gradient-to-b from-goldbright to-gold text-ink text-center py-[7px] px-4">
        <p className="font-label text-[10px] sm:text-[11px] uppercase tracking-widest">
          Demo site built by{' '}
          <a href="https://obsidianlabshq.io" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-ink/70">
            Obsidian Labs
          </a>
        </p>
      </div>

      <div className={`mx-auto max-w-6xl flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `font-label uppercase tracking-widest text-[13px] transition-colors ${
                  isActive ? 'text-gold' : 'text-cream/90 hover:text-gold'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a href={bookNow.href} className="font-label font-semibold uppercase tracking-wider text-[13px] bg-gradient-to-b from-goldbright to-gold text-ink px-5 py-2.5 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(201,162,75,.55)] transition-all duration-300">
            {bookNow.label}
          </a>
        </nav>

        <button className="md:hidden text-gold" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-ink2 border-t border-line"
          >
            <div className="flex flex-col px-6 py-4">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 font-label uppercase tracking-widest text-sm border-b border-line/60 ${
                      isActive ? 'text-gold' : 'text-cream'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a href={bookNow.href} onClick={() => setOpen(false)} className="mt-4 btn-gold justify-center">
                <Phone size={16} /> {bookNow.label}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
