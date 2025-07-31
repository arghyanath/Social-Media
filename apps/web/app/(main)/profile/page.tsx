

import { getServerSession } from "next-auth";

import { authOptions } from "../../../lib/auth";
import axios from "axios";
import { ProfileIcon } from "@repo/ui/icons/profileIcon";

export default async function Profile() {
    const session = await getServerSession(authOptions)
    if (!(session && session.user)) return <div>User not logged in</div>
    const fullName = String(session.user.name)
    const avatar = String(session.user.image);
    const id = String(session.user.id)

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile/${id}`)
    const user: User = response.data.user
    const posts = user.posts

    return (
        <div className=" text-white flex  ml-58  p-6 ">
            <div className=" flex flex-col gap-4 px-6">

                <div className="flex flex-col items-center">
                    <ProfileIcon imgUrl={avatar} size="profile" />
                    <div className=" text-white mt-4 text-2xl">{fullName}</div>

                </div>
                <div className=" flex justify-between">
                    <div className="flex flex-col items-center">
                        <div>Followers </div>
                        <div>{user.Follower.length}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>Following</div>
                        <div>{user.Following.length}</div>
                    </div>
                </div>

            </div>

            <div className=" flex gap-4 flex-wrap ml-6 ">
                {posts.length !== 0 ? posts.map(p =>
                    <div key={p.id} className="min-w-56 min-h-56 relative">
                        <img className=" object-cover w-56 h-56 " src={p.imageUrl} />
                        <div className={`text-white h-full w-full hover:opacity-65 opacity-0  absolute top-0 left-0 bg-black flex flex-col p-2 gap-2`}>
                            <div className="text-lg ">{p.title}</div>
                            <div className="text-liteGray">{p.caption}</div>

                        </div>
                    </div>
                ) : <div>No posts</div>}



            </div>

        </div>
    );
}
