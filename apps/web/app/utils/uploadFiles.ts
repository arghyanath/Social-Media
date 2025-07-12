import axios from "axios"
export async function uploadFile(form: FormData) {

    const res = await axios.post(`http://localhost:3000/api/upload`,
        form
    )
    const data = res.data
    return data
}