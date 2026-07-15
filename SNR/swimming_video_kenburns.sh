#!/bin/bash
# ==========================================
# AI 游泳短片生成器 + Ken Burns Effect
# ==========================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  🏊 AI 游泳短片生成器 + Ken Burns Effect${NC}"
echo -e "${BLUE}========================================${NC}"

OUTPUT_DIR="/Users/izzy/Desktop/SNR/swimming_videos"
mkdir -p "$OUTPUT_DIR"

# 主題
TOPICS=(
    "小朋友學游水學極都係唔識？俾我哋60日，幫你個小朋友爆發式學會游水！無論係咩程度，只要方法啱、教練用心，就可以達到10倍進步！"
    "游水第一步，唔係手腳，而係呼吸！好多小朋友學極都係因為呼吸方法錯咗。我哋嘅Swim Calisthenics訓練法，專門針對正確呼吸。"
    "想60日內游水爆發？我哋嘅課程係度身訂造，針對每個小朋友嘅進度。用20%重點訓練，達到80%效果！"
    "學游水唔單止係一種技能，仲係生存能力！我哋着重自救技能，等小朋友遇到危險嘅時候知道自己點求生。"
    "怕水？唔使擔心！我哋嘅教練特別擅長幫助怕水嘅小朋友建立信心，等佢哋喺輕鬆愉快嘅環境下慢慢克服恐懼！"
)

TOTAL=${#TOPICS[@]}
INDEX=$((RANDOM % TOTAL))
TOPIC="${TOPICS[$INDEX]}"

echo -e "${YELLOW}📌 今日內容：${TOPIC:0:50}...${NC}"

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
AUDIO_FILE="/tmp/audio_$TIMESTAMP.aiff"
OUTPUT_FILE="$OUTPUT_DIR/swim_video_$TIMESTAMP.mp4"

# 生成 TTS
echo -e "${BLUE}🎙️ 生成配音...${NC}"
say -v "Ting-Ting" -o "$AUDIO_FILE" "$TOPIC" 2>/dev/null || say -v "Mei-Jia" -o "$AUDIO_FILE" "$TOPIC"

# 下載背景圖
echo -e "${BLUE}🖼️ 下載背景圖片...${NC}"
BACKGROUND="/tmp/bg_$TIMESTAMP.jpg"
curl -s -L "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1080&h=1920&fit=crop" -o "$BACKGROUND"

if [ -f "$BACKGROUND" ] && [ -f "$AUDIO_FILE" ]; then
    # FFmpeg Ken Burns Effect + 合併
    echo -e "${BLUE}🎬 生成 Ken Burns Effect 視頻...${NC}"
    
    ffmpeg -y -loop 1 -i "$BACKGROUND" -i "$AUDIO_FILE" \
        -filter_complex "[0:v]scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,gap=100[zoom];[zoom]zoompan=z='min(zoom+0.001,1.5)':d=125:x='iw/2-(iw/zoom/2)+random(0)*0.1':y='ih/2-(ih/zoom/2)+random(0)*0.1'[v]" \
        -map "[v]" -map 2:a \
        -c:v libx264 -tune stillimage \
        -c:a aac -b:a 192k \
        -pix_fmt yuv420p \
        -shortest \
        "$OUTPUT_FILE" 2>/dev/null
    
    if [ -f "$OUTPUT_FILE" ]; then
        echo -e "${GREEN}✅ 視頻已生成：$OUTPUT_FILE${NC}"
        cp "$OUTPUT_FILE" ~/Desktop/
        echo -e "${GREEN}✅ 已複製到 Desktop${NC}"
    fi
fi

rm -f "$AUDIO_FILE" "$BACKGROUND" 2>/dev/null

echo -e "\n${GREEN}✅ 完成！${NC}"
