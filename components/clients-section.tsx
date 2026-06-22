"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function ClientsSection() {
  const { t } = useLanguage()

  const clients = [
    { id: 1, name: "Micbot", sector: "Robotics" },
    { id: 2, name: "Hisense", sector: "Electronics" },
    { id: 3, name: "TOYOTA", sector: "Automotive" },
    { id: 4, name: "Lynk & Co", sector: "Automotive" },
    { id: 5, name: "Dreame", sector: "Smart Home" },
    { id: 6, name: "MasterGo", sector: "Design Tools" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 lg:px-16 bg-[#030303]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4 font-sans">
            {t('clients.trustedBy') || 'Trusted By'}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 font-sans">
            {t('clients.header') || 'Working with world-class brands'}
          </h2>
        </div>

        {/* Client Logos / Names */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
            >
              <span className="text-white font-semibold text-lg md:text-xl font-sans tracking-tight">
                {client.name}
              </span>
              <span className="text-white/40 text-xs mt-2 font-sans">
                {client.sector}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50+", label: t('clients.projects') || 'Projects Completed' },
            { value: "30+", label: t('clients.clients') || 'Happy Clients' },
            { value: "5+", label: t('clients.years') || 'Years Experience' },
            { value: "100%", label: t('clients.satisfaction') || 'Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white font-sans">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-2 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
