
interface Posts {
    posts: [
        {
            id: number,
            imageUrl: string,
            title: string,
            caption: string,
            createdAt: string,
            User: {
                name: string,
                image?: string
            }
        }
    ]

}
