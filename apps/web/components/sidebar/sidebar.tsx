import { Icons } from "@repo/ui/icons/icons"

import { SettingButton } from "./settingsButton"
import { SidebarItem } from "./sidebarItems"
import { CreatePostButton } from "./createPostButton"

export function Sidebar() {
    return <div className="w-64 border-r-2 border-dark h-screen bg-black fixed top-0 left-0 flex flex-col z-10" >
        <div className="p-6 mt-16">
            <div className="flex flex-col gap-2">
                <SidebarItem to="/home" title="Home" icon={<Icons size="lg" name='homeIcon' />} />
                <SidebarItem to="/home" title="Search" icon={<Icons size="lg" name='searchIcon' />} />
                <CreatePostButton />
                <SidebarItem to="/messages" title="Messages" icon={<Icons size="lg" name='messageIcon' />} />
                <SidebarItem to="/home" title="Notification" icon={<Icons size="lg" name='notificationIcon' />} />
                <SidebarItem to="/saved" title="Saved" icon={<Icons size="lg" name='saveIcon' />} />

                <SettingButton />


            </div>

        </div>




    </div>
}