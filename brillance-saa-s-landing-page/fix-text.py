#!/usr/bin/env python3
import os

base = os.path.expanduser("~/Desktop/brillance-saa-s-landing-page")

# Order matters: longest/specific first, then shorter substrings
replacements = [
    ("Built for absolute clarity and focused work", "專為高效專注工作而設"),
    ("Stay focused with tools that organize, connect", "專注於工具如何整理、連接"),
    ("and turn information into confident decisions.", "並將資訊轉化為明智的決定。"),
    ("Smart. Simple. Brilliant.", "智能 · 簡單 · 出色。"),
    ("Your data is beautifully organized so you see everything clearly without the clutter.", "你的數據排列整齊，讓你一目了然，告別雜亂。"),
    ("Your work, in sync", "工作同步"),
    ("Every update flows instantly across your team and keeps collaboration effortless and fast.", "所有更新即時同步至團隊，讓協作變得輕鬆快捷。"),
    ("Team updates flow seamlessly", "團隊更新無縫同步"),
    ("Effortless integration", "無縫整合"),
    ("All your favorite tools connect in one place and work together seamlessly by design.", "所有你喜愛的工具在一個平台互聯，設計天然無縫協作。"),
    ("Numbers that speak", "數據說話"),
    ("Track growth with precision and turn raw data into confident decisions you can trust.", "精準追蹤增長，將原始數據轉化為可信的明智決策。"),
    ("Invoiced Revenue", "已開發票收入"),
    ("Platform Features", "平台功能"),
    ("Streamline your business operations", "簡化業務營運"),
    ("all in one powerful platform.", "一切盡在一個強大平台。"),
    ("Data to insights in minutes", "分鐘級數據洞察"),
    ("Work together in real-time with your team", "與團隊即時協作"),
    ("and share insights instantly.", "即時分享洞察。"),
    ("The billing automation is a game-changer. What used to take our team days now happens automatically with perfect accuracy.", "帳單自動化是遊戲規則改變者。過去團隊需要數天完成的工作，現在自動精準完成。"),
    ("Finance Director, InnovateCorp", "財務總監，創新企業"),
    ("Plans & Pricing", "方案與定價"),
    ("Choose the perfect plan for your business", "選擇適合你業務的完美方案"),
    ("Start free, upgrade when you're ready.", "免費開始，準備好再升級。"),
    ("Perfect for individuals and small teams getting started.", "適合個人和小型團隊起步。"),
    ("Advanced features for growing teams and businesses.", "適合成長中的團隊和企業的高級功能。"),
    ("Complete solution for large organizations and enterprises.", "適合大型組織和企業的完整方案。"),
    ("Everything in Professional", "包含專業版所有功能"),
    ("Frequently Asked Questions", "常見問題"),
    ("Ready to transform your business?", "準備好轉型你的業務了嗎？"),
    ("Join thousands of businesses streamlining their operations,", "加入數千企業的行列，簡化營運"),
    ("managing schedules, and growing with data-driven insights.", "管理排程，用數據驅動洞察實現增長。"),
    ("Coding made effortless", "AI 服務無縫整合"),
    ("Basic documentation tools", "基本文檔工具"),
    ("Community support", "社區支援"),
    ("Standard templates", "標準模板"),
    ("Basic analytics", "基本分析"),
    ("Advanced documentation tools", "高級文檔工具"),
    ("Priority support", "優先支援"),
    ("Custom templates", "自訂模板"),
    ("Advanced analytics", "高級分析"),
    ("Team collaboration", "團隊協作"),
    ("API access", "API 存取"),
    ("Custom integrations", "自訂整合"),
    ("Dedicated account manager", "專屬客戶經理"),
    ("24/7 phone support", "全天候電話支援"),
    ("Custom onboarding", "自訂入門培訓"),
    ("Advanced security features", "高級安全功能"),
    ("SSO integration", "SSO 整合"),
    ("Custom contracts", "自訂合約"),
    ("White-label options", "白標方案"),
    ("Onboarding Presentation", "入職演示"),
    ("New Employee Welcome Lunch!", "新員工歡迎午餐！"),
    ("Every feature you need", "必備功能"),
    ("Up to 3 projects", "最多 3 個項目"),
    ("Get started", "立即開始"),
    ("Contact sales", "聯絡銷售"),
    ("About us", "關於我們"),
    ("Our team", "我們的團隊"),
    ("Terms of use", "使用條款"),
    ("API Reference", "API 參考"),
    ("Community", "社區"),
    ("Product", "產品"),
    ("Features", "功能"),
    ("Pricing", "定價"),
    ("Integrations", "整合"),
    ("Careers", "招聘"),
    ("Brand", "品牌"),
    ("Contact", "聯絡"),
    ("Documentation", "文檔"),
    ("Professional", "專業版"),
    ("Enterprise", "企業版"),
    ("Starter", "入門版"),
    ("Start for free", "免費開始"),
    ("name: \"Marcus Rodriguez\"", 'name: "李明遠"'),
]

seen = {}
for eng, chn in replacements:
    if eng not in seen:
        seen[eng] = chn

for root, dirs, files in os.walk(base):
    if "node_modules" in root or ".next" in root:
        continue
    for f in files:
        if f.endswith(".tsx") or f.endswith(".ts"):
            path = os.path.join(root, f)
            try:
                with open(path, "r", encoding="utf-8") as file:
                    content = file.read()
                original = content
                for eng, chn in replacements:
                    content = content.replace(eng, chn)
                if content != original:
                    with open(path, "w", encoding="utf-8") as file:
                        file.write(content)
                    print(f"Updated: {path}")
            except Exception as e:
                print(f"Error {path}: {e}")

print("Done!")
