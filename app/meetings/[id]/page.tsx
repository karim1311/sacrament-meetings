import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

export default async function MeetingPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings/${id}`
    );

    if (response.status === 404 || response.status === 400) {
        notFound()
    }

    if (!response.ok) {
        throw new Error("Failed to fetch meeting");
    }

    const meeting: SacramentMeeting = await response.json()

    return (
        <main className="p-6">
            <MeetingDetail meeting={meeting} />
        </main>
    )
} 