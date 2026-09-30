import MeetingsNavLinks from "@/components/MeetingsNavLinks";

export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav aria-label="Meetings navigation">
                <MeetingsNavLinks />
            </nav>

            {children}
        </section>
    )
}