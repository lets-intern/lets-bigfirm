import type { ReactNode } from "react";
import { CouponTicket } from "@/components/coupon-ticket";
import { Hero } from "@/components/hero";
import { MentorFinder } from "@/components/mentor-finder";
import { MobileDock } from "@/components/mobile-dock";
import { COUPON } from "@/lib/coupon";
import { LETSCAREER_REVIEW_URL, mentorDetailUrl } from "@/lib/links";
import { getMentorImages } from "@/lib/mentor-profiles";
import { MENTORS } from "@/lib/mentors";

const WORRIES = [
  "불합격 통보 받았지만 여전히 어디가, 왜 문제인지 모르겠어요",
  "다음 공채에서는 꼭 합격하고 싶은데 벌써 막막해요",
  "스터디원, 친구들에게는 늘 비슷한 피드백만 받고 있어요.",
  "합격자와 내 서류의 차이점을 이해하고 수정하고 싶어요",
];

const REASONS = [
  {
    tag: "합격 경험",
    tagClass: "bg-[#f1f0ff] text-brand-600",
    title: "대기업 채용을 직접 경험하고 합격한 노하우로 알려드려요",
    body: "멘토 모두 대기업 서류와 면접을 거쳐 입사했어요. 합격 노하우를 통해 탈락 이유를 분석해드려요.",
  },
  {
    tag: "최신 채용 트렌드",
    tagClass: "bg-[#e9f9ff] text-[#0a7fae]",
    title: (
      <>
        기업의 채용 트렌드를
        <br />
        가장 빠르게 알아요
      </>
    ),
    body: "몇 년 전 합격 공식이 아니라, 가장 최근의 기준으로 이야기해요.",
  },
  {
    tag: "직무 이해도",
    tagClass: "bg-[#ffeeea] text-coral",
    title: (
      <>
        실무자의 언어로
        <br />
        생생하게 들을 수 있어요
      </>
    ),
    body: (
      <>
        내가 지원하는 직무와 가까운 현직자에게
        <br />
        그 직무의 언어로 피드백 받아요.
      </>
    ),
  },
];

const MENTOR_FEEDBACK_POINTS = ["직무 관점 제시", "문제 발견 과정", "정량 지표로 증명"];

const HIGHLIGHT = "bg-[linear-gradient(transparent_60%,var(--color-brand-200)_60%)] font-extrabold";

const COMMONS: ReactNode[] = [
  <>
    <strong className={HIGHLIGHT}>모두 1년차 이상의 현직자</strong>로, 현장 경험을 생생하게 들려주실 수 있어요
  </>,
  // 9명 feedbackMenteeCount 합 (letscareer.co.kr/mentors/{id}, 2026-10-30)
  <>
    렛츠커리어 프로그램을 통해 <strong className={HIGHLIGHT}>누적 2,384번의 멘토링</strong>을 진행했어요
  </>,
  <>
    <strong className={HIGHLIGHT}>렛츠커리어의 미션</strong>에 공감하며, 멘티들에게 진심을 다해 조언하고 긍정적인 영향력을 전달해요
    <span className="mt-1.5 block text-sm font-normal text-ink-2">
      취업 준비생과 함께하는 지속가능한 커리어 ‘선순환 커뮤니티’를 만듭니다
    </span>
  </>,
];

const STEPS = [
  { title: "탈락한 서류를 그대로 보내주세요", body: "고치지 않은 원본 그대로 보내주세요,\n탈락 요소들을 진단해드립니다." },
  { title: "멘토가 평가자의 시선으로 분석해요", body: "실시간 멘토링 전, 미리 서류를 검토하고 사전질문에 대한 답변을 준비해요." },
  { title: "실시간으로 원인과 수정안을 알려드려요", body: "왜 떨어졌는지, 다음엔 무엇을 바꿔야 하는지 직접 알려드리고 궁금한 점은 바로 질문해요." },
];

