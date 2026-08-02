/**
 * ============================================================
 *  聯絡表單 Service 層 (擴充接口)
 * ============================================================
 *  V1：因為是純靜態網站（GitHub Pages），沒有後端可以收表單，
 *      這裡先用「開啟使用者信箱 (mailto)」的方式送出，
 *      同時保留 async / Promise 介面。
 *
 *  未來擴充到 Azure：
 *      只要把 submitContactForm 內部實作換成呼叫後端 API，
 *      例如 Azure Functions / App Service，
 *      前端元件完全不需要改動。範例（未來）：
 *
 *      const res = await fetch(import.meta.env.VITE_API_URL + '/contact', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(payload),
 *      })
 *      if (!res.ok) throw new Error('送出失敗')
 *      return { ok: true }
 * ============================================================
 */

import { siteConfig } from '../data/siteConfig'

export interface ContactPayload {
  name: string
  phone: string
  childGrade: string
  message: string
}

export interface ContactResult {
  ok: boolean
  message: string
}

/**
 * 送出聯絡表單。
 * V1 實作：組合成 mailto 連結，開啟使用者的郵件軟體。
 */
export async function submitContactForm(
  payload: ContactPayload,
): Promise<ContactResult> {
  const { name, phone, childGrade, message } = payload

  const subject = `【網站諮詢】來自 ${name} 的參觀預約`
  const body = [
    `家長姓名：${name}`,
    `聯絡電話：${phone}`,
    `孩子年級：${childGrade}`,
    '',
    '諮詢內容：',
    message,
  ].join('\n')

  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  // 開啟使用者的郵件軟體
  window.location.href = mailto

  return {
    ok: true,
    message: '已為您開啟郵件軟體，請確認後寄出，我們會盡快與您聯繫！',
  }
}
