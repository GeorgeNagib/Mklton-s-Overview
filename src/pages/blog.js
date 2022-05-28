import { useRef, useState } from "react";
import Background from "../layout/Background";
import Nav from "../layout/nav";
import BlogHeader from "../layout/blogHeader";
import Projects from '../layout/projects'
import Posts from '../layout/posts'

import Footer from '../layout/footer'


export default function Home() {
    const [searchString, setSearchString] = useState("")
    return (
        <>
            <Background></Background>
            <Nav></Nav>
            <BlogHeader setSearchString={setSearchString}></BlogHeader>
            <Posts searchString={searchString}></Posts>
            <Footer toPage="projects"></Footer>
        </>
    )
} 