

import { getServerSession } from "next-auth";
import { ProfileDetails } from "../../../components/profile/profileDetails";
import { authOptions } from "../../../lib/auth";
import axios from "axios";

export default async function Profile() {
    const session = await getServerSession(authOptions)
    if (!(session && session.user)) return <div>User not logged in</div>
    const fullName = String(session.user.name)
    const avatar = String(session.user.image);
    const id = String(session.user.id)

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    const allposts: Posts = response.data

    return (
        <div className=" text-white flex  ml-58  p-6 ">
            <div className=" ">
                <ProfileDetails fullName={fullName} avatar={avatar} />
            </div>

            <div className=" flex gap-4 flex-wrap ml-6 ">
                {allposts.posts.map(p =>
                    <div key={p.id} className="min-w-56 min-h-56 relative">
                        <img className=" object-cover w-56 h-56 " src={p.imageUrl} />
                        <div className={`text-white h-full w-full hover:opacity-65 opacity-0  absolute top-0 left-0 bg-black flex flex-col p-2 gap-2`}>
                            <div className="text-lg ">{p.title}</div>
                            <div className="text-liteGray">{p.caption}</div>

                        </div>
                    </div>
                )}



            </div>

        </div>
    );
}
