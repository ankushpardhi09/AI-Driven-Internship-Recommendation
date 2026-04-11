import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'

const benefits = [
  'AI-powered matching based on role fit, skill depth, and career intent',
  'Personalized recommendations that adapt to profile updates in real time',
  'Faster shortlisting with transparent fit-score signals',
  'Actionable career guidance with measurable next steps',
  'Better placement confidence for students and career teams',
]

const aiFeatures = [
  {
    title: 'Resume Intelligence',
    points: [
      'Extracts skills, experiences, and projects',
      'Identifies skill gaps',
      'Suggests resume improvements',
    ],
  },
  {
    title: 'Smart Matching',
    points: [
      'Compares profile vs internship requirements',
      'Calculates compatibility score (0-100%)',
      'Ranks recommendations by fit',
    ],
  },
  {
    title: 'Personalized Insights',
    points: [
      'Career trajectory suggestions',
      'Skill development roadmap',
      'Market demand analysis',
    ],
  },
  {
    title: 'Interview Coaching',
    points: [
      'Interview question prep',
      'Company research summaries',
      'Answer suggestions',
    ],
  },
  {
    title: 'Real-Time Updates',
    points: [
      'New matching internships',
      'Trending skills in your field',
      'Employer updates',
    ],
  },
  {
    title: 'Career Analytics',
    points: [
      'Placement probability',
      'Average salary for your profile',
      'Growth trajectory',
    ],
  },
]

const steps = [
  'Upload Resume',
  'AI Analyzes',
  'Extracts Skills',
  'Matches Internships',
  'Ranks by Fit',
  'Delivers Recommendations',
]

const useCases = [
  {
    title: 'Placement team optimization',
    detail: 'Automated ranking and recommendation flows increased match rate by 40% in pilot cohorts.',
  },
  {
    title: 'Student application acceleration',
    detail: 'Students with AI-guided recommendations were placed 3x faster versus manual search.',
  },
  {
    title: 'Employer quality screening',
    detail: 'Shortlists arrived better aligned to role requirements, reducing first-round drop-off.',
  },
]

const testimonials = [
  {
    name: 'Riya N.',
    quote: 'AI Copilot found my perfect internship and showed me exactly what skills to strengthen.',
  },
  {
    name: 'Vikram S.',
    quote: 'The recommendations felt personalized and saved me days of searching on multiple portals.',
  },
  {
    name: 'Aarav M.',
    quote: 'Interview prep suggestions were spot on and helped me convert faster.',
  },
  {
    name: 'Nisha P.',
    quote: 'I loved the fit score clarity, it made my application strategy much smarter.',
  },
]

export function AICopilotPage() {
  return (
    <main className="pb-10">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-10 pt-14 md:grid-cols-2 md:pt-20">
        <div className="animate-fade-up">
          <span className="chip">AI Copilot</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Meet Your Personal AI Career Advisor
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Get intelligent guidance for internships, skill growth, and career choices with one AI co-pilot.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/signup"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Try AI Copilot Now
            </Link>
            <Link
              to="/login"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="glass relative rounded-3xl p-7 shadow-xl shadow-slate-900/10">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-400/35 blur-2xl" />
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v4m0 10v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M3 12h4m10 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">What is AI Copilot?</h2>
          <p className="mt-2 text-slate-600">
            AI Copilot is your intelligent career assistant that analyzes profile context, identifies opportunities,
            and guides every internship decision with data-backed recommendations.
          </p>
          <ul className="mt-4 grid gap-2">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <SectionHeading
          eyebrow="Key features"
          title="AI Copilot features that improve internship outcomes"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 transition group-hover:rotate-6" />
              <h3 className="text-base font-bold uppercase tracking-[0.08em] text-slate-900">{feature.title}</h3>
              <ul className="mt-3 space-y-2">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <SectionHeading eyebrow="How it works" title="From resume upload to ranked recommendations" />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, index) => (
            <article key={step} className="rounded-3xl border border-slate-200 bg-white/90 p-4 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-800">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-12 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <SectionHeading eyebrow="Interactive demo" title="Preview the AI chat experience" />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Demo chat</p>
            <div className="mt-3 space-y-3">
              <div className="rounded-xl bg-white p-3 text-sm text-slate-600 shadow-sm">
                Ask AI questions like: “What skills do I need for a product internship?”
              </div>
              <div className="rounded-xl bg-cyan-50 p-3 text-sm text-slate-700 shadow-sm">
                Try: “Which internship roles fit my resume best and why?”
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <SectionHeading eyebrow="Use cases" title="Real impact from real adoption" />
          <div className="grid gap-3">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-blue-700">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <SectionHeading eyebrow="Testimonials" title="What students say about AI Copilot" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-sm text-slate-700">“{item.quote}”</p>
              <div className="mt-4 text-sm font-bold text-slate-900">{item.name}</div>
              <div className="mt-1 text-amber-500">★★★★★</div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-6 py-10 text-white shadow-2xl md:flex md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">CTA</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">Ready to unlock AI-guided internship success?</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <Link to="/signup" className="rounded-full bg-white px-5 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5">
              Try AI Copilot Now
            </Link>
            <Link
              to="/resources"
              className="rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
