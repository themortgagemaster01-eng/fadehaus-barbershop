import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { video } from '../data/site.js'

export default function VideoBlock() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

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
            ) : (
              <>
                <video
                  ref={videoRef}
                  src={video.src}
                  poster={video.poster}
                  className="absolute inset-0 h-full w-full object-cover"
                  controls={playing}
                  playsInline
                  preload="metadata"
                  onEnded={() => setPlaying(false)}
                />
                {!playing && (
                  <button
                    onClick={handlePlay}
                    aria-label="Play video"
                    className="absolute inset-0 flex flex-col items-center justify-center bg-ink/30 hover:bg-ink/20 transition-colors"
                  >
                    <span className="w-20 h-20 rounded-full bg-gradient-to-b from-goldbright to-gold text-ink flex items-center justify-center shadow-[0_10px_40px_rgba(201,162,75,.4)] group-hover:scale-105 transition-transform">
                      <Play size={30} className="ml-1" fill="currentColor" />
                    </span>
                    <p className="mt-6 font-label uppercase tracking-widest text-cream text-sm">{video.caption}</p>
                  </button>
                )}
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
