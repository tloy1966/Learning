import { useState } from 'react'
import { siteConfig } from '../data/siteConfig'

export default function Faq() {
  const { faq } = siteConfig
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="section-container max-w-3xl">
        <div className="text-center">
          <h2 className="section-title">{faq.title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">{faq.subtitle}</p>
        </div>

        <div className="mt-10 space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-800">{item.question}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-brand-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
