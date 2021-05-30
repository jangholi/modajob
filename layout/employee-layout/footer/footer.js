import React from "react"
import styles from './footer.module.scss'
import {Col, Row, Navbar, Nav} from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {

    return(
        <div>
            <Col className={styles["sub-footer"]}>
                <Row>
                    <Col md={{span:10, offset:1}}>
                        <Row>
                            <Col md={6} sm={7} className={"d-flex justify-content-start " + styles['right-container']}>
                                <Navbar expand="lg" className={styles['navbar']}>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className={"mr-auto d-flex justify-content-between full-width"} >
                                            <Link href="/about">
                                                <a>
                                                    درباره‌ي ما
                                                </a>
                                            </Link>
                                            |
                                            <Link href="/blog">
                                                <a>
                                                    بلاگ
                                                </a>
                                            </Link>
                                            |
                                            <Link href="/rules">
                                                <a>
                                                    پشتیبانی و قوانین
                                                </a>
                                            </Link>
                                            |
                                            <Link href="/contact" >
                                                <a target='_blank'>
                                                    تماس با ما
                                                </a>
                                            </Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                            <Col md={6} sm={5}  className={styles['left-container']}>
                                <p>
                                    کليه حقوق اين سایت متعلق به مداجاب است.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default Footer
