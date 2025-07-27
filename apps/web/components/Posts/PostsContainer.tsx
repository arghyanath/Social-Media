"use client"
import { PostsCard } from "./PostsCard";
import { authOptions } from "../../lib/auth";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { SkeletonCard } from "./PostCardSkeleton";


export function PostsContainer() {
    const session = useSession();

    const { isPending, error, data } = useQuery({
        queryKey: [`allposts`],
        queryFn: async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
            const posts: Array<Posts> = response.data.posts
            return posts
        }


    })
    if (isPending) return <div className="flex flex-col gap-4 items-center w-full">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
    </div>
    if (!session.data) return <div></div>
    if (error) return 'An error has occurred: ' + error.message

    return <div className="flex flex-col gap-6">
        {data.map((p) => <PostsCard key={p.id}
            post={p}
            userId={Number(session.data.user.id)}
        />)}
    </div>


}