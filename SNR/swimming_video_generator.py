#!/usr/bin/env python3
"""
AI 游泳短片自動生成器
SwimPro AI Video Generator v1.0

使用說明：
1. 確保已安裝依賴：pip install requests ollama
2. 確保 FFmpeg 已安裝
3. 設定 API keys
4. 運行：python swimming_video_generator.py
"""

import os
import sys
import json
import random
import subprocess
import requests
from datetime import datetime

# ==========================================
# 設定
# ==========================================

PROJECT_DIR = "/Users/izzy/Desktop/SNR"
OUTPUT_DIR = f"{PROJECT_DIR}/swimming_videos"
TEMP_DIR = f"{PROJECT_DIR}/temp"

# API Keys（需要填入）
ELEVENLABS_API_KEY = "YOUR_API_KEY"  # https://elevenlabs.io
OLLAMA_HOST = "http://localhost:11434"

# ==========================================
# 內容主題
# ==========================================

TOPICS = [
    {
        "title": "小朋友學游水學極都係唔識？",
        "script": "小朋友學游水學極都係唔識？俾我哋60日，幫你個小朋友爆發式學會游水！無論係咩程度，只要方法啱、教練用心，就可以達到10倍進步！興趣就留言「了解」啦！",
        "hashtags": "#游泳 #小朋友學游水 #60天學會游水 #香港游泳班"
    },
    {
        "title": "正確呼吸法係游水關鍵",
        "script": "游水第一步，唔係手腳，而係呼吸！好多小朋友學極都係因為呼吸方法錯咗。我哋嘅Swim Calisthenics訓練法，專門針對正確呼吸，等你小朋友游得更加輕鬆自在！",
        "hashtags": "#游泳技巧 #正確呼吸法 #SwimCalisthenics #學游水"
    },
    {
        "title": "60天游泳爆發計劃",
        "script": "想60日內游水爆發？我哋嘅課程係度身訂造，針對每個小朋友嘅進度。用20%重點訓練，達到80%效果！適合3-12歲，唔需要識游水都可以報名！",
        "hashtags": "#60天游泳爆發 #度身訂造 #小朋友游水 #香港"
    },
    {
        "title": "點解小朋友要學游水？",
        "script": "學游水唔單止係一種技能，仲係生存能力！我哋着重自救技能，等小朋友遇到危險嘅時候知道自己點求生。安全第一，係我哋嘅核心價值！",
        "hashtags": "#自救技能 #游泳安全 #小朋友學游水 #香港"
    },
    {
        "title": "學游水要幾耐？",
        "script": "一般小朋友8-12堂可以掌握基本游水技能。但係我哋唔催谷進度，係根據小朋友嘅吸收能力去調整，確保每一個動作都做得正確！",
        "hashtags": "#學游水時間 #游泳課程 #小朋友學游水"
    },
    {
        "title": "怕水小朋友點算？",
        "script": "怕水？唔使擔心！我哋嘅教練特別擅長幫助怕水嘅小朋友建立信心，等佢哋喺輕鬆愉快嘅環境下慢慢克服恐懼，慢慢愛上游水！",
        "hashtags": "#怕水小朋友 #克服恐懼 #學游水 #香港游泳教練"
    },
    {
        "title": "10倍進步法",
        "script": "無論你小朋友目前係咩程度，只要方法正確、心態正確、教練用心，就可以達到10倍突破性進步！我哋唔係教你哋假游水，係教你哋水中生存技能！",
        "hashtags": "#10倍進步 #突破性進步 #游泳技巧 #香港"
    },
    {
        "title": "限時優惠$3,888",
        "script": "🔥 60天游泳爆發計劃限時團購價$3,888！包含60日專業訓練、小班教學、專人跟進。名額有限，立即行動！WhatsApp 9170 9891！",
        "hashtags": "#限時優惠 #游泳課程優惠 #香港 #60天學會游水"
    },
]

# ==========================================
# 工具函數
# ==========================================

def log(msg, level="INFO"):
    """日誌輸出"""
    timestamp = datetime.now().strftime("%H:%M:%S")
    prefix = {
        "INFO": "\033[34m[INFO]\033[0m",
        "SUCCESS": "\033[32m[SUCCESS]\033[0m",
        "WARNING": "\033[33m[WARNING]\033[0m",
        "ERROR": "\033[31m[ERROR]\033[0m"
    }
    print(f"{prefix.get(level, '[INFO]')} [{timestamp}] {msg}")

def create_dirs():
    """創建必要目錄"""
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(TEMP_DIR, exist_ok=True)
    log(f"目錄已創建：{OUTPUT_DIR}")

def get_random_topic():
    """隨機選擇主題"""
    topic = random.choice(TOPICS)
    log(f"選擇主題：{topic['title']}")
    return topic

