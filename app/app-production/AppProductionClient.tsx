"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Smartphone, Palette, Code, Zap, Shield, Clock, Star, MessageCircle } from "lucide-react"
import { SharedLayout } from "@/components/shared-layout"
import { useLanguage } from "@/contexts/language-context"

const features = [
  {
    icon: Smartphone,
    title: "iOS & Android",
    description: "Native apps for both major platforms",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interface",
  },
  {
    icon: Code,
    title: "Custom Features",
    description: "Tailored functionality for your needs",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround time",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Thorough testing before launch",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Ongoing maintenance available",
  },
]

const process = [
  { step: "01", title: "Discovery", description: "We discuss your requirements and goals" },
  { step: "02", title: "Design", description: "UI/UX mockups and prototypes" },
  { step: "03", title: "Development", description: "Building your app with clean code" },
  { step: "04", title: "Launch", description: "Testing, refinement, and deployment" },
]

export default function AppProductionClient() {
  const { t } = useLanguage()

  return (
    <SharedLayout>
      <div className="min-h-screen bg-[#030303] text-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 md:px-10 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] filter" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] filter" />
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("nav.back")}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                {t("appProduction.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              APP <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Production</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl"
            >
              {t("appProduction.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                {t("appProduction.getStarted")}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              {t("appProduction.whatsIncluded")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
                >
                  <feature.icon className="h-10 w-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              {t("appProduction.ourProcess")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold text-purple-500/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("appProduction.simplePricing")}</h2>
              


              <ul className="text-left space-y-4 mb-8 max-w-md mx-auto">
                {[
                  t("appProduction.feature1"),
                  t("appProduction.feature2"),
                  t("appProduction.feature3"),
                  t("appProduction.feature4"),
                  t("appProduction.feature5"),
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("appProduction.startProject")}
                </Link>
              </div>

              <p className="text-white/40 text-sm mt-6">
                {t("appProduction.customQuote")}
              </p>
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
              {t("appProduction.ready")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/70 mb-8"
            >
              {t("appProduction.contactDesc")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                {t("appProduction.contactUs")}
              </Link>
              <Link
                href="/work"
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                {t("appProduction.viewWork")}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Back Link */}
        <div className="px-4 md:px-10 lg:px-16 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("nav.back")}
          </Link>
        </div>
      </div>
    </SharedLayout>
  )
}
