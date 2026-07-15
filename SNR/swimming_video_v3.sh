#!/bin/bash
# ==========================================
# AI 游泳短片生成器 v3（Simple Zoom）
# ==========================================

echo "🏊 AI 游泳短片生成器 v3"

OUTPUT_DIR="/Users/izzy/Desktop/SNR/swimming_videos"
mkdir -p "$OUTPUT_DIR"

TOPIC="小朋友學游水學極都係唔識？俾我哋60日，幫你個小朋友爆發式學會游水！"
echo "📌 主題：$TOPIC"

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
AUDIO_FILE="/tmp/audio_$TIMESTAMP.m4a"
OUTPUT_FILE="$OUTPUT_DIR/swim_video_v3_$TIMESTAMP.mp4"

# TTS
say -v "Ting-Ting" -o "$AUDIO_FILE" "$TOPIC" 2>/dev/null || say -v "Mei-Jia" -o "$AUDIO_FILE" "$TOPIC"

# 背景圖
BACKGROUND="/tmp/bg_$TIMESTAMP.jpg"
curl -s -L "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1080&h=1920&fit=crop" -o "$BACKGROUND"

if [ -f "$BACKGROUND" ] && [ -f "$AUDIO_FILE" ]; then
    # 簡單 zoom in + 合併
    ffmpeg -y -loop 1 -i "$BACKGROUND" -i "$AUDIO_FILE" \
        -vf "scale=1080*1.5:-1,zoompan=z='1+min(t/5,0.5)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920" \
        -c:v libx264 -tune stillimage \
        -c:a aac -b:a 192k \
        -pix_fmt yuv420p \
        -shortest \
        "$OUTPUT_FILE" 2>&1 | tail -3
    
    if [ -f "$OUTPUT_FILE" ] && [ -s "$OUTPUT_FILE" ]; then
        echo "✅ 視頻已生成！"
        cp "$OUTPUT_FILE" ~/Desktop/
        echo "✅ 已複製到 Desktop"
        ls -la ~/Desktop/swim_video_v3_*.mp4
    else
        echo "❌ FFmpeg failed, trying simpler method..."
        # Fallback: 簡單裁剪 + 合併
        ffmpeg -y -loop 1 -i "$BACKGROUND" -i "$AUDIO_FILE" \
            -vf "scale=2160:-1,crop=2160:3840,zoompan=z='1.2':d=60:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920" \
            -c:v libx264 -tune stillimage \
            -c:a aac -b:a 192k \
            -pix_fmt yuv420p \
            -shortest \
            "$OUTPUT_FILE" 2>&1 | tail -3
        
        if [ -f "$OUTPUT_FILE" ] && [ -s "$OUTPUT_FILE" ]; then
            echo "✅ 視頻已生成！"
            cp "$OUTPUT_FILE" ~/Desktop/
        fi
    fi
fi

rm -f "$AUDIO_FILE" "$BACKGROUND" 2>/dev/null
