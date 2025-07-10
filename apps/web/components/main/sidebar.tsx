import { Icons } from "../../../../packages/ui/src/icons/icons"
import { ProfileButton } from "../profileButton"
import { SidebarItem } from "../sidebarItems"

export function Sidebar() {
    return <div className="w-64 h-screen bg-black fixed top-0 left-0 flex flex-col" >
        <div className="p-6 mt-16">
            <div className="flex flex-col gap-2">
                <SidebarItem to="/home" title="Home" icon={<Icons size="lg" name='homeIcon' />} />
                <SidebarItem to="/trends" title="Trends" icon={<Icons size="lg" name='trendIcon' />} />
                <SidebarItem to="/home" title="Search" icon={<Icons size="lg" name='searchIcon' />} />
                <SidebarItem to="/messages" title="Messages" icon={<Icons size="lg" name='messageIcon' />} />
                <SidebarItem to="/home" title="Notification" icon={<Icons size="lg" name='notificationIcon' />} />
                <SidebarItem to="/saved" title="Saved" icon={<Icons size="lg" name='saveIcon' />} />
                <SidebarItem title="Settings" icon={<Icons size="lg" name='settingsIcon' />} />
                <div className="mt-4"><ProfileButton /></div>

            </div>

        </div>




    </div>
}