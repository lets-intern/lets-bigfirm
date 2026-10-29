import type { Metadata } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import Image from "next/image";
import { LETSCAREER_HOME_URL, LETSCAREER_MEMBERSHIP_MARKETING_URL } from "@/lib/links";
import "./globals.css";

// 서류 위 손글씨 메모용. 한글 글리프가 커서 미리 불러오지 않는다
const nanumPen = Nanum_Pen_Script({
  weight: "400",
  preload: false,
  display: "swap",
  variable: "--font-nanum-pen",
});

// Vercel에서는 프로젝트에 연결된 Production 도메인을 자동으로 쓴다
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "렛츠커리어 | 대기업 현직 멘토 1:1 멘토링",
  description: "또 떨어지기 전, 내 직무와 가까운 대기업 현직자에게 탈락 이유를 확인해보세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`h-full antialiased ${nanumPen.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        {/* letsgongchae.vercel.app 헤더와 같은 구성 */}
        <header className="sticky top-0 z-40 border-b border-line-soft bg-white/96">
          <nav className="mx-auto flex h-16 max-w-[1080px] items-center gap-5 px-5 sm:gap-9">
            <a href={LETSCAREER_HOME_URL} aria-label="렛츠커리어 홈" className="flex shrink-0 items-center">
              <Image
                src="/logo-letscareer.png"
                alt="LETS CAREER"
                width={96}
                height={28}
                priority
                className="h-6 w-auto sm:h-7"
              />
            </a>
            <div className="flex min-w-0 items-center gap-[18px] text-[15px] sm:gap-7 sm:text-base">
              <a href={LETSCAREER_HOME_URL} className="font-semibold whitespace-nowrap text-ink">
                홈
              </a>
              <a
                href={LETSCAREER_MEMBERSHIP_MARKETING_URL}
                className="relative inline-flex items-center gap-1.5 font-bold whitespace-nowrap"
              >
                <span aria-hidden className="absolute -top-3.5 -left-1.5 text-[13px] leading-none font-bold text-brand-600">
                  ✦<small className="align-top text-[8px]">✦</small>
                </span>
                <span className="animate-shine bg-[linear-gradient(90deg,var(--color-ink)_0%,var(--color-ink)_35%,var(--color-brand-600)_50%,var(--color-ink)_65%,var(--color-ink)_100%)] bg-[length:300%_100%] bg-clip-text text-transparent">
                  마케팅 취준 올인원 패스
                </span>
                <span
                  aria-label="새 메뉴"
                  className="grid size-4 shrink-0 place-items-center rounded-full bg-new text-[10px] leading-none font-extrabold text-white"
                >
                  N
                </span>
              </a>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="bg-cool text-[13px] text-ink-3">
          <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-4 px-5 pt-8 pb-26 md:pb-10">
            <Image src="/logo-letscareer.png" alt="LETS CAREER" width={76} height={22} className="h-[22px] w-auto" />
            <span>1:1 LIVE 멘토링 · 대기업 현직 멘토 기획전</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
