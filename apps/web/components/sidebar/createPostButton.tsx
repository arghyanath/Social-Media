"use client"
import { useState } from "react"
import { CreatePostModal } from "./createPostModal"
import { Icons } from "@repo/ui/icons/icons"
import { SidebarItem } from "./sidebarItems"


export function CreatePostButton() {

    const [showModal, setShowModal] = useState(false);
    return <div>
        {showModal && <CreatePostModal onClose={() => setShowModal(m => !m)} />}
        <div onClick={() => setShowModal(m => !m)} className={`${showModal && " outline z-10 rounded-md outline-deepGray"}`}>
            <SidebarItem title="Create" icon={<Icons size="lg" name="plusIcon" />} />
        </div>
    </div>





}