"use server"
import db from "@repo/db/client"
import bcrypt from "bcrypt"
import { CreateUserSchema } from "@repo/zod/types"
export async function createUser(email: string, password: string, name: string) {


    try {
        const user = CreateUserSchema.safeParse({ email, password, name })
        if (!user.success) return "Please provide valid inputs"
        await db.user.create({
            data: {
                email: user.data.email,
                password: await bcrypt.hash(user.data.password, 10),
                name: user.data.name
            }
        })



        return {
            message: "Signed up"
        }
    }
    catch (e) {
        console.log(e);

        return {
            message: "Something Wrong"
        }
    }
}