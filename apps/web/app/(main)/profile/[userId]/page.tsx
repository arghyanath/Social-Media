
import axios from "axios";
import { uploadFile } from "../../../../utils/uploadFiles";
import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import FollowButton from "../../../../components/profile/followButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";


export default async function Page({ params }: { params: Promise<{ userId: string }> }) {

    const { userId } = await params
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile/${userId}`)
    const user: User = response.data.user
    const posts = user.posts
    const session = await getServerSession(authOptions)
    const followerId = session?.user.id

    return (

        <div className=" text-white flex ml-58  p-6 ">
            <div className=" flex flex-col gap-4 px-6">
                <div className="flex flex-col items-center">
                    <ProfileIcon imgUrl={String(user.image)} size="profile" />

                    <div className=" text-white mt-4 text-2xl">{user.name} </div>
                    <FollowButton followerId={Number(followerId)} followingId={user.id}
                        isFollowed={!!user.Follower.find(f => f.followerId === Number(followerId))} />
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