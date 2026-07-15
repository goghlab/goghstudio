#!/bin/bash
# Gogh Studio — Daily Content Army Trigger
# Usage: Run this script or let the cron job trigger it

CONTENT_HUB="$HOME/Desktop/Gogh Studio/ContentHub"
SCRIPTS_DIR="$CONTENT_HUB/Scripts"
POSTS_DIR="$CONTENT_HUB/Posts"
TODAY=$(date +%Y-%m-%d)

echo "🎬 Gogh Studio Content Army — Starting Daily Run"
echo "📅 Date: $TODAY"
echo "📁 Content Hub: $CONTENT_HUB"

# Check if Posts directory exists, create if not
mkdir -p "$POSTS_DIR"

echo "✅ Setup complete. Sub-agent will now generate content..."
echo "📝 Output location: $POSTS_DIR/"

# The actual work is done by the spawned sub-agent
# This script just sets up the environment and context

exit 0
