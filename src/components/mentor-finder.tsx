"use client";

import { useState } from "react";
import { mentorDetailUrl } from "@/lib/links";
import { JOB_TABS, MENTORING_PRICE, MENTORS, type Mentor } from "@/lib/mentors";

export function MentorFinder() {
  const [active, setActive] = useState<(typeof JOB_TABS)[number]["key"]>("all");
  const mentors = MENTORS.filter((m) => active === "all" || m.job === active);

  return (
    <>
      <div role="group" aria-label="직무 선택" className="mb-3.5 grid grid-cols-2 gap-2.5 min-[861px]:grid-cols-5">
        {JOB_TABS.map((tab, i) => (
          <button
            key={tab.key}
            type="button"
            aria-pressed={tab.key === active}
            onClick={() => setActive(tab.key)}
            className={`grid gap-1 rounded-[15px] border-[1.5px] px-4 pt-4 pb-3.5 text-left transition-colors ${
              i === 0 ? "col-span-2 min-[861px]:col-span-1" : ""
            } ${
              tab.key === active
                ? "border-brand-600 bg-brand-200 shadow-[inset_0_0_0_1px_var(--color-brand-600)]"
                : "border-line bg-white hover:border-brand-300"
            }`}
          >
            <b className="text-base font-extrabold">{tab.label}</b>
            <span className="text-[13px] leading-normal text-ink-2">{tab.desc}</span>
          </button>
        ))}
      </div>

      <div className="mt-[34px] mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-[22px] font-extrabold">
          지금 만날 수 있는 대기업 현직 멘토 <span className="text-brand-600">{mentors.length}명</span>
        </h3>
        <p className="text-sm text-ink-3">카드를 누르면 멘토 상세페이지로 이동해요</p>
      </div>

      <div aria-live="polite" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </>
  );
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article className="grid grid-rows-[auto_auto_1fr_auto_auto_auto] gap-3.5 rounded-[20px] border-[1.5px] border-line bg-white p-[22px] transition hover:-translate-y-0.5 hover:border-brand-600">
      <div className="flex items-center gap-3">
        <span
          className="grid size-12 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white"
          style={{ background: mentor.color }}
        >
          {mentor.badge}
        </span>
        <div>
          <div className="text-base leading-[1.35] font-extrabold">{mentor.org}</div>
          <div className="text-sm text-ink-2">
            {mentor.name} 멘토 · {mentor.role}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <span className="rounded-full bg-[#e9f9ff] px-2.5 py-1 text-xs font-bold text-[#0a7fae]">현직</span>
        {mentor.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[#f1f0ff] px-2.5 py-1 text-xs font-bold text-brand-600">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-[15px] leading-[1.55] font-bold">&quot;{mentor.quote}&quot;</p>
      <div className="flex flex-wrap items-baseline justify-between gap-2.5 border-t border-line pt-3.5 text-sm">
        <span className="text-[17px] font-extrabold">
          {MENTORING_PRICE.short}{" "}
          <small className="text-[13px] font-medium text-ink-3">
            {MENTORING_PRICE.shortMin}분 · {MENTORING_PRICE.longMin}분 {MENTORING_PRICE.long}
          </small>
        </span>
        <span className="text-ink-2">신규 오픈</span>
      </div>
      {mentor.prev ? (
        <p className="-mt-1 rounded-[10px] bg-cool px-3 py-2.5 text-[13px] text-ink-2">{mentor.prev}</p>
      ) : (
        <span />
      )}
      <a
        href={mentorDetailUrl(mentor.id)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-lg bg-brand-600 p-[13px] text-[15px] font-bold text-white hover:brightness-105 active:scale-[.98]"
      >
        상세보기 · 신청하기
      </a>
    </article>
  );
}
