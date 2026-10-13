#!/bin/sh
# Build the Chrome Web Store upload: only the files the extension loads.
set -e
cd "$(dirname "$0")/.."
version=$(sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' manifest.json)
out="dist/windowed-fullscreen-for-youtube-$version.zip"
mkdir -p dist
rm -f "$out"
zip -q -X "$out" manifest.json background.js content.js content.css \
  key_interceptor.js popup.html popup.js LICENSE \
  icons/icon16.png icons/icon48.png icons/icon128.png
echo "$out"
