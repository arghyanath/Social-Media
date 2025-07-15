
interface Posts {
    posts: [
        {
            id: number,
            imageUrl: string,
            title: string,
            caption: string,
            createdAt: string,
            User: {
                id: number
                name: string,
                image?: string
            }
        }
    ]

}
interface User {
    id: number
    name: string,
    image?: string
}
