"use server"
import db from "@repo/db/client"
export async function savePost(userId: number, postId: number) {
    try {
        await db.saved.upsert({
            where: {
                saveId: {

                    postId,
                    userId
                }
            },
            update: {},
            create: {
                postId,
                userId
            }
        })
        return { message: "success" }
    } catch (e) {
        console.log(e);
        return { message: "error" }

    }
}