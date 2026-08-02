/**
 * ============================================================
 *  網站內容設定檔 (Single Source of Truth)
 * ============================================================
 *  非工程人員只需修改此檔案，即可更換網站上的文字與圖片，
 *  不需要改動任何元件程式碼。
 *
 *  ▸ 換文字：直接修改下方字串。
 *  ▸ 換圖片：
 *     1. 把新圖片放到  public/images/  資料夾。
 *     2. 這裡的路徑一律以  "images/xxx.jpg"  格式引用
 *        （開頭不用加斜線，Vite 會自動接上部署路徑）。
 *     3. 最簡單的做法：用「同檔名」覆蓋 public/images 內的圖片，
 *        連這個檔案都不用改。
 * ============================================================
 */

/** 用 import.meta.env.BASE_URL 自動接上部署的 base 路徑（GitHub Pages / Azure 皆適用） */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export interface NavItem {
  label: string
  href: string
}

export interface Course {
  icon: string
  title: string
  description: string
}

export interface Teacher {
  name: string
  role: string
  bio: string
  photo: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
}

export interface Faq {
  question: string
  answer: string
}

export const siteConfig = {
  // ---------- 基本資訊 ----------
  brand: {
    name: '陽光安親班',
    slogan: '溫暖陪伴 · 快樂學習',
    logo: 'images/logo.svg',
  },

  // ---------- 導覽列 ----------
  nav: [
    { label: '關於我們', href: '#about' },
    { label: '課程服務', href: '#courses' },
    { label: '環境介紹', href: '#environment' },
    { label: '師資團隊', href: '#teachers' },
    { label: '家長評價', href: '#testimonials' },
    { label: '常見問題', href: '#faq' },
    { label: '聯絡我們', href: '#contact' },
  ] as NavItem[],

  // ---------- 首頁主視覺 ----------
  hero: {
    image: 'images/hero.jpg',
    title: '給孩子一個溫暖安全的第二個家',
    subtitle:
      '專業課後照顧、課業輔導與多元才藝課程，讓孩子在放學後也能快樂成長、安心學習。',
    primaryCta: { label: '預約參觀', href: '#contact' },
    secondaryCta: { label: '了解課程', href: '#courses' },
    highlights: [
      { value: '15+', label: '年教學經驗' },
      { value: '1:8', label: '師生比例' },
      { value: '500+', label: '畢業學童' },
    ],
  },

  // ---------- 關於我們 ----------
  about: {
    image: 'images/about.jpg',
    title: '關於陽光安親班',
    paragraphs: [
      '我們相信，每個孩子都是獨一無二的太陽。陽光安親班成立於 2010 年，秉持「愛與陪伴」的教育理念，提供孩子放學後最安心的照顧與學習環境。',
      '我們不只是照顧孩子的課業，更重視品格培養、生活自理與人際互動，讓孩子在充滿愛的環境中，建立自信、快樂成長。',
    ],
    features: [
      { icon: '🛡️', title: '安全至上', text: '門禁管理與接送制度，全程守護孩子安全。' },
      { icon: '📚', title: '課業輔導', text: '專業老師陪讀，紮實完成每日作業與複習。' },
      { icon: '🍱', title: '營養餐點', text: '每日新鮮營養午餐與點心，吃得健康又安心。' },
      { icon: '🎨', title: '多元才藝', text: '美術、音樂、桌遊等課程，培養多元興趣。' },
    ],
  },

  // ---------- 課程與服務 ----------
  courses: {
    title: '課程與服務',
    subtitle: '從課業到才藝，全方位照顧孩子的每一天',
    items: [
      {
        icon: '📖',
        title: '課後課業輔導',
        description: '一對一陪讀，協助完成作業、預習複習，養成良好讀書習慣。',
      },
      {
        icon: '🚌',
        title: '安全接送服務',
        description: '定點定時專車接送，家長上班無後顧之憂。',
      },
      {
        icon: '🖌️',
        title: '創意美術課',
        description: '啟發孩子的想像力與美感，培養藝術鑑賞能力。',
      },
      {
        icon: '🎹',
        title: '音樂律動課',
        description: '透過音樂與律動，培養節奏感與團隊合作。',
      },
      {
        icon: '🧩',
        title: '桌遊邏輯課',
        description: '在遊戲中訓練邏輯思考、專注力與人際互動。',
      },
      {
        icon: '🌱',
        title: '品格生活教育',
        description: '培養生活自理、禮貌與良好品格，建立正向價值觀。',
      },
    ] as Course[],
  },

  // ---------- 環境介紹（照片牆） ----------
  environment: {
    title: '溫馨的學習環境',
    subtitle: '明亮、安全、充滿活力的空間，讓孩子愛上這裡',
    images: [
      { src: 'images/env-1.jpg', alt: '寬敞明亮的教室' },
      { src: 'images/env-2.jpg', alt: '舒適的閱讀角落' },
      { src: 'images/env-3.jpg', alt: '多功能才藝教室' },
      { src: 'images/env-4.jpg', alt: '安全的戶外活動空間' },
      { src: 'images/env-5.jpg', alt: '整潔的用餐區' },
      { src: 'images/env-6.jpg', alt: '溫馨的休息區' },
    ] as GalleryImage[],
  },

  // ---------- 師資團隊 ----------
  teachers: {
    title: '專業師資團隊',
    subtitle: '用愛與專業，陪伴每個孩子成長',
    members: [
      {
        name: '王小美 老師',
        role: '園長 / 課業輔導',
        bio: '擁有 15 年幼教與安親經驗，專長班級經營與親師溝通。',
        photo: 'images/teacher-1.jpg',
      },
      {
        name: '李大華 老師',
        role: '數學 / 邏輯課',
        bio: '師範大學數學系畢業，善於引導孩子建立數理思維。',
        photo: 'images/teacher-2.jpg',
      },
      {
        name: '陳美玲 老師',
        role: '美術 / 才藝課',
        bio: '美術系背景，帶領孩子探索色彩與創意的世界。',
        photo: 'images/teacher-3.jpg',
      },
      {
        name: '張志明 老師',
        role: '音樂 / 律動課',
        bio: '音樂教育專業，讓孩子在旋律中快樂學習與成長。',
        photo: 'images/teacher-4.jpg',
      },
    ] as Teacher[],
  },

  // ---------- 家長評價 ----------
  testimonials: {
    title: '家長的真心話',
    subtitle: '謝謝家長們對我們的信任與肯定',
    items: [
      {
        name: '林媽媽',
        role: '二年級學童家長',
        content:
          '孩子每天都很期待來上課，回家還會主動分享學到的東西，老師們真的很用心！',
      },
      {
        name: '黃爸爸',
        role: '四年級學童家長',
        content:
          '接送很準時、聯絡也很即時，讓我們上班族家長非常放心，作業也都完成得很好。',
      },
      {
        name: '吳媽媽',
        role: '三年級學童家長',
        content:
          '不只顧課業，還很重視品格教育，孩子變得更懂事、更有禮貌，很感謝老師們。',
      },
    ] as Testimonial[],
  },

  // ---------- 常見問題 ----------
  faq: {
    title: '常見問題',
    subtitle: '家長最關心的問題，我們一次為您解答',
    items: [
      {
        question: '請問收托年齡與時間？',
        answer:
          '我們收托國小一至六年級學童，週一至週五放學後至晚上 7:00，寒暑假另有全日班。',
      },
      {
        question: '有提供接送服務嗎？',
        answer:
          '有的，我們提供鄰近國小的定點接送服務，詳細路線與時間歡迎來電洽詢。',
      },
      {
        question: '餐點如何供應？',
        answer:
          '每日提供新鮮營養的午餐（寒暑假）與下午點心，菜單每週更換，兼顧健康與美味。',
      },
      {
        question: '可以先參觀環境再決定嗎？',
        answer:
          '當然可以！歡迎透過電話或表單預約參觀，我們很樂意帶您認識我們的環境與師資。',
      },
    ] as Faq[],
  },

  // ---------- 聯絡資訊 ----------
  contact: {
    title: '聯絡我們',
    subtitle: '歡迎預約參觀，讓我們一起給孩子最好的照顧',
    phone: '02-1234-5678',
    lineId: '@sunshine-kids',
    email: 'hello@sunshine-kids.tw',
    address: '台北市中正區陽光路 168 號 1 樓',
    hours: '週一至週五 13:00 - 19:00｜週六日公休',
    // Google Map 嵌入網址：到 Google Maps 搜尋地址 → 分享 → 嵌入地圖 → 複製 src 網址貼到這裡
    mapEmbedUrl:
      'https://www.google.com/maps?q=台北市中正區&output=embed',
    socials: [
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'LINE', href: 'https://line.me' },
    ],
  },
}

export type SiteConfig = typeof siteConfig
