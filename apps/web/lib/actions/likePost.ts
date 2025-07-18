"use server"
import db from "@repo/db/client"

export async function likePost(userId: number, postId: number) {
    try {

        await db.like.upsert({
            where: {
                likeId: {

                    postId: Number(postId),
                    userId: Number(userId)
                }
            },
            update: {},
            create: {
                postId: Number(postId),
                userId: Number(userId)
            }

        })

        return { message: "liked" }
    } catch (error) {
        console.log(error);

        return { message: "cannot like" }
    }
}