
import { ProfileIcon } from "@repo/ui/icons/profileIcon";

import { getServerSession } from "next-auth";

export async function ProfileDetails() {
    const session = await getServerSession()
    const fullName = String(session?.user?.name)
    const imgUrl = String(session?.user?.image)

    return <div className="flex bg-dark p-6 rounded-2xl">
        <ProfileIcon imgUrl={imgUrl} size="profile" />
        <div className="text-white">
            <div className="text-2xl">Name: {fullName}</div>
            <div className="text-md">Bio:</div>
        </div>

    </div>
}