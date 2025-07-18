
import { getServerSession } from "next-auth";

import { PostsContainer } from "../Posts/PostsContainer";
import { authOptions } from "../../lib/auth";
import { useSession } from "next-auth/react";

export async function MiddlePart() {
    return <div className="min-w-144" >
        <PostsContainer />
    </div>
}