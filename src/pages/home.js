import Background from "../layout/Background";
import Nav from "../layout/nav";
import Header from "../layout/header";
import BlogHeader from "../layout/blogHeader";
import Projects from '../layout/projects'
import Footer from '../layout/footer'


export default function Home() {
    return (
        <>
            <Background></Background>
            <Nav></Nav>
            <Header></Header>
            <Projects></Projects>
            <Footer toPage="blog"></Footer>
        </>
    )
} 