import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export const dynamic = "force-dynamic"

export default async function MeetingsPage() {
    const meetings = getMeetings();

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