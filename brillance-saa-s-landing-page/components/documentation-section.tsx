"use client"

import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px 0px 4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

const services = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="3" width="14" height="10" rx="2" stroke="#37322F" strokeWidth="1.2" fill="none"/>
        <path d="M5 7L7 9L11 5" stroke="#37322F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI 廣告片",
    desc: "幾分鐘生成高質量宣傳片",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="2" width="14" height="10" rx="1.5" stroke="#37322F" strokeWidth="1.2" fill="none"/>
        <path d="M1 5H15" stroke="#37322F" strokeWidth="1.2"/>
      </svg>
    ),
    title: "專業網站",
    desc: "10-20頁，交付快、視覺靚",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="5" height="5" rx="1" stroke="#37322F" strokeWidth="1.2" fill="none"/>
        <rect x="9.5" y="1.5" width="5" height="5" rx="1" stroke="#37322F" strokeWidth="1.2" fill="none"/>
        <rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke="#37322F" strokeWidth="1.2" fill="none"/>
        <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="#37322F" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    title: "AI 圖片",
    desc: "產品圖、宣傳圖，全部幫你整",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6" stroke="#37322F" strokeWidth="1.2" fill="none"/>
        <path d="M8 5V8L10 10" stroke="#37322F" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "SEO 自動優化",
    desc: "話你知邊度要改，自動幫你做",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H14V11H9L6 14V11H2V3Z" stroke="#37322F" strokeWidth="1.2" fill="none"/>
        <path d="M5 7H11" stroke="#37322F" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "AI 機械人",
    desc: "24小時自動回覆客戶",
  },
]

export default function 文檔Section() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px 2px 4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="服務內容"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            專為你而設的 AI 服務
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            一切由我們處理，你專注發展業務
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 flex justify-center items-center">
        <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#37322F] flex items-center justify-center">
                {service.icon}
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#37322F] text-lg font-semibold leading-6 font-sans">
                  {service.title}
                </div>
                <div className="text-[#605A57] text-sm font-normal leading-5 font-sans">
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
