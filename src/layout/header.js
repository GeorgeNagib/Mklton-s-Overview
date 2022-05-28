import {
  useQuery,
} from 'react-query'
import userInfo from '../services/userInfo'
import axios from 'axios'
export default function Header() {

    
  
  
    // Queries
    const { isLoading, isError, data, error } = useQuery('todos', userInfo)
    
    return (
        <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="title order-2">
            <span className="title__job">{data?.title}</span>
            <h1 className="title__name">{data?.name}</h1>
          </div>
          <div className="header__person">
            <div className="header__person-arrows">
              <svg
                width="90"
                height="61"
                viewBox="0 0 90 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1C25.0818 31.6613 69.3144 37.2262 89 60M89 60C86.4792 49.938 71.8125 32.5581 73.875 28.4419M89 60C79.8333 59.0853 46.2375 53.6884 45.6875 55.8837"
                  stroke="#E8E8E8"
                />
              </svg>
              <svg
                width="83"
                height="46"
                viewBox="0 0 83 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.8078 1C52.7308 4.65297 76.4616 5.38356 82 1M82 1L68.6539 32.5068M82 1C79.6923 6.02283 1 45.5205 1 45.5205"
                  stroke="#E8E8E8"
                />
              </svg>
            </div>
            <div className="header__person-photo">
              <div className="shape shape-1">
                <svg
                  width="387"
                  height="268"
                  viewBox="0 0 387 268"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M218 75C360 13 381.158 -47.8275 386.158 60.1725C391.158 168.172 233.047 277.371 124 267C46.1285 259.594 -10.8423 191.172 2.15775 119.172C15.1577 47.1724 76.0001 137 218 75Z"
                    fill="#C4C4C4"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>

              <img
                src={data?.avatar}
                alt="profile picture"
                className="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    )
}