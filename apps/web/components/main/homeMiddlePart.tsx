
import { CreatePost } from "../createPost";
import { PostsContainer } from "./PostsContainer";

export function MiddlePart() {
    return <div className="min-w-144" >
        <CreatePost />
        <PostsContainer />
    </div>
}