"use client"
import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons/icons";
import { Input } from "@repo/ui/input";
import Comment from "./comment";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { getTimePassed } from "../../utils/getTimePassed";
import { doComment } from "../../lib/actions/doComment";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function CommentBox({ postId }: { postId: number }) {
    const [commentArr, setCommentArr] = useState<Array<Comments>>([])
    const commentRef = useRef<HTMLTextAreaElement>(null)
    const session = useSession()


    async function getComments() {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/comments/${postId}`)
        const comments: Array<Comments> = response.data.comments
        return comments
    }


    const { isPending, error, data } = useQuery({
        queryKey: [`${postId}`],
        queryFn: () =>
            getComments()

    })
    useEffect(() => {
        if (data === undefined) return
        setCommentArr(data)
    }, [data])


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <>
            <div className="flex flex-col w-full h-66 border border-deepGray p-2 justify-between rounded">
                <div className=" w-full overflow-scroll scrollbar-none ">
                    {commentArr.map(c =>
                        <Comment key={c.id} avatar={c.User.image} comment={c.comment} createdAt={getTimePassed(c.createdAt)} fullName={c.User.name} />
                    )}
                </div>
                <div className=" flex gap-2 ">
                    <textarea ref={commentRef} className="w-full rounded px-2 py-1 outline-none border border-deepGray resize-none" placeholder="write something" ></textarea>
                    <Button varient="secondary" onClick={async (e) => {
                        e.preventDefault()
                        if (!session.data || !commentRef.current) return
                        const res = await doComment(Number(session.data.user.id), postId, commentRef.current.value)
                        setCommentArr([{
                            id: commentArr.length + 1, User: {
                                id: Number(session.data.user.id),
                                image: session.data.user.image,
                                name: String(session.data.user.name)
                            }, comment: commentRef.current.value, createdAt: String(new Date())
                        }, ...(commentArr || [])])
                        alert(res.message)
                        commentRef.current.value = ""

                    }}><Icons name="postIcon" size="md" /></Button>
                </div>
            </div>
        </>
    );
}