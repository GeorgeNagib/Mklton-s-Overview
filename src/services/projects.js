import axios from 'axios'
export default async function projects(query) {
    try {
    
        const limit = query.queryKey[1] || 4
        const projects = await axios.get(process.env.BACKEND_URL + "/api/v1/projects?limit=" + limit)
        return projects.data
    } catch(e) {
        throw e
    }
}