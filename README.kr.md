<p align="center"><img src="icons/icon128.png" width="96" height="96" alt=""></p>

# Windowed Fullscreen for YouTube

YouTube 플레이어를 브라우저 창 전체에 꽉 차게 확장하는 크롬 익스텐션입니다.
OS 전체화면(F키)과 달리 브라우저 탭과 주소창은 그대로 유지되어, 영상을 보면서 다른 작업을 병행하기에 좋습니다.

브라우저 창을 절반으로 나눠 오른쪽엔 YouTube 영상을, 왼쪽엔 메모 앱이나 문서를 띄워두는 식으로 활용할 수 있습니다.

[English](README.md)

![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)
![Version](https://img.shields.io/badge/version-1.3.1-orange)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

---

## 기능

- **창 모드 전체화면** — 플레이어가 브라우저 뷰포트 100%를 채웁니다
- **플레이어 버튼** — YouTube 컨트롤 바의 전체화면 버튼 옆에 아이콘 추가
- **키보드 단축키** — YouTube 영상 페이지에서 `W` 키
- **글로벌 단축키** — 브라우저 어디서든 `Alt+W`
- **팝업 토글** — 익스텐션 아이콘 클릭으로 빠른 on/off
- **상태 유지** — 페이지 이동 후에도 설정이 기억됩니다

---

## 설치 방법

> 현재 Chrome 웹 스토어에 등록되어 있지 않습니다. 아래 방법으로 직접 설치하세요.

1. 이 저장소를 다운로드하거나 클론합니다
   ```
   git clone https://github.com/Nova-47/windowed-fullscreen-for-youtube.git
   ```

2. Chrome에서 `chrome://extensions` 로 이동합니다

3. 우상단의 **개발자 모드** 를 활성화합니다

4. **압축해제된 확장 프로그램을 로드합니다** 를 클릭하고 `windowed-fullscreen-for-youtube` 폴더를 선택합니다

5. YouTube 영상 페이지로 이동해서 `W` 를 누르면 됩니다

---

## 사용법

| 동작 | 설명 |
|------|------|
| `W` | 현재 영상에서 창 모드 전체화면 토글 |
| `Alt+W` | 어느 탭에서든 토글 |
| 플레이어 컨트롤 바의 **⛶** 버튼 클릭 | 전체화면 버튼 옆 아이콘으로 토글 |
| 우상단 **✕** 버튼 클릭 | 창 모드 전체화면 종료 |
| 익스텐션 아이콘 → 토글 스위치 | 팝업에서 on/off |

> **참고:** 기존 YouTube 전체화면(`F` 키)은 그대로 동작합니다. `W` 는 충돌 없는 별개의 단축키입니다.

---

## 동작 원리

이 확장은 CSS를 주입하여 다음을 처리합니다.

- 헤더, 사이드바, 영상 정보 영역을 숨김
- `ytd-player` 요소에 `position: fixed; inset: 0` 을 적용해 뷰포트 전체를 점유
- 모든 변경을 `html` 태그의 단일 클래스로 스코프 처리 — 토글이 즉각적이고 깔끔

`W` 키는 `document_start` 시점에 페이지의 메인 월드에서 가로채기 때문에 YouTube가 자체 키보드 리스너를 등록하기 전에 처리됩니다.

---

## 파일 구조

```
windowed-fullscreen-for-youtube/
├── manifest.json        # Manifest V3
├── key_interceptor.js   # 키보드 가로채기 (document_start, MAIN world)
├── content.js           # CSS 주입 + 플레이어 버튼 + 토글 로직
├── content.css          # 트랜지션 스타일
├── background.js        # 글로벌 단축키 (Alt+W) 처리
├── popup.html           # 익스텐션 팝업 UI
├── popup.js             # 팝업 로직
└── icons/
    ├── icon.svg         # 아이콘 원본
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## 변경 이력

### v1.3.1
- 수정: 라이브 방송 주소(`youtube.com/live/<id>`)에서 버튼·단축키가 전혀 동작하지 않던 문제 해결 — `/watch`와 동일하게 처리

### v1.3.0
- 이름 변경: "YouTube Max" → "Windowed Fullscreen for YouTube", 새 아이콘 적용
- 수정: 다음 영상으로 넘어가도 창 모드 전체화면이 실제로 유지됨 (페이지 이동 시 저장된 설정을 "꺼짐"으로 덮어쓰던 문제)
- 수정: 창 모드 상태에서 YouTube 홈으로 돌아가면 헤더가 숨겨지고 스크롤이 막히던 문제 해결
- 수정: 한글 입력 상태뿐 아니라 AZERTY/Dvorak 배열에서도 `W`가 동작 (입력된 글자 기준, 비라틴 입력일 때만 물리 키로 판별)
- 수정: 애니메이션 도중 `F`를 누르면 네이티브 전체화면 후 창 모드가 다시 켜지던 경합 해결
- `tabs`, `activeTab` 권한 제거: 팝업과 `Alt+W`가 탭 URL을 읽는 대신 페이지의 콘텐츠 스크립트에 직접 물어봄. 설치 시 "방문 기록 읽기" 경고가 더 이상 표시되지 않음

### v1.2.1
- 수정: 한글 입력 상태에서 `W` 단축키가 동작하지 않던 문제 해결 — 물리 키(`e.code`) 기준으로 판별
- 수정: 탭이 백그라운드일 때 토글하면 이후 토글이 영구히 먹통이 되던 문제 해결
- 내부: 숨김 대상 UI 셀렉터 목록을 한 곳으로 통합

### v1.2.0
- 기능: 토글 시 부드러운 애니메이션 적용 — 플레이어가 원래 위치에서 전체화면으로 확장 (300ms, Material Design easing), UI 요소 동시 fade out
- 기능: 종료 시 어두운 오버레이 fade 애니메이션 (150ms in + 150ms out)
- 기능: 닫기 버튼(✕) 부드럽게 fade-in으로 등장

### v1.1.0
- 수정: `tabs` 권한 누락으로 Alt+W 단축키 및 팝업이 동작하지 않던 문제 해결
- 수정: 창 모드 전체화면 중 F키로 OS 전체화면 전환 시 컨트롤바가 깨지던 문제 해결
- 수정: W키 또는 플레이어 버튼으로 토글 시 팝업 체크박스가 실시간으로 동기화되지 않던 문제 해결
- 수정: SPA 페이지 이동 시 MutationObserver가 누적되던 문제 해결
- 수정: 새 영상으로 이동해도 창 모드 전체화면 상태가 복원되지 않던 문제 해결
- 수정: `sendMessage` 에러가 잡히지 않던 문제 해결

### v1.0.0
- 최초 릴리즈

---

## 개인정보

이 확장은 어떤 데이터도 수집하지 않고 외부로 통신하지 않습니다. 창 모드 전체화면의 on/off 상태 하나만 사용자 컴퓨터의 `chrome.storage.local`에 저장합니다. 자세한 내용은 [PRIVACY.md](PRIVACY.md)를 참고하세요.

권한: `storage` 하나뿐입니다 (on/off 상태 기억용). `www.youtube.com` 페이지에서만 동작합니다.

---

## 기여

Pull Request는 언제든 환영합니다. 큰 변경 사항은 먼저 Issue를 열어 논의해 주세요.

## 라이선스

[MIT](LICENSE)

이 프로젝트는 YouTube 또는 Google LLC와 제휴, 보증, 후원 관계가 없습니다. YouTube는 Google LLC의 상표입니다.
