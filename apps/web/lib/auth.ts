import CredentialsProvider from "next-auth/providers/credentials";
import db from "@repo/db/client"
import bcrypt from "bcrypt"
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials: any) {

                const user = await db.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                })
                if (user) {
                    const validPassword = await bcrypt.compare(credentials.password, user.password)
                    if (validPassword) {
                        return {
                            id: String(user.id),
                            name: user.name,
                            image: user.image,
                        }
                    }
                    return null
                } else {
                    return null

                }
            }

        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/api/auth/login",
    }


}