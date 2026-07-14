"use client"

import { useState } from "react"
import Link from "next/link"

const plans = [
  {
    key: "starter",
    name: "AI 起步版",
    price: "3,888",
    traditionalPrice: "25,000",
    deliveryWeeks: "2",
    traditionalWeeks: "8",
    description: "適合初創企業及個人品牌",
    features: [
      "AI 廣告片 1-2 條",
      "網站製作及重製（10頁以內）",
      "AI 圖片 / 產品圖 20-30 張",
      "SEO 自動發佈",
      "AI 回覆機械人",
    ],
    featured: false,
    cta: "立即開始",
    whatsappText: "你好，我想開始使用AI製作套餐服務（起步版）",
  },
  {
    key: "professional",
    name: "AI 專業版",
    price: "6,888",
    traditionalPrice: "80,000",
    deliveryWeeks: "3",
    traditionalWeeks: "24",
    description: "適合成長中的中小企",
    features: [
      "AI 廣告片 3-5 條",
      "網站製作及重製（10-20頁）",
      "AI 圖片 / 產品圖 30-50 張",
      "SEO 自動發佈",
      "AI 回覆機械人",
    ],
    featured: true,
    cta: "立即開始",
    whatsappText: "你好，我想開始使用AI製作套餐服務（專業版）",
  },
  {
    key: "enterprise",
    name: "AI 企業版",
    price: "9,888",
    traditionalPrice: "150,000",
    deliveryWeeks: "4",
    traditionalWeeks: "48",
    description: "適合大型企業及電商",
    features: [
      "AI 廣告片 5 條",
      "網站製作及重製（20頁以上）",
      "AI 圖片 / 產品圖 50 張",
      "SEO 自動發佈",
      "AI 回覆機械人",
      "APP 製作（iOS / Android）",
    ],
    featured: false,
    cta: "聯絡銷售",
    whatsappText: "你好，我想了解AI製作套餐服務（企業版）",
  },
]

const industries = [
  { emoji: "🏭", name: "製造業", description: "快速建立品牌形象 + AI 自動化營銷", features: ["品牌視覺系統", "產品目錄網站", "AI 客戶服務機械人"] },
  { emoji: "🛒", name: "電子商務", description: "產品視覺化 + 社交媒體自動化", features: ["AI 產品圖生成", "一鍵多平台發佈", "智能庫存管理"] },
  { emoji: "🍽️", name: "餐飲連鎖", description: "品牌升級 + 會員系統 + 外賣平台整合", features: ["品牌升級設計", "O2O 會員系統", "外賣平台整合"] },
  { emoji: "💻", name: "科技 Startup", description: "MVP 快速落地 + SEO 搶佔市場", features: ["快速網站交付", "SEO 搶佔排名", "MVP 產品開發"] },
]

const guarantees = [
  { icon: "✅", title: "14天滿意保證", desc: "不滿意可退款，無條件約束" },
  { icon: "🔒", title: "資料保密", desc: "NDA 可簽署，確保商業秘密安全" },
  { icon: "📋", title: "清晰報價單", desc: "無隱藏費用，報價即最終價格" },
  { icon: "👨💼", title: "專人客戶經理", desc: "全程一對一跟進，響應及時" },
  { icon: "⏱️", title: "準時交付承諾", desc: "延誤即減費，時間表透明" },
  { icon: "📱", title: "終身技術支援", desc: "交付後仍提供技術支援服務" },
]

const steps = [
  { num: "1", title: "選擇套餐", desc: "評估你嘅需要，選擇適合嘅方案" },
  { num: "2", title: "預約咨詢", desc: "30分鐘免費初步咨詢，了解詳細需求" },
  { num: "3", title: "確認方案", desc: "我哋提供定制化報價單和時間表" },
  { num: "4", title: "立即開始", desc: "簽署確認後即刻啟動項目" },
]

