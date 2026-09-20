"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
    const pathname = usePathname()

    return (
        <ul className="flex gap-6">
            <li>
                <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                    aria-current={pathname === "/" ? "page" : undefined}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/meetings"
                    className={pathname.startsWith("/meetings") ? "active" : ""}
                    aria-current={
                        pathname === "/meetings" ? "page" : undefined
                    }
                >
                    Meetings
                </Link>
            </li>

        </ul>
    )
}