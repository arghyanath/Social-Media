import db from "@repo/db/client"
import { NextResponse } from "next/server"
export async function GET() {
    try {
        const posts = await db.post.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                User: {
                    select: {
                        name: true,
                        image: true
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