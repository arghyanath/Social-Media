"use server"
import db from "@repo/db/client"
export async function unsavePost(userId: number, postId: number) {
    try {
        await db.saved.delete({
            where: {
                saveId: {

                    postId,
                    userId
                }
            },

        })
        return { message: "success" }
    } catch (e) {
        console.log(e);
        return { message: "error" }

    }
}