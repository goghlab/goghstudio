"use client"

import { useState } from "react"

interface BookingFormProps {
  selectedPlan?: string
  onClose: () => void
}

export default function BookingForm({ selectedPlan = "", onClose }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [plan, setPlan] = useState(selectedPlan)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set("plan", plan)

    try {
      const res = await fetch("https://formspree.io/f/xlgqeoeq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("提交失敗，請再試一次。")
      }
    } catch {
      alert("提交失敗，請再試一次。")
    } finally {
      setSubmitting(false)
    }
  }

  const plans = [
    { value: "starter", label: "AI 起步版 (HK$3,888)" },
    { value: "professional", label: "AI 專業版 (HK$6,888)" },
    { value: "enterprise", label: "AI 企業版 (HK$9,888)" },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#37322F] px-6 py-5 flex items-center justify-between">
          <div className="text-white font-semibold text-lg">預約咨詢</div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9L4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-lg font-semibold text-[#37322F]">感謝您！我們會盡快聯絡您。</div>
              <div className="text-sm text-[#605A57]">請留意 email 或 WhatsApp</div>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2 bg-[#37322F] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                關閉
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Plan selector */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#37322F]">選擇方案</label>
                <select
                  name="plan"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E0DEDB] rounded-lg text-sm text-[#37322F] bg-white focus:outline-none focus:border-[#37322F] transition-colors"
                  required
                >
                  {plans.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#37322F]">姓名 *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="您的姓名"
                  className="w-full px-4 py-3 border border-[#E0DEDB] rounded-lg text-sm text-[#37322F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#37322F] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#37322F]">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-[#E0DEDB] rounded-lg text-sm text-[#37322F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#37322F] transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#37322F]">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="+852 9123 4567"
                  className="w-full px-4 py-3 border border-[#E0DEDB] rounded-lg text-sm text-[#37322F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#37322F] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#37322F]">留言</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="告訴我們您的需求..."
                  className="w-full px-4 py-3 border border-[#E0DEDB] rounded-lg text-sm text-[#37322F] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#37322F] transition-colors resize-none"
                />
              </div>

              {/* Hidden product tag */}
              <input type="hidden" name="product" value="Gogh AI Studio 預約咨詢" />

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#37322F] text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "提交中..." : "確認預約"}
              </button>

              <div className="text-xs text-[#9CA3AF] text-center">
                提交後我們會通過 email 或 WhatsApp 聯絡您
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
