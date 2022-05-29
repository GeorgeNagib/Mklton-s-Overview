import axios from 'axios'
export default async function(query) {
    try {
        const limit = query.queryKey[1] || 4
        const searchQuery = query.queryKey[2].trim() || ""
        let posts;

        if(searchQuery.trim().length > 0) {
            posts = await axios.get("https://mklton-s-overview-backend-dik1khtf1-george-safwat.vercel.app/api/v1/posts/search/" + searchQuery + "?limit=" + limit)
            return {isSearch: true, posts: {sentPosts: posts.data.data}, allPostsLength: posts.data.allPostsLength}
        } else {
            posts = await axios.get("https://mklton-s-overview-backend-dik1khtf1-george-safwat.vercel.app/api/v1/posts?limit=" + limit)
        }


        return posts.data
    } catch(e) {
        throw e
    }
}