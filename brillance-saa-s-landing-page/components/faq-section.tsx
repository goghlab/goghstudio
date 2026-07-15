"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Gogh AI Studio 是什麼？適合誰使用？",
    answer:
      "Gogh AI Studio 是一站式 AI 數碼營銷平台，專為需要自動化宣傳、網站製作及客戶管理的企業而設。適合初創、中年創業人士及小型企業。",
  },
  {
    question: "AI 廣告片是如何製作的？",
    answer:
      "我們使用先進 AI 工具製作廣告片，根據你的品牌和產品特點自動生成創意內容。你只需提供基本資料，我們的團隊會進行審核和優化，確保效果最佳。",
  },
  {
    question: "網站製作需要多久時間？",
    answer:
      "根據套餐不同：起步版 7-14 個工作天、專業版 14-21 個工作天、企業版 21-30 個工作天。具體時間視乎頁數及功能複雜度而定。",
  },
  {
    question: "我可以升級套餐嗎？",
    answer:
      "當然可以！你可以隨時升級至更高級別的套餐。我們會按比例計算已支付金額，確保你唔會重複付費。",
  },
  {
    question: "APP 製作包含哪些平台？",
    answer:
      "企業版包含 iOS 及 Android 雙平台 APP 製作。我們使用原生開發技術，確保性能和用戶體驗達到最佳水平。",
  },
  {
    question: "如何開始使用？",
    answer:
      "非常簡單！選擇適合你的套餐，聯絡我們的銷售團隊，確認需求後即可開始。我們的團隊會全程跟進，確保順利交付。",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            常見問題
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Explore your data, build your dashboard,
            <br className="hidden md:block" />
            bring your team together.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
