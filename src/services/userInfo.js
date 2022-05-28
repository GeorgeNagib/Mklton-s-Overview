import axios from 'axios'
export default async function userInfo() {
    try {
        const userData = await axios.get("https://shielded-woodland-38501.herokuapp.com//api/v1/user")
        return (userData.data.user)
    } catch(e) {
        throw e
    }
}