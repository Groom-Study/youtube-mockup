# 📺 YouTube Dark Mode Mockup Study

> **구름 딥다이브 풀스택 19회차 3팀 'NOT NULL' - 배윤상**
> 
> 유튜브 메인 페이지의 UI/UX를 다크 모드 기반으로 구현한 목업 제작 프로젝트 저장소입니다.

---

## 📝 프로젝트 소개
- **주제**: CSS 변수와 그리드 시스템을 활용한 유튜브 다크 모드 UI 구현
- **기술 스택**: `HTML5`, `CSS3` (Custom SVG 아이콘 활용)
- **주요 기능**:
  - ✅ **Dark Theme**: 다크 테마 컬러 팔레트 적용
  - ✅ **Grid Layout**: CSS Grid를 이용한 반응형 비디오 그리드 구현
  - ✅ **UI/UX**: 검색창 포커스 시 커스텀 아웃라인 효과 및 레이아웃 최적화

---

## 📂 디렉토리 구조
```text
youtube-mockup/
├── index.html          # 메인 레이아웃 구조 (시멘틱 태그 활용)
├── styles/             # 기능별 CSS 모듈화
│   ├── general.css     # 전역 변수 설정 및 초기화 스타일
│   ├── header.css      # 검색창 및 네비게이션 스타일
│   ├── sidebar.css     # 고정형 사이드바 스타일
│   └── video.css       # 콘텐츠 필터 및 비디오 그리드 스타일
└── assets/
    ├── icons/          # 프로젝트 전용 SVG 아이콘 자산
    └── images/         # 영상 썸네일 및 프로필 이미지