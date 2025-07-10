"use server"
import db from "@repo/db/client"
export async function getPosts(userId: number) {
    try {
        const posts = await db.post.findMany({
            where: {
                userId: userId
            },
            select: {
                title: true,
                caption: true,
                imageUrl: true,
                createdAt: true,

            }
        })

        return posts
    }
    catch (e) {
        return {
            message: "Something Wrong"
        }
    }
}