const services = [
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>, title: "AI 廣告片製作", desc: "專業AI自動化廣告片，助你快速生成高質量宣傳內容" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"></path></svg>, title: "網站製作", desc: "現代化響應式網站，讓你的品牌在線上脫穎而出" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>, title: "AI 產品圖", desc: "智能生成產品圖片，省去拍攝成本，快速上架" },
  { icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>, title: "SEO 優化", desc: "智能 SEO 優化，提升自然流量，讓更多潛在客戶主動搵上門" },
]

const faqs = [
  { q: "Gogh AI Studio 是什麼公司？", a: "Gogh AI Studio 是一站式 AI 數碼營銷平台，專為需要自動化宣傳、網站製作及客戶管理的企業而設。適合初創、中年創業人士及小型企業。" },
  { q: "AI 廣告片是如何製作的？", a: "我們使用先進 AI 工具製作廣告片，根據你的品牌和產品特點自動生成創意內容。你只需提供基本資料，我們的團隊會進行審核和優化，確保效果最佳。" },
  { q: "服務需要多久完成？", a: "根據套餐不同：起步版 7-14 個工作天、專業版 14-21 個工作天、企業版 21-30 個工作天。具體時間視乎頁數及功能複雜度而定。" },
  { q: "可以升級套餐嗎？", a: "當然可以！你可以隨時升級至更高級別的套餐。我們會按比例計算已支付金額，確保你唔會重複付費。" },
  { q: "企業版包含 APP 開發嗎？", a: "企業版包含 iOS 及 Android 雙平台 APP 製作。我們使用原生開發技術，確保性能和用戶體驗達到最佳水平。" },
  { q: "如何開始使用服務？", a: "非常簡單！選擇適合你的套餐，聯絡我們的銷售團隊，確認需求後即可開始。我們的團隊會全程跟進，確保順利交付。" },
]

const caseStudies = [
  { tag: "餐飲連鎖", title: "某國際餐飲品牌", problem: "品牌形象老化，難以吸引年輕客群", solution: "品牌升級 + 社交媒體自動化 + 會員系統", result: "3個月內 Instagram 粉絲 +200%，會員活躍度 +150%", metric: "+200%" },
  { tag: "科技 Startup", title: "本地 AI 硬件 Startup", problem: "需要快速建立品牌和 MVP 網站", solution: "品牌形象設計 + 網站開發 + SEO 優化", result: "2週完成網站，Google 關鍵字排名首頁", metric: "2週交付" },
  { tag: "電子商務", title: "美容產品電商", problem: "產品圖片成本高，更新速度慢", solution: "AI 產品圖批量生成 + 社交媒體自動化", result: "每月節省 HK$15,000 拍攝成本，上新速度 +300%", metric: "HK$15K/月" },
]

const portfolioItems = [
  { id: 47, title: "Micbot Robot Official Website", category: "網站開發", image: "/portfolio/網站開發/Micbot機器人官網/thumbnail.jpg" },
  { id: 48, title: "Beijing Shangyun Elevator", category: "網站開發", image: "/portfolio/網站開發/北京上云電梯官網/thumbnail.jpg" },
  { id: 50, title: "Lynk & Co App Redesign", category: "網站開發", image: "/portfolio/網站開發/领克汽车APP改版设计/thumbnail.png" },
  { id: 51, title: "2024 Portfolio", category: "網站開發", image: "/portfolio/網站開發/2024作品集/thumbnail.png" },
  { id: 52, title: "Wu Box HEMS APP", category: "網站開發", image: "/portfolio/網站開發/悟匣HEMS APP新品发布/thumbnail.png" },
  { id: 55, title: "落至晚樱", category: "網站開發", image: "/portfolio/網站開發/落至晚樱/thumbnail.png" },
  { id: 63, title: "Capy個人理財APP", category: "網站開發", image: "/portfolio/網站開發/Capy個人理財APP/thumbnail.png" },
  { id: 65, title: "Richland Gem App", category: "網站開發", image: "/portfolio/網站開發/Richland宝石app项目/thumbnail.jpg" },
  { id: 67, title: "Zukka", category: "網站開發", image: "/portfolio/網站開發/Zukka/thumbnail.png" },
  { id: 68, title: "宇树商城UI APP", category: "網站開發", image: "/portfolio/網站開發/宇树商城UI APP设计/thumbnail.jpg" },
  { id: 53, title: "動效練習", category: "AI影片製作", image: "/portfolio/AI影片製作/動效練習/thumbnail.png" },
  { id: 54, title: "光年五彩敦煌插畫", category: "AI影片製作", image: "/portfolio/AI影片製作/光年五彩敦煌插畫/thumbnail.png" },
  { id: 56, title: "原創AI短片-我搞砸了", category: "AI影片製作", image: "/portfolio/AI影片製作/原創AI短片-我搞砸了/thumbnail.png" },
  { id: 57, title: "原創AI短片-螞蟻", category: "AI影片製作", image: "/portfolio/AI影片製作/原創AI短片-螞蟻/thumbnail.png" },
  { id: 58, title: "原創AI短片-NPC", category: "AI影片製作", image: "/portfolio/AI影片製作/原創AI短片-NPC/thumbnail.png" },
  { id: 59, title: "AI原創PV短片-水燼", category: "AI影片製作", image: "/portfolio/AI影片製作/AI原創PV短片-水燼/thumbnail.png" },
  { id: 60, title: "爆肝3天AI短片", category: "AI影片製作", image: "/portfolio/AI影片製作/爆肝3天AI短片-聯合國電影節/thumbnail.png" },
]

