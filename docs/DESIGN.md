# 대기업 현직 멘토 랜딩 페이지 설계

## 1. 개요

- 목적: 공채에서 떨어진 취준생·신입이 **내 직무와 가까운 대기업 현직 멘토**를 찾아 1:1 LIVE 멘토링을 신청하게 한다
- 핵심 메시지: "아무 대기업 멘토"가 아니라 "내 지원 직무와 비슷한 직군의 현직자"에게 피드백 받기. "직무 무관"은 내세우지 않는다
- 스택: Next.js 16 (App Router, TypeScript) + Tailwind CSS v4. DB 없음 (정적 페이지)
- 유입: 광고로 처음 오는 방문자와 기존 회원이 반반 → 설득 흐름 + 멘토 목록 바로가기를 함께 둔다
- 시안: HTML 단일 파일 버전은 로컬 `prototype/`에만 보관 (git 제외)

## 2. 페이지 구성 (`/`)

| 순서 | 섹션 | 컴포넌트 |
| --- | --- | --- |
| 1 | 헤더 (letsgongchae.vercel.app 과 동일 구성: 로고 · 홈 · 마케팅 취준 올인원 패스) | `src/app/layout.tsx` |
| 2 | 히어로. 제목·배지·서브 카피·CTA 2개 + 탈락한 자소서 이미지 | `src/components/hero.tsx` |
| 3 | 공감 ("혹시 지금 이런 상태인가요?") 불합격 문자 + 체크리스트 | `src/app/page.tsx` |
| 4 | 왜 대기업 현직 멘토인가. 카드 3개 + "같은 문장, 다른 피드백" 비교 | `src/app/page.tsx` |
| 5 | 진행 방식 STEP 1~3 | `src/app/page.tsx` |
| 6 | 직무별 멘토 추천 (탭: 전체 / 개발·연구 / PM·데이터 / 마케팅·영업 / 전략·기획) | `src/components/mentor-finder.tsx` |
| 7 | 할인 쿠폰 (복사 버튼) | `src/components/coupon-ticket.tsx` |
| 8 | 후기 | `src/app/page.tsx` |
| 9 | FAQ | `src/app/page.tsx` |
| 10 | 마지막 CTA | `src/app/page.tsx` |
| - | 모바일 하단 고정 버튼 (후기 섹션부터 "신청하러 가기") | `src/components/mobile-dock.tsx` |

## 3. 콘텐츠 원칙

- 멘토 정보는 **각 멘토 상세페이지(`letscareer.co.kr/live-mentoring/{id}`)에 공개된 내용만** 쓴다. 소속 표기도 상세페이지 그대로
- 면접관·채용 심사 경험은 확인할 수 없으므로 표기하지 않는다
- 산업군(반도체, 완성차 등)을 카피에서 내세우지 않는다. 멘토 카드의 소속 표기는 예외
- 멘토 데이터 출처: 공개 API `https://3ccm7bgq1b.execute-api.ap-northeast-2.amazonaws.com/api/v1/live-mentoring/mentors/{id}` → `src/lib/mentors.ts`에 수기 반영 (2026-10-29 기준)
- 가격: 모든 멘토 30분 39,000원 · 60분 69,000원 (멘토 카드에만 표기)

## 4. 디자인 토큰 (`src/app/globals.css`)

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `brand-600` | `#4d55f5` | 메인 컬러. 버튼, 강조 텍스트 |
| `brand-200` | `#e9eaff` | 선택된 탭, 비교 카드 배경 |
| `cool` | `#f6f7ff` | 짝수 섹션 배경 |
| `bg-hero` | `#f1f0ff → #e9ecff → #f6f7ff` | 히어로·마지막 CTA |
| `paper` / `stamp` / `coral` / `note-blue` | | 자소서 이미지, 불합격 도장, 손글씨 메모 |
| `font-hand` | Nanum Pen Script (next/font) | 손글씨 메모, "이번엔 다르게!" |

- 라이트 모드 고정
- 버튼 라운드 8px (`rounded-lg`), 카드 20px, 탭 15px
- 히어로 제목 줄 간격 130%. 제목↔배지 36px, 배지↔서브 카피 12px, 서브 카피↔버튼 36px
- 히어로 자소서 이미지: 위 끝 = 제목 마지막 줄, 아래 끝 = "대기업 멘토 찾기" 버튼 아래 끝 (901px 이상, `hero.tsx`에서 측정)

## 5. 확정이 필요한 항목

- [ ] 쿠폰 코드·할인 금액·사용 기한 (`src/lib/coupon.ts`)
- [ ] 실제 후기 (멘토 9명 모두 후기 0개 → 다른 프로그램 후기 사용 여부 또는 섹션 제외)
- [ ] FAQ: 보안 정책, 진행 방식, 환불 규정
- [ ] FAQ "직무가 달라도 되나요?" 답변을 핵심 메시지에 맞게 수정
- [ ] 진행 방식 STEP 2 "미리 읽어요" (사전 검토는 일부 멘토 상세페이지에만 명시)
- [ ] 용어 통일: "실시간 1:1 멘토링" vs "1:1 LIVE"
- [ ] 출시 전 상단 "시안" 띠 제거
