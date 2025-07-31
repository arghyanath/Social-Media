import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/client"


export async function GET(req: NextRequest, { params }: { params: Promise<{ senderId: string }> }) {
    const { senderId } = await params


    try {
        const chats = await db.chats.findMany({
            where: {
                OR: [
                    {
                        senderId: Number(senderId)
                    },
                    {
                        receiverId: Number(senderId)
                    }


                ]


            },
            select: {
                Sender: {
                    select: {
                        id: true,
                        image: true,
                        name: true
                    }
                },
                Receiver: {
                    select: {
                        id: true,
                        image: true,
                        name: true
                    }
                }
            }

        })
        return NextResponse.json({
            chats
        })
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: "error" }, { status: 400 })

    }

}