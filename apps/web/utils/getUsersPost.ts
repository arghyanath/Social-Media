import axios from "axios";

export async function getUsersPosts(userId: string) {
    const response = await axios.get(`${process.env.API_URL}/posts/${userId}`)

    const posts: Posts = response.data

    return posts
}