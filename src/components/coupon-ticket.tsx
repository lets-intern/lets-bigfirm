"use client";

import { useRef, useState } from "react";
import { COUPON } from "@/lib/coupon";

export function CouponTicket() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [label, setLabel] = useState("복사하기");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COUPON.code);
      setLabel("복사됐어요");
      setTimeout(() => setLabel("복사하기"), 1800);
    } catch {
      // 클립보드가 막힌 환경: 코드를 선택해 두어 직접 복사하게 한다
      inputRef.current?.select();
      setLabel("길게 눌러 복사");
    }
  };

  return (
    <div className="relative grid min-w-0 justify-items-start gap-3 rounded-[22px] bg-[linear-gradient(135deg,#5d65ff_0%,#4d55f5_55%,#3f46e0_100%)] py-8 pr-[60px] pl-7 text-white shadow-[0_24px_48px_-20px_rgba(77,85,245,.55)] before:absolute before:-top-[11px] before:right-[40px] before:-mr-[11px] before:size-[22px] before:rounded-full before:bg-white after:absolute after:right-[40px] after:-bottom-[11px] after:-mr-[11px] after:size-[22px] after:rounded-full after:bg-white min-[421px]:pr-[100px] min-[421px]:before:right-[64px] min-[421px]:after:right-[64px]">
      <span aria-hidden className="absolute inset-y-0 right-[40px] border-r-[1.5px] border-dashed border-white/45 min-[421px]:right-[64px]" />
      <p className="inline-flex items-center gap-1.5 text-[13px] font-bold opacity-95 before:size-2.5 before:rounded-full before:bg-highlight">
        공채 탈락 후 서류 다시 보기 쿠폰
      </p>
      <p className="flex items-baseline gap-1.5">
        <b className="text-[clamp(44px,7vw,60px)] leading-none font-extrabold tracking-[-0.02em]">{COUPON.amount}</b>
        <span className="text-xl font-bold">할인</span>
      </p>
      <p className="text-sm leading-[1.55] opacity-90">
        대기업 현직 멘토 1:1 LIVE 멘토링
        <br />
        멘토 9명 전원 적용
      </p>
      <p className="rounded-full bg-highlight px-3 py-1 text-[13px] font-extrabold text-ink">⏰ {COUPON.from} ~ {COUPON.until} 사용 가능</p>
      <div className="mt-1 flex w-full flex-col gap-2 min-[421px]:flex-row">
        <input
          ref={inputRef}
          readOnly
          value={COUPON.code}
          aria-label="쿠폰 코드"
          className="w-full min-w-0 flex-1 rounded-lg border-[1.5px] border-dashed border-white/70 bg-white/10 px-4 py-3 text-xl font-extrabold tracking-[.08em] text-white"
        />
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-lg bg-white px-5 py-3 text-[15px] font-extrabold text-note-blue hover:brightness-95"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
