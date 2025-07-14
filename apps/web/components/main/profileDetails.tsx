
import { ProfileIcon } from "@repo/ui/icons/profileIcon";

export async function ProfileDetails({ fullName, avatar }: { fullName: string, avatar: string }) {


    return <div>


        <div className="flex justify-between bg-dark p-6 rounded-2xl">

            <div className="text-white">
                <div className="text-2xl">Name: {fullName}</div>
                <div className="text-md">Bio:</div>
            </div>
            <ProfileIcon imgUrl={avatar} size="profile" />

        </div>
        <div className="flex">

        </div>
    </div>
}