

import { getServerSession } from "next-auth";
import { ProfileDetails } from "../../../components/main/profileDetails";
import { getUsersPosts } from "../../../utils/getUsersPost";
import { authOptions } from "../../../lib/auth";

export default async function Profile() {
    const session = await getServerSession(authOptions)
    if (!(session && session.user)) return <div>User not logged in</div>
    const fullName = String(session.user.name)
    const avatar = String(session.user.image);
    const id = String(session.user.id)
    const allposts = await getUsersPosts(id)

    return (
        <div className=" text-white flex flex-col ml-64  py-6 px-10 ">
            <div className=" ">
                <ProfileDetails fullName={fullName} avatar={avatar} />
            </div>

            <div className=" mt-6 flex gap-4 flex-wrap ">
                {allposts.posts.map(p =>
                    <div key={p.id} className="min-w-64 min-h-64 relative bg-liteGray">
                        <img className=" object-cover w-64 h-64 " src={p.imageUrl} />
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
