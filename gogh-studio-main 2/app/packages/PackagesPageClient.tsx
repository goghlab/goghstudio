"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Star, Users, TrendingUp, Shield, Zap, Globe, MessageCircle, Building, ShoppingCart, Utensils, Rocket } from "lucide-react"
import { SharedLayout } from "@/components/shared-layout"
import BookingForm from "@/app/components/booking-form"

interface Plan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

interface FAQ {
  question: string
  answer: string
}

export default function PackagesPageClient() {
  const [showForm, setShowForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("premium")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const plans: Plan[] = [
    {
      id: "essential",
      name: "AI 起步版",
      price: "HK$3,888",
      description: "適合初創企業，快速啟動 AI 數位化转型",
      features: [
        "AI廣告片 1-2條",
        "網站製作 10頁以內",
        "AI圖片 20-30張",
        "SEO自動發佈",
        "AI回覆機械人",
      ],
    },
    {
      id: "premium",
      name: "AI 專業版",
      price: "HK$6,888",
      description: "最適合成長型企業，全方位 AI 營銷解決方案",
      features: [
        "AI廣告片 3-5條",
        "網站製作 10-20頁",
        "AI圖片 30-50張",
        "SEO自動發佈",
        "AI回覆機械人",
      ],
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "AI 企業版",
      price: "HK$9,888",
      description: "企業級定制服務，打造完全自主的 AI 生態系統",
      features: [
        "AI廣告片 5條以上",
        "網站製作 20頁以上",
        "AI圖片 50張以上",
        "SEO自動發佈",
        "AI回覆機械人",
        "APP製作",
      ],
    },
  ]

  const guarantees = [
    { icon: Zap, text: "7天內完成初稿" },
    { icon: Shield, text: "100% 退款保證" },
    { icon: Globe, text: "永久技術支援" },
    { icon: MessageCircle, text: "24/7 客戶服務" },
    { icon: Star, text: "頂尖設計質量" },
    { icon: TrendingUp, text: "效果不達標免費優化" },
  ]

  const industries = [
    { icon: Building, name: "製造業", desc: "自動化客戶開發與品牌升級" },
    { icon: ShoppingCart, name: "電子商務", desc: "AI 驅動的產品展示與轉化優化" },
    { icon: Utensils, name: "餐飲連鎖", desc: "智能預約與會員管理系統" },
    { icon: Rocket, name: "科技 Startup", desc: "快速 MVP 開發與市場驗證" },
  ]

  const caseStudies = [
    {
      title: "香港電子商務品牌",
      result: "3個月內營業額提升 240%",
      desc: "通過 AI 影片與智能客服系統，全面提升客戶轉化率",
    },
    {
      title: "本地餐飲連鎖",
      result: "顧客回購率增加 180%",
      desc: "AI 自動化營銷結合會員系統，打造忠誠客戶群",
    },
    {
      title: "科技 Startup",
      result: "節省 70% 營銷成本",
      desc: "AI 內容生成取代傳統廣告公司，快速迭代搶佔市場",
    },
  ]

  const testimonials = [
    {
      quote: "Gogh AI Studio 的專業程度令人驚嘆，完全超出了我們的期望！",
      author: "陳先生",
      role: "電子商務創辦人",
    },
    {
      quote: "AI 機械人帮我處理了 80% 的客戶查詢，省下大量人力成本",
      author: "林小姐",
      role: "餐飲連鎖店老板",
    },
    {
      quote: "從網站到影片，一站式服務讓我們能專注發展核心業務",
      author: "張先生",
      role: "科技 Startup CEO",
    },
  ]

  const faqs: FAQ[] = [
    {
      question: "相比傳統廣告公司，你們的優勢是什麼？",
      answer: "傳統廣告公司收費 HK$80,000 起的項目，我們用 AI 技術將成本降低 90%，同樣甚至更好的效果。時間也從數月縮短到數週。",
    },
    {
      question: "需要多久才能看到效果？",
      answer: "一般來說，網站上線後 2-4 週、影片發佈後 1-2 週即可看到明顯的流量和轉化提升。",
    },
    {
      question: "如果對成果不滿意怎麼辦？",
      answer: "我們提供 100% 退款保證，並會持續優化直到您滿意為止。",
    },
    {
      question: "日後可以追加服務嗎？",
      answer: "當然可以！我們的方案都是模組化的，可以隨時追加 AI 服務。",
    },
  ]

  const steps = [
    { num: "01", title: "選擇方案", desc: "根據您的業務需求，選擇最適合的 AI 服務方案" },
    { num: "02", title: "預約咨詢", desc: "我們的專家會深入了解您的品牌、產品和目標" },
    { num: "03", title: "開始製作", desc: "AI 團隊同步開展，快速交付高質量內容" },
    { num: "04", title: "持續優化", desc: "根據數據分析，不斷調整策略以達到最佳效果" },
  ]

  const services = [
    { title: "AI 影片製作", desc: "從腳本到剪輯，全部由 AI 智能完成，成本降低 90%" },
    { title: "智能網站開發", desc: "現代化響應式網站，SEO 優化一步到位" },
    { title: "AI 圖片生成", desc: "電商級產品圖、場景圖，全部 AI 批量生成" },
    { title: "自動化客服", desc: "24/7 AI 機械人，即時回覆顧客查詢" },
  ]

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
    setShowForm(true)
  }

  return (
    <SharedLayout>
      <div className="min-h-screen bg-background text-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-5 md:px-10 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              方案與定價
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8">
              AI 製作套餐服務 by Gogh AI Studio
            </p>
            <a
              href="https://wa.me/85251234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              免費開始
            </a>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 px-5 md:px-10 lg:px-16 border-y border-white/10">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-white/50 text-sm mb-8">Trusted by Leading Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
              <span className="text-xl font-bold">Brand A</span>
              <span className="text-xl font-bold">Brand B</span>
              <span className="text-xl font-bold">Brand C</span>
              <span className="text-xl font-bold">Brand D</span>
              <span className="text-xl font-bold">Brand E</span>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              <TrendingUp className="h-4 w-4" />
              投資回報計算
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
              用 AI 的力量，節省 90% 成本
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border border-white/10 rounded-xl p-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="text-white/50 mb-2">傳統方式</div>
                <div className="text-4xl font-bold text-white/30 mb-4">HK$80,000</div>
                <div className="text-white/50 text-sm">
                  <div>• 廣告公司 3-6 個月製作</div>
                  <div>• 高人力成本</div>
                  <div>• 迭代周期長</div>
                </div>
              </div>
              <div className="border border-white/20 bg-white/5 rounded-xl p-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-white/50 mb-2">Gogh AI Studio</div>
                <div className="text-4xl font-bold text-white mb-4">HK$6,888</div>
                <div className="text-white/70 text-sm">
                  <div>• AI 快速生成</div>
                  <div>• 成本降低 90%</div>
                  <div>• 7天交付</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
              專為行業優化
            </h2>
            <p className="text-white/60 text-center mb-12 animate-fade-in">
              針對不同行業打造的 AI 解決方案
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <industry.icon className="h-8 w-8 mb-4 text-white/70" />
                  <h3 className="font-semibold mb-2">{industry.name}</h3>
                  <p className="text-white/50 text-sm">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
              選擇你的 AI 服務方案
            </h2>
            <p className="text-white/60 text-center mb-12 animate-fade-in">
              靈活方案，滿足不同發展階段的需求
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`border rounded-xl p-6 transition-all animate-fade-in ${
                    plan.highlighted
                      ? "border-white bg-white/5 transform hover:-translate-y-1"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  {plan.highlighted && (
                    <div className="inline-flex items-center gap-1 bg-white text-black text-xs font-medium px-3 py-1 rounded-full mb-4">
                      <Star className="h-3 w-3" />
                      最受歡迎
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">{plan.price}</div>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0 text-white" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full text-center py-3 px-4 rounded-lg transition-colors font-medium ${
                      plan.highlighted
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    立即開始
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              企業級服務保障
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {guarantees.map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 50 + 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3 mx-auto">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              <TrendingUp className="h-4 w-4" />
              成功案例
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
              真實效果，數據說話
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <div className="text-sm text-white/50 mb-2">{study.title}</div>
                  <div className="text-2xl font-bold text-white mb-2">{study.result}</div>
                  <p className="text-white/60 text-sm">{study.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              簡單四步，開始合作
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100 + 100}ms` }}>
                  <div className="text-5xl font-bold text-white/10 mb-4">{step.num}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
              一站式 AI 服務
            </h2>
            <p className="text-white/60 text-center mb-12 animate-fade-in">
              從內容創作到客戶服務，全部 AI 搞定
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              客戶怎麼說
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <p className="text-white/80 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{testimonial.author}</div>
                      <div className="text-white/50 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              常見問題
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 50 + 100}ms` }}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0 text-white/50" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-white/50" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 text-white/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-5 md:px-10 lg:px-16 text-center bg-black/50">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備好開始了嗎？
            </h2>
            <p className="text-white/60 mb-8">
              立即預約免費咨詢，讓 AI 為您的業務賦能
            </p>
            <button
              onClick={() => handlePlanSelect("premium")}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              立即開始
            </button>
          </div>
        </section>

        {/* Booking Form Modal */}
        {showForm && (
          <BookingForm selectedPlan={selectedPlan} onClose={() => setShowForm(false)} />
        )}
      </div>
    </SharedLayout>
  )
}