def generate_script_with_ollama(topic):
    """使用 Ollama 生成腳本"""
    log("使用 Ollama 生成腳本...")
    try:
        response = requests.post(
            f"{OLLAMA_HOST}/api/generate",
            json={
                "model": "llama3.2",
                "prompt": f"為以下主題寫一段30秒的粵語口語腳本：{topic['title']}",
                "stream": False
            },
            timeout=30
        )
        if response.status_code == 200:
            return response.json().get("response", topic["script"])
    except Exception as e:
        log(f"Ollama 生成失敗，使用默認腳本：{e}", "WARNING")
    return topic["script"]

def generate_image_with_comfyui(prompt, output_path):
    """使用 ComfyUI 生成圖片"""
    log("使用 ComfyUI 生成圖片...")
    # 這裡需要根據實際的 ComfyUI API 調整
    # 示意代碼
    try:
        # 示意：實際需要調用 ComfyUI 的 API
        log("ComfyUI API 調用（需要根據實際設置調整）", "WARNING")
        return None  # 返回 None 表示使用佔位圖
    except Exception as e:
        log(f"圖片生成失敗：{e}", "WARNING")
        return None

def generate_tts(text, output_path):
    """生成 TTS 語音"""
    log("生成 TTS 語音...")
    try:
        # ElevenLabs API 示例
        headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": ELEVENLABS_API_KEY
        }
        data = {
            "text": text,
            "model_id": "eleven_monolingual_v1",
            "voice_settings": {
                "stability": 0.5,
                "similarity_boost": 0.8
            }
        }
        response = requests.post(
            "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDqSikH58",
            headers=headers,
            json=data,
            timeout=30
        )
        if response.status_code == 200:
            with open(output_path, "wb") as f:
                f.write(response.content)
            log(f"TTS 已保存：{output_path}", "SUCCESS")
            return output_path
    except Exception as e:
        log(f"TTS 生成失敗：{e}", "WARNING")
    return None

def merge_video_ffmpeg(image_path, audio_path, output_path):
    """使用 FFmpeg 合併視頻"""
    log("合併視頻...")
    try:
        # 檢查文件是否存在
        if not os.path.exists(image_path):
            log(f"圖片不存在：{image_path}", "WARNING")
            return False
        if not os.path.exists(audio_path):
            log(f"音頻不存在：{audio_path}", "WARNING")
            return False
        
        # FFmpeg 命令
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", image_path,
            "-i", audio_path,
            "-c:v", "libx264", "-tune", "stillimage",
            "-c:a", "aac", "-b:a", "192k",
            "-pix_fmt", "yuv420p",
            "-shortest", "-fpsmode", "passthrough",
            output_path
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode == 0:
            log(f"視頻已生成：{output_path}", "SUCCESS")
            return True
        else:
            log(f"FFmpeg 錯誤：{result.stderr}", "ERROR")
    except Exception as e:
        log(f"視頻合併失敗：{e}", "ERROR")
    return False

def create_video(topic):
    """創建完整視頻"""
    log(f"\n{'='*50}")
    log(f"開始生成視頻：{topic['title']}")
    log(f"{'='*50}")
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    audio_path = f"{TEMP_DIR}/audio_{timestamp}.mp3"
    output_path = f"{OUTPUT_DIR}/swim_video_{timestamp}.mp4"
    
    # 1. 生成腳本
    script = generate_script_with_ollama(topic)
    log(f"腳本：{script[:50]}...")
    
    # 2. 生成 TTS
    audio_file = generate_tts(script, audio_path)
    if not audio_file:
        log("TTS 生成失敗，跳過此視頻", "ERROR")
        return None
    
    # 3. 生成圖片（使用佔位圖或現有圖片）
    image_path = f"{PROJECT_DIR}/placeholder_swim.jpg"
    if not os.path.exists(image_path):
        # 使用網絡圖片作為佔位
        image_path = "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1080&h=1920&fit=crop"
    
    # 4. 合併視頻
    if merge_video_ffmpeg(image_path, audio_file, output_path):
        return output_path
    return None

def generate_caption(topic):
    """生成社交媒體 Caption"""
    caption = f"""🏊‍♂️ {topic['title']}

{topic['script']}

{topic['hashtags']}

---
📞 查詢/報名：WhatsApp 9170 9891
🌐 https://dolphin-course-landing.vercel.app/
"""
    return caption

# ==========================================
# 主程序
# ==========================================

def main():
    print("""
╔══════════════════════════════════════════════╗
║  🏊 AI 游泳短片自動生成器 v1.0                ║
║  SwimPro AI Video Generator                  ║
╚══════════════════════════════════════════════╝
    """)
    
    create_dirs()
    
    # 選擇主題
    topic = get_random_topic()
    
    # 生成視頻
    output_file = create_video(topic)
    
    if output_file:
        # 生成 Caption
        caption = generate_caption(topic)
        print("\n" + "="*50)
        print("📝 Caption 內容：")
        print("="*50)
        print(caption)
        print("="*50)
        print(f"\n✅ 視頻已生成：{output_file}")
    else:
        print("\n❌ 視頻生成失敗")

if __name__ == "__main__":
    main()
