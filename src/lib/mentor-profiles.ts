import { cacheLife } from "next/cache";
import { MENTORS } from "@/lib/mentors";

const MENTOR_API_URL = "https://3ccm7bgq1b.execute-api.ap-northeast-2.amazonaws.com/api/v1/live-mentoring/mentors";

export type MentorImages = Record<number, string | null>;

// 상세페이지 API의 profile.profileImage. 비어 있거나 요청이 실패하면 null → 직무 배지로 대체.
export async function getMentorImages(): Promise<MentorImages> {
  "use cache";
  cacheLife("hours");

  const entries = await Promise.all(
    MENTORS.map(async (mentor) => {
      try {
        const res = await fetch(`${MENTOR_API_URL}/${mentor.id}`);
        if (!res.ok) return [mentor.id, null] as const;
        const json = await res.json();
        const image: unknown = json?.data?.profile?.profileImage;
        return [mentor.id, typeof image === "string" && image ? image : null] as const;
      } catch {
        return [mentor.id, null] as const;
      }
    }),
  );

  return Object.fromEntries(entries);
}