// 9명 멘토 공개 후기(/api/v1/mentor/{id}의 reviewList, 2026-10-30) 중 별점 높고 긴 순 3건. 본문은 원문 그대로.
const REVIEWS = [
  {
    mentorId: 5895,
    score: 5,
    program: "현직 PM이 알려주는 '합격하는 포트폴리오' 1대1 멘토링",
    date: "2026.10.28",
    review:
      "제가 지원하는 직무와 일치하는 멘토님을 만날 수 있어서 좋았어요. 서비스기획자로서 어떤 인사이트를 가지고 계신지, 또 웹/앱 서비스기획자와 달리 모빌리티 산업에서의 서비스기획에서 좀 더 중점적으로 생각해봐야할 것들이 무엇인지 알려주셔서 큰 도움이 되었습니다. 정해진 시간을 초과했음에도 편하게 더 질문거리 없냐고 물어봐주시고 친절히 멘토님의 생각을 잘 설명해주셔서 정말 감사했습니다. 서비스기획자/PM의 꿈을 가지고 계시면 꼭 한번 신청해서 얘기 나눠보시면 좋을 것 같아요.",
  },
  {
    mentorId: 5357,
    score: 5,
    program: "면접 준비 7일 끝장 챌린지 6기",
    date: "2026.07.14",
    review:
      "경험 정리가 더 상세하게 진행되어야 한다는 점이 가장 기억에 남습니다.\n스스로 정리하면서 어떤 기준으로 선택을 하였는지, 결과는 어땠는지 다시 돌아볼 수 있는 시간이 되었습니다.\n뿐만 아니라 컨셉/캐릭터 잡는 것이 가장 어려웠는데, 멘토님의 피드백을 보고 갈피를 잡을 수 있게 되었습니다.\n\n감사합니다 :)",
  },
  {
    mentorId: 3929,
    score: 5,
    program: "대기업 자기소개서 완성 챌린지 13기",
    date: "2026.09.09",
    review:
      "매일 제 눈으로만 보여서 안보였던 점을 멘토님 시각에서 발견해주셨습니다! STAR에서 내 생각, 나의 문제 정의 의견 부분을 너무 중시하다보니 자꾸 S 부분을 놓치는 것과 나의 이야기를 타인에게 할 때는 좀 더 쉽게 설명할 필요가 있다는 것 다시 한 번 배우고 가요! 멘토님 감사합니다!!",
  },
];

// [ ] 는 확정 필요 문구
const FAQS: { question: string; answer: ReactNode }[] = [
  {
    question: "멘토의 소속과 경력은 어디서 볼 수 있나요?",
    answer: '멘토 카드의 "상세보기"를 누르면 멘토 상세페이지에서 소속, 경력, 멘토링에서 다루는 내용을 확인할 수 있어요.',
  },
  {
    question: "제가 지원한 직무와 멘토 직무가 달라도 되나요?",
    answer:
      "괜찮아요. 대기업 서류와 면접은 직무가 달라도 공통으로 보는 기준이 있어요. 직무 전문 지식이 꼭 필요하다면, 비슷한 직무 멘토를 상세페이지에서 찾아보세요.",
  },
  {
    question: "떨어진 서류를 고치지 않고 그대로 가져가도 되나요?",
    answer: "오히려 그대로가 좋아요. 원본을 봐야 어디서 탈락했는지 정확히 짚을 수 있어요.",
  },
  {
    question: "제 서류가 외부에 유출되지는 않나요?",
    answer: (
      <>
        <Fill>[보안 정책]</Fill> 예) 제출 서류는 멘토링 목적으로만 쓰이며, 멘토링 종료 후 N일 뒤 삭제돼요.
      </>
    ),
  },
  {
    question: "멘토링은 어떻게 진행되나요?",
    answer: (
      <>
        <Fill>[진행 방식]</Fill> 예) 신청 후 일정을 조율하고, 화상으로 1:1 라이브 멘토링을 진행해요.
      </>
    ),
  },
  { question: "취소나 환불이 가능한가요?", answer: <Fill>[환불 규정]</Fill> },
];

