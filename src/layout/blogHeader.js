export default function BlogHeader({setSearchString}) {
    
    return (
        <header className="header pd-2-r">
      <div className="shape shape-1 blog-shape">
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
      <div className="container">
        <div className="header__content flex-col align-normal">
          <div className="title center mb-4">
            <span>lets talk about</span>
            <h1>thoughts and ideas</h1>
          </div>
          <div className="header__search">
            <div className="search-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3852 12.4457C8.73488 14.5684 4.85545 14.4013 2.39866 11.9445C-0.237379 9.3085 -0.237379 5.03464 2.39866 2.3986C5.0347 -0.23744 9.30858 -0.23744 11.9446 2.3986C14.4014 4.85538 14.5685 8.7348 12.4458 11.3851L17.6015 16.5407C17.8944 16.8336 17.8944 17.3085 17.6015 17.6014C17.3086 17.8943 16.8337 17.8943 16.5408 17.6014L11.3852 12.4457ZM3.45932 10.8839C1.40907 8.8336 1.40907 5.50951 3.45932 3.45926C5.50958 1.40901 8.83368 1.40901 10.884 3.45926C12.9327 5.50801 12.9342 8.8287 10.8885 10.8794C10.887 10.8809 10.8855 10.8823 10.8839 10.8839C10.8824 10.8854 10.8809 10.8869 10.8795 10.8884C8.82878 12.9341 5.50807 12.9326 3.45932 10.8839Z"
                  fill="#E8E8E8"
                />
              </svg>
            </div>
            <form action="#">
              <div className="form-group">
                <input
                  onChange={(el) => setSearchString(el.target.value)}
                  type="search"
                  id="#"
                  name="search"
                  placeholder="what are you looking for?"
                  className="header__search-input"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
    )
}