
interface Posts {
    id: number,
    imageUrl: string,
    title: string,
    caption: string,
    createdAt: string,
    User: User,
    Like: Array<Likes>,
    Comment: Array<Comments>,
    Saved: [{
        userId: number,
        postId: number,
        Post: Posts
    }],

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
    image?: string,
    posts: Array<Posts>,
    Saved: [{
        userId: number,
        postId: number,
        Post: Posts
    }],
    Follower: [{ followerId: number, Follower: User }],
    Following: [{ followingId: number, Following: User }]
}
interface Chats {
    Sender: {
        name: string
        id: number;
        image?: string;
    };
    Receiver: {
        name: string
        id: number;
        image?: string
    };
}[]


interface Messages {
    senderId: number;
    receiverId: number;
    text: string;

}