export default async function Home() {
  const mentorImages = await getMentorImages();

  return (
    <>
      <Hero />

      {/* 공감 */}
      <Section>
        <SectionHead
          eyebrow="혹시 이런 고민 하고 있진 않나요?"
          title={
            <>
              도착한 결과 문자,
              <br />
              여전히 막막할 뿐이라면
            </>
          }
        />
        <div className="grid items-stretch gap-8 min-[861px]:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] min-[861px]:gap-12">
          <div
            aria-label="불합격 안내 문자 예시"
            className="flex max-w-[380px] flex-col rounded-[30px] border border-line bg-white p-[22px]"
          >
            <div className="mb-3 flex justify-between text-xs text-ink-3">
              <span>○○그룹 채용</span>
              <span>오후 6:02</span>
            </div>
            <div className="grid gap-2 rounded-[18px_18px_18px_4px] bg-cool px-4 py-3.5 text-sm leading-[1.7] text-ink-2">
              <p>
                [Web발신]
                <br />
                [○○그룹] 하반기 신입 채용 서류전형 결과 안내
              </p>
              <p>
                안녕하세요, ○○그룹 채용 담당자입니다. 귀하의 뛰어난 역량에도 불구하고{" "}
                <b className="text-ink">아쉽게도 이번 서류전형에서는 좋은 소식을 전해드리지 못하게 되었습니다.</b>
              </p>
              <p>앞날에 건승을 기원합니다.</p>
            </div>
            <p className="mt-auto pt-3.5 text-right text-base leading-[1.4] font-bold tracking-[-0.02em] text-ink-2">
              …그래서, <em className="text-brand-600 not-italic">어디가 문제</em>였을까요?
            </p>
          </div>
          <div>
            <ul className="grid gap-2.5">
              {WORRIES.map((worry, i) => (
                <li key={worry} className="flex items-start gap-3.5 rounded-[15px] border border-line bg-white px-[18px] py-4 font-medium">
                  <input
                    id={`worry-${i}`}
                    type="checkbox"
                    className="mt-[3px] size-[18px] shrink-0 cursor-pointer accent-brand-600"
                  />
                  <label htmlFor={`worry-${i}`} className="cursor-pointer">
                    {worry}
                  </label>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[19px] leading-[1.6] font-medium">
              이력이나 노력의 문제가 아니라,
              <br />
              <strong className={HIGHLIGHT}>
                평가자의 시선에서 서류를 볼 기회가 없었기 때문
              </strong>
              일지도 몰라요.
            </p>
          </div>
        </div>
      </Section>

      {/* 현직자 피드백이 필요한 이유 */}
      <Section cool id="why">
        <SectionHead
          eyebrow="현직자 피드백이 필요한 이유"
          title={
            <>
              취준생은 못 보는 한 줄,
              <br />
              현직자는 볼 수 있어요
            </>
          }
        />
        <div className="grid gap-4 min-[861px]:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.tag} className="grid content-start gap-2.5 rounded-[20px] border border-line bg-white px-6 py-7">
              <span className={`justify-self-start rounded-full px-2.5 py-1 text-[13px] font-bold ${reason.tagClass}`}>
                {reason.tag}
              </span>
              <h3 className="text-xl font-extrabold">{reason.title}</h3>
              <p className="text-[15px] text-ink-2">{reason.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 rounded-[20px] border border-line bg-white px-[18px] py-[22px] sm:p-7">
          <h3 className="text-xl font-extrabold">같은 문장, 다른 피드백</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <article
              aria-label="PM 지원자의 자기소개서 문항 예시"
              className="flex flex-col rounded-md bg-paper px-5 pt-4 pb-3.5 text-[15px] leading-[1.75] text-[#26262b] shadow-[0_14px_32px_-20px_rgba(40,50,140,.35)] sm:px-6"
            >
              <div className="mb-3.5 flex items-baseline justify-between gap-3 border-b border-paper-line pb-2 text-xs text-[#77777f]">
                <b className="text-[13px] text-[#26262b]">신입 공채 · 서비스기획(PM) · 자기소개서</b>
                <span className="shrink-0">3번 문항</span>
              </div>
              <p className="mb-2 text-[13px] font-bold text-[#4a4a52]">
                Q. 지원 직무와 관련해 성과를 만들어낸 경험을 기술하시오. (800자)
              </p>
              <p className="mb-2.5 text-[#8a8a90]">
                <span>교내 중고거래 앱 운영 동아리에서 서비스 기획을 맡았습니다. </span>
                <span className="text-[#26262b]">
                  서비스 개선 프로젝트에서 사용자 인터뷰를 진행하고{" "}
                  <mark className="bg-transparent bg-[linear-gradient(transparent_55%,#c7caff_55%)] font-semibold text-inherit">
                    기능을 개선해 만족도를 높였습니다
                  </mark>
                  .
                </span>
                <span> 이 경험을 통해 사용자 중심으로 생각하는 자세를 배웠습니다…</span>
              </p>
              <p className="mt-auto border-t border-paper-line pt-2 text-right text-xs text-[#77777f] tabular-nums">
                612 / 800자
              </p>
            </article>
            <div className="grid grid-rows-[auto_1fr] gap-3">
              <div className="grid content-start gap-2 rounded-[15px] bg-cool px-5 py-[18px]">
                <p className="text-[13px] font-extrabold text-ink-3">흔히 듣는 피드백</p>
                <p className="text-[15px] leading-[1.65] text-ink-2">
                  &quot;좀 더 구체적으로 써보세요. 성과를 강조하면 좋을 것 같아요.&quot;
                </p>
              </div>
              <div className="grid content-start gap-2 rounded-[15px] bg-brand-200 px-5 py-[18px] shadow-[inset_0_0_0_1.5px_var(--color-brand-600)]">
                <p className="text-[13px] font-extrabold text-brand-600">대기업 현직 멘토의 피드백</p>
                <p className="text-[15px] leading-[1.65] font-semibold">
                  &quot;PM 서류라면 &quot;왜 이 기능이었는지&quot;가 먼저 보여야 해요. 몇 명의 인터뷰이에게서 문제를
                  발견했고, 개선 후 어떤 지표가 얼마나 바뀌었는지 숫자로 명시합니다.&quot;
                </p>
                <ul aria-label="흔히 듣는 피드백보다 나아진 점" className="mt-1 flex flex-wrap gap-1.5">
                  {MENTOR_FEEDBACK_POINTS.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-brand-600"
                    >
                      ✓ {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 진행 방식 */}
      <Section id="how">
        <SectionHead
          eyebrow="진행 방식"
          title={
            <>
              고치지 않은 탈락 서류가
              <br />
              가장 정확한 진단서예요
            </>
          }
        />
        <ol className="grid gap-4 min-[861px]:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="grid content-start gap-2 rounded-[20px] border border-line bg-white px-6 py-[26px]">
              <span className="text-xs font-extrabold tracking-[.08em] text-brand-600">STEP {i + 1}</span>
              <h3 className="text-[19px] font-extrabold">{step.title}</h3>
              <p className="text-[15px] whitespace-pre-line text-ink-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 기업별 멘토 추천 */}
      <Section cool id="mentors-by-company">
        <SectionHead
          eyebrow="기업별 멘토 추천"
          title={
            <>
              가고 싶은 기업,
              <br />
              지금 다니는 사람에게 물어보세요
            </>
          }
          lede="100대 기업·네카라쿠배 현직 멘토 중 내 지원 직무와 가까운 분을 골라보세요."
          className="mb-16"
        />
        <div className="mb-16 grid gap-6 min-[861px]:grid-cols-[auto_1fr] min-[861px]:gap-x-0">
          <div className="grid content-start gap-3">
            {/* 체크 카드 왼쪽 끝을 아래 "…현직 멘토 9명"의 "멘토" 위치에 맞추는 폭 기준 */}
            <span aria-hidden className="invisible -mb-3 h-0 text-[22px] font-extrabold whitespace-pre max-[860px]:hidden">
              지금 만날 수 있는 대기업 현직{" "}
            </span>
            <h3 className="text-[22px] font-extrabold">
              렛츠커리어 멘토님들의
              <br className="max-[860px]:hidden" /> 3가지 공통점
            </h3>
          </div>
          <ul className="grid gap-2.5">
            {COMMONS.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3.5 rounded-[15px] border border-line bg-white px-[18px] py-4 text-[18px] font-semibold"
              >
                <svg aria-hidden viewBox="0 0 20 20" className="size-6 shrink-0 text-brand-600">
                  <circle cx="10" cy="10" r="10" fill="currentColor" />
                  <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <MentorFinder images={mentorImages} />
      </Section>

      {/* 할인 쿠폰 */}
      <Section id="coupon">
        <div className="grid items-center gap-8 min-[861px]:grid-cols-2 min-[861px]:gap-12">
          <div>
            <SectionHead
              eyebrow="할인 쿠폰"
              title={
                <>
                  멘토링 <span className="text-brand-600">{COUPON.amount} 할인 쿠폰</span>으로
                  <br />
                  지금 바로 서류 진단 받으세요!
                </>
              }
              className="mb-7"
            />
            <ol className="grid gap-3.5">
              {[
                <>원하는 멘토 상세페이지에서 멘토링을 신청해요.</>,
                <>
                  결제창의 <b className="font-extrabold">쿠폰 등록</b> 칸에 <b className="font-extrabold">{COUPON.code}</b>를
                  입력하고 등록해요.
                </>,
                <>결제 금액에서 {COUPON.amount} 할인 적용을 확인하고 신청을 완료해요.</>,
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="grid size-[26px] shrink-0 place-items-center rounded-full bg-brand-200 text-[13px] font-extrabold text-brand-600">
                    {i + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </div>
          <CouponTicket />
        </div>
      </Section>

      {/* 후기 */}
      <Section cool id="reviews">
        <SectionHead
          eyebrow="후기"
          title="멘토님께 직접 남겨주신 후기"
          lede="9명의 멘토님께 남겨진 후기를 모았어요."
        />
        <div className="grid gap-4 min-[961px]:grid-cols-3">
          {REVIEWS.map((review) => {
            const mentor = MENTORS.find((m) => m.id === review.mentorId)!;
            return (
              <article
                key={review.mentorId}
                className="grid grid-rows-[auto_auto_1fr_auto] gap-3.5 rounded-[20px] border border-line bg-white p-6"
              >
                <div className="grid gap-0.5 text-[13px]">
                  <span className="font-bold text-ink-2">{review.program}</span>
                  <span className="text-ink-3">{review.date} 작성</span>
                </div>
                <p aria-label={`별점 ${review.score}점`} className="text-[15px] tracking-[.1em] text-brand-600">
                  {"★".repeat(review.score)}
                </p>
                <p className="text-[15px] leading-[1.7] whitespace-pre-line">{review.review}</p>
                <div className="grid gap-1 border-t border-line pt-3 text-[13px] text-ink-3">
                  <span className="font-bold text-ink-2">
                    {mentor.name} 멘토 · {mentor.org}
                  </span>
                  <a
                    href={mentorDetailUrl(mentor.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 font-bold text-brand-600"
                  >
                    이 멘토 보기 →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={LETSCAREER_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold text-ink-2 hover:border-brand-600 hover:text-brand-600"
          >
            더 자세한 후기가 궁금하다면 →
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHead eyebrow="FAQ" title="신청 전에 많이 묻는 질문" />
        <div className="grid max-w-[820px] gap-2.5">
          {FAQS.map((faq, i) => (
            <details key={faq.question} open={i === 0} className="group rounded-[15px] border border-line bg-white">
              <summary className="flex cursor-pointer list-none items-start gap-3 px-[22px] py-5 font-bold [&::-webkit-details-marker]:hidden">
                <span className="font-extrabold text-brand-600">Q</span>
                <span className="flex-1">{faq.question}</span>
                <span aria-hidden className="text-xl leading-none text-ink-3 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-[22px] pb-5 pl-[46px] text-[15px] text-ink-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* 마지막 CTA */}
      <section className="bg-hero text-center">
        <div className="mx-auto grid max-w-[1080px] justify-items-center gap-4 px-5 py-20">
          <p className="font-hand text-[28px] leading-none text-coral">이번엔 다르게!</p>
          <h2 className="text-[clamp(26px,4.4vw,40px)] leading-[1.3] font-extrabold">
            다음 공채 전에,
            <br />
            같은 서류를 또 내지 않도록.
          </h2>
          <p className="text-[17px] text-ink-2">대기업 현직 멘토가 기다리고 있어요.</p>
          <a
            href="#mentors-by-company"
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-brand-600 px-7 py-[15px] font-bold text-white hover:brightness-105 active:scale-[.98]"
          >
            대기업 멘토 찾기
          </a>
        </div>
      </section>

      <MobileDock />
    </>
  );
}

function Section({ id, cool, children }: { id?: string; cool?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={cool ? "bg-cool" : undefined}>
      <div className="mx-auto max-w-[1080px] px-5 py-16 md:py-22">{children}</div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  lede,
  className = "mb-10",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-3 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-[clamp(26px,4.2vw,38px)] leading-[1.3] font-extrabold">{title}</h2>
      {lede && <p className="max-w-[36em] text-[17px] text-ink-2">{lede}</p>}
    </div>
  );
}

function Fill({ children }: { children: ReactNode }) {
  return <span className="rounded bg-[#ffeeea] px-1 font-bold text-coral">{children}</span>;
}
