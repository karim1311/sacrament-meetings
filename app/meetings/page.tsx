import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

export const dynamic = "force-dynamic"

export default async function MeetingsPage() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings`)

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