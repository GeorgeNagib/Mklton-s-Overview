import { useRef, useState } from "react";
import Background from "../layout/Background";
import Nav from "../layout/nav";
import ContactHeader from '../layout/contactHeader'
import ContactsMonitor from "../layout/contactsMonitor"

import Footer from '../layout/footer'


export default function Home() {

    return (
        <>
            <Background></Background>
            <Nav></Nav>
            <ContactHeader></ContactHeader>
            <ContactsMonitor></ContactsMonitor>
            <Footer toPage="projects"></Footer>
        </>
    )
} 