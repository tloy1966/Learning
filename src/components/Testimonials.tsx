import { siteConfig } from '../data/siteConfig'

export default function Testimonials() {
  const { testimonials } = siteConfig

  return (
    <section id="testimonials" className="py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{testimonials.title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-brand-50 p-7 shadow-sm"
            >
              <div className="text-4xl text-brand-300" aria-hidden>
                &ldquo;
              </div>
              <blockquote className="-mt-3 flex-1 text-base leading-relaxed text-slate-700">
                {t.content}
              </blockquote>
              <figcaption className="mt-5">
                <div className="font-bold text-slate-800">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
