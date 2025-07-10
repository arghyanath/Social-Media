import CredentialsProvider from "next-auth/providers/credentials";
import db from "@repo/db/client"
import bcrypt from "bcrypt"
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
                            id: user.id.toString(),
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
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub
            return session
        }
    },
    pages: {
        signIn: "/login",
    }


}