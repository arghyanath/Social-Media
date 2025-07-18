import { getServerSession } from "next-auth";
import { PostsCard } from "./PostsCard";
import { authOptions } from "../../lib/auth";
import axios from "axios";


export async function PostsContainer() {
    const session = await getServerSession(authOptions);
    if (session && session.user) {

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
        const recentPosts: Array<Posts> = response.data.posts

        return <div className="flex flex-col gap-4">
            {recentPosts.map((p) => <PostsCard key={p.id}
                post={p}
                userId={Number(session.user.id)}
            />)}
        </div>
    }
    return <div></div>
}