"use server"
import db from "@repo/db/client"
import { uploadFile } from "../../utils/uploadFiles"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"

export async function updatePhoto(file: File) {
    const session = await getServerSession(authOptions)
    if (!session?.user) return { status: "failure" }

    const userId = Number(session.user.id)
    const imageUrl = await uploadFile(file)

    try {

        await db.user.update({
            where: {
                id: userId
            },
            data: {

                image: imageUrl.url
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