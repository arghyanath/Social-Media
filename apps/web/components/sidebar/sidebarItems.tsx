"use client"

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export function SidebarItem({ title, icon, to }: {
    title: string,
    icon: ReactNode,
    to?: string
}) {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === to
    const defaultStyle = ` gap-4 flex items-center rounded cursor-pointer hover:bg-dark p-3`
    return <div className={`${defaultStyle} ${selected ? " text-buttonBlue" : " text-white"} `} onClick={() => {
        if (to) {
            router.push(to)
        }

    }}>
        <div>{icon}</div>
        <div>{title}</div>
    </div>

}