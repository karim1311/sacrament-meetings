import { getMeetings } from "@/lib/meetings-db";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"

export default function CurrentMeetingPage() {
    const today = new Date();

    const dateString = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Mazatlan",
    }).format(today);

    const localToday = new Date(`${dateString}T12:00:00`);

    const dayOfWeek = localToday.getDay();

    const sunday = new Date(localToday);
    sunday.setDate(localToday.getDate() - dayOfWeek);

    const sundayDate = sunday.toISOString().split("T")[0];

    const meetings = getMeetings(sundayDate);

    if (meetings.length === 0) {
        redirect("/meetings");
    }

    redirect(`/meetings/${meetings[0].id}`);

}