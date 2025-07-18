"use server"
import db from "@repo/db/client"
export async function deleteComment(commentId: string) {
    try {
        await db.comment.delete({
            where: {
                id: Number(commentId)
            }
        })
        return { message: "deleted" }

    } catch (error) {
        console.log(error);

        return { message: "deleted" }
    }
}