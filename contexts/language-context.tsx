"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "zh-Hant" | "zh-Hans"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.why": "Why",
    "nav.work": "Work",
    "nav.what": "What",
    "nav.plans": "Plans",
    "nav.back": "← Back to home",

    // Home page
    "home.approach": "Our minimalist approach",
    "home.subtitle": "Where simplicity meets functionality",
    "home.heading": "Transforming brands through minimalist design",
    "home.cta": "Book a consultation",
    
    // Rotating text section
    "home.rotating.title": "How We Make Design",
    "home.rotating.prefix": "We create designs that are",
    "home.rotating.text1": "minimal & elegant",
    "home.rotating.text2": "functional & intuitive",
    "home.rotating.text3": "modern & impactful",

    // New Hero Section
    "hero.makeYour": "All-in-One AI Services",
    "hero.website": "24/7 Personal Support",
    "hero.description": "Professional AI Services · AI Video/Ads/Website/Program/APP/ AI AGENT · Dedicated Project Manager",
    "hero.button1": "Explore Services",
    "hero.button2": "Contact Us",
    "hero.rotate.fancy": "Video Production",
    "hero.rotate.fun": "Ad Creation",
    "hero.rotate.lovely": "Web Development",
    "hero.rotate.weird": "Program Design",
    "hero.rotate.funky": "APP Development",
    "hero.rotate.dancing": "AI AGENT",
    "hero.rotate.sexy": "Automation Services",
    "hero.rotate.cool": "Enterprise AI",
    "hero.rotate.go": "Brand Image",
    "hero.rotate.fire": "Video Effects",
    "hero.rotate.animated": "Social Marketing",
    "hero.rotate.pop": "Visual Design",
    "hero.rotate.rock": "Content Creation",

    // Banner
    "banner.title": "Design Consultation",
    "banner.subtitle": "A minimalist approach for your brand",
    "banner.free": "FREE",

    // Why page
    "why.title": "Why Gogh?",
    "why.p1":
      "We believe design is most powerful when stripped to its essence—a perfect balance of form and function that creates meaningful connections between brands and their audiences.",
    "why.p2":
      "Our approach draws inspiration from minimalist principles, combining clean aesthetics with meticulous attention to detail to deliver designs that stand out in today's cluttered digital landscape.",
    "why.p3":
      "With Gogh Studio, you're partnering with designers who understand the Hong Kong market—professionals who transform your vision into elegant, effective digital experiences that drive real results.",
    "why.vision": "Minimalist Vision",
    "why.vision.desc": "We distill complex ideas into clean, focused designs that capture your brand's unique essence.",
    "why.execution": "Precise Execution",
    "why.execution.desc":
      "Our skilled designers blend minimalist principles with modern digital tools for elegant results.",
    "why.impact": "Business Impact",
    "why.impact.desc": "Clean design with purpose—we create experiences that drive engagement and conversion.",

    // Work page
    "work.title": "Our Work",
    "work.subtitle": "Explore our AI-driven creative portfolio, showcasing professional technology and innovative thinking in every project.",
    "work.category.all": "All Work",
    "work.category.AI影片製作": "AI Video Production",
    "work.category.網站開發": "Website Development",
    "work.category.品牌設計": "Brand Design",
    "work.category.AI自動化": "AI Automation",

    // Project 1: Micbot Robot Official Website
    "work.project.1.title": "Micbot Robot Official Website",
    "work.project.1.client": "Micbot",
    "work.project.1.description": "AI robot product official website, showcasing intelligent dialogue technology and brand image",
    "work.project.1.tag1": "Website",
    "work.project.1.tag2": "AI",
    "work.project.1.tag3": "Robotics",

    // Project 2: Beijing Shangyun Elevator Official Website
    "work.project.2.title": "Beijing Shangyun Elevator Official Website",
    "work.project.2.client": "Beijing Shangyun Elevator",
    "work.project.2.description": "Elevator company corporate website, showcasing elevator products and services",
    "work.project.2.tag1": "Corporate Website",
    "work.project.2.tag2": "Elevator",
    "work.project.2.tag3": "B2B",

    // Project 3: Xiangjing Hisense Washing Machine
    "work.project.3.title": "Xiangjing Hisense Washing Machine",
    "work.project.3.client": "Hisense",
    "work.project.3.description": "Hisense washing machine brand visual design, blending technology with lifestyle aesthetics",
    "work.project.3.tag1": "Brand Design",
    "work.project.3.tag2": "Home Appliance",
    "work.project.3.tag3": "Visual System",

    // Project 4: Four E App
    "work.project.4.title": "Four E App",
    "work.project.4.client": "Four E",
    "work.project.4.description": "Mobile app design with intuitive user experience",
    "work.project.4.tag1": "App Design",
    "work.project.4.tag2": "UX",
    "work.project.4.tag3": "Mobile",

    // Project 5: Lynk & Co App Redesign
    "work.project.5.title": "Lynk & Co App Redesign",
    "work.project.5.client": "Lynk & Co",
    "work.project.5.description": "Lynk & Co mobile app redesign with modern UI/UX",
    "work.project.5.tag1": "App Design",
    "work.project.5.tag2": "Automotive",
    "work.project.5.tag3": "UX",

    // Project 6: 2024 Portfolio
    "work.project.6.title": "2024 Portfolio",
    "work.project.6.client": "2024",
    "work.project.6.description": "Complete portfolio showcase with diverse design projects",
    "work.project.6.tag1": "Portfolio",
    "work.project.6.tag2": "Design",
    "work.project.6.tag3": "Showcase",

    // Project 7: Wu Box HEMS APP
    "work.project.7.title": "Wu Box HEMS APP Launch",
    "work.project.7.client": "Wu Box",
    "work.project.7.description": "Wu Box HEMS APP new product launch with smart home features",
    "work.project.7.tag1": "App Design",
    "work.project.7.tag2": "Smart Home",
    "work.project.7.tag3": "Product Launch",

    // Project 10: TOYOTA GR系列车辆管理小程序 (EN)
    "work.project.10.title": "TOYOTA GR Series Vehicle Management",
    "work.project.10.client": "TOYOTA",
    "work.project.10.description": "TOYOTA GR series vehicle management mini program",
    "work.project.10.tag1": "Mini Program",
    "work.project.10.tag2": "Automotive",
    "work.project.10.tag3": "Vehicle Management",

    // Project 11: 落至晚樱 (EN)
    "work.project.11.title": "Falling Cherry Blossoms",
    "work.project.11.client": "落至晚樱",
    "work.project.11.description": "Falling cherry blossoms - UI design portfolio",
    "work.project.11.tag1": "UI Design",
    "work.project.11.tag2": "Portfolio",
    "work.project.11.tag3": "APP Design",

    // Project 12: 家庭微电网APP_UIUX设计稿交互原型 (EN)
    "work.project.12.title": "Family Microgrid APP UI/UX Design",
    "work.project.12.client": "家庭微电网",
    "work.project.12.description": "Family microgrid APP UI/UX design and interactive prototype",
    "work.project.12.tag1": "APP Design",
    "work.project.12.tag2": "UI/UX",
    "work.project.12.tag3": "Smart Home",

    // Project 13: Security Camera UI kit (EN)
    "work.project.13.title": "Security Camera UI kit",
    "work.project.13.client": "kopenLi",
    "work.project.13.description": "Security camera UI kit design",
    "work.project.13.tag1": "UI Kit",
    "work.project.13.tag2": "Security",
    "work.project.13.tag3": "APP Design",

    // Project 14: Dreame App迭代設計 (EN)
    "work.project.14.title": "Dreame App Iterative Design",
    "work.project.14.client": "Dreame",
    "work.project.14.description": "Dyson smart home APP iterative design",
    "work.project.14.tag1": "APP Design",
    "work.project.14.tag2": "Smart Home",
    "work.project.14.tag3": "Iterative Design",

    // Project 15: 2026UI作品集 (EN)
    "work.project.15.title": "2026 UI Works Collection",
    "work.project.15.client": "Loooo",
    "work.project.15.description": "2026 UI works collection by designer Loooo",
    "work.project.15.tag1": "UI Design",
    "work.project.15.tag2": "Portfolio",
    "work.project.15.tag3": "2026",

    // Project 16: Ncollecto (EN)
    "work.project.16.title": "Ncollecto - Cultural Artifact RWA APP",
    "work.project.16.client": "Ncollecto",
    "work.project.16.description": "Cultural artifact RWA project APP UI/UX design",
    "work.project.16.tag1": "APP Design",
    "work.project.16.tag2": "RWA",
    "work.project.16.tag3": "Blockchain",


    // Project 17: 携程国际事业部设计年鉴 (EN)
    "work.project.17.title": "Ctrip International Design Annual",
    "work.project.17.client": "携程",
    "work.project.17.description": "Ctrip International Business Division design annual",
    "work.project.17.tag1": "Design Annual",
    "work.project.17.tag2": "Travel",
    "work.project.17.tag3": "Corporate",


    // Project 18: 智能婴童看护APP (EN)
    "work.project.18.title": "Smart Baby Care APP",
    "work.project.18.client": "智能婴童",
    "work.project.18.description": "Smart baby care APP design",
    "work.project.18.tag1": "APP Design",
    "work.project.18.tag2": "Baby Care",
    "work.project.18.tag3": "Smart Home",

    // Project 20: 2026作品集匯總 (EN)
    "work.project.20.title": "2026 Portfolio Summary",
    "work.project.20.client": "2026",
    "work.project.20.description": "2026 portfolio summary - AI automation works collection",
    "work.project.20.tag1": "AI Automation",
    "work.project.20.tag2": "Portfolio",
    "work.project.20.tag3": "2026",

    // Project 21: 2025智能家居UI作品集 (EN)
    "work.project.21.title": "2025 Smart Home UI Portfolio",
    "work.project.21.client": "周游0626",
    "work.project.21.description": "2025 smart home UI portfolio",
    "work.project.21.tag1": "AI Automation",
    "work.project.21.tag2": "Smart Home",
    "work.project.21.tag3": "UI Design",


    // Project 22: Capy個人理財APP (EN)
    "work.project.22.title": "Capy Personal Finance APP",
    "work.project.22.client": "Capy",
    "work.project.22.description": "Capy personal finance APP design",
    "work.project.22.tag1": "APP Design",
    "work.project.22.tag2": "Finance",
    "work.project.22.tag3": "Personal",

    // Project 23: Beck_UI作品集 (EN)
    "work.project.23.title": "Beck UI Works Collection",
    "work.project.23.client": "Beck_z",
    "work.project.23.description": "Beck UI works collection 2026 - GIF format",
    "work.project.23.tag1": "UI Design",
    "work.project.23.tag2": "Portfolio",
    "work.project.23.tag3": "GIF",

    // Project 24: OMS (EN)
    "work.project.24.title": "OMS",
    "work.project.24.client": "OMS",
    "work.project.24.description": "OMS brand design",
    "work.project.24.tag1": "Brand Design",
    "work.project.24.tag2": "Corporate",
    "work.project.24.tag3": "Visual Identity",

    // Project 25: X-MATE Wallet Project (EN)
    "work.project.25.title": "X-MATE Wallet Project",
    "work.project.25.client": "梁宇龙",
    "work.project.25.description": "Blockchain X-MATE wallet project UI design, showcasing innovative crypto wallet interface and user experience",
    "work.project.25.tag1": "APP Design",
    "work.project.25.tag2": "Blockchain",
    "work.project.25.tag3": "Wallet",

    // Project 26: Richland Gem App
    "work.project.26.title": "Richland Gem App",
    "work.project.26.client": "Richland",
    "work.project.26.description": "Richland gemstone trading app, featuring elegant UI design and seamless user experience for luxury gem authentication and trading",
    "work.project.26.tag1": "App Design",
    "work.project.26.tag2": "Luxury",
    "work.project.26.tag3": "E-commerce",

    // Project 27: 流动泡泡糖 (EN)
    "work.project.27.title": "流动泡泡糖",
    "work.project.27.client": "流动泡泡糖",
    "work.project.27.description": "UI portfolio design showcasing creative interface works",
    "work.project.27.tag1": "UI Design",
    "work.project.27.tag2": "Portfolio",
    "work.project.27.tag3": "Design",

    // What page
    "what.title": "What We Do",
    "what.service1.title": "Minimalist Branding",
    "what.service1.desc":
      "Creating distinctive brand identities that capture your essence through clean, focused design that resonates with Hong Kong audiences.",
    "what.service2.title": "Clean UX/UI Design",
    "what.service2.desc":
      "Crafting intuitive and visually refined digital experiences that engage users and elevate your digital presence.",
    "what.service3.title": "Monochrome Web Experiences",
    "what.service3.desc":
      "Building elegant websites that blend minimalist design with technical excellence for memorable user journeys.",
    "what.service4.title": "Design Systems",
    "what.service4.desc":
      "Developing comprehensive design frameworks that ensure consistency and efficiency across all your digital touchpoints.",

    // Services section
    "services.title": "Our Advantages",
    "services.ai.title": "AI-Driven Creativity",
    "services.ai.description": "We combine AI with human creativity to explore possibilities beyond traditional design approaches.",
    "services.aesthetics.title": "East-West Aesthetics",
    "services.aesthetics.description": "Our team blends Eastern Zen aesthetics with Western design principles for unique creations.",
    "services.tech.title": "Tech & Design Integration",
    "services.tech.description": "We're not just designers, but technical experts creating beautiful and powerful solutions.",
    "services.video.title": "AI Video/Ads Production",
    "services.video.description": "AI-assisted video production, from planning to post-production, bringing creative ideas to life with impact.",
    "services.website.title": "Website/Program/APP Development",
    "services.website.description": "Modern website and application development with customized solutions for seamless user experience.",
    "services.projectManager.title": "Dedicated Project Manager",
    "services.projectManager.description": "Every project comes with a dedicated manager providing personalized support throughout the entire process.",
    "services.learnMoreButton": "Learn More About Our Services",

    // Plans page
    "plans.title": "Our Plans",
    "plans.essential": "Essential",
    "plans.essential.price": "HK$3,888",
    "plans.essential.desc": "Perfect for specific design needs",
    "plans.essential.feature1": "Brand identity design",
    "plans.essential.feature2": "Website design (up to 5 pages)",
    "plans.essential.feature3": "One round of revisions",
    "plans.essential.feature4": "2 weeks delivery",
    "plans.startup": "AI Startup",
    "plans.startup.price": "HK$3,800",
    "plans.startup.desc": "Everything you need to launch your AI business",
    "plans.startup.feature1": "Website X1",
    "plans.startup.feature2": "APP Program X1",
    "plans.startup.feature3": "AI Ads X3",
    "plans.startup.feature4": "Dedicated project manager",
    "plans.premium": "Premium",
    "plans.premium.price": "HK$65,000/mo",
    "plans.premium.desc": "Ongoing creative support for growing brands",
    "plans.premium.feature1": "Unlimited design requests",
    "plans.premium.feature2": "UI/UX design",
    "plans.premium.feature3": "Website & app design",
    "plans.premium.feature4": "Priority support",
    "plans.premium.feature5": "Fast turnaround",
    "plans.enterprise": "Enterprise",
    "plans.enterprise.price": "Custom",
    "plans.enterprise.desc": "Comprehensive solutions for larger organizations",
    "plans.enterprise.feature1": "Dedicated creative team",
    "plans.enterprise.feature2": "Design direction",
    "plans.enterprise.feature3": "Design systems",
    "plans.enterprise.feature4": "Custom integrations",
    "plans.enterprise.feature5": "24/7 support",
    "plans.cta": "Get started",

    // Contact page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch",
    "contact.desc":
      "Ready to transform your brand with minimalist design? We're here to help you create exceptional digital experiences that captivate your audience and elevate your business in Hong Kong and beyond.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.location.value": "Central, Hong Kong",
    "contact.consultation.title": "Design Consultation",
    "contact.consultation.desc":
      "Book a free 45-minute consultation with our design team to discuss your brand challenges and explore minimalist solutions.",
    "contact.consultation.cta": "Learn more →",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Message sent",
    "contact.form.success.desc": "We'll get back to you as soon as possible.",

    // Consultation page
    "consultation.title": "Design Consultation",
    "consultation.badge": "Free Strategy Session",
    "consultation.expect": "What to expect",
    "consultation.expect.1": "A 45-minute video call with our design directors",
    "consultation.expect.2": "Analysis of your current brand challenges and design opportunities",
    "consultation.expect.3": "Minimalist design recommendations you can implement immediately",
    "consultation.expect.4": "No obligations or sales pressure - just valuable design insights",
    "consultation.perfect": "Perfect for",
    "consultation.perfect.1": "Hong Kong businesses looking to establish a distinctive minimalist identity",
    "consultation.perfect.2": "Brands needing to refresh their visual language",
    "consultation.perfect.3": "Teams preparing for a product launch or redesign",
    "consultation.perfect.4": "Founders seeking expert design guidance",
    "consultation.cta": "Book your free session",

    // Process section
    "process.title": "Our Design Process",
    "process.subtitle": "A streamlined approach to creating impactful minimalist designs",
    "process.step1.title": "Discovery",
    "process.step1.description": "We learn about your brand, goals, and audience to establish a strategic foundation.",
    "process.step2.title": "Creation",
    "process.step2.description": "Our designers craft clean, purposeful solutions that embody your brand essence.",
    "process.step3.title": "Refinement",
    "process.step3.description": "We perfect every detail to ensure the final design achieves maximum impact.",

    // Testimonials section
    "testimonials.title": "What Our Clients Say",
    "testimonials.quote1":
      "Gogh Studio transformed our brand with their minimalist approach. The clean design perfectly captures our essence while standing out in the Hong Kong market.",
    "testimonials.author1": "Sarah Chen",
    "testimonials.role1": "Marketing Director",
    "testimonials.company1": "HK Financial Group",
    "testimonials.quote2":
      "Working with Gogh was effortless. Their attention to detail and focus on simplicity helped us create a digital experience our users love.",
    "testimonials.author2": "Michael Wong",
    "testimonials.role2": "Founder",
    "testimonials.company2": "TechFlow",
    "testimonials.quote3":
      "The team's understanding of minimalist design principles elevated our brand identity. Their work has directly contributed to our business growth.",
    "testimonials.author3": "Jessica Tam",
    "testimonials.role3": "Creative Director",
    "testimonials.company3": "Luxe Retail",

    // Clients section
    "clients.title": "Trusted by Leading Brands",

    // CTA section
    "cta.title": "Ready to Transform Your Brand?",
    "cta.description": "Let's create a minimalist design that captures your essence and resonates with your audience.",
    "cta.button": "Start Your Project",

    // Footer
    "footer.tagline":
      "A minimalist design studio creating elegant, effective digital experiences for forward-thinking brands in Hong Kong.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.hours": "Working Hours",
    "footer.weekdays": "Monday-Friday",
    "footer.weekend": "Saturday-Sunday",
    "footer.closed": "Closed",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Portfolio section
    "portfolio.title": "Portfolio",
    "portfolio.viewProject": "View Project",
    "portfolio.moveToInteract": "Move mouse to interact",
    "portfolio.tapToView": "Tap to view",
    
    "projects.project1.title": "智能无人便利店系统",
    "projects.project1.client": "AI驱动的全自动购物体验",
    "projects.project1.description": "整合AI技术与移动应用，为用户提供24小时自助购物服务。通过手机APP即可完成商品浏览、购买和支付全过程。",
    "projects.project2.title": "Clean UX Design",
    "projects.project2.client": "Tech Startup",
    "projects.project3.title": "智能POS系统解决方案",
    "projects.project3.client": "Lightspeed零售系统集成",
    "projects.project3.description": "为零售商打造的新一代POS系统集成方案，实现库存管理、销售分析、员工管理和客户关系维护的一体化运营。支持多门店管理，提供实时数据同步和智能分析报表。",
    "projects.project3.tag1": "系统集成",
    "projects.project3.tag2": "零售科技",
    "projects.project3.tag3": "数据分析",

    // APP Production Landing Page
    "appProduction.badge": "專業服務",
    "appProduction.subtitle": "將您的想法轉化為強大的流動應用程式。專業 iOS & Android 開發，收費由 $3,000 起。",
    "appProduction.startingFrom": "起步價",
    "appProduction.getStarted": "立即開始",
    "appProduction.whatsIncluded": "包含服務",
    "appProduction.ourProcess": "我們的流程",
    "appProduction.simplePricing": "簡單透明的定價",
    "appProduction.basePrice": "標準 APP 項目基本收費",
    "appProduction.feature1": "iOS & Android 原生應用",
    "appProduction.feature2": "定制 UI/UX 設計",
    "appProduction.feature3": "最多 10 個定制功能",
    "appProduction.feature4": "應用商店提交支持",
    "appProduction.feature5": "2 週交付",
    "appProduction.startProject": "開始您的項目",
    "appProduction.customQuote": "定制功能可額外收費",
    "appProduction.ready": "準備好開發您的 APP 了嗎？",
    "appProduction.contactDesc": "聯絡我們進行免費諮詢和定制報價",
    "appProduction.contactUs": "聯絡我們",
    "appProduction.viewWork": "查看我們的作品",
  },
  "zh-Hant": {
    // Navigation
    "nav.why": "理念",
    "nav.work": "作品",
    "nav.what": "服務",
    "nav.plans": "方案",
    "nav.back": "← 返回首頁",

    // Home page
    "home.approach": "我們的極簡主義方法",
    "home.subtitle": "簡約與功能的完美結合",
    "home.heading": "通過極簡設計改變品牌形象",
    "home.cta": "預約諮詢",
    
    // Rotating text section
    "home.rotating.title": "我們如何設計",
    "home.rotating.prefix": "我們創造的設計是",
    "home.rotating.text1": "簡約而優雅的",
    "home.rotating.text2": "實用而直觀的",
    "home.rotating.text3": "現代而有影響力的",

    // New Hero Section
    "hero.makeYour": "一站式專業AI服務",
    "hero.website": "24時貼身跟進",
    "hero.description": "專業AI服務 · AI影片/廣告製作/網站/程式/APP/ AI AGENT · 專案經理一對一",
    "hero.button1": "探索服務",
    "hero.button2": "聯繫我們",
    "hero.rotate.fancy": "AI影片製作",
    "hero.rotate.fun": "廣告片創建",
    "hero.rotate.lovely": "網站開發",
    "hero.rotate.weird": "程式設計",
    "hero.rotate.funky": "APP開發",
    "hero.rotate.dancing": "AI AGENT",
    "hero.rotate.sexy": "自動化服務",
    "hero.rotate.cool": "企業智能化",
    "hero.rotate.go": "品牌形象",
    "hero.rotate.fire": "影片特效",
    "hero.rotate.animated": "社群行銷",
    "hero.rotate.pop": "視覺設計",
    "hero.rotate.rock": "內容創作",

    // Banner
    "banner.title": "設計諮詢",
    "banner.subtitle": "為您的品牌提供極簡方案",
    "banner.free": "免費",

    // Why page
    "why.title": "為何選擇Gogh?",
    "why.p1": "我們相信設計在簡化到本質時最為強大——形式與功能的完美平衡，為品牌與受眾之間創造有意義的連接。",
    "why.p2": "我們的方法汲取極簡主義原則的靈感，將簡潔美學與對細節的精心關注相結合，在當今雜亂的數碼環境中脫穎而出。",
    "why.p3":
      "與Gogh Studio合作，您將與了解香港市場的設計師攜手——這些專業人士將您的願景轉化為優雅、有效的數碼體驗，帶來實際成果。",
    "why.vision": "極簡願景",
    "why.vision.desc": "我們將複雜的想法提煉為簡潔、專注的設計，捕捉您品牌的獨特本質。",
    "why.execution": "精準執行",
    "why.execution.desc": "我們的設計師將極簡主義原則與現代數碼工具相結合，創造優雅的成果。",
    "why.impact": "商業影響",
    "why.impact.desc": "有目的的簡潔設計——我們創造能夠提高參與度和轉化率的體驗。",

    // Work page
    "work.title": "數碼轉營升級案例分享",
    "work.subtitle": "探索我們的AI驅動創意作品，每個項目都展現專業技術與創新思維的完美結合。",
    "work.category.all": "全部作品",
    "work.category.AI影片製作": "AI影片製作",
    "work.category.網站開發": "網站開發",
    "work.category.品牌設計": "品牌設計",
    "work.category.AI自動化": "AI自動化",

    // Project 1: Micbot Robot Official Website
    "work.project.1.title": "Micbot 機械人官網",
    "work.project.1.client": "Micbot",
    "work.project.1.description": "AI 機械人產品官網，展示智能對話技術與品牌形象",
    "work.project.1.tag1": "官網",
    "work.project.1.tag2": "AI",
    "work.project.1.tag3": "機械人",

    // Project 2: Beijing Shangyun Elevator Official Website
    "work.project.2.title": "北京上云電梯官網",
    "work.project.2.client": "北京上云電梯",
    "work.project.2.description": "電梯公司企業官網，展示電梯產品與服務",
    "work.project.2.tag1": "企業官網",
    "work.project.2.tag2": "電梯",
    "work.project.2.tag3": "B2B",

    // Project 3: Xiangjing Hisense Washing Machine
    "work.project.3.title": "響鯨海信洗衣機",
    "work.project.3.client": "海信",
    "work.project.3.description": "海信洗衣機品牌視覺設計，融合科技感與生活美學",
    "work.project.3.tag1": "品牌設計",
    "work.project.3.tag2": "家電",
    "work.project.3.tag3": "視覺系統",

    // Project 4: Four E App (繁體)
    "work.project.4.title": "Four E App",
    "work.project.4.client": "Four E",
    "work.project.4.description": "流動應用程式設計，直覺式用戶體驗",
    "work.project.4.tag1": "應用設計",
    "work.project.4.tag2": "UX",
    "work.project.4.tag3": "流動",

    // Project 5: Lynk & Co App Redesign (繁體)
    "work.project.5.title": "領克汽車APP改版設計",
    "work.project.5.client": "Lynk & Co",
    "work.project.5.description": "領克汽車流動應用程式改版，現代化 UI/UX 設計",
    "work.project.5.tag1": "應用設計",
    "work.project.5.tag2": "汽車",
    "work.project.5.tag3": "UX",

    // Project 6: 2024 Portfolio (繁體)
    "work.project.6.title": "2024 作品集",
    "work.project.6.client": "2024",
    "work.project.6.description": "多元化設計項目作品集展示",
    "work.project.6.tag1": "作品集",
    "work.project.6.tag2": "設計",
    "work.project.6.tag3": "展示",

    // Project 7: Wu Box HEMS APP (繁體)
    "work.project.7.title": "悟匣 HEMS APP 新品發布",
    "work.project.7.client": "悟匣",
    "work.project.7.description": "悟匣 HEMS APP 智能家居新品發布",
    "work.project.7.tag1": "應用設計",
    "work.project.7.tag2": "智能家居",
    "work.project.7.tag3": "新品發布",

    // Project 10: TOYOTA GR系列车辆管理小程序 (繁體)
    "work.project.10.title": "TOYOTA GR系列車輛管理小程序",
    "work.project.10.client": "TOYOTA",
    "work.project.10.description": "TOYOTA GR 系列車輛管理小程序",
    "work.project.10.tag1": "小程序",
    "work.project.10.tag2": "汽車",
    "work.project.10.tag3": "車輛管理",

    // Project 11: 落至晚樱 (繁體)
    "work.project.11.title": "落至晚樱",
    "work.project.11.client": "落至晚樱",
    "work.project.11.description": "落至晚樱 - UI 設計作品集",
    "work.project.11.tag1": "UI 設計",
    "work.project.11.tag2": "作品集",
    "work.project.11.tag3": "應用設計",

    // Project 12: 家庭微电网APP_UIUX设计稿交互原型 (繁體)
    "work.project.12.title": "家庭微電網APP UI/UX設計稿交互原型",
    "work.project.12.client": "家庭微電網",
    "work.project.12.description": "家庭微電網 APP UI/UX 設計稿與交互原型",
    "work.project.12.tag1": "應用設計",
    "work.project.12.tag2": "UI/UX",
    "work.project.12.tag3": "智能家居",

    // Project 13: Security Camera UI kit (繁體)
    "work.project.13.title": "Security Camera UI kit",
    "work.project.13.client": "kopenLi",
    "work.project.13.description": "Security Camera UI kit 設計",
    "work.project.13.tag1": "UI 套件",
    "work.project.13.tag2": "監控",
    "work.project.13.tag3": "應用設計",

    // Project 14: Dreame App迭代設計 (繁體)
    "work.project.14.title": "Dreame App 迭代設計",
    "work.project.14.client": "Dreame",
    "work.project.14.description": "Dyson 智能家居 APP 迭代設計",
    "work.project.14.tag1": "應用設計",
    "work.project.14.tag2": "智能家居",
    "work.project.14.tag3": "迭代設計",

    // Project 15: 2026UI作品集 (繁體)
    "work.project.15.title": "2026 UI 作品集",
    "work.project.15.client": "Loooo",
    "work.project.15.description": "設計師 Loooo 的 2026 UI 作品集",
    "work.project.15.tag1": "UI 設計",
    "work.project.15.tag2": "作品集",
    "work.project.15.tag3": "2026",

    // Project 16: Ncollecto (繁體)
    "work.project.16.title": "Ncollecto - 文物類 RWA 項目 APP UI/UX 設計",
    "work.project.16.client": "Ncollecto",
    "work.project.16.description": "文物類 RWA 項目 APP UI/UX 設計",
    "work.project.16.tag1": "應用設計",
    "work.project.16.tag2": "RWA",
    "work.project.16.tag3": "區塊鏈",

    // Project 17: 携程国际事业部设计年鉴 (繁體)
    "work.project.17.title": "攜程國際事業部門設計年鑑",
    "work.project.17.client": "攜程",
    "work.project.17.description": "攜程國際事業部門設計年鑑",
    "work.project.17.tag1": "設計年鑑",
    "work.project.17.tag2": "旅遊",
    "work.project.17.tag3": "企業",

    // Project 18: 智能婴童看护APP (繁體)
    "work.project.18.title": "智能嬰童看護APP",
    "work.project.18.client": "智能嬰童",
    "work.project.18.description": "智能嬰童看護 APP 設計",
    "work.project.18.tag1": "應用設計",
    "work.project.18.tag2": "嬰兒護理",
    "work.project.18.tag3": "智能家居",

    // Project 20: 2026作品集匯總 (繁體)
    "work.project.20.title": "2026 作品集匯總",
    "work.project.20.client": "2026",
    "work.project.20.description": "2026 作品集匯總 - AI 自動化作品集",
    "work.project.20.tag1": "AI 自動化",
    "work.project.20.tag2": "作品集",
    "work.project.20.tag3": "2026",

    // Project 21: 2025智能家居UI作品集 (繁體)
    "work.project.21.title": "2025 智能家居 UI 作品集",
    "work.project.21.client": "周游0626",
    "work.project.21.description": "2025 智能家居 UI 作品集",
    "work.project.21.tag1": "AI 自動化",
    "work.project.21.tag2": "智能家居",
    "work.project.21.tag3": "UI 設計",

    // Project 22: Capy個人理財APP (繁體)
    "work.project.22.title": "Capy 個人理財APP",
    "work.project.22.client": "Capy",
    "work.project.22.description": "Capy 個人理財 APP 設計",
    "work.project.22.tag1": "應用設計",
    "work.project.22.tag2": "金融",
    "work.project.22.tag3": "個人",
    // Project 23: Beck_UI作品集 (繁體)
    "work.project.23.title": "Beck UI 作品集",
    "work.project.23.client": "Beck_z",
    "work.project.23.description": "Beck UI 作品集 2026 - GIF 格式",
    "work.project.23.tag1": "UI 設計",
    "work.project.23.tag2": "作品集",
    "work.project.23.tag3": "GIF",

    // Project 24: OMS (繁體)
    "work.project.24.title": "OMS",
    "work.project.24.client": "OMS",
    "work.project.24.description": "OMS 品牌設計",
    "work.project.24.tag1": "品牌設計",
    "work.project.24.tag2": "企業",
    "work.project.24.tag3": "視覺識別",

    // Project 25: X-MATE錢包項目 (繁體)
    "work.project.25.title": "X-MATE錢包項目",
    "work.project.25.client": "梁宇龙",
    "work.project.25.description": "區塊鏈 X-MATE 錢包項目 UI 設計，展示創新加密貨幣錢包介面與用戶體驗",
    "work.project.25.tag1": "應用設計",
    "work.project.25.tag2": "區塊鏈",
    "work.project.25.tag3": "錢包",

    // Project 26: Richland 寶石APP
    "work.project.26.title": "Richland 寶石APP",
    "work.project.26.client": "Richland",
    "work.project.26.description": "Richland 寶石交易APP，採用優雅介面設計，展示寶石收藏與交易功能，為用戶提供尊貴的寶石鑑定及交易體驗",
    "work.project.26.tag1": "應用設計",
    "work.project.26.tag2": "尊貴",
    "work.project.26.tag3": "電子商務",

    // Project 27: 流动泡泡糖 (繁體)
    "work.project.27.title": "流动泡泡糖",
    "work.project.27.client": "流动泡泡糖",
    "work.project.27.description": "UI作品集設計，展示創意介面作品",
    "work.project.27.tag1": "UI設計",
    "work.project.27.tag2": "作品集",
    "work.project.27.tag3": "設計",

    // What page
    "what.title": "我們的服務",
    "what.service1.title": "極簡品牌識別",
    "what.service1.desc":
      "創造獨特的品牌形象，通過簡潔、專注的設計捕捉您的品牌本質，與香港受眾產生共鳴。",
    "what.service2.title": "清晰的用戶體驗設計",
    "what.service2.desc":
      "打造直觀且視覺精緻的數位體驗，吸引用戶並提升您的數位形象。",
    "what.service3.title": "黑白網頁體驗",
    "what.service3.desc":
      "構建優雅的網站，將極簡設計與技術卓越融為一體，創造難忘的用戶旅程。",
    "what.service4.title": "設計系統",
    "what.service4.desc":
      "開發全面的設計框架，確保在所有數位接觸點上保持一致性和效率。",

    // Services section
    "services.title": "我們的優勢",
    "services.ai.title": "AI驅動的創意",
    "services.ai.description": "我們結合人工智能與人類創意，探索傳統設計方法無法實現的可能性。",
    "services.aesthetics.title": "東西方美學融合",
    "services.aesthetics.description": "我們的團隊將東方禪意美學與西方設計原則融為一體，創造獨特作品。",
    "services.tech.title": "技術與設計的結合",
    "services.tech.description": "我們不僅是設計師，還是技術專家，創造美觀且功能強大的解決方案。",
    "services.video.title": "AI影片/廣告製作",
    "services.video.description": "AI輔助影視製作，從策劃到後期一站式完成，讓創意快速落地並產生影響力。",
    "services.website.title": "網站/程式/APP開發",
    "services.website.description": "現代化網站、應用程式開發，定製化解決方案，打造流暢用戶體驗。",
    "services.projectManager.title": "專案經理一對一",
    "services.projectManager.description": "每個項目配備專屬專案經理，全程貼身跟進，確保需求精準落地。",
    "services.learnMoreButton": "了解更多我們的服務",

    // Plans page
    "plans.title": "我們的方案",
    "plans.essential": "基礎方案",
    "plans.essential.price": "港幣$3888",
    "plans.essential.desc": "適合特定設計需求",
    "plans.essential.feature1": "品牌形象設計",
    "plans.essential.feature2": "網站設計（最多5頁）",
    "plans.essential.feature3": "一輪修改",
    "plans.essential.feature4": "2週交付",
    "plans.startup": "AI創業套餐",
    "plans.startup.price": "港幣$3800",
    "plans.startup.desc": "創業必備 AI服務套餐",
    "plans.startup.feature1": "網站 X1",
    "plans.startup.feature2": "APP程式 X1",
    "plans.startup.feature3": "AI廣告 X3",
    "plans.startup.feature4": "專案經理一對一",
    "plans.premium": "高級方案",
    "plans.premium.price": "港幣$65,000/月",
    "plans.premium.desc": "為成長中的品牌提供持續創意支持",
    "plans.premium.feature1": "無限設計請求",
    "plans.premium.feature2": "UI/UX設計",
    "plans.premium.feature3": "網站和應用設計",
    "plans.premium.feature4": "優先支援",
    "plans.premium.feature5": "快速交付",
    "plans.enterprise": "企業方案",
    "plans.enterprise.price": "定制價格",
    "plans.enterprise.desc": "為大型組織提供全面解決方案",
    "plans.enterprise.feature1": "專屬創意團隊",
    "plans.enterprise.feature2": "設計指導",
    "plans.enterprise.feature3": "設計系統",
    "plans.enterprise.feature4": "定制整合",
    "plans.enterprise.feature5": "24/7支援",
    "plans.cta": "開始合作",

    // Contact page
    "contact.title": "聯絡我們",
    "contact.subtitle": "與我們聯絡",
    "contact.desc":
      "準備好通過極簡設計改變您的品牌了嗎？我們將幫助您創造卓越的數碼體驗，吸引您的受眾並提升您在香港及其他地區的業務。",
    "contact.email": "電郵",
    "contact.location": "位置",
    "contact.location.value": "香港中環",
    "contact.consultation.title": "設計諮詢",
    "contact.consultation.desc": "預約45分鐘免費諮詢，與我們的設計團隊討論您的品牌挑戰並探索極簡解決方案。",
    "contact.consultation.cta": "了解更多 →",
    "contact.form.name": "姓名",
    "contact.form.email": "電郵",
    "contact.form.company": "公司",
    "contact.form.message": "留言",
    "contact.form.submit": "發送訊息",
    "contact.form.submitting": "發送中...",
    "contact.form.success": "訊息已發送",
    "contact.form.success.desc": "我們將盡快回覆您。",

    // Consultation page
    "consultation.title": "設計諮詢",
    "consultation.badge": "免費策略會議",
    "consultation.expect": "您可以期待",
    "consultation.expect.1": "與我們的設計總監進行45分鐘視像通話",
    "consultation.expect.2": "分析您當前的品牌挑戰和設計機會",
    "consultation.expect.3": "可立即實施的極簡設計建議",
    "consultation.expect.4": "無義務或銷售壓力——只提供有價值的設計見解",
    "consultation.perfect": "適合對象",
    "consultation.perfect.1": "希望建立獨特極簡形象的香港企業",
    "consultation.perfect.2": "需要更新視覺語言的品牌",
    "consultation.perfect.3": "準備產品發佈或重新設計的團隊",
    "consultation.perfect.4": "尋求專業設計指導的創辦人",
    "consultation.cta": "預約免費會議",

    // Process section
    "process.title": "我們的設計流程",
    "process.subtitle": "創造有影響力極簡設計的精簡方法",
    "process.step1.title": "探索",
    "process.step1.description": "我們了解您的品牌、目標和受眾，建立策略基礎。",
    "process.step2.title": "創作",
    "process.step2.description": "我們的設計師打造簡潔、有目的的解決方案，體現您的品牌本質。",
    "process.step3.title": "完善",
    "process.step3.description": "我們完善每個細節，確保最終設計達到最大影響力。",

    // Testimonials section
    "testimonials.title": "客戶評價",
    "testimonials.quote1":
      "Gogh Studio以極簡方法改變了我們的品牌。簡潔的設計完美捕捉了我們的本質，同時在香港市場中脫穎而出。",
    "testimonials.author1": "陳思穎",
    "testimonials.role1": "市場總監",
    "testimonials.company1": "香港金融集團",
    "testimonials.quote2": "與Gogh合作非常順暢。他們對細節的關注和對簡約的專注幫助我們創造了用戶喜愛的數碼體驗。",
    "testimonials.author2": "王志明",
    "testimonials.role2": "創辦人",
    "testimonials.company2": "科技流",
    "testimonials.quote3": "團隊對極簡設計原則的理解提升了我們的品牌形象。他們的工作直接促進了我們的業務增長。",
    "testimonials.author3": "譚嘉怡",
    "testimonials.role3": "創意總監",
    "testimonials.company3": "奢華零售",

    // Clients section
    "clients.title": "受領先品牌信賴",

    // CTA section
    "cta.title": "準備好改變您的品牌了嗎？",
    "cta.description": "讓我們創造一個能捕捉您本質並與您的受眾產生共鳴的極簡設計。",
    "cta.button": "開始您的項目",

    // Footer
    "footer.tagline": "一家AI 服務工作室，為香港前瞻性品牌創造優雅、有效的數碼體驗。",
    "footer.navigation": "導航",
    "footer.contact": "聯絡",
    "footer.hours": "工作時間",
    "footer.weekdays": "星期一至五",
    "footer.weekend": "星期六日",
    "footer.closed": "休息",
    "footer.rights": "版權所有。",
    "footer.privacy": "私隱政策",
    "footer.terms": "服務條款",

    // Portfolio section
    "portfolio.title": "近期作品",
    "portfolio.viewProject": "查看项目",
    "portfolio.moveToInteract": "移动鼠标互动",
    "portfolio.tapToView": "点击查看",
    
    "projects.project1.title": "智能无人便利店系统",
    "projects.project1.client": "AI驱动的全自动购物体验",
    "projects.project1.description": "整合AI技术与移动应用，为用户提供24小时自助购物服务。通过手机APP即可完成商品浏览、购买和支付全过程。",
    "projects.project2.title": "Clean UX Design",
    "projects.project2.client": "Tech Startup",
    "projects.project3.title": "智能POS系统解决方案",
    "projects.project3.client": "Lightspeed零售系统集成",
    "projects.project3.description": "为零售商打造的新一代POS系统集成方案，实现库存管理、销售分析、员工管理和客户关系维护的一体化运营。支持多门店管理，提供实时数据同步和智能分析报表。",
    "projects.project3.tag1": "系统集成",
    "projects.project3.tag2": "零售科技",
    "projects.project3.tag3": "数据分析",
  },
  "zh-Hans": {
    // Navigation
    "nav.why": "理念",
    "nav.work": "作品",
    "nav.what": "服务",
    "nav.plans": "方案",
    "nav.back": "← 返回首页",

    // Hero section
    "hero.makeYour": "一站式专业AI服务",
    "hero.website": "24小时贴身跟进",
    "hero.description": "专业AI服务 · AI影片/广告制作/网站/程序/APP/ AI AGENT · 专属项目经理一对一",
    "hero.button1": "探索服务",
    "hero.button2": "联系我们",
    "hero.rotate.fancy": "AI影片制作",
    "hero.rotate.fun": "广告片创建",
    "hero.rotate.lovely": "网站开发",
    "hero.rotate.weird": "程序设计",
    "hero.rotate.funky": "APP开发",
    "hero.rotate.dancing": "AI AGENT",
    "hero.rotate.sexy": "自动化服务",
    "hero.rotate.cool": "企业AI",
    "hero.rotate.go": "品牌形象",
    "hero.rotate.fire": "视频特效",
    "hero.rotate.animated": "社交营销",
    "hero.rotate.pop": "视觉设计",
    "hero.rotate.rock": "内容创作",

    // Home page
    "home.approach": "我们的极简主义方法",
    "home.subtitle": "简约与功能的完美结合",
    "home.heading": "通过极简设计重塑品牌",
    "home.cta": "预约咨询",

    // Rotating text section
    "home.rotating.title": "我们如何做设计",
    "home.rotating.prefix": "我们创造的 设计是",
    "home.rotating.0": "有目的的",
    "home.rotating.1": "优雅的",
    "home.rotating.2": "简约的",
    "home.rotating.3": "创新的",
    "home.rotating.4": "以人为中心的",

    // Why page
    "why.title": "为什么选择我们",
    "why.subtitle": "我们相信设计的力量能够改变业务",
    "why.1.title": "AI驱动的创意",
    "why.1.desc": "我们将AI与人类创意相结合，探索传统设计方法无法实现的可能性。",
    "why.2.title": "东西方美学融合",
    "why.2.desc": "我们的团队将东方禅意美学与西方设计原则融为一体，创造独特作品。",
    "why.3.title": "技术与设计的结合",
    "why.3.desc": "我们不仅是设计师，也是技术专家，创造美观且功能强大的解决方案。",
    "why.4.title": "香港本地视角",
    "why.4.desc": "我们深入了解香港市场，为本地品牌打造能够引起共鸣的设计。",

    // What page
    "what.title": "我们做什么",
    "what.service1.title": "极简品牌识别",
    "what.service1.desc": "创造独特的品牌形象，通过简洁、专注的设计捕捉您的品牌本质，与香港受众产生共鸣。",
    "what.service2.title": "清晰的用户体验设计",
    "what.service2.desc": "打造直观且视觉精致的数字体验，吸引用户并提升您的数字形象。",
    "what.service3.title": "黑白网页体验",
    "what.service3.desc": "构建优雅的网站，将极简设计与技术卓越融为一体，创造难忘的用户旅程。",
    "what.service4.title": "设计系统",
    "what.service4.desc": "开发全面的设计框架，确保在所有数字接触点上保持一致性和效率。",

    // Services section
    "services.title": "我们的优势",
    "services.ai.title": "AI驱动的创意",
    "services.ai.description": "我们结合人工智能与人类创意，探索传统设计方法无法实现的可能性。",
    "services.aesthetics.title": "东西方美学融合",
    "services.aesthetics.description": "我们的团队将东方禅意美学与西方设计原则融为一体，创造独特作品。",
    "services.tech.title": "技术与设计的结合",
    "services.tech.description": "我们不仅是设计师，还是技术专家，创造美观且功能强大的解决方案。",
    "services.video.title": "AI影片/广告制作",
    "services.video.description": "AI辅助影视制作，从策划到后期一站式完成，让创意快速落地并产生影响力。",
    "services.website.title": "网站/程序/APP开发",
    "services.website.description": "现代化网站、应用程序开发，定制化解决方案，打造流畅用户体验。",
    "services.projectManager.title": "专属项目经理一对一",
    "services.projectManager.description": "每个项目配备专属项目经理，全程贴身跟进，确保需求精准落地。",
    "services.learnMoreButton": "了解更多关于我们的服务",

    // Plans page
    "plans.title": "我们的方案",
    "plans.essential": "基础方案",
    "plans.essential.price": "港币$3888",
    "plans.essential.desc": "适合特定设计需求",
    "plans.essential.feature1": "品牌形象设计",
    "plans.essential.feature2": "网站设计（最多5页）",
    "plans.essential.feature3": "一轮修改",
    "plans.essential.feature4": "2周交付",
    "plans.startup": "AI创业套餐",
    "plans.startup.price": "港币$3800",
    "plans.startup.desc": "创业必备 AI服务套餐",
    "plans.startup.feature1": "网站 X1",
    "plans.startup.feature2": "APP程序 X1",
    "plans.startup.feature3": "AI广告 X3",
    "plans.startup.feature4": "项目经理一对一",
    "plans.premium": "高级方案",

    // Footer
    "footer.right": "保留所有权利",

    // Contact page
    "contact.title": "联系我们",
    "contact.subtitle": "准备好开始了吗？告诉我们您的项目。",
    "contact.name": "姓名",
    "contact.email": "邮箱",
    "contact.message": "信息",
    "contact.submit": "发送",

    // APP Production Landing Page
    "appProduction.badge": "专业服务",
    "appProduction.subtitle": "将您的想法转化为强大的移动应用程序。专业 iOS & Android 开发，收费由 $3,000 起。",
    "appProduction.startingFrom": "起步价",
    "appProduction.getStarted": "立即开始",
    "appProduction.whatsIncluded": "包含服务",
    "appProduction.ourProcess": "我们的流程",
    "appProduction.simplePricing": "简单透明的定价",
    "appProduction.basePrice": "标准 APP 项目基本收费",
    "appProduction.feature1": "iOS & Android 原生应用",
    "appProduction.feature2": "定制 UI/UX 设计",
    "appProduction.feature3": "最多 10 个定制功能",
    "appProduction.feature4": "应用商店提交支持",
    "appProduction.feature5": "2 周交付",
    "appProduction.startProject": "开始您的项目",
    "appProduction.customQuote": "定制功能可额外收费",
    "appProduction.ready": "准备好开发您的 APP 了吗？",
    "appProduction.contactDesc": "联系我们进行免费咨询和定制报价",
    "appProduction.contactUs": "联系我们",
    "appProduction.viewWork": "查看我们的作品",

    // Work page
    "work.title": "我们的作品",
    "work.subtitle": "探索我们的人工智能驱动创意作品集，展示每个项目中的专业技术和创新思维。",
    "work.category.all": "全部作品",
    "work.category.AI影片製作": "AI影片制作",
    "work.category.網站開發": "网站开发",
    "work.category.品牌設計": "品牌设计",
    "work.category.AI自動化": "AI自动化",

    // Project 1: Micbot
    "work.project.1.title": "Micbot 机器人官网",
    "work.project.1.client": "Micbot",
    "work.project.1.description": "AI 机器人产品官网，展示智能对话技术与品牌形象",
    "work.project.1.tag1": "官网",
    "work.project.1.tag2": "AI",
    "work.project.1.tag3": "机器人",

    // Project 2: Beijing Shangyun Elevator
    "work.project.2.title": "北京上云电梯官网",
    "work.project.2.client": "北京上云电梯",
    "work.project.2.description": "电梯公司企业官网，展示电梯产品与服务",
    "work.project.2.tag1": "企业官网",
    "work.project.2.tag2": "电梯",
    "work.project.2.tag3": "B2B",

    // Project 3: Xiangjing Hisense
    "work.project.3.title": "响鲸海信洗衣机",
    "work.project.3.client": "海信",
    "work.project.3.description": "海信洗衣机品牌视觉设计，融合科技感与生活美学",
    "work.project.3.tag1": "品牌设计",
    "work.project.3.tag2": "家电",
    "work.project.3.tag3": "视觉系统",

    // Project 4: Four E App (簡體)
    "work.project.4.title": "Four E App",
    "work.project.4.client": "Four E",
    "work.project.4.description": "移动应用设计，直觉式用户体验",
    "work.project.4.tag1": "应用设计",
    "work.project.4.tag2": "UX",
    "work.project.4.tag3": "移动",

    // Project 5: Lynk & Co App Redesign (簡體)
    "work.project.5.title": "领克汽车APP改版设计",
    "work.project.5.client": "Lynk & Co",
    "work.project.5.description": "领克汽车移动应用程式改版，现代化 UI/UX 设计",
    "work.project.5.tag1": "应用设计",
    "work.project.5.tag2": "汽车",
    "work.project.5.tag3": "UX",

    // Project 6: 2024 Portfolio (簡體)
    "work.project.6.title": "2024 作品集",
    "work.project.6.client": "2024",
    "work.project.6.description": "多元化设计项目作品集展示",
    "work.project.6.tag1": "作品集",
    "work.project.6.tag2": "设计",
    "work.project.6.tag3": "展示",

    // Project 7: Wu Box HEMS APP (簡體)
    "work.project.7.title": "悟匣 HEMS APP 新品发布",
    "work.project.7.client": "悟匣",
    "work.project.7.description": "悟匣 HEMS APP 智能家居新品发布",
    "work.project.7.tag1": "应用设计",
    "work.project.7.tag2": "智能家居",
    "work.project.7.tag3": "新品发布",

    // Project 10: TOYOTA GR系列车辆管理小程序 (简体)
    "work.project.10.title": "TOYOTA GR系列车辆管理小程序",
    "work.project.10.client": "TOYOTA",
    "work.project.10.description": "TOYOTA GR 系列车辆管理小程序",
    "work.project.10.tag1": "小程序",
    "work.project.10.tag2": "汽车",
    "work.project.10.tag3": "车辆管理",

    // Project 11: 落至晚樱 (简体)
    "work.project.11.title": "落至晚樱",
    "work.project.11.client": "落至晚樱",
    "work.project.11.description": "落至晚樱 - UI 设计作品集",
    "work.project.11.tag1": "UI 设计",
    "work.project.11.tag2": "作品集",
    "work.project.11.tag3": "应用设计",

    // Project 12: 家庭微电网APP_UIUX设计稿交互原型 (简体)
    "work.project.12.title": "家庭微电网APP UI/UX设计稿交互原型",
    "work.project.12.client": "家庭微电网",
    "work.project.12.description": "家庭微电网 APP UI/UX 设计稿与交互原型",
    "work.project.12.tag1": "应用设计",
    "work.project.12.tag2": "UI/UX",
    "work.project.12.tag3": "智能家居",

    // Project 13: Security Camera UI kit (简体)
    "work.project.13.title": "Security Camera UI kit",
    "work.project.13.client": "kopenLi",
    "work.project.13.description": "Security Camera UI kit 设计",
    "work.project.13.tag1": "UI 套件",
    "work.project.13.tag2": "监控",
    "work.project.13.tag3": "应用设计",

    // Project 14: Dreame App迭代設計 (简体)
    "work.project.14.title": "Dreame App 迭代设计",
    "work.project.14.client": "Dreame",
    "work.project.14.description": "Dyson 智能家居 APP 迭代设计",
    "work.project.14.tag1": "应用设计",
    "work.project.14.tag2": "智能家居",
    "work.project.14.tag3": "迭代设计",


    // Project 15: 2026UI作品集 (简体)
    "work.project.15.title": "2026 UI 作品集",
    "work.project.15.client": "Loooo",
    "work.project.15.description": "设计师 Loooo 的 2026 UI 作品集",
    "work.project.15.tag1": "UI 设计",
    "work.project.15.tag2": "作品集",
    "work.project.15.tag3": "2026",

    // Project 16: Ncollecto (简体)
    "work.project.16.title": "Ncollecto - 文物类 RWA 项目 APP UI/UX 设计",
    "work.project.16.client": "Ncollecto",
    "work.project.16.description": "文物类 RWA 项目 APP UI/UX 设计",
    "work.project.16.tag1": "应用设计",
    "work.project.16.tag2": "RWA",
    "work.project.16.tag3": "区块链",


    // Project 17: 携程国际事业部设计年鉴 (简体)
    "work.project.17.title": "携程国际事业部设计年鉴",
    "work.project.17.client": "携程",
    "work.project.17.description": "携程国际事业部设计年鉴",
    "work.project.17.tag1": "设计年鉴",
    "work.project.17.tag2": "旅游",
    "work.project.17.tag3": "企业",

    // Project 18: 智能婴童看护APP (简体)
    "work.project.18.title": "智能婴童看护APP",
    "work.project.18.client": "智能婴童",
    "work.project.18.description": "智能婴童看护 APP 设计",
    "work.project.18.tag1": "应用设计",
    "work.project.18.tag2": "婴儿护理",
    "work.project.18.tag3": "智能家居",

    // Project 20: 2026作品集匯總 (简体)
    "work.project.20.title": "2026 作品集汇总",
    "work.project.20.client": "2026",
    "work.project.20.description": "2026 作品集汇总 - AI 自动化作品集",
    "work.project.20.tag1": "AI 自动化",
    "work.project.20.tag2": "作品集",
    "work.project.20.tag3": "2026",

    // Project 21: 2025智能家居UI作品集 (简体)
    "work.project.21.title": "2025 智能家居 UI 作品集",
    "work.project.21.client": "周游0626",
    "work.project.21.description": "2025 智能家居 UI 作品集",
    "work.project.21.tag1": "AI 自动化",
    "work.project.21.tag2": "智能家居",
    "work.project.21.tag3": "UI 设计",

    // Project 22: Capy個人理財APP (简体)
    "work.project.22.title": "Capy 个人理财APP",
    "work.project.22.client": "Capy",
    "work.project.22.description": "Capy 个人理财 APP 设计",
    "work.project.22.tag1": "应用设计",
    "work.project.22.tag2": "金融",
    "work.project.22.tag3": "个人",
    // Project 23: Beck_UI作品集 (简体)
    "work.project.23.title": "Beck UI 作品集",
    "work.project.23.client": "Beck_z",
    "work.project.23.description": "Beck UI 作品集 2026 - GIF 格式",
    "work.project.23.tag1": "UI 设计",
    "work.project.23.tag2": "作品集",
    "work.project.23.tag3": "GIF",

    // Project 24: OMS (简体)
    "work.project.24.title": "OMS",
    "work.project.24.client": "OMS",
    "work.project.24.description": "OMS 品牌设计",
    "work.project.24.tag1": "品牌设计",
    "work.project.24.tag2": "企业",
    "work.project.24.tag3": "视觉识别",

    // Project 25: X-MATE钱包项目 (简体)
    "work.project.25.title": "X-MATE钱包项目",
    "work.project.25.client": "梁宇龙",
    "work.project.25.description": "区块链 X-MATE 钱包项目 UI 设计，展示创新加密货币钱包界面与用户体验",
    "work.project.25.tag1": "应用设计",
    "work.project.25.tag2": "区块链",
    "work.project.25.tag3": "钱包",

    // Project 26: Richland 宝石APP
    "work.project.26.title": "Richland 宝石APP",
    "work.project.26.client": "Richland",
    "work.project.26.description": "Richland 宝石交易APP，采用优雅界面设计，展示宝石收藏与交易功能，为用户提供尊贵的宝石鉴定及交易体验",
    "work.project.26.tag1": "应用设计",
    "work.project.26.tag2": "尊贵",
    "work.project.26.tag3": "电子商务",

    // Project 27: 流动泡泡糖 (简体)
    "work.project.27.title": "流动泡泡糖",
    "work.project.27.client": "流动泡泡糖",
    "work.project.27.description": "UI作品集设计，展示创意界面作品",
    "work.project.27.tag1": "UI设计",
    "work.project.27.tag2": "作品集",
    "work.project.27.tag3": "设计",

    // Project 28: Web3金融UX視覺設計 (EN)
    "work.project.28.title": "Web3 Financial UX Design",
    "work.project.28.client": "Web3",
    "work.project.28.description": "Web3 financial UX visual design",
    "work.project.28.tag1": "UX Design",
    "work.project.28.tag2": "Web3",
    "work.project.28.tag3": "Finance",

    // Project 29: Style Attempt (EN)
    "work.project.29.title": "Style Attempt",
    "work.project.29.client": "kopenLi",
    "work.project.29.description": "Style attempt brand design collection",
    "work.project.29.tag1": "Brand Design",
    "work.project.29.tag2": "Fashion",
    "work.project.29.tag3": "Visual",

    // Project 28: Web3金融UX視覺設計 (繁體)
    "work.project.28.title": "Web3 金融 UX 視覺設計",
    "work.project.28.client": "Web3",
    "work.project.28.description": "Web3 金融 UX 視覺設計",
    "work.project.28.tag1": "UX 設計",
    "work.project.28.tag2": "Web3",
    "work.project.28.tag3": "金融",

    // Project 29: Style Attempt (繁體)
    "work.project.29.title": "Style Attempt",
    "work.project.29.client": "kopenLi",
    "work.project.29.description": "Style Attempt 品牌設計集合",
    "work.project.29.tag1": "品牌設計",
    "work.project.29.tag2": "時尚",
    "work.project.29.tag3": "視覺",

    // Project 28: Web3金融UX視覺設計 (简体)
    "work.project.28.title": "Web3 金融 UX 视觉设计",
    "work.project.28.client": "Web3",
    "work.project.28.description": "Web3 金融 UX 视觉设计",
    "work.project.28.tag1": "UX 设计",
    "work.project.28.tag2": "Web3",
    "work.project.28.tag3": "金融",

    // Project 29: Style Attempt (简体)
    "work.project.29.title": "Style Attempt",
    "work.project.29.client": "kopenLi",
    "work.project.29.description": "Style Attempt 品牌设计集合",
    "work.project.29.tag1": "品牌设计",
    "work.project.29.tag2": "时尚",
    "work.project.29.tag3": "视觉",

    // Project 30: Skyarc Smart Home APP (EN)
    "work.project.30.title": "Skyarc Smart Home APP",
    "work.project.30.client": "Skyarc",
    "work.project.30.description": "Smart home APP design with intuitive interface and seamless user experience",
    "work.project.30.tag1": "APP Design",
    "work.project.30.tag2": "Smart Home",
    "work.project.30.tag3": "IoT",

    // Project 30: Skyarc Smart Home APP (繁體)
    "work.project.30.title": "Skyarc 智能家居 APP",
    "work.project.30.client": "Skyarc",
    "work.project.30.description": "智能家居 APP 設計，直觀介面與無縫用戶體驗",
    "work.project.30.tag1": "APP 設計",
    "work.project.30.tag2": "智能家居",
    "work.project.30.tag3": "物聯網",

    // Project 30: Skyarc Smart Home APP (简体)
    "work.project.30.title": "Skyarc 智能家居 APP",
    "work.project.30.client": "Skyarc",
    "work.project.30.description": "智能家居 APP 设计，直观界面与无缝用户体验",
    "work.project.30.tag1": "APP 设计",
    "work.project.30.tag2": "智能家居",
    "work.project.30.tag3": "物联网",

    // Project 31: Zukka (EN)
    "work.project.31.title": "Zukka",
    "work.project.31.client": "Zukka",
    "work.project.31.description": "Fashion brand APP design with modern visual identity",
    "work.project.31.tag1": "APP Design",
    "work.project.31.tag2": "Fashion",
    "work.project.31.tag3": "Brand",

    // Project 31: Zukka (繁體)
    "work.project.31.title": "Zukka",
    "work.project.31.client": "Zukka",
    "work.project.31.description": "時尚品牌 APP 設計，現代視覺識別",
    "work.project.31.tag1": "APP 設計",
    "work.project.31.tag2": "時尚",
    "work.project.31.tag3": "品牌",

    // Project 31: Zukka (简体)
    "work.project.31.title": "Zukka",
    "work.project.31.client": "Zukka",
    "work.project.31.description": "时尚品牌 APP 设计，现代视觉识别",
    "work.project.31.tag1": "APP 设计",
    "work.project.31.tag2": "时尚",
    "work.project.31.tag3": "品牌",

    // Project 32: 宇树商城UI APP Design (EN)
    "work.project.32.title": "宇树商城UI APP Design",
    "work.project.32.client": "宇树",
    "work.project.32.description": "E-commerce APP UI design for robotics products",
    "work.project.32.tag1": "APP Design",
    "work.project.32.tag2": "E-commerce",
    "work.project.32.tag3": "Robotics",

    // Project 32: 宇树商城UI APP Design (繁體)
    "work.project.32.title": "宇树商城 UI APP 設計",
    "work.project.32.client": "宇树",
    "work.project.32.description": "機器人產品電子商務 APP UI 設計",
    "work.project.32.tag1": "APP 設計",
    "work.project.32.tag2": "電子商務",
    "work.project.32.tag3": "機器人",

    // Project 32: 宇树商城UI APP Design (简体)
    "work.project.32.title": "宇树商城 UI APP 设计",
    "work.project.32.client": "宇树",
    "work.project.32.description": "机器人产品电子商务 APP UI 设计",
    "work.project.32.tag1": "APP 设计",
    "work.project.32.tag2": "电子商务",
    "work.project.32.tag3": "机器人",

    // APP Production Landing Page
    "appProduction.badge": "PROFESSIONAL SERVICE",
    "appProduction.subtitle": "Transform your idea into a powerful mobile application. Professional iOS & Android development starting from $3,000.",
    "appProduction.startingFrom": "STARTING FROM",
    "appProduction.getStarted": "Get Started",
    "appProduction.whatsIncluded": "What's Included",
    "appProduction.ourProcess": "Our Process",
    "appProduction.simplePricing": "Simple, Transparent Pricing",
    "appProduction.basePrice": "Base price for standard APP projects",
    "appProduction.feature1": "iOS & Android Native Apps",
    "appProduction.feature2": "Custom UI/UX Design",
    "appProduction.feature3": "Up to 10 Custom Features",
    "appProduction.feature4": "App Store Submission Support",
    "appProduction.feature5": "2 Weeks Delivery",
    "appProduction.startProject": "Start Your Project",
    "appProduction.customQuote": "Custom features available at additional cost",
    "appProduction.ready": "Ready to Build Your APP?",
    "appProduction.contactDesc": "Contact us for a free consultation and custom quote",
    "appProduction.contactUs": "Contact Us",
    "appProduction.viewWork": "View Our Work",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "zh-Hant" for SSR compatibility - prevents hydration mismatch
  const [language, setLanguageState] = useState<Language>("zh-Hant")
  
  // Sync with localStorage on mount AFTER first render
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "zh-Hant" || saved === "zh-Hans")) {
      // Only update if different from default to minimize re-renders
      if (saved !== "zh-Hant") {
        setLanguageState(saved)
      }
    }
  }, [])

  // Save language changes to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

