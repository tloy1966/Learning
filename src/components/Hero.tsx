import { siteConfig } from '../data/siteConfig'
import SmartImage from './SmartImage'

export default function Hero() {
  const { hero } = siteConfig

  return (
    <section id="top" className="relative overflow-hidden bg-brand-50">
      <div className="section-container grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        {/* 文字 */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-black leading-tight text-slate-800 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 lg:mx-0">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>

          {/* 數據亮點 */}
          <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
            {hero.highlights.map((h) => (
              <div key={h.label} className="text-center lg:text-left">
                <dt className="text-3xl font-black text-brand-500">{h.value}</dt>
                <dd className="mt-1 text-sm text-slate-500">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 主視覺圖片 */}
        <div className="relative">
          <SmartImage
            src={hero.image}
            alt="孩子們快樂學習"
            placeholder="請放入 hero 主視覺 (建議 1200×900)"
            className="aspect-[4/3] w-full overflow-hidden rounded-3xl object-cover shadow-2xl"
          />
          {/* 裝飾光暈 */}
          <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-sky-400/30 blur-2xl" />
          <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-brand-300/40 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
