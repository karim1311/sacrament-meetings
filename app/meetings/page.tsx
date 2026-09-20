import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

export const dynamic = "force-dynamic"

export default async function MeetingsPage() {
    const response = await fetch("https://sacrament-meetings-git-peer-code-review-karim1311s-projects.vercel.app/api/meetings")

    if (!response.ok) {
        throw new Error("Failed to fetch meetings")
    }

    const meetings: SacramentMeeting[] = await response.json()

    return (
        <main className="mx-auto max-w-4xl p-6">
            <h1 className="mb-6 text-3xl font-bold">
                Sacrament Meetings
            </h1>

            <div className="space-y-4">
                {meetings.map((meeting) => (
                    <MeetingCard
                        key={meeting.id}
                        meeting={meeting}
                    />
                ))}
            </div>
        </main>
    )
}