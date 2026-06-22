const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/work/[id]/page.tsx', 'utf8');

// Remove fs and path imports
content = content.replace("import fs from 'fs'", '');
content = content.replace("import path from 'path'", '');

// Projects data with their image files
const projectImages = {
  '網站開發/Micbot機器人官網': ['image1.png','image2.png','image3.png','image4.png','image5.png','image6.png','image7.png','image8.png','image9.png'],
  '網站開發/北京上云電梯官網': ['image1.gif','image2.png'],
  '網站開發/Four E App': ['image1.png','image2.png','image3.png'],
  '網站開發/领克汽车APP改版设计': ['image1.png','image2.png','image3.png'],
  '網站開發/2024作品集': ['image1.png','image2.png','image3.png','image4.png','image5.png','image6.png','image7.png'],
  '網站開發/悟匣HEMS APP新品发布': ['image1.png','image2.jpg','image3.png','image4.png'],
  '網站開發/TOYOTA_GR系列车辆管理小程序': ['image01.jpg'],
  '網站開發/落至晚樱': ['image01.png','image02.png','image03.png','image04.png','image05.png','image06.png','image07.png','image08.png','image09.png','image10.png'],
  '網站開發/家庭微电网APP_UIUX设计稿交互原型': ['image01.jpg'],
  '網站開發/Security Camera UI kit': ['image01.png','image02.png'],
  '網站開發/Dreame App迭代設計': ['image01.jpg','image02.jpg','image03.jpg','image04.jpg','image05.jpg','image06.jpg','image07.jpg','image08.jpg','image09.jpg'],
  '網站開發/2026UI作品集': ['image01.jpg','image02.jpg'],
  '網站開發/Ncollecto': ['image01.jpg'],
  '網站開發/流动泡泡糖': ['image01.png','image02.png','image03.png','image04.png','image05.png','image06.png'],
  '網站開發/智能婴童看护APP': ['image01.gif','image02.jpg','image03.jpg','image04.jpg'],
  '網站開發/Capy個人理財APP': ['image01.png','image02.png','image03.png','image04.png','image05.png','image06.png','image07.png'],
  '網站開發/宇树商城UI APP设计': ['image01.jpg','image02.jpg','image03.jpg','image04.jpg','image05.jpg'],
  '網站開發/X-MATE錢包項目': ['image01.png','image02.png','image03.png','image04.png','image05.png','image06.png','image07.png','image08.png','image09.png'],
  '網站開發/Zukka': ['image01.png','image02.png','image03.png','image04.png','image05.png'],
  '網站開發/Skyarc智能家居APP': ['image1.png','image2.png','image3.png'],
  '網站開發/Richland宝石app项目': ['image01.jpg','image02.jpg','image03.jpg','image04.jpg'],
  '網站開發/Web3金融UX視覺設計': ['image01.png','image02.png','image03.jpg','image04.jpg'],
  'AI自動化/2025智能家居UI作品集': ['image01.jpg','image02.jpg','image03.jpg','image04.jpg','image05.jpg'],
  'AI自動化/Beck_UI作品集': ['image01.gif','image02.gif','image03.gif','image04.gif','image05.gif','image06.gif','image07.gif','image08.gif','image09.gif'],
  'AI自動化/ZNzMwNzA0MjA=': ['image01.png','image02.png','image03.png'],
  '品牌設計/OMS': ['image01.png','image02.png','image03.png'],
  '品牌設計/Style Attempt': ['image01.png','image02.png','image03.png'],
  '品牌設計/響鯨海信洗衣機': ['image1.gif','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg'],
};

// Find and update each project with images array
for (const [folder, images] of Object.entries(projectImages)) {
  const escapedFolder = folder.replace('/', '\\/');
  const pattern = new RegExp(`folder: "\\/portfolio\\/${escapedFolder}",`, 'g');
  const imagesArray = JSON.stringify(images.map(img => `/portfolio/${folder}/${img}`));
  content = content.replace(pattern, `folder: "/portfolio/${folder}",\n    images: ${imagesArray},`);
}

// Remove the fs.readdirSync block
const fsBlockRegex = /\/\/ 讀取資料夾中的所有檔案[\s\S]*?\}\s*\}\s*\}\s*\}/;
content = content.replace(fsBlockRegex, '// Images loaded from static arrays above');

// Write back
fs.writeFileSync('app/work/[id]/page.tsx', content);
console.log('Done!');