import db from "@repo/db/client"
import { NextResponse } from "next/server"
export async function GET() {
    const user = await db.user.findFirst({
        where: {
            id: 1
        }
    })

    return NextResponse.json({
        user
    })
}