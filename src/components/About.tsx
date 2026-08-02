import { siteConfig } from '../data/siteConfig'
import SmartImage from './SmartImage'

export default function About() {
  const { about } = siteConfig

  return (
    <section id="about" className="py-20">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        {/* 圖片 */}
        <SmartImage
          src={about.image}
          alt="陽光安親班環境"
          placeholder="請放入關於我們圖片 (建議 800×600)"
          className="aspect-[4/3] w-full overflow-hidden rounded-3xl object-cover shadow-xl"
        />

        {/* 文字 */}
        <div>
          <h2 className="section-title">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-slate-600">
              {p}
            </p>
          ))}

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {about.features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-800">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
