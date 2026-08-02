# 陽光安親班官方網站 (V1)

一個溫馨、現代化、響應式 (RWD) 的安親班介紹網站。
使用 **React + Vite + TypeScript + Tailwind CSS** 建置，V1 為純靜態網站、無需後台，
並保留「輕鬆換圖換文字」與「日後擴充至 Azure 後端」的彈性。

---

## ✨ 功能特色

- 📱 響應式設計，手機 / 平板 / 桌機都好看
- 🖼️ 無後台也能換圖換字：所有內容集中在一個設定檔
- 🧩 模組化區塊：Hero、關於、課程、環境、師資、評價、FAQ、聯絡
- 📮 聯絡表單（V1 以 mailto 送出，已預留 Azure 後端接口）
- 🚀 一鍵自動部署到 GitHub Pages

---

## 🚀 本機開發

需先安裝 [Node.js](https://nodejs.org/)（建議 18 以上）。

```bash
# 1. 安裝套件
npm install

# 2. 啟動開發伺服器（會顯示本機預覽網址，通常是 http://localhost:5173）
npm run dev

# 3. 打包正式版
npm run build

# 4. 預覽打包後的結果
npm run preview
```

---

## 🖼️ 如何更換圖片（不用寫程式）

1. 把圖片放到 [`public/images/`](public/images/) 資料夾。
2. 使用對應的檔名（詳見 [public/images/README.md](public/images/README.md)）：

   | 檔名 | 用途 | 建議尺寸 |
   | --- | --- | --- |
   | `hero.jpg` | 首頁主視覺 | 1200 × 900 |
   | `about.jpg` | 關於我們 | 800 × 600 |
   | `env-1.jpg`~`env-6.jpg` | 環境照片牆 | 800 × 600 |
   | `teacher-1.jpg`~`teacher-4.jpg` | 師資照片 | 400 × 400 |

3. **最簡單**：用相同檔名覆蓋舊圖即可，網站會自動更新。
   若圖片還沒放，網站會顯示友善佔位提示，不會破圖。

## 📝 如何更換文字內容（不用寫程式）

所有文字（標題、介紹、課程、師資、聯絡資訊…）都集中在一個檔案：

> **[`src/data/siteConfig.ts`](src/data/siteConfig.ts)**

直接修改裡面的文字即可，改完存檔就會更新。

---

## ☁️ 部署到 GitHub Pages

本專案已內建自動部署流程（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。

1. 把專案推上 GitHub（repo 名稱建議與 `vite.config.ts` 的 `base` 一致，預設為 `Learning`）。
   > 若你的 repo 名稱不同，請把 [`vite.config.ts`](vite.config.ts) 的
   > `const base = '/Learning/'` 改成 `/<你的-repo-名稱>/`。

2. 到 GitHub repo 的 **Settings → Pages → Build and deployment**，
   將 **Source** 設為 **GitHub Actions**。

3. 每次 `git push` 到 `main` 分支，就會自動 build 並發佈。
   網址為 `https://<你的帳號>.github.io/<repo-名稱>/`。

```bash
git add .
git commit -m "初始化安親班網站 V1"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo-名稱>.git
git push -u origin main
```

---

## 🔮 未來擴充到 Azure

專案已預留擴充彈性，日後要接後端（例如讓聯絡表單直接寄信 / 存資料庫）時：

1. **聯絡表單後端**
   只需修改 [`src/services/contactService.ts`](src/services/contactService.ts) 內的
   `submitContactForm`，把 `mailto` 換成呼叫 API：

   ```ts
   const res = await fetch(import.meta.env.VITE_API_URL + '/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(payload),
   })
   ```

   前端各元件完全不需改動。

2. **改用 Azure Static Web Apps**
   - 將 [`vite.config.ts`](vite.config.ts) 的 `base` 改回 `'/'`。
   - 在 Azure Portal 建立 Static Web App，來源選 GitHub，
     build 設定：`app_location: "/"`、`output_location: "dist"`。
   - Azure 會自動產生對應的 GitHub Actions 部署流程。
   - 後端 API 可用 **Azure Functions**（Static Web Apps 內建整合 `/api`）。

3. **環境變數**
   參考 [`.env.example`](.env.example)，在 Azure 設定 `VITE_API_URL` 等變數。

---

## 🗂️ 專案結構

```
.
├─ public/
│  ├─ images/            ← 放圖片的地方（換圖只改這裡）
│  └─ vite.svg
├─ src/
│  ├─ components/        ← 各區塊 UI 元件
│  ├─ data/
│  │  └─ siteConfig.ts   ← 所有文字/圖片設定（換字只改這裡）
│  ├─ services/
│  │  └─ contactService.ts ← 表單送出邏輯（未來接 Azure 的接口）
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ .github/workflows/deploy.yml  ← GitHub Pages 自動部署
├─ vite.config.ts
└─ package.json
```

---

## 🛠️ 技術棧

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
