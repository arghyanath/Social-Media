"use server"
import db from "@repo/db/client"

export async function unfollow(userId: number, followingId: number) {
    try {

        await db.follow.delete({
            where: {
                followId: {

                    followerId: userId,
                    followingId
                }
            }

        })

        return { message: "unfollowed" }
    } catch (error) {
        console.log(error);

        return { message: "cannot unfollow" }
    }
}