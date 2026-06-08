"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { SharedLayout } from "@/components/shared-layout"
import { ArrowLeft, Eye, Heart, LayoutGrid, Grid3X3 } from "lucide-react"
import { useState } from "react"

interface Project {
  id: number
  title: string
  client: string
  description: string
  image: string
  tags: string[]
  views: number
  likes: number
  category: string
}

// Helper function to get translated project data
function getTranslatedProject(id: number, t: (key: string) => string): Partial<Project> {
  return {
    title: t(`work.project.${id}.title`),
    client: t(`work.project.${id}.client`),
    description: t(`work.project.${id}.description`),
    tags: [
      t(`work.project.${id}.tag1`),
      t(`work.project.${id}.tag2`),
      t(`work.project.${id}.tag3`),
    ],
  }
}

const categories = [
  { key: "all", label: "" },
  { key: "AI影片製作", label: "" },
  { key: "網站開發", label: "" },
  { key: "品牌設計", label: "" },
  { key: "AI自動化", label: "" },
]

// AI影片製作 projects
const aiVideoProjects: Project[] = []

// 網站開發 projects
const webDevProjects: Project[] = [
  { id: 1, title: "Micbot Robot Official Website", client: "Micbot", description: "AI robot product official website", image: "/portfolio/網站開發/Micbot機器人官網/thumbnail.png", tags: ["Website", "AI", "Robotics"], views: 1234, likes: 89, category: "網站開發" },
  { id: 2, title: "Beijing Shangyun Elevator Official Website", client: "Beijing Shangyun Elevator", description: "Elevator company corporate website", image: "/portfolio/網站開發/北京上云電梯官網/thumbnail.png", tags: ["Corporate Website", "Elevator", "B2B"], views: 856, likes: 67, category: "網站開發" },
  { id: 4, title: "Four E App", client: "Four E", description: "Mobile app design with intuitive user experience", image: "/portfolio/網站開發/Four E App/thumbnail.png", tags: ["App Design", "UX", "Mobile"], views: 1567, likes: 98, category: "網站開發" },
  { id: 5, title: "Lynk & Co App Redesign", client: "Lynk & Co", description: "Lynk & Co mobile app redesign with modern UI/UX", image: "/portfolio/網站開發/领克汽车APP改版设计/thumbnail.png", tags: ["App Design", "Automotive", "UX"], views: 2345, likes: 178, category: "網站開發" },
  { id: 6, title: "2024 Portfolio", client: "2024", description: "Complete portfolio showcase with diverse design projects", image: "/portfolio/網站開發/2024作品集/thumbnail.png", tags: ["Portfolio", "Design", "Showcase"], views: 3456, likes: 234, category: "網站開發" },
  { id: 7, title: "Wu Box HEMS APP Launch", client: "Wu Box", description: "Wu Box HEMS APP new product launch with smart home features", image: "/portfolio/網站開發/悟匣HEMS APP新品发布/thumbnail.png", tags: ["App Design", "Smart Home", "Product Launch"], views: 2156, likes: 145, category: "網站開發" },
]

// 品牌設計 projects
const brandProjects: Project[] = [
  { id: 3, title: "Xiangjing Hisense Washing Machine", client: "Hisense", description: "Hisense washing machine brand visual design", image: "/portfolio/品牌設計/響鯨海信洗衣機/thumbnail.jpg", tags: ["Brand Design", "Home Appliance", "Visual System"], views: 2341, likes: 156, category: "品牌設計" },
]

// AI自動化 projects
const aiAutoProjects: Project[] = []

const allProjects = [...aiVideoProjects, ...webDevProjects, ...brandProjects, ...aiAutoProjects]

export default function WorkPageClient() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const translatedCategories = [
    { key: "all", label: t("work.category.all") },
    { key: "AI影片製作", label: t("work.category.AI影片製作") },
    { key: "網站開發", label: t("work.category.網站開發") },
    { key: "品牌設計", label: t("work.category.品牌設計") },
    { key: "AI自動化", label: t("work.category.AI自動化") },
  ]

  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory)

  // Apply translations to projects
  const displayProjects = filteredProjects.map(project => ({
    ...project,
    ...getTranslatedProject(project.id, t),
  }))

  return (
    <SharedLayout>
      <div className="min-h-screen bg-[#030303] text-white">
        {/* Header */}
        <div className="relative py-16 md:py-24 px-4 md:px-10 lg:px-16 overflow-hidden">
          {/* Aurora Background */}
          <div className="aurora-bg">
            <div className="aurora-blob aurora-blob-1" />
            <div className="aurora-blob aurora-blob-2" />
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 font-sans">
              {t("work.title")}
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-sans max-w-2xl">
              {t("work.subtitle")}
            </p>
          </div>
        </div>

        {/* Filter & View Mode */}
        <div className="sticky top-16 md:top-20 z-40 bg-[#030303]/90 backdrop-blur-md border-b border-white/10 px-4 md:px-10 lg:px-16 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {translatedCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-sans ${
                    activeCategory === cat.key
                      ? "bg-white text-black"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid" ? "bg-white/20 text-white" : "text-white/50"
                }`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list" ? "bg-white/20 text-white" : "text-white/50"
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="px-4 md:px-10 lg:px-16 py-8">
          <div className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }>
            {displayProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="group block bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${viewMode === "list" ? "aspect-video" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 font-sans">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-2 font-sans">
                        {project.client}
                      </p>
                      <p className="text-white/60 text-sm line-clamp-2 font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Eye className="h-4 w-4 text-white/80" />
                      <span className="text-white/80 text-sm font-sans">{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Heart className="h-4 w-4 text-red-400" />
                      <span className="text-white/80 text-sm font-sans">{project.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 font-sans group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-3 font-sans">
                    {project.client}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/5 text-white/60 px-2.5 py-1 rounded-full font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="px-4 md:px-10 lg:px-16 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-b from-white/10 to-white/5 text-white px-6 py-3 rounded-full hover:from-white/20 hover:to-white/10 transition-all font-medium font-sans border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("nav.back")}
          </Link>
        </div>
      </div>

      {/* Aurora Styles */}
      <style jsx>{`
        .aurora-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.25;
          animation: auroraFloat 25s ease-in-out infinite;
        }
        
        .aurora-blob-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(147, 112, 219, 0.5) 0%, transparent 70%);
          top: -30%;
          left: -20%;
          animation-delay: 0s;
        }
        
        .aurora-blob-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 191, 255, 0.4) 0%, transparent 70%);
          top: 0%;
          right: -15%;
          animation-delay: -10s;
        }
        
        @keyframes auroraFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
          33% {
            transform: translate(50px, 30px) scale(1.1);
            opacity: 0.35;
          }
          66% {
            transform: translate(-30px, -20px) scale(0.95);
            opacity: 0.2;
          }
        }
      `}</style>
    </SharedLayout>
  )
}
