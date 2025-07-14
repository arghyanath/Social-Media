"use server"
import db from "@repo/db/client"
import { uploadFile } from "../../utils/uploadFiles"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
export async function createPost(file: File, title: string, caption: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user) return { status: "failure" }

    const userId = Number(session.user.id)
    const imageUrl = await uploadFile(file)
    console.log(imageUrl);

    try {

        await db.post.create({
            data: {
                userId,
                title,
                caption,
                imageUrl: imageUrl.url
            }
        })

        return {
            status: "success"
        }
    }
    catch (e) {
        console.log(e);

        return {
            status: "failure"
        }
    }
}