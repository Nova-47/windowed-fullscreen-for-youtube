# Chrome Web Store listing

Copy-paste source for the Developer Dashboard. Upload `dist/windowed-fullscreen-for-youtube-<version>.zip`
built by `scripts/package.sh`.

## Store listing tab

**Name** (from manifest): Windowed Fullscreen for YouTube

**Summary** (from manifest, ≤132 chars):
Expand the YouTube player to fill the whole browser window while keeping tabs and the address bar. Press W to toggle.

**Category:** Productivity → Tools

**Language:** English (add Korean below as a second localized listing if wanted)

**Description (English):**

```
Watch YouTube in a bigger player without leaving your browser.

Windowed Fullscreen expands the YouTube player to fill the entire browser window. Unlike regular fullscreen (F), your tabs and address bar stay visible, so you can snap the window to half your screen and keep notes, docs or code open next to the video.

HOW TO USE
• Press W on any YouTube video to toggle
• Alt+W toggles it from any tab
• Or click the new button next to the fullscreen button in the player bar
• Or use the toolbar popup switch
• The ✕ in the top-right corner exits

Your choice is remembered, so the next video opens in windowed fullscreen too. Native fullscreen (F) keeps working as usual.

PRIVACY
No data is collected and nothing is sent anywhere. The only thing stored is the on/off setting, locally in your browser. The only permission requested is "storage".

Open source (MIT): https://github.com/Nova-47/windowed-fullscreen-for-youtube

This extension is not affiliated with, endorsed by, or sponsored by YouTube or Google LLC. YouTube is a trademark of Google LLC.
```

**Description (Korean, optional localized listing):**

```
브라우저를 벗어나지 않고 YouTube를 더 큰 플레이어로 보세요.

Windowed Fullscreen은 YouTube 플레이어를 브라우저 창 전체로 확장합니다. 일반 전체화면(F)과 달리 탭과 주소창이 그대로 보이기 때문에, 창을 화면 절반에 붙여 두고 옆에 메모·문서·코드를 띄워 둔 채 영상을 볼 수 있습니다.

사용법
• YouTube 영상에서 W 키로 켜고 끄기
• 다른 탭에서도 Alt+W로 전환
• 플레이어 하단 바의 전체화면 버튼 옆 새 버튼 클릭
• 툴바 팝업의 스위치 사용
• 오른쪽 위 ✕ 버튼으로 종료

설정은 기억되므로 다음 영상도 창 모드 전체화면으로 열립니다. 기본 전체화면(F)은 그대로 동작합니다.

개인정보
어떤 데이터도 수집하거나 전송하지 않습니다. 켜짐/꺼짐 설정 하나만 브라우저 안에 저장하며, 요청하는 권한은 "storage" 하나뿐입니다.

오픈소스 (MIT): https://github.com/Nova-47/windowed-fullscreen-for-youtube

이 확장 프로그램은 YouTube 또는 Google LLC와 제휴, 보증, 후원 관계가 없습니다. YouTube는 Google LLC의 상표입니다.
```

**Graphic assets**
- Store icon 128×128: `icons/icon128.png`
- Screenshots 1280×800: `store/screenshot-1.png`, `store/screenshot-2.png`
  (footage: Big Buck Bunny © Blender Foundation, CC BY 3.0)
- Small promo tile 440×280: `store/promo-small.png`

**Homepage URL:** https://github.com/Nova-47/windowed-fullscreen-for-youtube
**Support URL:** https://github.com/Nova-47/windowed-fullscreen-for-youtube/issues

## Privacy practices tab

**Single purpose description:**
Enlarges the YouTube video player to fill the browser window (windowed fullscreen) on youtube.com watch pages, toggled by the W key, Alt+W, a player-bar button or the toolbar popup.

**Permission justification: storage**
Remembers whether windowed fullscreen is turned on, so the next video opens in the same mode. Only this boolean is stored, locally.

**Host permission justification** (content scripts on `*://www.youtube.com/*`):
The extension's only job is to change the layout of YouTube watch pages: it injects CSS to enlarge the player, adds a button to the player bar, and listens for the W key. It does not run on any other site.

**Remote code:** No, I am not using remote code. All JavaScript is included in the package.

**Data usage:** check nothing (does not collect any of the listed data types), then tick all three certifications:
- I do not sell or transfer user data to third parties, outside of the approved use cases
- I do not use or transfer user data for purposes that are unrelated to my item's single purpose
- I do not use or transfer user data to determine creditworthiness or for lending purposes

**Privacy policy URL:**
https://github.com/Nova-47/windowed-fullscreen-for-youtube/blob/master/PRIVACY.md

## Distribution tab
- Visibility: Public
- Regions: All regions
- Pricing: Free
