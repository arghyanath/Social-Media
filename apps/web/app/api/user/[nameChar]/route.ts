import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/client"

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ nameChar: string }> }) {

    const { nameChar } = await params
    try {

        const user = await db.user.findMany({
            where: {
                name: {
                    contains: nameChar,
                    mode: 'insensitive'
                }
            },
            select: {
                id: true,
                name: true,
                image: true,

            },
            orderBy: {
                id: "desc"
            }
        })
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: "failed" });
    }


}