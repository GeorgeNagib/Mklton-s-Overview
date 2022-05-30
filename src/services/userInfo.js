import axios from 'axios'
export default async function userInfo() {
    try {
        const userData = await axios.get("https://mklton-s-overview-backend-p2924twjt-george-safwat.vercel.app/api/v1/user")
        return (userData.data.user)
    } catch(e) {
        throw e
    }
}