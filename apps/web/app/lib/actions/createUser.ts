"use server"
import db from "@repo/db/client"
import bcrypt from "bcrypt"
export async function createUser(email: string, password: string, name: string) {
    try {
        await db.user.create({
            data: {
                email,
                password: await bcrypt.hash(password, 10),
                name
            }
        })

        return {
            message: "user created"
        }
    }
    catch (e) {
        return {
            message: "Something Wrong"
        }
    }
}