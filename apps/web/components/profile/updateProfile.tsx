"use client"
import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { useState } from "react";
import { UpdateAvatarModal } from "./updateAvatarModal";

export default function UpdateProfile({ avatar }: { avatar: string }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            {showModal && <UpdateAvatarModal onClose={() => setShowModal(c => !c)} />}

            <div onClick={() => {
                setShowModal(c => !c)
            }} className="relative" >

                <div className="text-white h-full w-full hover:opacity-65 opacity-0 cursor-pointer  absolute top-0 left-0 bg-black flex justify-center items-center">Update Photo</div>
                <ProfileIcon imgUrl={avatar} size="profile" />

            </div>
        </div>
    );
}