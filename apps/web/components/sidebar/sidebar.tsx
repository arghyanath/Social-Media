import { Icons } from "@repo/ui/icons/icons"

import { SettingButton } from "./settingsButton"
import { SidebarItem } from "./sidebarItems"
import { CreatePostButton } from "./createPostButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { assert } from "console"

export async function Sidebar() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) return <div></div>
    return <div className="w-64 border-r-2 border-dark h-screen bg-black fixed top-0 left-0 flex flex-col z-10" >
        <div className="p-6 mt-16">
            <div className="flex flex-col gap-2">
                <SidebarItem to="/home" title="Home" icon={<Icons size="lg" name='homeIcon' />} />
                <CreatePostButton />
                <SidebarItem to="/messages" title="Messages" icon={<Icons size="lg" name='messageIcon' />} />
                <SidebarItem to="/saved" title="Saved" icon={<Icons size="lg" name='saveIcon' />} />


            </div>

        </div>




    </div>
}