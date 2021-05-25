import React from "react"
import styles from './footer.module.scss'
import {Col, Row, InputGroup, FormControl} from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => {

    return(
        <div>
            <Col md={12} className={styles['footer']}>
                <Col md={{span:8, offset:2}} className={styles['register']}>
                    <Row>
                        <Col md={4} sm={12} className="d-flex align-items-center">
                            <p className={styles['title']}> عضویت در <div class="w-100 d-none d-md-block"/>خبرنامه مداجاب</p>
                        </Col>
                        <Col md={8} sm={12} className="d-flex align-items-center">
                            <InputGroup className={styles['input-group']}>
                                <FormControl
                                    type="text"
                                    placeholder="ایمیل خود را وارد نمایید ..."
                                    className={styles['input-group-prepend']}
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text className={styles['input-group-text']}>ارسال کنید</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col md={{span:10, offset:1}} className={'text-center pt4 pb4'}>
                    <Row className={styles['footer-phone']}>
                        <Col md={6} xs={6} className={styles.right}>
                           <p>
                               پشتیبانی آگهی
                           </p>
                            <p>
                                support@modajob.ir
                            </p>
                        </Col>
                        <Col md={6} xs={6} className={styles.left}>
                           <p>
                               پشتیبانی واتس آپ
                           </p>
                            <p>
                                09026621005
                            </p>
                        </Col>
                    </Row>
                    <Row className={styles.links}>
                        <Col md={3} sm={6} xs={6}>1</Col>
                        <Col md={3} sm={6} xs={6}>
                            <p className={styles.title}>مداجاب</p>
                            <Link href={''}>
                                <a>تماس با مداجاب</a>
                            </Link>
                            <Link href={''}>
                                <a>درباره ما مداجاب</a>
                            </Link>
                            <Link href={''}>
                                <a>همکاری با ما</a>
                            </Link>
                            <Link href={''}>
                                <a>وبلاگ</a>
                            </Link>
                        </Col>
                        <Col md={3} sm={6} xs={6}>
                            <p className={styles.title}>کارفرمایان</p>
                            <Link href={''}>
                                <a>درج آگهی استخدام</a>
                            </Link>
                            <Link href={''}>
                                <a>ورود به بخش کارفرمایان</a>
                            </Link>
                            <Link href={''}>
                                <a>سؤالات متداول</a>
                            </Link>
                            <Link href={''}>
                                <a>راهنمای استفاده</a>
                            </Link>
                        </Col>
                        <Col md={3} sm={6} xs={6}>
                            <p className={styles.title}>کارجویان</p>
                            <Link href={''}>
                                <a>فرصت های شغلی</a>
                            </Link>
                            <Link href={''}>
                                <a>ورود / ثبت‌نام کارجو</a>
                            </Link>
                            <Link href={''}>
                                <a> ایمیل‌های اطلاع‌رسانی</a>
                            </Link>
                            <Link href={''}>
                                <a>رزومه‌ساز آنلاین</a>
                            </Link>
                            <Link href={''}>
                                <a>آشنایی با شرکت‌ها</a>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Col>
            <Col className={styles["sub-footer"]}>
                <Row>
                    <Col md={{span:10, offset:1}}>
                        <Row>
                            <Col md={6} sm={7} className={"d-flex justify-content-start " + styles['right-container']}>
                                <p className='align-self-center'>
                                    تمامی حقوق این وبسایت برای مٌداجاب محفوظ است.
                                </p>
                            </Col>
                            <Col md={6} sm={5}  className={styles['left-container']}>
                                <p>
                                    Copyright 2018 modajob.com
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
