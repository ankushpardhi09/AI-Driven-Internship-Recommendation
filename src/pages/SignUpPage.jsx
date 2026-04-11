import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

export function SignUpPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 md:pb-20 md:pt-20">
      <section className="grid items-start gap-8 lg:grid-cols-[1fr_420px]">
        <PageHero
          eyebrow="Sign Up"
          title="Create your account"
          description="Join the platform to get matched with internships that fit your skills and goals."
        />
        <form className="glass grid gap-4 rounded-3xl p-6 shadow-xl shadow-slate-900/5">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Full name
            <input
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-slate-800 outline-none ring-blue-300 transition focus:ring"
              type="text"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-slate-800 outline-none ring-blue-300 transition focus:ring"
              type="email"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Password
            <input
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-slate-800 outline-none ring-blue-300 transition focus:ring"
              type="password"
              placeholder="Create a password"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-bold text-white transition hover:-translate-y-0.5"
          >
            Sign Up
          </button>
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link className="font-bold text-blue-700" to="/login">
              Login
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}
