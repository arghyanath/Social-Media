import { NextRequest, NextResponse } from 'next/server';
import db from "@repo/db/client"
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    const { userId } = await params

    try {

        const posts = await db.post.findMany({
            where: {
                userId: Number(userId)
            },
            include: {
                User: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json({ posts });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: "failed" });
    }


}
