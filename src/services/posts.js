import axios from 'axios'
export default async function(query) {
    try {
        const limit = query.queryKey[1] || 4
        const searchQuery = query.queryKey[2].trim() || ""
        let posts;
        console.log(process.env.BACKEND_URL)
        if(searchQuery.trim().length > 0) {
            posts = await axios.get(process.env.BACKEND_URL + "/api/v1/posts/search/" + searchQuery + "?limit=" + limit)
            return {isSearch: true, posts: {sentPosts: posts.data.data}, allPostsLength: posts.data.allPostsLength}
        } else {
            posts = await axios.get(process.env.BACKEND_URL + "/api/v1/posts?limit=" + limit)
        }


        return posts.data
    } catch(e) {
        throw e
    }
}