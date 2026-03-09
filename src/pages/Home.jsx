import { Link } from 'react-router-dom'
import { screenshotFiles, highlights, modules, metrics, testimonials, HOME_GALLERY_COUNT } from '../data'
import { GalleryLightbox } from '../components/GalleryLightbox'

const homeGalleryFiles = screenshotFiles.slice(0, HOME_GALLERY_COUNT)

export default function Home() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6 motion-safe:animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            Gym management desktop suite
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Run your gym with{' '}
            <span className="text-gradient">precision, speed, and clarity</span>
          </h1>
          <p className="text-lg text-slate-300">
            Pulse Check is a premium desktop application built to help fitness businesses
            streamline day-to-day operations, delight members, and grow revenue without chaos.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}downloads/Pulse-Check-Setup.exe`}
              download
              className="rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Download for Windows
            </a>
            <Link
              to="/#features"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Explore features
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-aurora" />
              Offline-first performance
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-nova" />
              Built-in reports
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-ember" />
              Secure staff permissions
            </div>
          </div>
        </div>
        <div className="flex-1 motion-safe:animate-fade-in-up">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -top-6 right-6 z-10 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur-sm">
              Pulse Check desktop app
            </div>
            <img
              src={`${import.meta.env.BASE_URL}${encodeURIComponent(screenshotFiles[0])}`}
              alt="Pulse Check app dashboard"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ring-2 ring-white/5"
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-grid relative">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Features</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Everything your team needs, beautifully organized
            </h2>
            <p className="text-slate-300">
              Built for managers and staff alike, Pulse Check keeps daily tasks simple, accurate, and fast.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-panel flex flex-col gap-4 rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora/15 text-aurora">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-slate-950/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Gallery</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              See Pulse Check in action
            </h2>
            <p className="text-slate-300">
              Real screens from the desktop app: dashboards, check-ins, and workflows your team will use every day.
            </p>
          </div>
          <GalleryLightbox files={homeGalleryFiles} />
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-aurora/50 bg-aurora/10 px-6 py-3 text-sm font-semibold text-aurora transition hover:bg-aurora/20"
            >
              View more
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Modules</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Every department covered with precision tools
            </h2>
            <p className="text-slate-300">
              Customize your flow with modules that adapt to your business. Every screen is
              optimized for speed, clarity, and accuracy.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {modules.map((module) => (
                <div key={module.title} className="rounded-2xl border border-white/10 p-4">
                  <h3 className="text-sm font-semibold text-white">{module.title}</h3>
                  <p className="mt-2 text-xs text-slate-400">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel relative rounded-3xl p-6">
            <div className="absolute -left-4 top-8 hidden h-12 w-12 items-center justify-center rounded-2xl bg-aurora/20 text-aurora lg:flex">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">Workflow clarity</h3>
            <p className="mt-3 text-sm text-slate-300">
              Move from enrollment to billing in seconds. Built-in automation helps your team
              stay aligned, while notifications keep members informed.
            </p>
            <div className="mt-6 space-y-4">
              {['Smart member onboarding', 'Automated payment receipts', 'Customizable staff access', 'Data export for auditors'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-aurora" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="bg-slate-950/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Insights</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Turn daily activity into growth decisions
              </h2>
              <p className="text-slate-300">
                Advanced analytics show revenue trends, attendance patterns, and membership health so you can act quickly.
              </p>
              <div className="space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center gap-4">
                    <span className="text-3xl font-semibold text-white">{metric.value}</span>
                    <p className="text-sm text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="glass-panel rounded-3xl p-5">
                  <p className="text-sm text-slate-200">"{testimonial.quote}"</p>
                  <div className="mt-4 text-xs text-slate-400">
                    <span className="block font-semibold text-white">{testimonial.name}</span>
                    {testimonial.role}
                  </div>
                </div>
              ))}
              <div className="rounded-3xl border border-white/10 p-5">
                <p className="text-sm text-slate-300">Compliance-ready exports and audit logs keep your business protected.</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">Security built-in</p>
              </div>
              <div className="rounded-3xl border border-white/10 p-5">
                <p className="text-sm text-slate-300">Track staff performance and member retention in one view.</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">Operational clarity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="glass-panel grid gap-10 rounded-3xl p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Download</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Give your team the desktop app they deserve
            </h2>
            <p className="text-slate-300">
              Install Pulse Check on your front desk computers to unlock faster workflows and a better member experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`${import.meta.env.BASE_URL}downloads/Pulse-Check-Setup.exe`}
                download
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Download setup file
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Before you install</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Windows 10 or later recommended.</li>
              <li>Internet required for license activation.</li>
              <li>Place the installer in <code className="text-xs">public/downloads/</code>.</li>
            </ul>
            <p className="text-xs text-slate-500">
              Manual upload: replace Pulse-Check-Setup.exe with your latest installer.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
