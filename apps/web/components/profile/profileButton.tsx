"use client"
import { useRouter } from "next/navigation";
import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { useSession } from "next-auth/react";

export function ProfileButton() {
    const router = useRouter();

    const session = useSession()
    const imgUrl = String(session?.data?.user?.image)

    return <div className="flex text-white gap-4 items-center rounded-md hover:outline hover:outline-deepGray not-last-of-type: cursor-pointer px-3 py-2"
        onClick={
            () => {
                router.push("/profile")
            }
        }>
        <ProfileIcon imgUrl={imgUrl}
            size="sm" />
        Profile
    </div>
}