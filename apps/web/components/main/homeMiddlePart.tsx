
import { getServerSession } from "next-auth";
import { CreatePost } from "../createPost";
import { PostsContainer } from "./PostsContainer";
import { authOptions } from "../../app/lib/auth";
import { useSession } from "next-auth/react";

export async function MiddlePart() {
    return <div className="min-w-144" >
        <CreatePost />
        <PostsContainer />
    </div>
}