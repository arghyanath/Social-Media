import { authOptions } from "@/lib/auth";
import axios from "axios"
import { getServerSession } from "next-auth";

export default async function () {
    const session = await getServerSession(authOptions)
    if (!(session && session.user)) return <div>User not logged in</div>
    const id = String(session.user.id)
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/profile/${id}`)
    const user: User = response.data.user
    const saved = user.Saved
    return <div className="ml-58  p-6">
        <div className=" flex gap-4 flex-wrap ml-6 ">
            {saved.length > 0 ? saved.map(p =>
                <div key={p.Post.id} className="min-w- min-h-64 relative">
                    <img className=" object-cover w-64 h-64 " src={p.Post.imageUrl} />
                    <div className={`text-white h-full w-full hover:opacity-65 opacity-0  absolute top-0 left-0 bg-black flex flex-col p-2 gap-2`}>
                        <div className="text-lg ">{p.Post.title}</div>
                        <div className="text-liteGray">{p.Post.caption}</div>

                    </div>
                </div>
            ) : <div>No Saved posts</div>}



        </div>
    </div>
}