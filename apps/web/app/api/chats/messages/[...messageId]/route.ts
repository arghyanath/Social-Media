import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/client"


export async function GET(req: NextRequest, { params }: { params: Promise<{ messageId: string }> }) {
    const { messageId } = await params
    const senderId = messageId[0]
    const receiverId = messageId[1]

    try {
        const messages = await db.message.findMany({
            where: {
                OR: [
                    {
                        senderId: Number(senderId),
                        receiverId: Number(receiverId)
                    },
                    {
                        senderId: Number(receiverId),
                        receiverId: Number(senderId)
                    }
                ]

            },
            select: {
                senderId: true,
                receiverId: true,
                text: true

            }

        })
        return NextResponse.json({
            messages
        })
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: "error" }, { status: 400 })

    }

}