
import { ProfileDetails } from "../../../../components/profile/profileDetails";
import axios from "axios";

export default async function Page({ params }: { params: Promise<{ userId: string }> }) {

    const { userId } = await params
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${userId}`)
    const allposts: Posts = response.data
    return (

        <div className=" text-white flex  ml-58  p-6 ">
            <div className=" ">
                <ProfileDetails fullName={allposts.posts[0].User.name} avatar={String(allposts.posts[0].User.image)} />
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