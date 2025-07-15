import { getServerSession } from "next-auth";
import { getRecentPosts } from "../../utils/getRecentPosts";
import { PostsCard } from "./PostsCard";
import { authOptions } from "../../lib/auth";
import { getTimePassed } from "../../utils/getTimePassed";

export async function PostsContainer() {
    const session = await getServerSession(authOptions);
    if (session && session.user) {
        const recentPosts = await getRecentPosts()
        return <div className="flex flex-col gap-4">
            {recentPosts.posts.map((p) => <PostsCard key={p.id} imgUrl={p.imageUrl} date={getTimePassed(p.createdAt)} title={p.title} caption={p.caption}
                avatar={p.User.image} fullName={p.User.name} userId={String(p.User.id)} />)}
        </div>
    }
    return null
}