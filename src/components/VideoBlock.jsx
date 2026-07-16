import { Play } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { video } from '../data/site.js'

export default function VideoBlock() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <div className="relative aspect-video bg-ink border border-line rounded-sm overflow-hidden group">
            {video.isPlaceholder ? (
              // Placeholder poster. Replace this whole block with a <video> or an
              // <iframe> (YouTube/Vimeo) when a real clip is available.
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: 'radial-gradient(circle at center, #221d19 0%, #141110 75%)' }}
              >
                <button
                  aria-label="Play video"
                  className="w-20 h-20 rounded-full bg-gradient-to-b from-goldbright to-gold text-ink flex items-center justify-center shadow-[0_10px_40px_rgba(201,162,75,.4)] group-hover:scale-105 transition-transform"
                >
                  <Play size={30} className="ml-1" fill="currentColor" />
                </button>
                <p className="mt-6 font-label uppercase tracking-widest text-cream text-sm">{video.caption}</p>
                <p className="mt-2 text-[11px] text-muted/60 italic">{video.note}</p>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
