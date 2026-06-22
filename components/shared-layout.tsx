"use client"

import Link from "next/link"
import { Clock } from "@/components/clock"
import { MobileMenu } from "@/components/mobile-menu"
import { LanguageSwitch } from "@/components/language-switch"
import { useLanguage } from "@/contexts/language-context"

import type { ReactNode } from "react"

interface SharedLayoutProps {
  children: ReactNode
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-white flex flex-col grid-pattern">
      <header className="sticky top-0 z-50 flex justify-between items-center p-5 md:px-10 lg:px-16 bg-[#030303]/90 backdrop-blur-md">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-white font-medium text-4xl flex items-center gap-3"
            aria-label="Gogh Studio Home"
          >
            <img
              src="/images/david_head_v2_transparent.png"
              alt="Gogh Studio Logo"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain"
            />
            <span className="font-sans">
              <span className="font-serif tracking-wide">Gogh</span> <span className="text-[0.6em] tracking-widest uppercase">STUDIO</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
          <Link href="/why" className="text-white/80 hover:text-white transition-colors minimal-link font-sans">
            {t("nav.why")}
          </Link>
          <Link href="/work" className="text-white/80 hover:text-white transition-colors minimal-link font-sans">
            {t("nav.work")}
          </Link>
          <Link href="/what" className="text-white/80 hover:text-white transition-colors minimal-link font-sans">
            {t("nav.what")}
          </Link>
          <Link href="/app-production" className="text-purple-400 hover:text-purple-300 transition-colors minimal-link font-sans font-semibold">
            APP $3,000
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-6 text-sm text-white/70 font-sans">
          <Clock city="香港" offset={8} />
          <Clock city="紐約" offset={-5} />
          <LanguageSwitch />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitch />
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  )
}

