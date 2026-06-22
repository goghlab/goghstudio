import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Eye, Heart } from 'lucide-react'
import { SharedLayout } from '@/components/shared-layout'



// 項目資料（需要與 WorkPageClient.tsx 同步）
const webDevProjects = [
  { 
    id: 1, 
    title: "Micbot Robot Official Website", 
    client: "Micbot", 
    description: "AI robot product official website, showcasing intelligent dialogue technology and brand image", 
    image: "/portfolio/網站開發/Micbot機器人官網/thumbnail.png",
    folder: "/portfolio/網站開發/Micbot機器人官網",
    images: ["/portfolio/網站開發/Micbot機器人官網/image1.png","/portfolio/網站開發/Micbot機器人官網/image2.png","/portfolio/網站開發/Micbot機器人官網/image3.png","/portfolio/網站開發/Micbot機器人官網/image4.png","/portfolio/網站開發/Micbot機器人官網/image5.png","/portfolio/網站開發/Micbot機器人官網/image6.png","/portfolio/網站開發/Micbot機器人官網/image7.png","/portfolio/網站開發/Micbot機器人官網/image8.png","/portfolio/網站開發/Micbot機器人官網/image9.png"],
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
    images: ["/portfolio/網站開發/北京上云電梯官網/image1.gif","/portfolio/網站開發/北京上云電梯官網/image2.png"],
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
    images: ["/portfolio/網站開發/Four E App/image1.png","/portfolio/網站開發/Four E App/image2.png","/portfolio/網站開發/Four E App/image3.png"],
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
    images: ["/portfolio/網站開發/领克汽车APP改版设计/image1.png","/portfolio/網站開發/领克汽车APP改版设计/image2.png","/portfolio/網站開發/领克汽车APP改版设计/image3.png"],
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
    images: ["/portfolio/網站開發/2024作品集/image1.png","/portfolio/網站開發/2024作品集/image2.png","/portfolio/網站開發/2024作品集/image3.png","/portfolio/網站開發/2024作品集/image4.png","/portfolio/網站開發/2024作品集/image5.png","/portfolio/網站開發/2024作品集/image6.png","/portfolio/網站開發/2024作品集/image7.png"],
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
    images: ["/portfolio/網站開發/悟匣HEMS APP新品发布/image1.png","/portfolio/網站開發/悟匣HEMS APP新品发布/image2.jpg","/portfolio/網站開發/悟匣HEMS APP新品发布/image3.png","/portfolio/網站開發/悟匣HEMS APP新品发布/image4.png"],
    tags: ["App Design", "Smart Home", "Product Launch"],
    views: 2156, 
    likes: 145, 
    category: "網站開發" 
  },
  {
    id: 10,
    title: "TOYOTA GR系列车辆管理小程序",
    client: "TOYOTA",
    description: "TOYOTA GR series vehicle management mini program",
    image: "/portfolio/網站開發/TOYOTA_GR系列车辆管理小程序/thumbnail.jpg",
    folder: "/portfolio/網站開發/TOYOTA_GR系列车辆管理小程序",
    images: ["/portfolio/網站開發/TOYOTA_GR系列车辆管理小程序/image01.jpg"],
    tags: ["Mini Program", "Automotive", "Vehicle Management"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 11,
    title: "落至晚樱",
    client: "落至晚樱",
    description: "Falling cherry blossoms - UI design portfolio",
    image: "/portfolio/網站開發/落至晚樱/thumbnail.png",
    folder: "/portfolio/網站開發/落至晚樱",
    images: ["/portfolio/網站開發/落至晚樱/image01.png","/portfolio/網站開發/落至晚樱/image02.png","/portfolio/網站開發/落至晚樱/image03.png","/portfolio/網站開發/落至晚樱/image04.png","/portfolio/網站開發/落至晚樱/image05.png","/portfolio/網站開發/落至晚樱/image06.png","/portfolio/網站開發/落至晚樱/image07.png","/portfolio/網站開發/落至晚樱/image08.png","/portfolio/網站開發/落至晚樱/image09.png","/portfolio/網站開發/落至晚樱/image10.png"],
    tags: ["UI Design", "Portfolio", "APP Design"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 12,
    title: "家庭微电网APP UIUX设计稿交互原型",
    client: "家庭微电网",
    description: "Family microgrid APP UI/UX design and interactive prototype",
    image: "/portfolio/網站開發/家庭微电网APP_UIUX设计稿交互原型/thumbnail.png",
    folder: "/portfolio/網站開發/家庭微电网APP_UIUX设计稿交互原型",
    images: ["/portfolio/網站開發/家庭微电网APP_UIUX设计稿交互原型/image01.jpg"],
    tags: ["APP Design", "UI/UX", "Smart Home"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 13,
    title: "Security Camera UI kit",
    client: "kopenLi",
    description: "Security camera UI kit design",
    image: "/portfolio/網站開發/Security Camera UI kit/thumbnail.png",
    folder: "/portfolio/網站開發/Security Camera UI kit",
    images: ["/portfolio/網站開發/Security Camera UI kit/image01.png","/portfolio/網站開發/Security Camera UI kit/image02.png"],
    tags: ["UI Kit", "Security", "APP Design"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 14,
    title: "Dreame App Iterative Design",
    client: "Dreame",
    description: "Dyson smart home APP iterative design",
    image: "/portfolio/網站開發/Dreame App迭代設計/thumbnail.jpg",
    folder: "/portfolio/網站開發/Dreame App迭代設計",
    images: ["/portfolio/網站開發/Dreame App迭代設計/image01.jpg","/portfolio/網站開發/Dreame App迭代設計/image02.jpg","/portfolio/網站開發/Dreame App迭代設計/image03.jpg","/portfolio/網站開發/Dreame App迭代設計/image04.jpg","/portfolio/網站開發/Dreame App迭代設計/image05.jpg","/portfolio/網站開發/Dreame App迭代設計/image06.jpg","/portfolio/網站開發/Dreame App迭代設計/image07.jpg","/portfolio/網站開發/Dreame App迭代設計/image08.jpg","/portfolio/網站開發/Dreame App迭代設計/image09.jpg"],
    tags: ["APP Design", "Smart Home", "Iterative Design"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 15,
    title: "2026 UI Works Collection",
    client: "Loooo",
    description: "2026 UI works collection by designer Loooo",
    image: "/portfolio/網站開發/2026UI作品集/thumbnail.jpg",
    folder: "/portfolio/網站開發/2026UI作品集",
    images: ["/portfolio/網站開發/2026UI作品集/image01.jpg","/portfolio/網站開發/2026UI作品集/image02.jpg"],
    tags: ["UI Design", "Portfolio", "2026"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 16,
    title: "Ncollecto - 文物类RWA项目APP UI/UX设计",
    client: "Ncollecto",
    description: "Cultural artifact RWA project APP UI/UX design",
    image: "/portfolio/網站開發/Ncollecto/thumbnail.jpg",
    folder: "/portfolio/網站開發/Ncollecto",
    images: ["/portfolio/網站開發/Ncollecto/image01.jpg"],
    tags: ["APP Design", "RWA", "Blockchain"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  
  {
    id: 18,
    title: "智能婴童看护APP",
    client: "智能婴童",
    description: "Smart baby care APP design",
    image: "/portfolio/網站開發/智能婴童看护APP/thumbnail.gif",
    folder: "/portfolio/網站開發/智能婴童看护APP",
    images: ["/portfolio/網站開發/智能婴童看护APP/image01.gif","/portfolio/網站開發/智能婴童看护APP/image02.jpg","/portfolio/網站開發/智能婴童看护APP/image03.jpg","/portfolio/網站開發/智能婴童看护APP/image04.jpg"],
    tags: ["APP Design", "Baby Care", "Smart Home"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 22,
    title: "Capy個人理財APP",
    client: "Capy",
    description: "Capy personal finance APP design",
    image: "/portfolio/網站開發/Capy個人理財APP/thumbnail.png",
    folder: "/portfolio/網站開發/Capy個人理財APP",
    images: ["/portfolio/網站開發/Capy個人理財APP/image01.png","/portfolio/網站開發/Capy個人理財APP/image02.png","/portfolio/網站開發/Capy個人理財APP/image03.png","/portfolio/網站開發/Capy個人理財APP/image04.png","/portfolio/網站開發/Capy個人理財APP/image05.png","/portfolio/網站開發/Capy個人理財APP/image06.png","/portfolio/網站開發/Capy個人理財APP/image07.png"],
    tags: ["APP Design", "Finance", "Personal"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 25,
    title: "X-MATE Wallet Project",
    client: "梁宇龙",
    description: "Blockchain X-MATE wallet project UI design, showcasing innovative crypto wallet interface and user experience",
    image: "/portfolio/網站開發/X-MATE錢包項目/thumbnail.png",
    folder: "/portfolio/網站開發/X-MATE錢包項目",
    images: ["/portfolio/網站開發/X-MATE錢包項目/image01.png","/portfolio/網站開發/X-MATE錢包項目/image02.png","/portfolio/網站開發/X-MATE錢包項目/image03.png","/portfolio/網站開發/X-MATE錢包項目/image04.png","/portfolio/網站開發/X-MATE錢包項目/image05.png","/portfolio/網站開發/X-MATE錢包項目/image06.png","/portfolio/網站開發/X-MATE錢包項目/image07.png","/portfolio/網站開發/X-MATE錢包項目/image08.png","/portfolio/網站開發/X-MATE錢包項目/image09.png"],
    tags: ["APP Design", "Blockchain", "Wallet"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 26,
    title: "Richland Gem App",
    client: "Richland",
    description: "Richland gemstone trading app, featuring elegant UI design and seamless user experience for luxury gem authentication and trading",
    image: "/portfolio/網站開發/Richland宝石app项目/thumbnail.jpg",
    folder: "/portfolio/網站開發/Richland宝石app项目",
    images: ["/portfolio/網站開發/Richland宝石app项目/image01.jpg","/portfolio/網站開發/Richland宝石app项目/image02.jpg","/portfolio/網站開發/Richland宝石app项目/image03.jpg","/portfolio/網站開發/Richland宝石app项目/image04.jpg"],
    tags: ["App Design", "Luxury", "E-commerce"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 27,
    title: "流动泡泡糖",
    client: "流动泡泡糖",
    description: "UI portfolio design showcasing creative interface works",
    image: "/portfolio/網站開發/流动泡泡糖/thumbnail.png",
    folder: "/portfolio/網站開發/流动泡泡糖",
    images: ["/portfolio/網站開發/流动泡泡糖/image01.png","/portfolio/網站開發/流动泡泡糖/image02.png","/portfolio/網站開發/流动泡泡糖/image03.png","/portfolio/網站開發/流动泡泡糖/image04.png","/portfolio/網站開發/流动泡泡糖/image05.png","/portfolio/網站開發/流动泡泡糖/image06.png"],
    tags: ["UI Design", "Portfolio", "Design"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 28,
    title: "Web3金融UX視覺設計",
    client: "Web3",
    description: "Web3 financial UX visual design",
    image: "/portfolio/網站開發/Web3金融UX視覺設計/thumbnail.png",
    folder: "/portfolio/網站開發/Web3金融UX視覺設計",
    images: ["/portfolio/網站開發/Web3金融UX視覺設計/image01.png","/portfolio/網站開發/Web3金融UX視覺設計/image02.png","/portfolio/網站開發/Web3金融UX視覺設計/image03.jpg","/portfolio/網站開發/Web3金融UX視覺設計/image04.jpg"],
    tags: ["UX Design", "Web3", "Finance"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 30,
    title: "Skyarc Smart Home APP",
    client: "Skyarc",
    description: "Smart home APP design with intuitive interface and seamless user experience",
    image: "/portfolio/網站開發/Skyarc智能家居APP/thumbnail.png",
    folder: "/portfolio/網站開發/Skyarc智能家居APP",
    images: ["/portfolio/網站開發/Skyarc智能家居APP/image1.png","/portfolio/網站開發/Skyarc智能家居APP/image2.png","/portfolio/網站開發/Skyarc智能家居APP/image3.png"],
    tags: ["APP Design", "Smart Home", "IoT"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 31,
    title: "Zukka",
    client: "Zukka",
    description: "Fashion brand APP design with modern visual identity",
    image: "/portfolio/網站開發/Zukka/thumbnail.png",
    folder: "/portfolio/網站開發/Zukka",
    images: ["/portfolio/網站開發/Zukka/image01.png","/portfolio/網站開發/Zukka/image02.png","/portfolio/網站開發/Zukka/image03.png","/portfolio/網站開發/Zukka/image04.png","/portfolio/網站開發/Zukka/image05.png"],
    tags: ["APP Design", "Fashion", "Brand"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 32,
    title: "宇树商城UI APP Design",
    client: "宇树",
    description: "E-commerce APP UI design for robotics products",
    image: "/portfolio/網站開發/宇树商城UI APP设计/thumbnail.jpg",
    folder: "/portfolio/網站開發/宇树商城UI APP设计",
    images: ["/portfolio/網站開發/宇树商城UI APP设计/image01.jpg","/portfolio/網站開發/宇树商城UI APP设计/image02.jpg","/portfolio/網站開發/宇树商城UI APP设计/image03.jpg","/portfolio/網站開發/宇树商城UI APP设计/image04.jpg","/portfolio/網站開發/宇树商城UI APP设计/image05.jpg"],
    tags: ["APP Design", "E-commerce", "Robotics"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 44,
    title: "UI_Ux作品集_邂逅好運氣",
    client: "邂逅好運氣",
    description: "2025 UI&UX作品集",
    image: "/portfolio/網站開發/UI_Ux作品集_邂逅好運氣/thumbnail.png",
    folder: "/portfolio/網站開發/UI_Ux作品集_邂逅好運氣",
    images: ["/portfolio/網站開發/UI_Ux作品集_邂逅好運氣/image01.png","/portfolio/網站開發/UI_Ux作品集_邂逅好運氣/image02.png","/portfolio/網站開發/UI_Ux作品集_邂逅好運氣/image03.png"],
    tags: ["UI Design", "UX", "Portfolio"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  {
    id: 45,
    title: "MasterGo官網設計",
    client: "大江大海",
    description: "MasterGo官網設計練習",
    image: "/portfolio/網站開發/MasterGo官網設計/thumbnail.jpg",
    folder: "/portfolio/網站開發/MasterGo官網設計",
    images: ["/portfolio/網站開發/MasterGo官網設計/image01.png","/portfolio/網站開發/MasterGo官網設計/image02.png","/portfolio/網站開發/MasterGo官網設計/image03.png","/portfolio/網站開發/MasterGo官網設計/image04.png","/portfolio/網站開發/MasterGo官網設計/image05.png","/portfolio/網站開發/MasterGo官網設計/image06.png"],
    tags: ["Website", "UI Design", "MasterGo"],
    views: 1500,
    likes: 120,
    category: "網站開發"
  },
  { 
    id: 46, 
    title: "AChat互動社交支付", 
    client: "大江大海", 
    description: "AChat互動社交/移動支付APP設計", 
    image: "/portfolio/網站開發/AChat互動社交支付/thumbnail.png",
    folder: "/portfolio/網站開發/AChat互動社交支付",
    images: ["/portfolio/網站開發/AChat互動社交支付/image01.png","/portfolio/網站開發/AChat互動社交支付/image02.png","/portfolio/網站開發/AChat互動社交支付/image03.png","/portfolio/網站開發/AChat互動社交支付/image04.png","/portfolio/網站開發/AChat互動社交支付/image05.png","/portfolio/網站開發/AChat互動社交支付/image06.png","/portfolio/網站開發/AChat互動社交支付/image07.png","/portfolio/網站開發/AChat互動社交支付/image08.png","/portfolio/網站開發/AChat互動社交支付/image09.png","/portfolio/網站開發/AChat互動社交支付/image10.png","/portfolio/網站開發/AChat互動社交支付/image11.png","/portfolio/網站開發/AChat互動社交支付/image12.png","/portfolio/網站開發/AChat互動社交支付/image13.png"],
    tags: ["APP Design", "Social", "Payment"],
    views: 1500, 
    likes: 120, 
    category: "網站開發" 
  },
  { 
    id: 47, 
    title: "2026_UI作品集_z29881159", 
    client: "Z29881159", 
    description: "2026 UI作品集整理", 
    image: "/portfolio/網站開發/2026_UI作品集_z29881159/thumbnail.png",
    folder: "/portfolio/網站開發/2026_UI作品集_z29881159",
    images: ["/portfolio/網站開發/2026_UI作品集_z29881159/image01.png","/portfolio/網站開發/2026_UI作品集_z29881159/image02.png","/portfolio/網站開發/2026_UI作品集_z29881159/image03.png","/portfolio/網站開發/2026_UI作品集_z29881159/image04.png","/portfolio/網站開發/2026_UI作品集_z29881159/image05.png","/portfolio/網站開發/2026_UI作品集_z29881159/image06.png","/portfolio/網站開發/2026_UI作品集_z29881159/image07.png","/portfolio/網站開發/2026_UI作品集_z29881159/image08.png","/portfolio/網站開發/2026_UI作品集_z29881159/image09.png","/portfolio/網站開發/2026_UI作品集_z29881159/image10.png","/portfolio/網站開發/2026_UI作品集_z29881159/image11.png","/portfolio/網站開發/2026_UI作品集_z29881159/image12.png","/portfolio/網站開發/2026_UI作品集_z29881159/image13.png","/portfolio/網站開發/2026_UI作品集_z29881159/image14.png","/portfolio/網站開發/2026_UI作品集_z29881159/image15.png","/portfolio/網站開發/2026_UI作品集_z29881159/image16.png","/portfolio/網站開發/2026_UI作品集_z29881159/image17.png","/portfolio/網站開發/2026_UI作品集_z29881159/image18.png"],
    tags: ["UI Design", "Portfolio", "2026"],
    views: 1500, 
    likes: 120, 
    category: "網站開發" 
  },
  { 
    id: 48, 
    title: "Icon設計", 
    client: "大江大海", 
    description: "Icon設計作品集", 
    image: "/portfolio/網站開發/Icon設計/thumbnail.png",
    folder: "/portfolio/網站開發/Icon設計",
    images: ["/portfolio/網站開發/Icon設計/image01.png","/portfolio/網站開發/Icon設計/image02.png","/portfolio/網站開發/Icon設計/image03.png","/portfolio/網站開發/Icon設計/image04.png"],
    tags: ["Icon", "Design", "UI"],
    views: 1500, 
    likes: 120, 
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
    images: ["/portfolio/品牌設計/響鯨海信洗衣機/image1.gif","/portfolio/品牌設計/響鯨海信洗衣機/image2.jpg","/portfolio/品牌設計/響鯨海信洗衣機/image3.jpg","/portfolio/品牌設計/響鯨海信洗衣機/image4.jpg","/portfolio/品牌設計/響鯨海信洗衣機/image5.jpg","/portfolio/品牌設計/響鯨海信洗衣機/image6.jpg","/portfolio/品牌設計/響鯨海信洗衣機/image7.jpg"],
    tags: ["Brand Design", "Home Appliance", "Visual System"],
    views: 2341, 
    likes: 156, 
    category: "品牌設計" 
  },
  {
    id: 24,
    title: "OMS",
    client: "OMS",
    description: "OMS brand design",
    image: "/portfolio/品牌設計/OMS/thumbnail.png",
    folder: "/portfolio/品牌設計/OMS",
    images: ["/portfolio/品牌設計/OMS/image01.png","/portfolio/品牌設計/OMS/image02.png","/portfolio/品牌設計/OMS/image03.png"],
    tags: ["Brand Design", "Corporate", "Visual Identity"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 29,
    title: "Style Attempt",
    client: "kopenLi",
    description: "Style attempt brand design collection",
    image: "/portfolio/品牌設計/Style Attempt/thumbnail.png",
    folder: "/portfolio/品牌設計/Style Attempt",
    images: ["/portfolio/品牌設計/Style Attempt/image01.png","/portfolio/品牌設計/Style Attempt/image02.png","/portfolio/品牌設計/Style Attempt/image03.png"],
    tags: ["Brand Design", "Fashion", "Visual"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 33,
    title: "LOGO Design Collection - Tea & Coffee",
    client: "麥子YNL",
    description: "Tea and coffee brand LOGO design collection, featuring multiple food & beverage brand visual solutions",
    image: "/portfolio/品牌設計/LOGO設計合集茶飲咖啡/thumbnail.jpg",
    folder: "/portfolio/品牌設計/LOGO設計合集茶飲咖啡",
    images: ["/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image01.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image02.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image03.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image04.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image05.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image06.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image07.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image08.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image09.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image10.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image11.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image12.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image13.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image14.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image15.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image16.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image17.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image18.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image19.jpg","/portfolio/品牌設計/LOGO設計合集茶飲咖啡/image20.jpg"],
    tags: ["Brand Design", "LOGO", "Food & Beverage"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 34,
    title: "布鲁猫茶饮品牌",
    client: "布鲁猫",
    description: "布鲁猫茶饮品牌全案设计，LOGO/IP/VI设计",
    image: "/portfolio/品牌設計/布魯貓茶飲品牌/thumbnail.jpg",
    folder: "/portfolio/品牌設計/布魯貓茶飲品牌",
    images: ["/portfolio/品牌設計/布魯貓茶飲品牌/image01.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image02.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image03.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image04.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image05.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image06.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image07.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image08.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image09.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image10.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image11.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image12.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image13.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image14.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image15.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image16.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image17.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image18.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image19.jpg","/portfolio/品牌設計/布魯貓茶飲品牌/image20.jpg"],
    tags: ["Brand Design", "LOGO", "IP Design"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 35,
    title: "XIAOSHU辣酱品牌设计",
    client: "觅艺品牌设计",
    description: "XIAOSHU辣酱品牌视觉设计",
    image: "/portfolio/品牌設計/XIAOSHU辣醬品牌設計/thumbnail.jpg",
    folder: "/portfolio/品牌設計/XIAOSHU辣醬品牌設計",
    images: ["/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image01.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image02.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image03.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image04.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image05.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image06.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image07.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image08.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image09.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image10.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image11.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image12.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image13.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image14.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image15.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image16.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image17.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image18.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image19.jpg","/portfolio/品牌設計/XIAOSHU辣醬品牌設計/image20.jpg"],
    tags: ["Brand Design", "Food", "Visual"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 36,
    title: "局气餐厅品牌设计",
    client: "容品牌",
    description: "局气餐厅VI升级、新店空间升级设计",
    image: "/portfolio/品牌設計/局氣餐廳品牌設計/thumbnail.jpg",
    folder: "/portfolio/品牌設計/局氣餐廳品牌設計",
    images: ["/portfolio/品牌設計/局氣餐廳品牌設計/image01.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image02.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image03.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image04.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image05.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image06.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image07.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image08.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image09.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image10.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image11.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image12.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image13.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image14.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image15.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image16.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image17.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image18.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image19.jpg","/portfolio/品牌設計/局氣餐廳品牌設計/image20.jpg"],
    tags: ["Brand Design", "Restaurant", "VI"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 37,
    title: "大卡司DAKASI茶饮品牌",
    client: "赤犬制造所",
    description: "大卡司DAKASI茶饮品牌IP视觉升级",
    image: "/portfolio/品牌設計/大卡司DAKASI茶飲品牌/thumbnail.jpg",
    folder: "/portfolio/品牌設計/大卡司DAKASI茶飲品牌",
    images: ["/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image01.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image02.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image03.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image04.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image05.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image06.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image07.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image08.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image09.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image10.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image11.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image12.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image13.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image14.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image15.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image16.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image17.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image18.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image19.jpg","/portfolio/品牌設計/大卡司DAKASI茶飲品牌/image20.jpg"],
    tags: ["Brand Design", "IP", "Tea & Coffee"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 38,
    title: "金栗门品牌升级",
    client: "核桃设计",
    description: "金栗门原创新鲜零食品牌升级设计",
    image: "/portfolio/品牌設計/金栗門品牌升級/thumbnail.jpg",
    folder: "/portfolio/品牌設計/金栗門品牌升級",
    images: ["/portfolio/品牌設計/金栗門品牌升級/image01.jpg","/portfolio/品牌設計/金栗門品牌升級/image02.jpg","/portfolio/品牌設計/金栗門品牌升級/image03.jpg","/portfolio/品牌設計/金栗門品牌升級/image04.jpg","/portfolio/品牌設計/金栗門品牌升級/image05.jpg","/portfolio/品牌設計/金栗門品牌升級/image06.jpg","/portfolio/品牌設計/金栗門品牌升級/image07.jpg","/portfolio/品牌設計/金栗門品牌升級/image08.jpg","/portfolio/品牌設計/金栗門品牌升級/image09.jpg","/portfolio/品牌設計/金栗門品牌升級/image10.jpg","/portfolio/品牌設計/金栗門品牌升級/image11.jpg","/portfolio/品牌設計/金栗門品牌升級/image12.jpg","/portfolio/品牌設計/金栗門品牌升級/image13.jpg","/portfolio/品牌設計/金栗門品牌升級/image14.jpg","/portfolio/品牌設計/金栗門品牌升級/image15.jpg","/portfolio/品牌設計/金栗門品牌升級/image16.jpg","/portfolio/品牌設計/金栗門品牌升級/image17.jpg","/portfolio/品牌設計/金栗門品牌升級/image18.jpg","/portfolio/品牌設計/金栗門品牌升級/image19.jpg","/portfolio/品牌設計/金栗門品牌升級/image20.jpg"],
    tags: ["Brand Design", "Snack", "Upgrade"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 39,
    title: "莓超疯茶饮IP设计",
    client: "赤犬制造所",
    description: "莓超疯茶饮品牌IP设计，打造时尚艺术化吉祥物",
    image: "/portfolio/品牌設計/莓超瘋茶飲IP設計/thumbnail.jpg",
    folder: "/portfolio/品牌設計/莓超瘋茶飲IP設計",
    images: ["/portfolio/品牌設計/莓超瘋茶飲IP設計/image01.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image02.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image03.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image04.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image05.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image06.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image07.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image08.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image09.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image10.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image11.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image12.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image13.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image14.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image15.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image16.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image17.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image18.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image19.jpg","/portfolio/品牌設計/莓超瘋茶飲IP設計/image20.jpg"],
    tags: ["Brand Design", "IP", "Tea & Coffee"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 40,
    title: "BANZAI_KOYA品牌视觉",
    client: "叁上品牌设计",
    description: "BANZAI KOYA万岁小屋品牌视觉形象设计",
    image: "/portfolio/品牌設計/BANZAI_KOYA品牌視覺/thumbnail.jpg",
    folder: "/portfolio/品牌設計/BANZAI_KOYA品牌視覺",
    images: ["/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image01.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image02.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image03.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image04.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image05.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image06.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image07.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image08.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image09.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image10.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image11.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image12.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image13.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image14.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image15.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image16.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image17.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image18.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image19.jpg","/portfolio/品牌設計/BANZAI_KOYA品牌視覺/image20.jpg"],
    tags: ["Brand Design", "Visual", "Brand Identity"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 41,
    title: "LOGO_VI设计",
    client: "郑昌洪",
    description: "LOGO设计、VI设计合集",
    image: "/portfolio/品牌設計/LOGO_VI設計/thumbnail.jpg",
    folder: "/portfolio/品牌設計/LOGO_VI設計",
    images: ["/portfolio/品牌設計/LOGO_VI設計/image01.jpg","/portfolio/品牌設計/LOGO_VI設計/image02.jpg","/portfolio/品牌設計/LOGO_VI設計/image03.jpg","/portfolio/品牌設計/LOGO_VI設計/image04.jpg","/portfolio/品牌設計/LOGO_VI設計/image05.jpg","/portfolio/品牌設計/LOGO_VI設計/image06.jpg","/portfolio/品牌設計/LOGO_VI設計/image07.jpg","/portfolio/品牌設計/LOGO_VI設計/image08.jpg","/portfolio/品牌設計/LOGO_VI設計/image09.jpg","/portfolio/品牌設計/LOGO_VI設計/image10.jpg","/portfolio/品牌設計/LOGO_VI設計/image11.jpg","/portfolio/品牌設計/LOGO_VI設計/image12.jpg","/portfolio/品牌設計/LOGO_VI設計/image13.jpg","/portfolio/品牌設計/LOGO_VI設計/image14.jpg","/portfolio/品牌設計/LOGO_VI設計/image15.jpg","/portfolio/品牌設計/LOGO_VI設計/image16.jpg","/portfolio/品牌設計/LOGO_VI設計/image17.jpg","/portfolio/品牌設計/LOGO_VI設計/image18.jpg","/portfolio/品牌設計/LOGO_VI設計/image19.jpg","/portfolio/品牌設計/LOGO_VI設計/image20.jpg"],
    tags: ["Brand Design", "LOGO", "VI"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
  {
    id: 42,
    title: "鸡酱品牌设计",
    client: "BUFF品牌设计",
    description: "【耶！是鸡酱】品牌设计",
    image: "/portfolio/品牌設計/雞醬品牌設計/thumbnail.jpg",
    folder: "/portfolio/品牌設計/雞醬品牌設計",
    images: ["/portfolio/品牌設計/雞醬品牌設計/image01.jpg","/portfolio/品牌設計/雞醬品牌設計/image02.jpg","/portfolio/品牌設計/雞醬品牌設計/image03.jpg","/portfolio/品牌設計/雞醬品牌設計/image04.jpg","/portfolio/品牌設計/雞醬品牌設計/image05.jpg","/portfolio/品牌設計/雞醬品牌設計/image06.jpg","/portfolio/品牌設計/雞醬品牌設計/image07.jpg","/portfolio/品牌設計/雞醬品牌設計/image08.jpg","/portfolio/品牌設計/雞醬品牌設計/image09.jpg","/portfolio/品牌設計/雞醬品牌設計/image10.jpg","/portfolio/品牌設計/雞醬品牌設計/image11.jpg","/portfolio/品牌設計/雞醬品牌設計/image12.jpg","/portfolio/品牌設計/雞醬品牌設計/image13.jpg","/portfolio/品牌設計/雞醬品牌設計/image14.jpg","/portfolio/品牌設計/雞醬品牌設計/image15.jpg","/portfolio/品牌設計/雞醬品牌設計/image16.jpg","/portfolio/品牌設計/雞醬品牌設計/image17.jpg","/portfolio/品牌設計/雞醬品牌設計/image18.jpg","/portfolio/品牌設計/雞醬品牌設計/image19.jpg","/portfolio/品牌設計/雞醬品牌設計/image20.jpg"],
    tags: ["Brand Design", "Food", "Brand Identity"],
    views: 1500,
    likes: 120,
    category: "品牌設計"
  },
]

const aiAutoProjects = [
  {
    id: 20,
    title: "2026作品集匯總",
    client: "2026",
    description: "2026 portfolio summary - AI automation works collection",
    image: "/portfolio/AI自動化/ZNzMwNzA0MjA=/thumbnail.png",
    folder: "/portfolio/AI自動化/ZNzMwNzA0MjA=",
    images: ["/portfolio/AI自動化/ZNzMwNzA0MjA=/image01.png","/portfolio/AI自動化/ZNzMwNzA0MjA=/image02.png","/portfolio/AI自動化/ZNzMwNzA0MjA=/image03.png"],
    tags: ["AI Automation", "Portfolio", "2026"],
    views: 1500,
    likes: 120,
    category: "AI自動化"
  },
  {
    id: 21,
    title: "2025智能家居UI作品集",
    client: "周游0626",
    description: "2025 smart home UI portfolio",
    image: "/portfolio/AI自動化/2025智能家居UI作品集/thumbnail.jpg",
    folder: "/portfolio/AI自動化/2025智能家居UI作品集",
    images: ["/portfolio/AI自動化/2025智能家居UI作品集/image01.jpg","/portfolio/AI自動化/2025智能家居UI作品集/image02.jpg","/portfolio/AI自動化/2025智能家居UI作品集/image03.jpg","/portfolio/AI自動化/2025智能家居UI作品集/image04.jpg","/portfolio/AI自動化/2025智能家居UI作品集/image05.jpg"],
    tags: ["AI Automation", "Smart Home", "UI Design"],
    views: 1500,
    likes: 120,
    category: "AI自動化"
  },
  {
    id: 23,
    title: "Beck_UI作品集",
    client: "Beck_z",
    description: "Beck UI works collection 2026 - GIF format",
    image: "/portfolio/AI自動化/Beck_UI作品集/thumbnail.gif",
    folder: "/portfolio/AI自動化/Beck_UI作品集",
    images: ["/portfolio/AI自動化/Beck_UI作品集/image01.gif","/portfolio/AI自動化/Beck_UI作品集/image02.gif","/portfolio/AI自動化/Beck_UI作品集/image03.gif","/portfolio/AI自動化/Beck_UI作品集/image04.gif","/portfolio/AI自動化/Beck_UI作品集/image05.gif","/portfolio/AI自動化/Beck_UI作品集/image06.gif","/portfolio/AI自動化/Beck_UI作品集/image07.gif","/portfolio/AI自動化/Beck_UI作品集/image08.gif","/portfolio/AI自動化/Beck_UI作品集/image09.gif"],
    tags: ["UI Design", "Portfolio", "GIF"],
    views: 1500,
    likes: 120,
    category: "AI自動化"
  },
  {
    id: 50,
    title: "品牌VIS設計案例",
    client: "萬視風設計",
    description: "品牌VIS設計案例作品集",
    image: "/portfolio/AI自動化/品牌VIS設計案例/thumbnail.jpg",
    folder: "/portfolio/AI自動化/品牌VIS設計案例",
    images: ["/portfolio/AI自動化/品牌VIS設計案例/image01.jpg","/portfolio/AI自動化/品牌VIS設計案例/image02.jpg","/portfolio/AI自動化/品牌VIS設計案例/image03.jpg","/portfolio/AI自動化/品牌VIS設計案例/image04.jpg","/portfolio/AI自動化/品牌VIS設計案例/image05.jpg","/portfolio/AI自動化/品牌VIS設計案例/image06.jpg","/portfolio/AI自動化/品牌VIS設計案例/image07.jpg","/portfolio/AI自動化/品牌VIS設計案例/image08.jpg","/portfolio/AI自動化/品牌VIS設計案例/image09.jpg","/portfolio/AI自動化/品牌VIS設計案例/image10.jpg","/portfolio/AI自動化/品牌VIS設計案例/image11.jpg"],
    tags: ["Brand Design", "VIS", "Case Study"],
    views: 1500,
    likes: 120,
    category: "AI自動化"
  },
  {
    id: 51,
    title: "ZAOV罐設計",
    client: "召物少年",
    description: "ZAOV｜罐設計作品",
    image: "/portfolio/AI自動化/ZAOV罐設計/thumbnail.jpg",
    folder: "/portfolio/AI自動化/ZAOV罐設計",
    images: [],
    tags: ["Brand Design", "Product", "Packaging"],
    views: 1500,
    likes: 120,
    category: "AI自動化"
  },
  {
    id: 52,
    title: "AIGC商業場景圖",
    client: "AICG",
    description: "AIGC從白底結構圖到商業場景圖的提示詞教學",
    image: "/portfolio/AI自動化/AIGC商業場景圖/thumbnail.jpg",
    folder: "/portfolio/AI自動化/AIGC商業場景圖",
    images: ["/portfolio/AI自動化/AIGC商業場景圖/image01.jpg","/portfolio/AI自動化/AIGC商業場景圖/image02.jpg"],
    tags: ["AIGC", "Commercial", "Tutorial"],
    views: 1500,
    likes: 120,
    category: "AI自動化"
  },
]

const allProjects = [...webDevProjects, ...brandProjects, ...aiAutoProjects]

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

  // Images from static array (set in project data above)
  const images = project.images || []
  const videos: string[] = []

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