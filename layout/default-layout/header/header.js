import React from "react";
import {Row, Col, Button} from 'react-bootstrap';
import styles from './header.module.scss';
import Navbar from '../../../components/navbar';
import Link from "next/link";

const Header = () => (
    <div className={styles.header}>
        <Col md={{span: 10, offset:1}} className={styles['top-header']}>
            <Row>
                <Col lg={{span: 9}} md={{span: 12}} >
                    <img src='/images/logo.png' />
                    <span className={styles['title']}>
                         جامع ترین سامانه آگهی‌های استخدامی صنعت مد، پوشاک و نساجی
                    </span>
                </Col>
                <Col lg={{span: 3}} md={{span: 12}} >
                    <Button  className={styles['register-btn']}>
                        <Link href="/register">
                            <a>
                                ثبت آگهی شغلی
                            </a>
                        </Link>
                    </Button>
                    <span className={styles['login']}>
                <Link href="/login">
                       <a>
                         ورود
                       </a>
                   </Link>
            </span>
                </Col>
            </Row>
        </Col>
        <Col md={{span: 10, offset:1}} className='pb15'>
            <Navbar />
        </Col>
    </div>
)

export default Header
