#!/bin/bash
# ==========================================
# AI 游泳短片快速生成器（簡化版）
# SwimPro Quick Video Generator v1.0
# ==========================================

# 顏色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  🏊 AI 游泳短片快速生成器 v1.0${NC}"
echo -e "${BLUE}========================================${NC}"

# 設定
OUTPUT_DIR="/Users/izzy/Desktop/SNR/swimming_videos"
mkdir -p "$OUTPUT_DIR"

# 主題列表
TOPICS=(
    "小朋友學游水學極都係唔識？俾我哋60日，幫你個小朋友爆發式學會游水！無論係咩程度，只要方法啱、教練用心，就可以達到10倍進步！"
    "游水第一步，唔係手腳，而係呼吸！好多小朋友學極都係因為呼吸方法錯咗。我哋嘅Swim Calisthenics訓練法，專門針對正確呼吸。"
    "想60日內游水爆發？我哋嘅課程係度身訂造，針對每個小朋友嘅進度。用20%重點訓練，達到80%效果！"
    "學游水唔單止係一種技能，仲係生存能力！我哋着重自救技能，等小朋友遇到危險嘅時候知道自己點求生。"
    "怕水？唔使擔心！我哋嘅教練特別擅長幫助怕水嘅小朋友建立信心，等佢哋喺輕鬆愉快嘅環境下慢慢克服恐懼！"
    "無論你小朋友目前係咩程度，只要方法正確、心態正確、教練用心，就可以達到10倍突破性進步！"
    "一般小朋友8-12堂可以掌握基本游水技能。但係我哋唔催谷進度，係根據小朋友嘅吸收能力去調整。"
    "🔥 60天游泳爆發計劃限時團購價\$3,888！包含60日專業訓練、小班教學、專人跟進。立即行動！"
)

# 隨機選擇
TOTAL=${#TOPICS[@]}
INDEX=$((RANDOM % TOTAL))
TOPIC="${TOPICS[$INDEX]}"

echo -e "${YELLOW}📌 今日內容：${TOPIC:0:50}...${NC}"

# 生成時間戳
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
AUDIO_FILE="/tmp/audio_$TIMESTAMP.wav"
OUTPUT_FILE="$OUTPUT_DIR/swim_video_$TIMESTAMP.mp4"

echo -e "${BLUE}📝 腳本已準備${NC}"
echo "$TOPIC"

# 檢查工具
echo -e "\n${BLUE}🔧 檢查工具...${NC}"

# 檢查 curl
if command -v curl &> /dev/null; then
    echo -e "${GREEN}✓ curl 可用${NC}"
fi

# 檢查 ffmpeg
if command -v ffmpeg &> /dev/null; then
    echo -e "${GREEN}✓ ffmpeg 可用${NC}"
else
    echo -e "${RED}✗ ffmpeg 未安裝${NC}"
    echo "請運行：brew install ffmpeg"
fi

# 檢查 say (macOS TTS)
if command -v say &> /dev/null; then
    echo -e "${GREEN}✓ macOS TTS (say) 可用${NC}"
    USE_SAY=1
else
    echo -e "${YELLOW}⚠ say 不可用${NC}"
    USE_SAY=0
fi

# 生成音頻（使用 macOS say 或 curl）
echo -e "\n${BLUE}🎙️ 生成粵語配音...${NC}"

if [ $USE_SAY -eq 1 ]; then
    # 使用 macOS say 生成音頻
    say -v "Ting-Ting" -o "$AUDIO_FILE.aiff" "$TOPIC" 2>/dev/null || say -v "Mei-Jia" -o "$AUDIO_FILE.aiff" "$TOPIC"
    # 轉換為 WAV
    if command -v afconvert &> /dev/null; then
        afconvert "$AUDIO_FILE.aiff" -f WAVE -d LEI16@44100 "$AUDIO_FILE" 2>/dev/null
    fi
    echo -e "${GREEN}✓ 音頻已生成${NC}"
else
    echo -e "${YELLOW}⚠ 跳過音頻生成${NC}"
fi

# 下載背景圖片
echo -e "\n${BLUE}🖼️ 下載背景圖片...${NC}"
BACKGROUND="/tmp/background_$TIMESTAMP.jpg"

# 使用游泳相關的 Unsplash 圖片
curl -s -L "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1080&h=1920&fit=crop" -o "$BACKGROUND"
if [ -f "$BACKGROUND" ]; then
    echo -e "${GREEN}✓ 背景圖片已下載${NC}"
else
    echo -e "${RED}✗ 背景圖片下載失敗${NC}"
fi

# 合併視頻
echo -e "\n${BLUE}🎬 合併視頻...${NC}"

if [ -f "$BACKGROUND" ] && [ -f "$AUDIO_FILE" ] && command -v ffmpeg &> /dev/null; then
    ffmpeg -y -loop 1 -i "$BACKGROUND" -i "$AUDIO_FILE" \
        -c:v libx264 -tune stillimage \
        -c:a aac -b:a 192k \
        -pix_fmt yuv420p \
        -shortest \
        "$OUTPUT_FILE" 2>/dev/null
    
    if [ -f "$OUTPUT_FILE" ]; then
        echo -e "${GREEN}✓ 視頻已生成：$OUTPUT_FILE${NC}"
    else
        echo -e "${RED}✗ 視頻合併失敗${NC}"
    fi
else
    echo -e "${YELLOW}⚠ 跳過視頻合併（缺少文件或工具）${NC}"
fi

# 清理
rm -f "$AUDIO_FILE" "$AUDIO_FILE.aiff" "$BACKGROUND" 2>/dev/null

# 輸出 Caption
echo -e "\n${BLUE}📝 Caption 內容：${NC}"
echo -e "${GREEN}==============================${NC}"
cat << 'CAPTION'
🏊‍♂️ 小朋友學游水學極都係唔識？？俾我哋60日，幫你個小朋友爆發式學會游水！

無論係咩程度，只要方法啱、教練用心，就可以達到10倍進步！

👇 了解多啲：
🔗 https://dolphin-course-landing.vercel.app/

📞 查詢：WhatsApp 9170 9891

#游泳 #小朋友學游水 #60天學會游水 #香港游泳班 #SwimCalisthenics #學游水 #香港
CAPTION
echo -e "${GREEN}==============================${NC}"

echo -e "\n${GREEN}✅ 完成！${NC}"
echo "📁 輸出目錄：$OUTPUT_DIR"
ls -la "$OUTPUT_DIR" 2>/dev/null | tail -5
