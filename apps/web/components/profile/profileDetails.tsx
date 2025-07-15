
import { ProfileIcon } from "@repo/ui/icons/profileIcon";

export async function ProfileDetails({ fullName, avatar }: { fullName: string, avatar: string }) {


    return <div className=" px-6">


        <div className="flex flex-col items-center">
            <ProfileIcon imgUrl={avatar} size="profile" />

            <div className=" text-white mt-4 text-2xl">{fullName}</div>

        </div>

    </div>
}