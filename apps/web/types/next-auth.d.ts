import "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: String,
            image?: string,
            name?: string
        }

    }
}