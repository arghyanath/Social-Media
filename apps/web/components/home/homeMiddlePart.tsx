
import { getServerSession } from "next-auth";

import { PostsContainer } from "../Posts/PostsContainer";
import { authOptions } from "@/lib/auth";


export async function MiddlePart() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) return <div></div>
    return <div className="min-w-144" >
        <PostsContainer />
    </div>
}