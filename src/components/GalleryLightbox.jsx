import { useState, useEffect } from 'react'

const baseUrl = () => `${import.meta.env.BASE_URL}`

export function GalleryLightbox({ files, columns = 'sm:grid-cols-2 lg:grid-cols-3', showCounter = true }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const open = (index) => setLightboxIndex(index)
  const close = () => setLightboxIndex(null)
  const goPrev = () => setLightboxIndex((i) => (i <= 0 ? files.length - 1 : i - 1))
  const goNext = () => setLightboxIndex((i) => (i >= files.length - 1 ? 0 : i + 1))

  useEffect(() => {
    if (lightboxIndex == null) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i <= 0 ? files.length - 1 : i - 1))
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i >= files.length - 1 ? 0 : i + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, files.length])

  return (
    <>
      <div className={`grid gap-6 ${columns}`}>
        {files.map((file, index) => (
          <button
            key={file}
            type="button"
            onClick={() => open(index)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-xl transition hover:-translate-y-1 hover:border-aurora/30 hover:shadow-aurora/10 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-aurora/50"
          >
            <img
              src={`${baseUrl()}${encodeURIComponent(file)}`}
              alt="Pulse Check app screen"
              className="aspect-video w-full object-cover object-top transition group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 animate-modal-backdrop-in bg-black/90 backdrop-blur-sm"
            onClick={close}
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close() }}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-aurora"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-aurora md:left-4"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="relative z-10 max-h-[85vh] max-w-4xl">
            <img
              key={lightboxIndex}
              src={`${baseUrl()}${encodeURIComponent(files[lightboxIndex])}`}
              alt={`Pulse Check app screen ${lightboxIndex + 1} of ${files.length}`}
              className="max-h-[85vh] w-auto animate-modal-content-in rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {showCounter && (
              <p className="mt-2 text-center text-sm text-white/80">
                {lightboxIndex + 1} / {files.length}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-aurora md:right-4"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
