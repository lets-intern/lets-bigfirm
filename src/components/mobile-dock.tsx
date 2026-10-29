"use client";

import { useEffect, useState } from "react";

// 모바일 하단 고정 버튼. 후기 섹션에 닿으면 문구를 '신청하러 가기'로 바꾼다
export function MobileDock() {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const reviews = document.getElementById("reviews");
    if (!reviews) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPassed(entry.boundingClientRect.top < window.innerHeight),
      { threshold: [0, 1] },
    );
    observer.observe(reviews);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] md:hidden">
      <a
        href="#mentors-by-company"
        className="flex w-full items-center justify-center rounded-lg bg-brand-600 py-[15px] font-bold text-white"
      >
        {passed ? "신청하러 가기" : "멘토 보기"}
      </a>
    </div>
  );
}
