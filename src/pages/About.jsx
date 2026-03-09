export default function About() {
  return (
    <main className="relative z-10">
      <section className="mx-auto w-full max-w-4xl px-6 py-20">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About us</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Built for fitness businesses that aim higher
          </h1>
        </div>

        <div className="space-y-16">
          <div className="glass-panel rounded-3xl p-8 md:p-10">
            <h2 className="text-xl font-semibold text-white md:text-2xl">Who we are</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Pulse Check is a professional gym management platform designed by people who understand fitness operations. We combine modern technology with real-world workflows so gym owners, managers, and front-desk staff can focus on members—not spreadsheets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora/20 text-aurora">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Our mission</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                To empower fitness businesses with software that is reliable, fast, and easy to use—so they can deliver a better experience to members and grow with confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nova/20 text-nova">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Our vision</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                A world where every gym—from single-location clubs to multi-site operators—has access to professional-grade tools that simplify operations and drive growth.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-10">
            <h2 className="text-xl font-semibold text-white md:text-2xl">What we stand for</h2>
            <ul className="mt-6 space-y-4">
              {[
                { title: 'Professionalism', desc: 'We build software that meets the demands of real gym environments and scales with your business.' },
                { title: 'Simplicity', desc: 'Complex operations, simple interface. Your team should spend time with members, not learning systems.' },
                { title: 'Reliability', desc: 'Offline-first design and robust data handling so your operations never skip a beat.' },
                { title: 'Support', desc: 'We stand behind our product with clear documentation and responsive support when you need it.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-aurora" />
                  <div>
                    <span className="font-medium text-white">{item.title}</span>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
