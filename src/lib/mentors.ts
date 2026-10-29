// letscareer.co.kr/live-mentoring/{id} 상세페이지에 공개된 정보만 사용 (2026-10-29 수집).
// org·role·prev는 상세페이지의 소속/경력 표기 그대로, tags는 상세페이지 본문에 적힌 내용만.
// 순서: 대기업 공채 서류·면접을 직접 다루는 멘토 먼저.

export type JobGroup = "dev" | "pm" | "mkt" | "biz";

export type Mentor = {
  id: number;
  name: string;
  /** 아바타 원 안의 짧은 직무 표기 */
  badge: string;
  color: string;
  org: string;
  role: string;
  prev?: string;
  tags: string[];
  quote: string;
  job: JobGroup;
};

export const JOB_TABS: { key: "all" | JobGroup; label: string; desc: string }[] = [
  { key: "all", label: "전체 보기", desc: "대기업 현직 멘토 9명" },
  { key: "dev", label: "개발·연구", desc: "SW 개발, AI·연구개발 · 3명" },
  { key: "pm", label: "PM·데이터", desc: "서비스 기획·PM, 데이터 분석 · 2명" },
  { key: "mkt", label: "마케팅·영업", desc: "마케팅, 영업마케팅 · 2명" },
  { key: "biz", label: "전략·기획", desc: "전략기획, 사업개발 · 2명" },
];

export const MENTORS: Mentor[] = [
  {
    id: 13276,
    name: "제이미",
    badge: "IT",
    color: "#4d55f5",
    org: "CJ그룹",
    role: "개발자",
    tags: ["공채 2회 도전 경험", "렛츠커리어 LIVE 클래스 2회"],
    quote: "서류부터 면접까지 막히는 지점을 AI 시대 채용 기준에 맞춰 현실적으로 짚어 드릴게요.",
    job: "dev",
  },
  {
    id: 3929,
    name: "리아",
    badge: "전략",
    color: "#f2694b",
    org: "모빌리티 제조업 대기업",
    role: "전략기획",
    prev: "전) 2차전지 제조업 대기업 영업마케팅 · 패션 중견기업 서비스 기획",
    tags: [],
    quote: "같은 소재로 AI를 활용해도 잘 읽히는 자소서는 따로 있습니다.",
    job: "biz",
  },
  {
    id: 5357,
    name: "매튜",
    badge: "사업",
    color: "#0a8fc4",
    org: "현대차그룹 주요 계열사 (현기모 등)",
    role: "매니저",
    prev: "전) LG전자 사원",
    tags: ["문과 직무 전반"],
    quote: "특정 직무에 한정하지 않고 문과 직무 전반의 취업 준비를 함께합니다.",
    job: "biz",
  },
  {
    id: 3928,
    name: "나비",
    badge: "영업",
    color: "#2d8a5f",
    org: "반도체 대기업",
    role: "영업마케팅",
    prev: "전) 외국계 IT인프라 대기업 B2B영업",
    tags: ["자소서 컨셉부터 문항별 피드백"],
    quote: "같은 경험이더라도 무엇을 강조하느냐에 따라 전혀 다른 자소서가 될 수 있어요.",
    job: "mkt",
  },
  {
    id: 14758,
    name: "바다",
    badge: "R&D",
    color: "#7a52e0",
    org: "현대 계열사",
    role: "연구원",
    prev: "전) LG 계열사 선임",
    tags: ["대기업 AI 개발자 취업"],
    quote: "대기업 AI 개발자로 취업을 꿈꾸는 모든 분들께 도움이 되고 싶습니다.",
    job: "dev",
  },
  {
    id: 5895,
    name: "트로이",
    badge: "PM",
    color: "#c0571f",
    org: "카카오 그룹",
    role: "Product Manager",
    tags: ["포트폴리오 사전 검토", "피드백 문서 제공"],
    quote: "현직 PM의 시선으로 포트폴리오와 취업 전략을 실전처럼 점검해드려요.",
    job: "pm",
  },
  {
    id: 16385,
    name: "호이",
    badge: "마케팅",
    color: "#d1407a",
    org: "네카라쿠배",
    role: "마케터",
    prev: "전) 에이블리 파트너십 매니저 · 마케팅 대행사 AE",
    tags: ["중고신입 대기업 합격"],
    quote: "중고신입으로 대기업에 합격하기까지 겪은 시행착오를 아낌없이 나눌게요.",
    job: "mkt",
  },
  {
    id: 18644,
    name: "Jino",
    badge: "데이터",
    color: "#1f7f8c",
    org: "쿠팡",
    role: "데이터 분석",
    prev: "전) 당근 PM 인턴",
    tags: ["26 하반기 서류 합격 경험"],
    quote: "PM에서 데이터·AI로 넓혀 온 실무 경험으로 직무 선택과 이력서·포트폴리오 방향을 잡아드려요.",
    job: "pm",
  },
  {
    id: 1235,
    name: "널",
    badge: "개발",
    color: "#5a6478",
    org: "SI 대기업",
    role: "풀스택 개발",
    prev: "전) 모빌리티 제조업 차량 멀티미디어 어플 개발",
    tags: [],
    quote: "내 경험을 읽기 쉽게, 듣기 쉽게 전달하는 방법을 함께 고민해봐요.",
    job: "dev",
  },
];

// 모든 멘토 동일 (상세페이지 기준)
export const MENTORING_PRICE = { short: "39,000원", shortMin: 30, long: "69,000원", longMin: 60 };
