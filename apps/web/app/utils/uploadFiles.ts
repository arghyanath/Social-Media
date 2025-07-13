import axios from "axios"
export async function uploadFile(file: File) {
    const form = new FormData()
    form.append("file", file)
    const res = await axios.post(`http://localhost:3000/api/upload`,
        form
    )
    const url = res.data
    return url
}