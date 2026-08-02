import { siteConfig } from '../data/siteConfig'
import SmartImage from './SmartImage'

export default function Environment() {
  const { environment } = siteConfig

  return (
    <section id="environment" className="py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{environment.title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            {environment.subtitle}
          </p>
        </div>

        {/* 照片牆 */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {environment.images.map((img, i) => (
            <SmartImage
              key={i}
              src={img.src}
              alt={img.alt}
              placeholder={`環境照片 ${i + 1}`}
              className="aspect-[4/3] w-full overflow-hidden rounded-2xl object-cover shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
