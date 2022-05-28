import {
    Link
  } from "react-router-dom";  

export default function Footer({toPage}) {
    return (
        <footer>
        <div className="container">
            <div className="button">
            <div className="button__arrows">
                <svg
                width="31"
                height="17"
                viewBox="0 0 31 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M20.7728 16.1575C22.9901 14.6645 27.9313 12.0088 29.9576 13.3301M29.9576 13.3301C28.6746 11.5531 27.4179 4.53251 27.4179 4.53251M29.9576 13.3301C29.0029 11.679 0.99998 0.751134 0.99998 0.751134"
                    stroke="#E8E8E8"
                />
                </svg>
                <svg
                width="31"
                height="17"
                viewBox="0 0 31 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10.3741 16.1575C8.15676 14.6645 3.21553 12.0088 1.18926 13.3301M1.18926 13.3301C2.47222 11.5531 3.72895 4.53251 3.72895 4.53251M1.18926 13.3301C2.14397 11.679 30.1469 0.751134 30.1469 0.751134"
                    stroke="#E8E8E8"
                />
                </svg>
            </div>
            <div className="button__link">
                <Link to={toPage == "/" ? "/" : toPage == 'blog' ? '/blog' : toPage == 'contact' ? '/contact' : '/'}>to the {toPage}</Link>
                <span className="button__next">
                <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M8.4697 1.53033C8.1768 1.23744 8.1768 0.762558 8.4697 0.469668C8.7626 0.176777 9.2374 0.176777 9.5303 0.469668L13.5303 4.4697C13.8232 4.7626 13.8232 5.2374 13.5303 5.5303L9.5303 9.5303C9.2374 9.8232 8.7626 9.8232 8.4697 9.5303C8.1768 9.2374 8.1768 8.7626 8.4697 8.4697L11.1893 5.75H1.5C1.08579 5.75 0.75 5.4142 0.75 5C0.75 4.5858 1.08579 4.25 1.5 4.25H11.1893L8.4697 1.53033Z"
                    fill="white"
                    />
                </svg>
                </span>
            </div>
            </div>
        </div>
        </footer>
    )
}