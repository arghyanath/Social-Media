import { create } from "zustand"
interface Store {
    posts: Array<Posts>
    setPost: (data: Array<Posts>) => void
    updatePost: (postId: number, updateFunction: (post: Posts) => Posts) => void
}


export const usePostStore = create<Store>()((set) => ({
    posts: [],
    setPost: (data) => set({ posts: data }),
    updatePost: (postId, updateFuntion) =>
        set((state) => ({
            posts: state.posts.map((post) =>
                post.id === postId ? updateFuntion(post) : post
            ),
        }))
}))