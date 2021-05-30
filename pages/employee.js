import React from "react";
import Head from 'next/head';
import {Row, Col, Button} from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import { HiViewList } from "react-icons/hi";
import EmployeeLayout from '../layout/employee-layout';
import styles from '../styles/employee.module.scss';


export default function Employee() {

    return (
        <EmployeeLayout>
            <div>
                <Head>
                    <title>کارجویان</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>

                    {/* ----------- searchbox ------------ */}
                    <Row className={'align-items-center ' + styles['sub-header']}>
                        <Col md={{span:8, offset:2}}>
                            <Row className={'align-items-center ' + styles['searchbox']}>
                                <Col md={5}>
                                    <span>جستجو</span>
                                </Col>
                                <Col md={4}>
                                    <HiViewList />
                                    <span>همه دسته‌بندی‌ها</span>
                                </Col>
                                <Col md={3} className='p-0'>
                                    <Button className={styles['search-btn']}>
                                        <BiSearchAlt2 />
                                        جستجو
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* ----------- searchbox ------------ */}
                    <Col md={{span:10, offset:1}}>
                        <Row>
                            <Col md={3} className={'pr0'}>
                                <Col md={12} className={styles['filter']}>
                                    <img src="/images/test2.png" alt=""/>
                                </Col>
                            </Col>
                            <Col md={9} className={'pl-0'}>

                                {/* ---------- result ----------- */}
                                <Col md={12} className={'p20 mb20 '}>
                                    <Row>
                                        <Col md={3}>
                                            <Col md={12} className={styles['result']}>
                                                <img src="/images/test1.png" alt=""/>
                                                <p className={styles['title']}>طراح لباس پوشاک زنانه و دوزی</p>
                                                <p className={styles['description']}>دقایقی پیش   |   قرچک، تهران</p>
                                            </Col>
                                        </Col>
                                        <Col md={3}>
                                            <Col md={12} className={styles['result']}>
                                                <img src="/images/test1.png" alt=""/>
                                                <p className={styles['title']}>طراح لباس پوشاک زنانه و دوزی</p>
                                                <p className={styles['description']}>دقایقی پیش   |   قرچک، تهران</p>
                                            </Col>
                                        </Col>
                                        <Col md={3}>
                                            <Col md={12} className={styles['result']}>
                                                <img src="/images/test1.png" alt=""/>
                                                <p className={styles['title']}>طراح لباس پوشاک زنانه و دوزی</p>
                                                <p className={styles['description']}>دقایقی پیش   |   قرچک، تهران</p>
                                            </Col>
                                        </Col>
                                        <Col md={3}>
                                            <Col md={12} className={styles['result']}>
                                                <img src="/images/test1.png" alt=""/>
                                                <p className={styles['title']}>طراح لباس پوشاک زنانه و دوزی</p>
                                                <p className={styles['description']}>دقایقی پیش   |   قرچک، تهران</p>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                    </Col>

                </main>
            </div>
        </EmployeeLayout>
    )
}
