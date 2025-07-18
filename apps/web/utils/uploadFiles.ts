import axios from "axios"
export async function uploadFile(file: File) {
    const form = new FormData()
    form.append("file", file)
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`,
        form
    )
    const url = res.data
    return url
}