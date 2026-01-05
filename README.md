# YouTube Mockup Project

유튜브 프리미엄 데스크톱 웹사이트의 주요 UI 요소를 HTML과 CSS만으로 구현한 클론 코딩 연습 프로젝트입니다.

## 🛠 기술 스택
- **HTML5**: 시맨틱 태그를 활용한 구조 설계
- **CSS3**: Flexbox 및 Grid 레이아웃

## ✨ 주요 구현 특징
- **반응형 헤더**: 실제 유튜브와 동일한 검색창 확장 효과 및 아이콘 배치. 헤더 및 필터 칩 바 영역에 글래스 효과(Glassmorphism) 적용.
- **고정 사이드바**: `position: fixed`를 활용한 미니 가이드 및 호버 툴팁 구현.
- **필터 칩 바**: 가로 스크롤이 가능한 카테고리 필터 및 선택 상태(`active`) 스타일링.
- **비디오 그리드**: `grid-template-columns`를 이용한 반응형 비디오 리스트 및 썸네일 디자인.

## 📂 프로젝트 구조
- `index.html`: 메인 페이지 구조
- `styles/`: 기능별로 분리된 CSS 파일 (header, sidebar, main, video 등)
- `assets/`: 아이콘 및 이미지 리소스