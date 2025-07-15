import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/client"

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ userId: string }> }) {

    const { userId } = await params
    try {

        const user = await db.user.findFirst({
            where: {
                id: Number(userId)
            },
            select: {
                name: true,
                image: true,
                posts: true
            }
        })
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: "failed" });
    }


}