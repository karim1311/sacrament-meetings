import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-4xl font-bold">
        Mirador Ward 
      </h1>

      <Image
        src="/images/temple_rendering_culiacan_mexico_temple.webp"
        alt="Culiacan Mexico Temple"
        width={500}
        height={281}
        className="mt-6 rounded-lg"

      />

      <p className="mt-4">
        View upcoming and previous sacrament meeting agendas.
      </p>

      <Link
        href="/meetings"
        className="mt-6 inline-block underline"
      >
        View Meetings
      </Link>
    </main>
  );
}