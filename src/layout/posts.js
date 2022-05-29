import { useState, useRef } from "react"
import { useQuery } from "react-query"
import postsService from '../services/posts'

import LoadMore from "../components/loadMore"
import Post from "../components/Post"

export default function Posts({searchString}) {
 
  const [limitOfPosts, setLimitOfPosts] = useState(4)

  const { isLoading, isError, data, error } = useQuery(['posts', limitOfPosts, searchString], postsService)
  
    return (
        
      <section className="posts pd-2-r">
        <div className="container">


          <h2 className="title-heading-2 mb-4 cur-posts">
              <span className="posts-num">{data?.allPostsLength}</span> posts
          </h2>
          <div className="shape shape-2">
              <svg
                width="386"
                height="283"
                viewBox="0 0 386 283"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M220.156 32.1725C78.1561 -29.8276 5.15617 -0.82753 0.156167 107.172C-4.84383 215.173 111.109 291.544 220.156 281.172C298.028 273.766 397.156 238.172 384.156 166.172C371.156 94.1724 362.156 94.1725 220.156 32.1725Z"
                  fill="#C4C4C4"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
            {data?.posts?.sentPosts?.map(({_id, title, body, createdAt, url}) => (
              <Post key={_id} title={title} body={body} createdAt={createdAt} url={url}></Post>
            ))}
            
            <div className="shape shape-3">
              <svg
                width="386"
                height="273"
                viewBox="0 0 386 273"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M139 32C281 -30 380.158 1.17252 385.158 109.173C390.158 217.173 273.634 156.134 211 246C165 312 -11.8425 240.173 1.15753 168.173C14.1575 96.1725 -3 94 139 32Z"
                  fill="#C4C4C4"
                  fillOpacity="0.1"
                />
              </svg>
            </div>

            <div className="shape shape-4">
              <svg
                width="387"
                height="240"
                viewBox="0 0 387 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M138 33C-4 -29 6.15618 0.172417 1.15618 108.172C-3.84382 216.172 82.0751 271.889 178 219C272 167.172 398.156 239.172 385.156 167.172C372.156 95.1724 280 95 138 33Z"
                  fill="#C4C4C4"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
            {
              data?.allPostsLength > limitOfPosts || isLoading ? <LoadMore changeLimit={setLimitOfPosts} limit={limitOfPosts}></LoadMore> : null
            }
          
        </div>
      </section>
        
    )
}

