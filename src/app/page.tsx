import type { ReactNode } from "react";
import { CouponTicket } from "@/components/coupon-ticket";
import { Hero } from "@/components/hero";
import { MentorFinder } from "@/components/mentor-finder";
import { MobileDock } from "@/components/mobile-dock";
import { COUPON } from "@/lib/coupon";

const WORRIES = [
  "불합격 통보 받았지만 여전히 어디가, 왜 문제인지 모르겠어요",
  "다음 공채에서는 꼭 합격하고 싶은데 벌써 막막해요",
  "스터디원, 친구들에게는 늘 비슷한 피드백만 받고 있어요.",
  "합격자와 내 서류의 차이점을 이해하고 수정하고 싶어요",
];

const REASONS = [
  {
    tag: "같은 직무",
    tagClass: "bg-[#ffeeea] text-coral",
    title: "내 직무를 아는 사람이 봅니다",
    body: "개발, 연구, PM, 데이터, 마케팅, 영업, 전략기획까지. 내가 지원하는 직무와 가까운 현직자에게 그 직무의 언어로 피드백 받아요.",
  },
  {
    tag: "직접 통과한 경험",
    tagClass: "bg-[#f1f0ff] text-brand-600",
    title: "대기업 채용을 직접 통과한 사람이 봅니다",
    body: "멘토 모두 대기업 서류와 면접을 거쳐 입사했어요. 어디서 걸리기 쉬운지 경험으로 알아요.",
  },
  {
    tag: "현직 기준",
    tagClass: "bg-[#e9f9ff] text-[#0a7fae]",
    title: "지금의 기준으로 봅니다",
    body: "몇 년 전 합격 공식이 아니라, 지금 회사 안에서 보는 기준으로 이야기해요.",
  },
];

const STEPS = [
  { title: "탈락한 서류를 그대로 보내주세요", body: "고치지 않은 원본이 좋아요. 그래야 진짜 원인이 보여요." },
  { title: "멘토가 평가자 시선으로 미리 읽어요", body: "라이브 전에 서류를 먼저 검토하고 짚을 부분을 정리해요." },
  { title: "1:1 라이브로 원인과 방향을 잡아요", body: "왜 떨어졌는지, 다음엔 무엇을 바꿔야 하는지 직접 묻고 답해요." },
];

