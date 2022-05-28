import React from "react";
import {
  Link
} from "react-router-dom";


export default function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <ul className="list-unstyled item">
                    <li><Link to="/" className={"item__link " + (window.location.pathname == "/" ? "item__link-active" : null)} >projects</Link></li>
                    <li><Link to="/blog" className={"item__link " + (window.location.pathname == "/blog" ? "item__link-active" : null)} >blog</Link></li>
                    <li><Link to="/contact" className={"item__link " + (window.location.pathname == "/contact" ? "item__link-active" : null)} >contact</Link></li>                    </ul>
                </div>
            </nav>
    </>
    )
}