
interface Posts {
    id: number,
    imageUrl: string,
    title: string,
    caption: string,
    createdAt: string,
    User: User,
    Like: Array<Likes>,
    Comment: Array<Comments>

}
interface Likes {
    userId: number,
    postId: number
}
interface Comments {
    id: number,
    comment: string,
    User: User,
    createdAt: string


}

interface User {
    id: number
    name: string,
    image?: string
}
