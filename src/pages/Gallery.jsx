import { screenshotFiles } from '../data'
import { GalleryLightbox } from '../components/GalleryLightbox'

export default function Gallery() {
  return (
    <main className="relative z-10">
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Gallery</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            See Pulse Check in action
          </h1>
          <p className="text-slate-300">
            Real screens from the desktop app: dashboards, check-ins, and workflows your team will use every day.
          </p>
        </div>
        <GalleryLightbox files={screenshotFiles} />
      </section>
    </main>
  )
}
