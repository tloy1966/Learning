import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  const { brand, contact, nav } = siteConfig
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="section-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* 品牌 */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-black text-white">{brand.name}</h3>
          <p className="mt-2 text-sm text-slate-400">{brand.slogan}</p>
          <p className="mt-4 text-sm text-slate-400">{contact.address}</p>
          <p className="mt-1 text-sm text-slate-400">{contact.hours}</p>
        </div>

        {/* 快速連結 */}
        <div>
          <h4 className="font-bold text-white">快速連結</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.slice(0, 4).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-slate-400 transition hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 聯絡 & 社群 */}
        <div>
          <h4 className="font-bold text-white">聯絡我們</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${contact.phone}`} className="text-slate-400 transition hover:text-white">
                📞 {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="text-slate-400 transition hover:text-white">
                ✉️ {contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-200 transition hover:bg-brand-500 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-5 text-center text-xs text-slate-500">
        © {year} {brand.name}．All rights reserved.
      </div>
    </footer>
  )
}
