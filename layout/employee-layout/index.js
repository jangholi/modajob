import React from "react"
import Header from './header/header'
import Footer from './footer/footer'
import {Col} from "react-bootstrap";

const DefaultLayout = ({children}) => (
    <>
        <Header />
        <Col>
            {children}
        </Col>
        <Footer />
    </>
)

export default DefaultLayout
