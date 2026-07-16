import { Link } from 'react-router-dom'

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-3">
      <span className="font-display text-2xl leading-none text-cream border-2 border-gold rounded px-2.5 py-1 tracking-tighter">
        FH
      </span>
      <span className="font-label font-bold tracking-[0.22em] text-[15px] leading-none">
        FADEHAUS
        <span className="block text-[8px] tracking-[0.35em] text-gold font-medium mt-1">
          — BARBER SHOP —
        </span>
      </span>
    </Link>
  )
}
