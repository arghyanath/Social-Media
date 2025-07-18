"use server"
import db from "@repo/db/client"

export async function doComment(userId: number, postId: number, comment: string) {
    try {

        await db.comment.create({
            data: {
                comment,
                postId,
                userId
            }
        })

        return { message: "commented" }
    } catch (error) {
        console.log(error);

        return { message: "cannot comment" }
    }
}