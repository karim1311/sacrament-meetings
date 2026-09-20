import { getMeetings } from "@/lib/meetings-db";

// /api/meetings
// /api/meetings?date=2026-05-03
export async function GET(request: Request) {
    const date = new URL(request.url).searchParams.get("date")

    const meetings = getMeetings(date)

    return Response.json(meetings)
}