import { siteConfig } from '../data/siteConfig'
import SmartImage from './SmartImage'

export default function Teachers() {
  const { teachers } = siteConfig

  return (
    <section id="teachers" className="bg-slate-50 py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{teachers.title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">{teachers.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.members.map((t) => (
            <div key={t.name} className="text-center">
              <SmartImage
                src={t.photo}
                alt={t.name}
                placeholder="師資照片"
                className="mx-auto aspect-square w-40 overflow-hidden rounded-full object-cover shadow-md ring-4 ring-white"
              />
              <h3 className="mt-5 text-lg font-bold text-slate-800">{t.name}</h3>
              <p className="text-sm font-medium text-brand-600">{t.role}</p>
              <p className="mt-2 px-2 text-sm leading-relaxed text-slate-500">
                {t.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
