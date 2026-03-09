import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function NavLink({ to, children, onClick }) {
  const location = useLocation()
  const isActive = location.pathname === to
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`transition ${isActive ? 'text-aurora' : 'text-slate-300 hover:text-white'}`}
    >
      {children}
    </Link>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-aurora/20 blur-[120px] motion-safe:animate-float" />
      <div className="pointer-events-none absolute right-[-10%] top-[22rem] h-[30rem] w-[30rem] rounded-full bg-nova/20 blur-[120px] motion-safe:animate-float" />

      <header className="relative z-10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aurora/20 text-aurora">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M5 12h14M7 8h10M7 16h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            Pulse Check
          </Link>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/#download"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get the app
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        <div
          className={`absolute left-0 right-0 top-full z-20 border-b border-white/10 bg-midnight/95 backdrop-blur-lg transition-all duration-200 md:hidden ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
          aria-hidden={!menuOpen}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <Link
              to="/#download"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-900"
            >
              Get the app
            </Link>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© 2026 Pulse Check. Built for modern fitness businesses.</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <a href="https://wa.me/923497898993" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                +923497898993
              </a>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <a href="mailto:fazliazim181@gmail.com" className="transition hover:text-white">
                fazliazim181@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/#features" className="transition hover:text-white">Features</Link>
            <Link to="/gallery" className="transition hover:text-white">Gallery</Link>
            <Link to="/about" className="transition hover:text-white">About</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
            <Link to="/#download" className="transition hover:text-white">Download</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
