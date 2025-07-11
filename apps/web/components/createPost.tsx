"use client"
import { ProfileIcon } from "@repo/ui/icons/profileIcon"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { CreatePostModal } from "./modals/createPostModal"


export function CreatePost() {
    const session = useSession()
    const fullName = String(session?.data?.user?.name)
    const imgUrl = String(session?.data?.user?.image)

    const [showModal, setShowModal] = useState(false);
    return <div className=" flex  flex-col   bg-dark  p-4 rounded-md">
        <div className=" flex w-full gap-4" >
            <div>
                <ProfileIcon imgUrl={imgUrl} size="sm" />
            </div>
            <div onClick={() => setShowModal(m => !m)}
                className=" bg-black w-full text-liteGray outline outline-deepGray cursor-pointer hover:bg-deepGray  rounded-full flex  items-center ">
                <div className="pl-5">Create a post , {fullName}</div>
            </div>
        </div>

        {showModal && <CreatePostModal onClose={() => setShowModal(m => !m)} />}

    </div>

}