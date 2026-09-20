import Link from "next/link"
import type { SacramentMeeting } from "@/lib/types"

interface MeetingCardProps {
    meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <article className="rounded-lg border p-4 shadow-sm">
            <h2 className="text-xl font-bold">
                {meeting.date}
            </h2>

            <p className="text-gray-600">
                {meeting.meetingType}
            </p>

            <p>
                <strong>Presiding:</strong> {meeting.presiding}
            </p>

            <p>
                <strong>Conducting:</strong> {meeting.conducting}
            </p>

            <Link
                href={`/meetings/${meeting.id}`}
                className="mt-4 inline-block underline"
            >
                View Meeting Details
            </Link>
        </article>
    )
}