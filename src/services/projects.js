import axios from 'axios'
export default async function projects(query) {
    try {
    
        const limit = query.queryKey[1] || 4
        const projects = await axios.get("https://mklton-s-overview-backend-dik1khtf1-george-safwat.vercel.app/api/v1/projects?limit=" + limit)
        return projects.data
    } catch(e) {
        throw e
    }
}