export default function PackagesPageClient() {
  const [selectedPlan, setSelectedPlan] = useState("professional")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formPlan, setFormPlan] = useState("")

  const scrollToForm = (planKey: string) => {
    setFormPlan(planKey === "starter" ? "起步版" : planKey === "professional" ? "專業版" : "企業版")
    const formSection = document.getElementById("contact-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full min-h-screen bg-white font-serif antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[rgba(55,50,47,0.12)]">
        <div className="max-w-[1060px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/packages/1783608400070-019f474e-fba8-79a4-a3b2-b6e7ab926937.png" alt="Gogh AI Studio Logo" className="h-14 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-4">
            <Link className="text-sm text-[rgba(55,50,47,0.80)] hover:text-[#37322F] transition-colors" href="/#services">服務</Link>
            <Link className="text-sm text-[rgba(55,50,47,0.80)] hover:text-[#37322F] transition-colors" href="/work">作品</Link>
            <Link className="text-sm text-[rgba(55,50,47,0.80)] hover:text-[#37322F] transition-colors" href="/contact">聯絡</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-[1060px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[rgba(2,6,23,0.08)] shadow-sm mb-6">
            <span className="text-xs font-medium text-[#37322F]">方案與定價</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-serif text-[#37322F] leading-tight mb-6">
            AI 製作套餐服務<br />by Gogh AI Studio
          </h1>
          <p className="text-lg text-[rgba(55,50,47,0.80)] max-w-xl mx-auto mb-8">
            專業AI自動化服務，輕鬆定製你的商業方案<br />由 Gogh AI Studio 打造。
          </p>
          <button
            onClick={() => scrollToForm('professional')}
            className="inline-block h-12 px-8 bg-gradient-to-b from-[#37322F] to-[#1a1816] text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg leading-[48px]"
          >
            免費開始
          </button>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 md:px-8 py-8">
        <div className="max-w-[960px] mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img src="/packages/ai-studio-hero-1.png" alt="AI Studio Dashboard" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-[#F7F5F3] to-white border-b border-[rgba(55,50,47,0.08)]">
        <div className="max-w-[1060px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-[#8A8278] uppercase tracking-wider mb-3">Trusted by Leading Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
              {["科技初創", "餐飲連鎖", "電子商務", "製造業"].map((brand) => (
                <div key={brand} className="text-2xl font-serif font-bold text-[#37322F]">{brand}</div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-[rgba(55,50,47,0.12)] shadow-sm">
              <span className="text-2xl font-bold text-[#37322F]">50+</span>
              <span className="text-sm text-[#605A57]">企業客戶信任之選</span>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Our Work */}
      <section className="px-4 md:px-8 py-12 border-y border-[rgba(55,50,47,0.12)]">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#49423D] tracking-tight mb-1">瀏覽我們的作品</h2>
              <p className="text-[#605A57]">查看不同類型的項目案例</p>
            </div>
            <Link href="/work" className="hidden md:flex items-center gap-1 text-sm text-[#605A57] hover:text-[#37322F] transition-colors">
              查看全部
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-4 md:pl-[calc((100vw-1060px)/2)]">
          <div className="flex gap-4 w-max pb-4">
            {portfolioItems.map((item) => (
              <Link key={item.id} href={`/work/${item.id}`} className="group flex-shrink-0 w-[260px] snap-start">
                <div className="relative w-[260px] h-[180px] rounded-lg overflow-hidden bg-[#F7F5F3] mb-3">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-[#F7F5F3]"><span className="text-4xl">🎨</span></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="text-sm font-medium text-[#49423D] truncate group-hover:text-[#37322F] transition-colors">{item.title}</p>
                <p className="text-xs text-[#605A57] truncate">{item.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#49423D] tracking-tight mb-3">💰 投資回報計算</h2>
            <p className="text-[#605A57]">選擇你的套餐，睇吓你可以慳幾多</p>
          </div>
          <div className="flex justify-center gap-3 mb-8">
            {plans.map((plan) => (
              <button key={plan.key} onClick={() => setSelectedPlan(plan.key)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedPlan === plan.key ? "bg-[#37322F] text-white" : "bg-[#F7F5F3] text-[#605A57] hover:bg-[#E8E4E0]"}`}>
                {plan.name} HK${plan.price}
              </button>
            ))}
          </div>
          {plans.filter(p => p.key === selectedPlan).map((plan) => (
          <div key={plan.key} className="bg-gradient-to-br from-[#F7F5F3] to-white rounded-2xl p-8 border border-[rgba(55,50,47,0.1)]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-[#8A8278] uppercase tracking-wider mb-4">成本對比</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[rgba(55,50,47,0.1)]">
                    <span className="text-[#605A57]">傳統方式</span>
                    <span className="text-lg font-semibold text-[#49423D] line-through">HK${plan.traditionalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[rgba(55,50,47,0.1)]">
                    <span className="text-[#605A57]">Gogh AI Studio</span>
                    <span className="text-lg font-bold text-[#37322F]">HK${plan.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#605A57]">交付時間</span>
                    <span className="text-sm text-[#605A57]">{plan.deliveryWeeks}週 vs {plan.traditionalWeeks}週</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#8A8278] uppercase tracking-wider mb-4">你的收益</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[rgba(55,50,47,0.1)]">
                    <span className="text-2xl">✅</span>
                    <div><span className="text-2xl font-bold text-[#37322F]">慳 {Math.round((1 - parseInt(plan.price.replace(',','')) / parseInt(plan.traditionalPrice.replace(',',''))) * 100)}%</span><p className="text-sm text-[#605A57]">成本</p></div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[rgba(55,50,47,0.1)]">
                    <span className="text-2xl">✅</span>
                    <div><span className="text-2xl font-bold text-[#37322F]">快 {Math.round((1 - parseInt(plan.deliveryWeeks) / parseInt(plan.traditionalWeeks)) * 100)}%</span><p className="text-sm text-[#605A57]">交付時間</p></div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[rgba(55,50,47,0.1)]">
                    <span className="text-2xl">✅</span>
                    <div><span className="text-2xl font-bold text-[#37322F]">HK${plan.price}</span><p className="text-sm text-[#605A57]">性價比極致</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 md:px-8 bg-[#F7F5F3]">
        <div className="max-w-[1060px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#49423D] tracking-tight mb-3">專為行業優化</h2>
            <p className="text-[#605A57]">我哋嘅 AI 方案專為以下行業設計，幫你快速提升競爭力</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-2xl p-6 border border-[rgba(55,50,47,0.1)] hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{industry.emoji}</div>
                <h3 className="text-lg font-semibold text-[#37322F] mb-2">{industry.name}</h3>
                <p className="text-sm text-[#605A57] mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-[#49423D]"><span className="text-[#8A8278]">•</span>{f}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div className="w-full border-y border-[rgba(55,50,47,0.12)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#49423D] tracking-tight mb-4">選擇你的 AI 服務方案</h2>
            <p className="text-[#605A57] text-lg">一站式 AI 數碼營銷方案，助你快速拓展業務</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.key} className={`p-8 flex flex-col ${plan.featured ? "bg-[#37322F] text-white" : "bg-white border border-[#E0DEDB]"}`}>
                <div className="mb-6">
                  <h3 className={`text-lg font-medium mb-2 ${plan.featured ? "text-[#FBFAF9]" : "text-[rgba(55,50,47,0.90)]"}`}>{plan.name}</h3>
                  <p className={`text-sm ${plan.featured ? "text-[#B2AEA9]" : "text-[rgba(41,37,35,0.70)]"}`}>{plan.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-serif ${plan.featured ? "text-[#F0EFEE]" : "text-[#37322F]"}`}>HK$</span>
                    <span className={`text-5xl font-serif ${plan.featured ? "text-[#F0EFEE]" : "text-[#37322F]"}`}>{plan.price}</span>
                  </div>
                  <p className={`text-sm font-medium ${plan.featured ? "text-[#D2C6BF]" : "text-[#847971]"}`}>一次性收費</p>
                </div>
                <button onClick={() => scrollToForm(plan.key)} className={`w-full py-3 rounded-full font-medium mb-8 transition-opacity hover:opacity-90 shadow-md text-center ${plan.featured ? "bg-gradient-to-b from-[#FBFAF9] to-[#E8E4E0] text-[#37322F]" : "bg-gradient-to-b from-[#37322F] to-[#1a1816] text-white"}`}>
                  {plan.cta}
                </button>
                <div className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-[#FBFAF9]" : "text-[#37322F]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className={`text-sm ${plan.featured ? "text-[#D2C6BF]" : "text-[rgba(41,37,35,0.80)]"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guarantees */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#49423D] tracking-tight mb-3">企業級服務保障</h2>
            <p className="text-[#605A57]">選擇 Gogh AI Studio，選擇安心</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="flex items-start gap-4 p-5 bg-[#F7F5F3] rounded-xl">
                <span className="text-2xl flex-shrink-0">{g.icon}</span>
                <div><h3 className="font-semibold text-[#37322F] mb-1">{g.title}</h3><p className="text-sm text-[#605A57]">{g.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#49423D] tracking-tight mb-3">📊 成功案例</h2>
            <p className="text-[#605A57]">看看我哋點樣幫企業提升業績</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-[rgba(55,50,47,0.1)] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3"><span className="px-2 py-1 bg-[#F7F5F3] rounded text-xs text-[#605A57]">{c.tag}</span></div>
                <h3 className="text-lg font-semibold text-[#37322F] mb-2">{c.title}</h3>
                <div className="space-y-3 mb-4">
                  <div><span className="text-xs text-[#8A8278] uppercase">問題</span><p className="text-sm text-[#49423D]">{c.problem}</p></div>
                  <div><span className="text-xs text-[#8A8278] uppercase">方案</span><p className="text-sm text-[#49423D]">{c.solution}</p></div>
                  <div><span className="text-xs text-[#8A8278] uppercase">結果</span><p className="text-sm font-medium text-[#37322F]">{c.result}</p></div>
                </div>
                <div className="pt-4 border-t border-[rgba(55,50,47,0.1)]"><span className="text-2xl font-bold text-[#37322F]">{c.metric}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 md:px-8 bg-[#37322F]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">簡單四步，開始合作</h2>
            <p className="text-[#B2AEA9]">我哋嘅 consultation funnel 確保你嘅需求得到充分理解</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center relative">
                {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20"></div>}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#B2AEA9]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/85291709891?text=你好，我想預約免費咨詢，了解 AI 製作套餐服務" target="_blank" rel="noopener noreferrer" className="inline-block h-14 px-10 bg-white text-[#37322F] rounded-full font-semibold hover:bg-[#F7F5F3] transition-colors shadow-lg leading-[56px]">
              立即預約免費咨詢
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#49423D] tracking-tight mb-3">一站式 AI 服務</h2>
            <p className="text-[#605A57]">從創意到交付，全方位支援你的業務增長</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-[#F7F5F3] rounded-2xl hover:bg-[#EFECEA] transition-colors">
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-white rounded-xl text-[#37322F]">{service.icon}</div>
                <h3 className="text-lg font-semibold text-[#37322F] mb-2">{service.title}</h3>
                <p className="text-sm text-[#605A57]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-[#F7F5F3]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#49423D] tracking-tight mb-8">客戶怎麼說</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg md:text-xl text-[#49423D] leading-relaxed mb-6">"Gogh AI Studio has revolutionized how we handle custom contracts. The automation saves us hours every week and eliminates errors completely."</p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#F7F5F3] rounded-full flex items-center justify-center text-lg font-semibold text-[#37322F]">SC</div>
              <div className="text-left"><p className="font-medium text-[#37322F]">Sarah Chen</p><p className="text-sm text-[#605A57]">VP Operations, TechFlow</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-8 border-t border-[rgba(55,50,47,0.12)]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#49423D] tracking-tight mb-3">常見問題</h2>
            <p className="text-[#605A57]">有其他問題？聯絡我們的銷售團隊獲取更多資訊。</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[rgba(55,50,47,0.12)] rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-[#F7F5F3] transition-colors">
                  <span className="font-medium text-[#37322F]">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#605A57] flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {openFaq === i && <div className="overflow-hidden transition-all duration-300 max-h-0"><p className="pb-5 text-[#605A57] text-sm leading-relaxed px-6">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Formspree */}
      <section id="contact-form" className="py-16 px-4 md:px-8 bg-[#37322F]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">準備好開始了嗎？</h2>
          <p className="text-lg text-[#B2AEA9] mb-8">填寫以下表單，讓 AI 助你快速拓展業務</p>
          
          <form action="https://formspree.io/f/xlgqeoeq" method="POST" className="max-w-md mx-auto space-y-4 mb-8">
            <input type="text" name="name" placeholder="你的名字" required className="w-full px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/60" />
            <input type="email" name="email" placeholder="電郵地址" required className="w-full px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/60" />
            <input type="text" name="company" placeholder="公司名稱" className="w-full px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/60" />
            <select name="plan" required value={formPlan} onChange={(e) => setFormPlan(e.target.value)} className="w-full px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white/80">
              <option value="" className="text-[#37322F]">選擇套餐</option>
              <option value="起步版" className="text-[#37322F]">AI 起步版 (HK$3,888)</option>
              <option value="專業版" className="text-[#37322F]">AI 專業版 (HK$6,888)</option>
              <option value="企業版" className="text-[#37322F]">AI 企業版 (HK$9,888)</option>
            </select>
            <textarea name="message" placeholder="你想我哋幫你完成乜嘢？" rows={3} required className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/60 resize-none" />
            <button type="submit" className="w-full py-3 bg-white text-[#37322F] rounded-full font-medium hover:bg-[#F7F5F3] transition-colors shadow-lg">發送查詢</button>
          </form>
          
          <p className="text-sm text-[#B2AEA9] mb-6">或直接聯絡我們</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/85291709891?text=你好，我想立即開始使用AI製作套餐服務" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
              WhatsApp 聯絡
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-[rgba(55,50,47,0.12)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="text-xl font-semibold text-[#49423D] mb-2"><span className="font-bold">Gogh</span> AI Studio</div>
              <p className="text-sm text-[rgba(73,66,61,0.90)]">AI 服務無縫整合</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-[#49423D] hover:opacity-70"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
                <a href="#" className="text-[#49423D] hover:opacity-70"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a>
              </div>
            </div>
            <div><p className="text-sm text-[rgba(73,66,61,0.50)] mb-2">關於我們</p><a className="text-sm text-[#49423D] hover:text-[#37322F]" href="https://gogh-studio-main.vercel.app/">Gogh Lab Studio →</a></div>
          </div>
          <div className="mt-8 pt-8 border-t border-[rgba(55,50,47,0.12)] text-center"><p className="text-sm text-[rgba(73,66,61,0.50)]">© 2026 Gogh AI Studio. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  )
}
