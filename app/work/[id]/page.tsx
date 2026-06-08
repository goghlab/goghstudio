import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Eye, Heart } from 'lucide-react'
import { SharedLayout } from '@/components/shared-layout'
import fs from 'fs'
import path from 'path'

// 項目資料（需要與 WorkPageClient.tsx 同步）
const webDevProjects = [
  { 
    id: 1, 
    title: "Micbot Robot Official Website", 
    client: "Micbot", 
    description: "AI robot product official website, showcasing intelligent dialogue technology and brand image", 
    image: "/portfolio/網站開發/Micbot機器人官網/thumbnail.png",
    folder: "/portfolio/網站開發/Micbot機器人官網",
    tags: ["Website", "AI", "Robotics"],
    views: 1234, 
    likes: 89, 
    category: "網站開發" 
  },
  { 
    id: 2, 
    title: "Beijing Shangyun Elevator Official Website", 
    client: "Beijing Shangyun Elevator", 
    description: "Elevator company corporate website, showcasing elevator products and services", 
    image: "/portfolio/網站開發/北京上云電梯官網/thumbnail.png",
    folder: "/portfolio/網站開發/北京上云電梯官網",
    tags: ["Corporate Website", "Elevator", "B2B"],
    views: 856, 
    likes: 67, 
    category: "網站開發" 
  },
  { 
    id: 4, 
    title: "Four E App", 
    client: "Four E", 
    description: "Mobile app design with intuitive user experience", 
    image: "/portfolio/網站開發/Four E App/thumbnail.png",
    folder: "/portfolio/網站開發/Four E App",
    tags: ["App Design", "UX", "Mobile"],
    views: 1567, 
    likes: 98, 
    category: "網站開發" 
  },
  { 
    id: 5, 
    title: "Lynk & Co App Redesign", 
    client: "Lynk & Co", 
    description: "Lynk & Co mobile app redesign with modern UI/UX", 
    image: "/portfolio/網站開發/领克汽车APP改版设计/thumbnail.png",
    folder: "/portfolio/網站開發/领克汽车APP改版设计",
    tags: ["App Design", "Automotive", "UX"],
    views: 2345, 
    likes: 178, 
    category: "網站開發" 
  },
  { 
    id: 6, 
    title: "2024 Portfolio", 
    client: "2024", 
    description: "Complete portfolio showcase with diverse design projects", 
    image: "/portfolio/網站開發/2024作品集/thumbnail.png",
    folder: "/portfolio/網站開發/2024作品集",
    tags: ["Portfolio", "Design", "Showcase"],
    views: 3456, 
    likes: 234, 
    category: "網站開發" 
  },
  { 
    id: 7, 
    title: "Wu Box HEMS APP Launch", 
    client: "Wu Box", 
    description: "Wu Box HEMS APP new product launch with smart home features", 
    image: "/portfolio/網站開發/悟匣HEMS APP新品发布/thumbnail.png",
    folder: "/portfolio/網站開發/悟匣HEMS APP新品发布",
    tags: ["App Design", "Smart Home", "Product Launch"],
    views: 2156, 
    likes: 145, 
    category: "網站開發" 
  },
]

const brandProjects = [
  { 
    id: 3, 
    title: "Xiangjing Hisense Washing Machine", 
    client: "Hisense", 
    description: "Hisense washing machine brand visual design, blending technology with lifestyle aesthetics", 
    image: "/portfolio/品牌設計/響鯨海信洗衣機/thumbnail.jpg",
    folder: "/portfolio/品牌設計/響鯨海信洗衣機",
    tags: ["Brand Design", "Home Appliance", "Visual System"],
    views: 2341, 
    likes: 156, 
    category: "品牌設計" 
  },
]

const allProjects = [...webDevProjects, ...brandProjects]

// 靜態生成所有項目的路由
export function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  const project = allProjects.find(p => p.id.toString() === id)

  if (!project) {
    notFound()
  }

  // 讀取資料夾中的所有檔案
  const publicDir = path.join(process.cwd(), 'public')
  const projectPath = path.join(publicDir, project.folder)
  
  let images: string[] = []
  let videos: string[] = []
  
  try {
    const files = fs.readdirSync(projectPath)
    images = files
      .filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i) && !f.includes('thumbnail'))
      .map(f => `${project.folder}/${f}`)
    videos = files
      .filter(f => f.match(/\.(mp4|mov|webm)$/i))
      .map(f => `${project.folder}/${f}`)
  } catch (e) {
    // 資料夾可能不存在
  }

  return (
    <SharedLayout>
      <div className="min-h-screen bg-[#030303] text-white">
        {/* Header */}
        <div className="relative py-16 md:py-24 px-4 md:px-10 lg:px-16 overflow-hidden">
          {/* Aurora Background - using inline styles to avoid styled-jsx */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <div 
              className="absolute rounded-full animate-float-slow"
              style={{
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(147, 112, 219, 0.5) 0%, transparent 70%)',
                filter: 'blur(100px)',
                opacity: 0.25,
                top: '-30%',
                left: '-20%',
                animationDelay: '0s',
              }}
            />
            <div 
              className="absolute rounded-full animate-float-slow"
              style={{
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 191, 255, 0.4) 0%, transparent 70%)',
                filter: 'blur(100px)',
                opacity: 0.25,
                top: '0%',
                right: '-15%',
                animationDelay: '-10s',
              }}
            />
          </div>
          
          <div className="relative z-10">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              返回作品集
            </Link>
            
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white/40 text-sm mb-2">{project.category}</p>
                <h1 className="text-4xl md:text-6xl font-light mb-4 font-sans">
                  {project.title}
                </h1>
                <p className="text-white/60 text-lg mb-4">{project.client}</p>
                <p className="text-white/60 max-w-2xl">{project.description}</p>
              </div>
              
              <div className="flex items-center gap-6 shrink-0">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-white/40" />
                  <span className="text-white/60">{project.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span className="text-white/60">{project.likes}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 text-white/60 px-3 py-1.5 rounded-full font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Images Grid */}
        {images.length > 0 && (
          <div className="px-4 md:px-10 lg:px-16 py-8">
            <h2 className="text-2xl font-light mb-6 font-sans">作品圖片</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, i) => (
                <div 
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                >
                  <Image
                    src={src}
                    alt={`${project.title} - 圖片 ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {videos.length > 0 && (
          <div className="px-4 md:px-10 lg:px-16 py-8">
            <h2 className="text-2xl font-light mb-6 font-sans">影片</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((src, i) => (
                <div 
                  key={i}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                >
                  <video
                    src={src}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="px-4 md:px-10 lg:px-16 py-8">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 bg-gradient-to-b from-white/10 to-white/5 text-white px-6 py-3 rounded-full hover:from-white/20 hover:to-white/10 transition-all font-medium font-sans border border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            返回作品集
          </Link>
        </div>
      </div>
    </SharedLayout>
  )
}