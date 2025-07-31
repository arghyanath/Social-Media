"use server"
import db from "@repo/db/client"
import bcrypt from "bcrypt"

export async function textInChat(senderId: number, receiverId: number, text: string) {
    try {
        await db.message.create({
            data: {
                senderId,
                receiverId,
                text,
                Sent: {
                    connectOrCreate: {
                        where: {
                            chat: {
                                senderId,
                                receiverId,
                            },
                        },
                        create: {
                            senderId,
                            receiverId,
                        },
                    },
                },
            },
        });
        return { message: "success" }
    } catch (e) {
        console.log(e);
        return { message: "failure" }

    }

}