import { useState } from 'react'
import { asset } from '../data/siteConfig'

interface SmartImageProps {
  /** 圖片路徑，格式如 "images/xxx.jpg"（相對 public 資料夾） */
  src: string
  alt: string
  className?: string
  /** 圖片還沒放入時，佔位框顯示的提示文字 */
  placeholder?: string
}

/**
 * 智慧圖片元件：
 *  - 自動接上部署 base 路徑（GitHub Pages / Azure 皆適用）。
 *  - 圖片不存在時，顯示友善的佔位提示，不會出現破圖。
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  placeholder = '請放入圖片',
}: SmartImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-brand-100 text-center text-sm font-medium text-brand-600 ${className}`}
      >
        <span className="px-3">{placeholder}</span>
      </div>
    )
  }

  return (
    <img
      src={asset(src)}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setError(true)}
    />
  )
}
