"use server"
import db from "@repo/db/client"


export async function createChat(senderId: number, receiverId: number) {
    try {
        await db.chats.upsert({
            where: {
                chat: {
                    senderId,
                    receiverId
                }
            },
            update: {},
            create: {
                senderId,
                receiverId
            }
        })

        return { message: "success" }
    } catch (error) {
        console.log(error);
        return { message: "failure" }

    }
}