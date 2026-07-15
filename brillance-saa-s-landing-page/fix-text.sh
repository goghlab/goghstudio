#!/bin/bash
cd ~/Desktop/brillance-saa-s-landing-page

find . -name "*.tsx" -not -path "./node_modules/*" | xargs perl -i -pe'
s/Built for absolute clarity and focused work/專為高效專注工作而設/g;
s/Stay focused with tools that organize, connect/專注於工具如何整理、連接/g;
s/and turn information into confident decisions\./並將資訊轉化為明智的決定。/g;
s/Smart\. Simple\. Brilliant\./智能 · 簡單 · 出色。/g;
s/Your data is beautifully organized so you see everything clearly without the clutter\./你的數據排列整齊，讓你一目了然，告別雜亂。/g;
s/Your work, in sync/工作同步/g;
s/Every update flows instantly across your team and keeps collaboration effortless and fast\./所有更新即時同步至團隊，讓協作變得輕鬆快捷。/g;
s/Team updates flow seamlessly/團隊更新無縫同步/g;
s/Effortless integration/無縫整合/g;
s/All your favorite tools connect in one place and work together seamlessly by design\./所有你喜愛的工具在一個平台互聯，設計天然無縫協作。/g;
s/Numbers that speak/數據說話/g;
s/Track growth with precision and turn raw data into confident decisions you can trust\./精準追蹤增長，將原始數據轉化為可信的明智決策。/g;
s/Invoiced Revenue/已開發票收入/g;
s/Platform Features/平台功能/g;
s/Streamline your business operations/簡化業務營運/g;
s/all in one powerful platform\./一切盡在一個強大平台。/g;
s/Data to insights in minutes/分鐘級數據洞察/g;
s/Work together in real-time with your team/與團隊即時協作/g;
s/and share insights instantly\./即時分享洞察。/g;
s/"The billing automation is a game-changer\. What used to take our team days now happens automatically with perfect accuracy\.\\?"/"帳單自動化是遊戲規則改變者。過去團隊需要數天完成的工作，現在自動精準完成。"/g;
s/name: "Marcus Rodriguez"/name: "李明遠"/g;
s/Finance Director, InnovateCorp/財務總監，創新企業/g;
s/Plans & Pricing/方案與定價/g;
s/Choose the perfect plan for your business/選擇適合你業務的完美方案/g;
s/Start free, upgrade when you're ready\./免費開始，準備好再升級。/g;
s/Perfect for individuals and small teams getting started\./適合個人和小型團隊起步。/g;
s/Advanced features for growing teams and businesses\./適合成長中的團隊和企業的高級功能。/g;
s/Complete solution for large organizations and enterprises\./適合大型組織和企業的完整方案。/g;
s/Everything in Professional/包含專業版所有功能/g;
s/Frequently Asked Questions/常見問題/g;
s/Ready to transform your business？/準備好轉型你的業務了嗎？/g;
s/Join thousands of businesses streamlining their operations,/加入數千企業的行列，簡化營運/g;
s/managing schedules, and growing with data-driven insights\./管理排程，用數據驅動洞察實現增長。/g;
s/Start for free/免費開始/g;
s/Get started/立即開始/g;
s/Contact sales/聯絡銷售/g;
s/Professional/專業版/g;
s/Enterprise/企業版/g;
s/Starter/入門版/g;
'
