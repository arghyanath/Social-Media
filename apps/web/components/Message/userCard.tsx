import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { Dispatch, SetStateAction } from "react";

export default function UserCard({ user }:
    {
        user: { id: number, name: string, image?: string },


    }) {

    return (
        <div className=" flex items-center gap-2 hover:bg-deepGray p-2 rounded-md cursor-pointer">
            <ProfileIcon imgUrl={String(user.image)} size="sm" />
            {user.name}
        </div>
    );
}