"use server"
import db from "@repo/db/client"

export async function follow(userId: number, followingId: number) {
    try {

        await db.follow.upsert({
            where: {
                followId: {

                    followerId: userId,
                    followingId
                }
            },
            update: {},
            create: {
                followerId: userId,
                followingId
            }

        })

        return { message: "followed" }
    } catch (error) {
        console.log(error);

        return { message: "cannot follow" }
    }
}