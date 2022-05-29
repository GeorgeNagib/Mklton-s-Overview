import axios from 'axios'
export default async function userInfo() {
    try {
        const userData = await axios.get(process.env.BACKEND_URL + "/api/v1/user")
        return (userData.data.user)
    } catch(e) {
        throw e
    }
}