// 예시 후기 — 실제 후기로 교체 필요
const REVIEWS = [
  {
    before: "하반기 5곳 서류 전부 탈락. 경험은 많은데 왜 떨어지는지 몰랐어요.",
    point: "경험을 나열만 하고, 그래서 무엇을 바꿨는지 결과가 하나도 없었어요.",
    after: "문항마다 결론과 숫자를 첫 줄에 두는 구조로 전부 다시 썼어요.",
    meta: "취준생 · 전자 계열사 멘토 · 자소서",
  },
  {
    before: "최종 면접까지 갔다가 떨어졌어요. 분위기는 좋았는데 이유를 모르겠더라고요.",
    point: "꼬리 질문에서 답이 처음 답변과 어긋나는 걸 면접관 입장에서 바로 짚어줬어요.",
    after: "핵심 경험 3개를 깊게 파서, 어떤 질문이 와도 같은 이야기로 돌아오게 준비했어요.",
    meta: "신입 1년차 · 화학 계열사 멘토 · 모의면접",
  },
  {
    before: "중견기업 1년차인데, 대기업 신입으로 다시 지원할지 고민이었어요.",
    point: "지금 경력이 중고신입 서류에서 어떻게 읽히는지 현직자 기준으로 설명해줬어요.",
    after: "지원 회사를 좁히고, 1년 경력을 강점으로 쓰는 방향을 잡았어요.",
    meta: "신입 1년차 · IT 플랫폼 멘토 · 커리어",
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

export default function Home() {
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
              문제는 이력과 노력이 아니라,
              <br />
              <strong className="bg-[linear-gradient(transparent_60%,var(--color-brand-200)_60%)] font-extrabold">
                평가자의 시선에서 서류를 볼 기회가 없었기 때문
              </strong>
              일지도 몰라요.
            </p>
          </div>
        </div>
      </Section>

      {/* 왜 대기업 현직 멘토인가 */}
      <Section cool id="why">
        <SectionHead
          eyebrow="왜 대기업 현직 멘토인가"
          title={
            <>
              취준생의 눈이 아니라,
              <br />
              같은 직무 현직자의 눈으로
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
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl font-extrabold">같은 문장, 다른 피드백</h3>
            <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-bold text-ink-3">예시</span>
          </div>
          <div className="rounded-[10px] bg-paper px-4 py-3.5 text-[15px] leading-[1.6] text-[#26262b]">
            <span className="mb-1 block text-xs font-bold text-[#77777f]">PM 지원자의 자기소개서 문장</span>
            &quot;서비스 개선 프로젝트에서 사용자 인터뷰를 진행하고 기능을 개선해 만족도를 높였습니다.&quot;
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="grid content-start gap-2 rounded-[15px] bg-cool px-5 py-[18px]">
              <p className="text-[13px] font-extrabold text-ink-3">흔히 듣는 피드백</p>
              <p className="text-[15px] leading-[1.65] text-ink-2">
                &quot;좀 더 구체적으로 써보세요. 성과를 강조하면 좋을 것 같아요.&quot;
              </p>
            </div>
            <div className="grid content-start gap-2 rounded-[15px] bg-brand-200 px-5 py-[18px] shadow-[inset_0_0_0_1.5px_var(--color-brand-600)]">
              <p className="text-[13px] font-extrabold text-brand-600">같은 직무 현직자의 피드백</p>
              <p className="text-[15px] leading-[1.65] font-semibold">
                &quot;PM 서류라면 &apos;왜 이 기능이었는지&apos;가 먼저 보여야 해요. 인터뷰 몇 명에게서 어떤 문제를
                발견했고, 개선 후 어떤 지표가 얼마나 바뀌었는지 숫자로 써주세요.&quot;
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 진행 방식 */}
      <Section id="how">
        <SectionHead eyebrow="진행 방식" title="떨어진 서류 하나면, 시작할 수 있어요" />
        <ol className="grid gap-4 min-[861px]:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="grid content-start gap-2 rounded-[20px] border border-line bg-white px-6 py-[26px]">
              <span className="text-xs font-extrabold tracking-[.08em] text-brand-600">STEP {i + 1}</span>
              <h3 className="text-[19px] font-extrabold">{step.title}</h3>
              <p className="text-[15px] text-ink-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 직무별 멘토 추천 */}
      <Section cool id="mentors-by-job">
        <SectionHead
          eyebrow="직무별 멘토 추천"
          title="어떤 직무를 준비하나요?"
          lede="내 지원 직무와 가까운 현직자에게 피드백 받아보세요."
        />
        <MentorFinder />
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
          title="먼저 떨어져 본 사람들의 이야기"
          lede={
            <>
              <span className="text-ink-3">| </span>공채 탈락 후 멘토링을 받은 분들의 후기를 모았어요.{" "}
              <Fill>[아래 3개는 예시 · 실제 후기로 교체]</Fill>
            </>
          }
        />
        <div className="grid gap-4 min-[961px]:grid-cols-3">
          {REVIEWS.map((review) => (
            <article key={review.meta} className="grid content-start gap-3.5 rounded-[20px] border border-line bg-white p-6">
              <dl className="grid gap-3">
                <div>
                  <dt className="text-xs font-extrabold tracking-[.04em] text-ink-3">받기 전</dt>
                  <dd className="mt-0.5 text-[15px] leading-[1.6]">{review.before}</dd>
                </div>
                <div>
                  <dt className="text-xs font-extrabold tracking-[.04em] text-coral">멘토가 짚어준 점</dt>
                  <dd className="mt-0.5 text-[15px] leading-[1.6]">{review.point}</dd>
                </div>
                <div>
                  <dt className="text-xs font-extrabold tracking-[.04em] text-brand-600">이후</dt>
                  <dd className="mt-0.5 text-[15px] leading-[1.6] font-bold">{review.after}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-line pt-3 text-[13px] text-ink-3">
                <span>{review.meta}</span>
                <a href="#mentors-by-job" className="font-bold text-brand-600">
                  이 멘토 보기 →
                </a>
              </div>
            </article>
          ))}
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
            href="#mentors-by-job"
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
