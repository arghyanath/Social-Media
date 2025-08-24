
import { getServerSession } from "next-auth";
import { PostsCard } from "./PostsCard";

import axios from "axios";
import { authOptions } from "@/lib/auth";



export async function PostsContainer() {
    const session = await getServerSession(authOptions);
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const posts: Array<Posts> = response.data.posts



    if (!session || !session.user) return <div></div>
    return <div className="flex flex-col gap-6">
        {posts.map((p) => <PostsCard key={p.id}
            post={p}
            userId={Number(session.user.id)}
        />)}
    </div>


}