
import { CreatePost } from "./createPost";
import { Posts } from "./Posts";

export function MiddlePart() {
    return <div className="min-w-144" >
        <CreatePost />
        <Posts />
    </div>
}