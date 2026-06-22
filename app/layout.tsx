import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "Gogh Studio | Minimalist Design for Modern Brands",
  description:
    "A Hong Kong-based design studio specializing in minimalist brand identity, UX/UI, and digital experiences for forward-thinking businesses.",
  keywords: ["design studio", "minimalist design", "UX/UI", "brand identity", "web design", "Hong Kong"],
  authors: [{ name: "Gogh Studio" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  generator: 'v0.dev',
  openGraph: {
    title: "Gogh Studio | AI Startup Package $3,888",
    description: "網站 X1 + APP程式 X1 + AI廣告 X3 = 唔洗 HK$4,000，全部搞掂！自己搞Startup？一次過搞掂！",
    url: "https://gogh.studio",
    siteName: "Gogh Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gogh Studio - AI Startup Package $3,888",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gogh Studio | AI Startup Package $3,888",
    description: "網站 X1 + APP程式 X1 + AI廣告 X3 = 唔洗 HK$4,000，全部搞掂！",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-serif antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
