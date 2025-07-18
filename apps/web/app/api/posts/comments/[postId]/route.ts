import { NextRequest, NextResponse } from 'next/server';
import db from "@repo/db/client"
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ postId: string }> }
) {
    const { postId } = await params

    try {

        const comments = await db.comment.findMany({
            where: {
                postId: Number(postId)
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
        return NextResponse.json({ comments });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: "failed" });
    }


}
