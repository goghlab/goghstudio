"use client"

import { useState } from "react"
import BookingForm from "./booking-form"

export default function PricingSection() {
  const [showForm, setShowForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("starter")

  const plans = [
    {
      key: "starter",
      name: "AI 起步版",
      price: 3888,
      description: "適合初創企業及個人品牌",
      features: [
        "AI 廣告片 1-2 條",
        "網站製作及重製（10頁以內）",
        "AI 圖片 / 產品圖 20-30 張",
        "SEO 自動發佈",
        "AI 回覆機械人",
      ],
      cta: "立即開始",
      featured: false,
    },
    {
      key: "professional",
      name: "AI 專業版",
      price: 6888,
      description: "適合成長中的中小企",
      features: [
        "AI 廣告片 3-5 條",
        "網站製作及重製（10-20頁）",
        "AI 圖片 / 產品圖 30-50 張",
        "SEO 自動發佈",
        "AI 回覆機械人",
      ],
      cta: "立即開始",
      featured: true,
    },
    {
      key: "enterprise",
      name: "AI 企業版",
      price: 9888,
      description: "適合大型企業及電商",
      features: [
        "AI 廣告片 5 條",
        "網站製作及重製（20頁以上）",
        "AI 圖片 / 產品圖 50 張",
        "SEO 自動發佈",
        "AI 回覆機械人",
        "APP 製作（iOS / Android）",
      ],
      cta: "聯絡銷售",
      featured: false,
    },
  ]

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              方案與定價
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            選擇你的 AI 服務方案
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            一站式 AI 數碼營銷方案，助你快速拓展業務
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full max-w-[1200px]">
          {/* Left Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Pricing Cards Container */}
          <div className="flex-1 flex flex-col lg:flex-row justify-center items-stretch gap-6 py-12 lg:py-0 px-4 md:px-6">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className={`flex-1 max-w-full lg:max-w-none self-stretch px-6 py-8 flex flex-col justify-start items-start gap-10 ${
                  plan.featured
                    ? "bg-[#37322F] border border-[rgba(55,50,47,0.12)]"
                    : "bg-white border border-[#E0DEDB]"
                }`}
              >
                {/* Plan Header */}
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div
                      className={`text-lg font-medium leading-7 font-sans ${
                        plan.featured ? "text-[#FBFAF9]" : "text-[rgba(55,50,47,0.90)]"
                      }`}
                    >
                      {plan.name}
                    </div>
                    <div
                      className={`text-sm font-normal leading-5 font-sans ${
                        plan.featured ? "text-[#B2AEA9]" : "text-[rgba(41,37,35,0.70)]"
                      }`}
                    >
                      {plan.description}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="flex flex-col justify-start items-start gap-1">
                      <div className="flex items-end gap-1">
                        <div
                          className={`text-5xl font-medium font-serif ${
                            plan.featured ? "text-[#F0EFEE]" : "text-[#37322F]"
                          }`}
                        >
                          HK$
                        </div>
                        <div
                          className={`text-5xl font-medium leading-[60px] font-serif ${
                            plan.featured ? "text-[#F0EFEE]" : "text-[#37322F]"
                          }`}
                        >
                          {plan.price.toLocaleString()}
                        </div>
                      </div>
                      <div
                        className={`text-sm font-medium font-sans ${
                          plan.featured ? "text-[#D2C6BF]" : "text-[#847971]"
                        }`}
                      >
                        一次性收費
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => { setSelectedPlan(plan.key); setShowForm(true) }}
                    className={`self-stretch px-4 py-[10px] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer transition-opacity hover:opacity-90 ${
                      plan.featured
                        ? "bg-[#FBFAF9]"
                        : "bg-[#37322F]"
                    }`}
                  >
                    <div
                      className={`text-[13px] font-medium leading-5 font-sans ${
                        plan.featured ? "text-[#37322F]" : "text-[#FBFAF9]"
                      }`}
                    >
                      {plan.cta}
                    </div>
                  </button>
                </div>

                {/* Features */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div
                    className={`text-sm font-semibold leading-5 font-sans ${
                      plan.featured ? "text-[#FBFAF9]" : "text-[rgba(55,50,47,0.80)]"
                    }`}
                  >
                    包含服務：
                  </div>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                      <div className="w-4 h-4 relative flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke={plan.featured ? "#FF8000" : "#9CA3AF"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div
                        className={`flex-1 text-[13px] font-normal leading-5 font-sans ${
                          plan.featured ? "text-[#F0EFEE]" : "text-[rgba(55,50,47,0.80)]"
                        }`}
                      >
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <BookingForm selectedPlan={selectedPlan} onClose={() => setShowForm(false)} />
      )}
    </div>
  )
}
