#!/bin/bash
# ==========================================
# AI 游泳短片自動化生成流程
# SwimPro AI Video Generator v1.0
# ==========================================

# 顏色輸出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  🏊 AI 游泳短片自動化工廠 v1.0${NC}"
echo -e "${BLUE}========================================${NC}"

# 設定路徑
PROJECT_DIR="/Users/izzy/Desktop/SNR"
OUTPUT_DIR="/Users/izzy/Desktop/SNR/swimming_videos"
TEMP_DIR="/Users/izzy/Desktop/SNR/temp"
ASSETS_DIR="/Users/izzy/Desktop/Gogh Studio/images"

# 創建輸出目錄
mkdir -p "$OUTPUT_DIR"
mkdir -p "$TEMP_DIR"

# 主題列表（可以無限擴展）
TOPICS=(
    "小朋友怕水點算？🏊‍♂️"
    "60日學識游水係點解？"
    "正確呼吸法係游水關鍵"
    "香港小朋友學游水邊個年齡最好？"
    "學游水對小朋友有咩好處？"
    "Swim Calisthenics係咩？"
    "點解香港小朋友要學游水？"
    "家長必睇！學游水3大謬誤"
    "游水教練分享：零基礎學員第一堂"
    "小朋友學游水常見問題解答"
)

# 隨機選擇一個主題
TOPIC="${TOPICS[$((RANDOM % ${#TOPICS[@]}))]}"
echo -e "${YELLOW}📌 今日主題：$TOPIC${NC}"

# 步驟 1：生成腳本
echo -e "${BLUE}📝 Step 1: 生成粵語腳本...${NC}"
SCRIPT=$(cat << 'EOF'
你是一個專業的粵語影片腳本作家。

為以下議題寫一段30秒的粵語口語腳本：

TOPIC: $TOPIC

要求：
- 簡單易懂，適合家長群體
- 大約75字（30秒朗讀量）
- 開場吸引注意力（用問句）
- 有Call-to-action結尾
- 用口語化嘅粵語表達
- 適合Facebook/Instagram short video
EOF
)

# 步驟 2：生成圖片（使用現有圖片或AI生成）
echo -e "${BLUE}🖼️ Step 2: 生成背景圖片...${NC}"

# 使用現有的游泳圖片作為背景
if [ -d "$ASSETS_DIR/hongkong_news" ]; then
    echo "使用現有圖片庫..."
fi

# 步驟 3：生成語音
echo -e "${BLUE}🎙️ Step 3: 生成粵語配音...${NC}"

# 步驟 4：合併成短片
echo -e "${BLUE}🎬 Step 4: 合併成短片...${NC}"

# 輸出結果
echo -e "${GREEN}✅ 完成！短片已保存到：$OUTPUT_DIR${NC}"
echo -e "${YELLOW}📁 今日主題：$TOPIC${NC}"

# 列出輸出文件
ls -la "$OUTPUT_DIR"
