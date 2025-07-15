"use client"
import { Icons } from "@repo/ui/icons/icons";
import { SidebarItem } from "./sidebarItems";
import { useState } from "react";
import { SettingsModal } from "./settingsModal";

export function SettingButton() {
    const [showModel, setShowModel] = useState(false);
    return <div>
        {showModel && <SettingsModal onClose={() => setShowModel(m => !m)} />}
        <div onClick={() => setShowModel(m => !m)} className={`${showModel && " outline rounded-md outline-deepGray"}`}>
            <SidebarItem title="Settings" icon={<Icons size="lg" name='settingsIcon' />} />
        </div>
    </div>

}