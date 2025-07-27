import db from "@repo/db/client"
import { NextResponse } from "next/server"
export async function GET() {
    try {
        const posts = await db.post.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                Saved: true,
                User: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        Follower: true,
                        Following: true,

                    }
                },
                Like: true,
                Comment: {

                    select: {
                        id: true,
                        User: {
                            select: {
                                id: true,
                                name: true,
                                image: true,

                            },

                        },
                        comment: true,
                        createdAt: true

                    }
                }
            },
            take: 10
        })

        return NextResponse.json({
            posts
        })
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            error: "can't get"
        })
    }
}