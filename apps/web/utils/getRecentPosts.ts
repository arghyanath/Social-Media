import axios from "axios";

export async function getRecentPosts() {
    const response = await axios.get(`${process.env.API_URL}/posts`)

    const posts: Posts = response.data

    return posts
}