"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MeetingsNavLinks() {
    const pathname = usePathname()

    return (
        <ul className="flex gap-6">
            <li>
                <Link
                    href="/meetings"
                    className={pathname === "/meetings" ? "active" : ""}
                    aria-current={
                        pathname === "/meetings" ? "page" : undefined
                    }
                >
                    All Meetings
                </Link>
            </li>

            <li>
                <Link
                    href="/meetings/current"
                    className={
                        pathname === "/meetings/current" ? "active" : ""
                    }
                    aria-current={
                        pathname === "/meetings/current" ? "page" : undefined
                    }    
                >
                    Current Meeting
                </Link>
            </li>
        </ul>
    )
}