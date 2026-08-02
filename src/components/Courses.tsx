import { siteConfig } from '../data/siteConfig'

export default function Courses() {
  const { courses } = siteConfig

  return (
    <section id="courses" className="bg-slate-50 py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{courses.title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">{courses.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.items.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-3xl transition group-hover:bg-brand-500">
                {c.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-800">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
