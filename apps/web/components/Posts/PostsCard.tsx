"use client"
import { ProfileIcon } from "@repo/ui/icons/profileIcon";
import { useRouter } from "next/navigation";
import CommentBox from "../Posts/commentBox";
import { Icons } from "@repo/ui/icons/icons";
import { useState } from "react";
import { likePost } from "../../lib/actions/likePost";
import { getTimePassed } from "../../utils/getTimePassed";
import { savePost } from "@/lib/actions/savePost";
import { unsavePost } from "@/lib/actions/unsavePost";



export function PostsCard({ post, userId }: { post: Posts, userId: number }) {
    const router = useRouter()
    const [showComment, setShowComment] = useState(false)
    const [isLiked, setIsLiked] = useState(!!post.Like.find(l => l.userId === userId))
    const [likeCount, setLikeCount] = useState(post.Like.length)
    const [isSaved, setIsSaved] = useState(!!post.Saved.find(sp => sp.userId === userId))

    return <div className=" w-full flex justify-center">
        <div className="flex justify-center w-4/5 flex-col gap-2 p-4 border-b-2 border-dark">
            <div className="flex justify-between">
                <div className="flex gap-3 items-center ">
                    <div className="cursor-pointer" onClick={
                        () => {
                            if (userId === post.User.id) {
                                router.push("/profile")
                            } else {
                                router.push(`/profile/${post.User.id}`)
                            }
                        }
                    }>
                        <ProfileIcon size="sm" imgUrl={String(post.User.image)} />
                    </div>
                    <div>
                        <div>{post.User.name}</div>
                        <div className="text-sm text-gray-300">{post.title}</div>
                    </div>
                </div>
                <div className="text-sm">{getTimePassed(post.createdAt)}</div>
            </div>
            {post.caption && <div>{post.caption}</div>}
            {post.imageUrl && <div><img src={post.imageUrl} className=" rounded-xs object-contain" alt="post" /></div>}

            <div className="flex justify-between">
                <div className="flex gap-4 ">
                    <div className=" cursor-pointer flex gap-1 " onClick={(e) => {
                        e.preventDefault()
                        if (isLiked) return
                        likePost(userId, post.id)
                        setLikeCount(c => c + 1)
                        setIsLiked(true)
                    }}>
                        <div className={`${isLiked && "text-buttonBlue"}`}><Icons name="likeIcon" size="md" /></div>  {likeCount}
                    </div>
                    <div className="cursor-pointer flex gap-1" onClick={() => setShowComment(c => !c)}>
                        <Icons name="commentIcon" size="md" />{post.Comment.length}
                    </div>
                </div>
                <div onClick={(e) => {
                    e.preventDefault()
                    if (isSaved) {
                        unsavePost(userId, post.id)
                        setIsSaved(false)

                    } else {
                        savePost(userId, post.id)
                        setIsSaved(true)
                    }

                }}>

                    <div className={`${isSaved && "text-buttonBlue"}`}><Icons name="saveIcon" size="md" /></div>
                </div>
            </div>
            {showComment &&
                <div><CommentBox postId={post.id} /></div>}
        </div>
    </div >

}