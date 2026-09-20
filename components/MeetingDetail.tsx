import type { SacramentMeeting } from "@/lib/types"

interface MeetingDetailsProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({
    meeting,
}: MeetingDetailsProps) {
    return (
        <article className="mx-auto max-w-3xl space-y-6">
            <header>
                <h1 className="text-3xl font-bold">
                    Sacrament Meeting
                </h1>

                <p>{meeting.date}</p>
                <p className="capitalize">{meeting.meetingType}</p>
            </header>

            <section>
                <h2 className="text-xl font-bold">Leadership</h2>

                <p>
                    <strong>Presiding:</strong> {meeting.presiding}
                </p>

                <p>
                    <strong>Conducting:</strong> {meeting.conducting}
                </p>
            </section>

            {meeting.announcements && meeting.announcements.length > 0 && (
                <section>
                    <h2 className="text-xl font-bold">Announcements</h2>

                    <ul className="list-disc pl-5">
                        {meeting.announcements.map((announcement, index) => (
                            <li key={index}>{announcement}</li>
                        ))}
                    </ul>
                </section>
            )}

            <section>
                <h2 className="text-xl font-bold">Opening</h2>

                <p>
                    <strong>Opening Hymn:</strong>{" "}
                    #{meeting.openingHymn.number} - {" "}
                    {meeting.openingHymn.title}
                </p>

                <p>
                    <strong>Opening Prayer:</strong>{" "}
                    {meeting.openingPrayer}
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold">Ward Business</h2>

                <ul className="list-disc pl-5">
                    {meeting.wardBusiness.map((item, index) => (
                        <li key={index}>{item.description}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold">Sacrament</h2>

                <p>
                    <strong>Sacrament Hymn:</strong>{" "}
                    #{meeting.sacramentHymn.number} -{" "}
                    {meeting.sacramentHymn.title}
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold">Speakers</h2>

                <ul className="space-y-2">
                    {meeting.speakers.map((speaker, index) => (
                        <li key={index}>
                            <strong>{speaker.name}</strong>

                            {speaker.type === "musical-number" ? (
                                <span> - Musical Number</span>
                            ) : (
                                <span> - {speaker.topic}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            {meeting.stakeBusiness && (
                <section>
                    <h2 className="text-xl font-bold">
                        Stake Business
                    </h2>

                    <p>Stake business will be conducted.</p>
                </section>
            )}

            <section>
                <h2 className="text-xl font-bold">Closing</h2>
                
                <p>
                    <strong>Closing Hymn:</strong>{" "}
                    #{meeting.closingHymn.number} -{" "}
                    {meeting.closingHymn.title}
                </p>

                <p>
                    <strong>Closing Prayer</strong>{" "}
                    {meeting.closingPrayer}
                </p>
            </section>

        </article>
    )
}