"use client";

import Image from "next/image";
import { useState } from "react";
import { mentorDetailUrl } from "@/lib/links";
import type { MentorImages } from "@/lib/mentor-profiles";
import {
  CHALLENGE_SHORT_TAG,
  CHALLENGE_TAG,
  COMPANY_TABS,
  LIVE_TAG,
  MARKETING_TAG,
  MENTORS,
  PM_TAG,
  PORTFOLIO_TAG,
  SEMINAR_TAG,
  type Mentor,
} from "@/lib/mentors";

const TAG_STYLES: Record<string, string> = {
  [CHALLENGE_TAG]: "bg-[#3fae4a]/15 text-[#2b8a36]",
  [CHALLENGE_SHORT_TAG]: "bg-[#3fae4a]/15 text-[#2b8a36]",
  [PORTFOLIO_TAG]: "bg-coral/12 text-coral",
  [MARKETING_TAG]: "bg-[#1e2f7a]/12 text-[#1e2f7a]",
  [PM_TAG]: "bg-[#0a8fc4]/12 text-[#0a8fc4]",
  [LIVE_TAG]: "bg-brand-600/12 text-brand-600",
  [SEMINAR_TAG]: "bg-ink/8 text-ink-2",
};

export function MentorFinder({ images }: { images: MentorImages }) {
  const [active, setActive] = useState<(typeof COMPANY_TABS)[number]["key"]>("all");
  const mentors = MENTORS.filter((m) => active === "all" || m.group === active);

  return (
    <>
      <h3 className="mb-4 text-[22px] font-extrabold">
        지금 만날 수 있는 대기업 현직 멘토 <span className="text-brand-600">{mentors.length}명</span>
      </h3>

      <div role="group" aria-label="기업 선택" className="mb-6 flex flex-wrap gap-2">
        {COMPANY_TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            aria-pressed={tab.key === active}
            onClick={() => setActive(tab.key)}
            className={`inline-flex items-center gap-1.5 rounded-full border-[1.5px] px-4 py-2 text-[15px] font-bold transition-colors ${
              tab.key === active
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-line bg-white text-ink-2 hover:border-brand-300 hover:text-brand-600"
            }`}
          >
            {tab.label}
            <span className={`text-[13px] font-semibold ${tab.key === active ? "text-white/75" : "text-ink-3"}`}>
              {MENTORS.filter((m) => tab.key === "all" || m.group === tab.key).length}
            </span>
          </button>
        ))}
      </div>

      <div aria-live="polite" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} image={images[mentor.id] ?? null} />
        ))}
      </div>
    </>
  );
}

function MentorCard({ mentor, image }: { mentor: Mentor; image: string | null }) {
  return (
    <article className="relative flex flex-col gap-3.5 rounded-[20px] border-[1.5px] border-line bg-white p-[22px] transition hover:-translate-y-0.5 hover:border-brand-600">
      <div className="flex items-center gap-3">
        {image ? (
          <Image
            src={image}
            alt={`${mentor.name} 멘토 프로필`}
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-full border border-line object-cover"
          />
        ) : (
          <span
            className="grid size-12 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white"
            style={{ background: mentor.color }}
          >
            {mentor.badge}
          </span>
        )}
        <div>
          <div className="text-base leading-[1.35] font-extrabold">{mentor.org}</div>
          <div className="text-sm text-ink-2">
            {mentor.name} 멘토 · {mentor.role}
          </div>
        </div>
      </div>
      {(mentor.tags.length > 0 || mentor.years) && (
        <div className="flex flex-wrap gap-1.5">
          {mentor.years && (
            <span className="rounded-full border border-line px-3 py-1 text-sm font-bold text-ink-2">{mentor.years}년차</span>
          )}
          {mentor.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-sm font-bold ${TAG_STYLES[tag] ?? "bg-[#f1f0ff] text-brand-600"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="my-2 flex min-h-[4.65em] items-center justify-center text-center text-[18px] whitespace-pre-line leading-[1.55] font-bold text-ink-3">{mentor.focus ?? `"${mentor.quote}"`}</p>
      <a
        href={mentorDetailUrl(mentor.id)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex w-full items-center rounded-xl bg-brand-200 px-4 py-2.5 text-sm font-medium text-brand-600 after:absolute after:inset-0 after:rounded-[20px] hover:bg-brand-100"
      >
        상세페이지 보러가기 →
      </a>
    </article>
  );
}
