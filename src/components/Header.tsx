import { useState } from 'react'
import { siteConfig, asset } from '../data/siteConfig'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { brand, nav } = siteConfig

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <img
            src={asset(brand.logo)}
            alt={brand.name}
            className="h-9 w-9"
            onError={(e) => {
              // 若尚未放置 logo 圖，隱藏 img 避免破圖
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
          <span className="text-lg font-black text-brand-600">{brand.name}</span>
        </a>

        {/* 桌機導覽 */}
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden btn-primary !px-5 !py-2 !text-sm lg:inline-flex">
          預約參觀
        </a>

        {/* 手機漢堡按鈕 */}
        <button
          type="button"
          className="lg:hidden"
          aria-label="開啟選單"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7 text-slate-700"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'}
            />
          </svg>
        </button>
      </nav>

      {/* 手機下拉選單 */}
      {open && (
        <ul className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
