import { Link } from 'react-router-dom'
import { hero } from '../api/homepageContent'

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-20 pt-16 md:grid-cols-2 md:pt-24" id="home">
      <div className="animate-fade-up">
        <span className="chip">{hero.eyebrow}</span>
        <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] text-slate-900 md:text-7xl">{hero.title}</h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600">{hero.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white shadow-glow transition hover:-translate-y-0.5"
            id="signup"
            to="/signup"
          >
            {hero.primaryAction}
          </Link>
          <Link
            className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            to="/features"
          >
            {hero.secondaryAction}
          </Link>
        </div>
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {hero.valuePoints.map((point) => (
            <div key={point} className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700">
              {point}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Trust indicators">
          {hero.trustMarkers.map((marker) => (
            <span key={marker} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">
              {marker}
            </span>
          ))}
        </div>
      </div>

      <div className="relative animate-float">
        <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute -right-8 bottom-4 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="glass relative z-10 rounded-3xl border-white/30 bg-gradient-to-br from-slate-900 to-blue-700 p-8 text-white shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Recommended match</p>
          <h2 className="mt-2 text-2xl font-extrabold">{hero.matchTitle}</h2>
          <p className="mt-2 text-slate-100/90">{hero.matchDescription}</p>
          <div className="mt-6 grid gap-3">
            {hero.matchMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                <span className="text-sm font-semibold text-slate-100">{metric.label}</span>
                <strong className="text-base font-extrabold text-cyan-200">{metric.value}</strong>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
            Verified recommendations • Transparent scoring • Student-first privacy
          </p>
          <svg className="mt-6 w-full" viewBox="0 0 320 64" fill="none" aria-hidden="true">
            <path d="M0 44C42 26 54 10 98 21C136 31 147 59 193 53C236 47 245 20 320 10" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="320" y2="0">
                <stop stopColor="#67e8f9" />
                <stop offset="1" stopColor="#f0abfc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
