import { useState, type FormEvent } from 'react'
import { siteConfig } from '../data/siteConfig'
import { submitContactForm } from '../services/contactService'

export default function Contact() {
  const { contact } = siteConfig
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    try {
      const result = await submitContactForm({
        name: String(data.get('name') ?? ''),
        phone: String(data.get('phone') ?? ''),
        childGrade: String(data.get('childGrade') ?? ''),
        message: String(data.get('message') ?? ''),
      })
      setStatus(result.ok ? 'done' : 'error')
      setFeedback(result.message)
      if (result.ok) form.reset()
    } catch {
      setStatus('error')
      setFeedback('送出時發生問題，請直接來電聯繫我們。')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">{contact.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* 左：聯絡資訊 + 地圖 */}
          <div className="space-y-6">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href={`tel:${contact.phone}`} className="font-medium hover:text-brand-600">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <span className="font-medium">LINE：{contact.lineId}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href={`mailto:${contact.email}`} className="font-medium hover:text-brand-600">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span className="font-medium">{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🕐</span>
                <span className="font-medium">{contact.hours}</span>
              </li>
            </ul>

            <div className="overflow-hidden rounded-2xl shadow-md">
              <iframe
                title="安親班位置地圖"
                src={contact.mapEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* 右：聯絡表單 */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl bg-slate-50 p-8 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                家長姓名 *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="請輸入您的姓名"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                聯絡電話 *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="請輸入聯絡電話"
              />
            </div>

            <div>
              <label htmlFor="childGrade" className="mb-1 block text-sm font-medium text-slate-700">
                孩子年級
              </label>
              <input
                id="childGrade"
                name="childGrade"
                type="text"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="例如：小學二年級"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                想諮詢的內容
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="想預約參觀，或有任何問題都歡迎留言。"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === 'sending' ? '送出中…' : '送出預約'}
            </button>

            {feedback && (
              <p
                className={`text-center text-sm ${
                  status === 'error' ? 'text-red-500' : 'text-green-600'
                }`}
                role="status"
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
