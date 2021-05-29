import React from "react"
import Header from './header/header'
import Footer from './footer/footer'
import {Col, Row} from "react-bootstrap";

const DefaultLayout = ({children}) => (
    <>
        <Header />
        <Col>
            <Row>
                <Col md={{span:10, offset:1}}>
                    {children}
                </Col>
            </Row>
        </Col>
        <Footer />
    </>
)

export default DefaultLayout
