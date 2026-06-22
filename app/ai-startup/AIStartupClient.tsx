"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Smartphone, Video, UserCheck, Check, ArrowRight, Zap, Shield, Clock, Star, MessageCircle } from "lucide-react"
import { SharedLayout } from "@/components/shared-layout"
import { useLanguage } from "@/contexts/language-context"

const packages = [
  {
    icon: Globe,
    title: "1 X 網站",
    description: "俾客人一個專業形象",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "1 X 手機APP",
    description: "將你嘅品牌帶到客人手機",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Video,
    title: "3 X AI廣告",
    description: "3條片，幫你自動搵客",
    color: "from-orange-500 to-yellow-400",
  },
]

const benefits = [
  { icon: Zap, text: "快速交付" },
  { icon: Shield, text: "專業質素" },
  { icon: Clock, text: "有專人跟進" },
  { icon: Star, text: "唔洗煩" },
]

const targets = [
  "想網上創業但係唔識技術",
  "想轉型做數碼化但係預算有限",
  "想快啲有產品可以推出市場",
]

export default function AIStartupClient() {
  const { t } = useLanguage()

  return (
    <SharedLayout>
      <div className="min-h-screen bg-[#030303] text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 md:px-10 lg:px-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] filter" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] filter" />
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                🐬 AI創業套餐
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                $3,888
              </span>
              <span className="text-white ml-4">
                搞掂晒！
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl"
            >
              網站 X1 + APP程式 X1 + AI廣告 X3<br/>
              <span className="text-white">唔洗 HK$4,000，全部搞掂！</span>
            </motion.p>

            {/* Package Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4`}>
                    <pkg.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-white/60">{pkg.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <benefit.icon className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/85291709891"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp 查詢：9170 9891
              </a>
              <Link
                href="/work"
                className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                睇我哋嘅作品集
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Who is this for Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              最啱你？
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targets.map((target, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <p className="text-lg">{target}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              你會得到啲咩？
            </motion.h2>

            <div className="space-y-6">
              {/* Website */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1 X 專業網站</h3>
                    <p className="text-white/60 mb-4">俾客人一個專業形象，唔使再靠其他平台</p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> 電腦 + 手機版同步</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> 簡潔易用嘅介面</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> SEO優化，更容易被搵到</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* APP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1 X 手機APP</h3>
                    <p className="text-white/60 mb-4">將你嘅品牌帶到客人手機，隨時隨地接觸佢哋</p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> iOS + Android 雙平台</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> 品牌形象設計</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> 可以上架 App Store</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* AI Ads */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3 X AI廣告影片</h3>
                    <p className="text-white/60 mb-4">3條片，幫你自動搵客，省時又省力</p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> AI 生成高質影片</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> 適合 Facebook / Instagram</li>
                      <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> 可以用嚟宣傳或賣廣告</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-3xl p-8 md:p-12"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="h-8 w-8 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                有專人跟進，你專心做生意就得！
              </h2>
              <p className="text-xl text-white/70 mb-8">
                我哋幫你搞掂技術問題，你唔使周圍搵唔同供應商<br/>
                一次過搞掂，省時又省心！
              </p>
              <a
                href="https://wa.me/85291709891"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                而家就傾！WhatsApp 9170 9891
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              準備好未？
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/70 mb-8"
            >
              HK$3,888，一個價錢，網站 + APP + AI廣告全部搞掂！<br/>
              立即聯絡我哋，開始你嘅AI創業之旅！
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/85291709891"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp 9170 9891
              </a>
              <Link
                href="/work"
                className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                睇作品集
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Back Link */}
        <div className="px-4 md:px-10 lg:px-16 py-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            ← 返去 Gogh Studio 首頁
          </Link>
        </div>
      </div>
    </SharedLayout>
  )
}
