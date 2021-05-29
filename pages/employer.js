import React from "react";
import Head from 'next/head';
import {Row, Col, Button} from 'react-bootstrap';
import DefaultLayout from '../layout/default-layout';
import styles from '../styles/employer.module.scss';

export default function Employer() {

    return (
        <DefaultLayout>
            <div>

                <Head>
                    <title>بخش کارفرمایان</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>

                    {/* ----------- employee ------------ */}
                    <Row className={'align-items-center ' + styles['employee']}>
                        <Col md={12}>
                            <h1 className={styles['title']}>نیروی متخصص بزرگترین سرمایه کسب و کار شماست.</h1>
                            <p>با درج آگهی استخدام در مداجاب، همین امروز فرصت شغلی شرکت خود را به متخصصان ایرانی اطلاع‌رسانی کنید</p>
                            <p>به مداجاب اعتماد کنید و بهترین ها را استخدام کنید.</p>
                            <Button  className={styles['add-advertise-btn']}>
                                درج |آگهی استخدام
                            </Button>
                            <p>انتشار اولین آگهی با 50٪ تخفیف</p>
                        </Col>
                    </Row>

                    {/* ----------- services ------------ */}
                    <Row className={'align-items-center ' + styles['advertise']}>
                        <Col md={12}>
                            <h1 className={styles['title']}>خدمات مداجاب</h1>
                            <p>با مداجاب تمام ابزارهای مورد نیاز برای استخدام یکجا در اختیار شماست و همیشه و همه‌جا به آن دسترسی دارید</p>
                            <ul>
                                <li>
                                    1 - ثبت فرصت شغلی و تعیین شرایط احراز
                                </li>
                                <li>
                                    2 - اطلاع رسانی فرصتهای شغلی به کارجویان هدف
                                </li>
                                <li>
                                    3 - دریافت رزومه های باکیفیت به همراه اطلاعاتی فراتر از رزومه شامل نمونه کار و...
                                </li>
                                <li>
                                    4 - بررسی اولیه رزومه ها در قالب یک پنل کاملا کاربردی و استاندارد
                                </li>
                                <li>
                                    5 - استخدام بهترین و متناسب ترین نیرو
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    {/* ----------- description ------------ */}
                    <Row className={'align-items-center ' + styles['description-section']}>
                        <Col md={12}>
                            <h1 className={styles['title']}>یک ابزار برای تمام نیازهای استخدامی</h1>
                            <p  className={styles['sub-title']}>
                                با مداجاب تمام ابزارهای مورد نیاز برای استخدام یکجا در اختیار شماست و همیشه و همه‌جا به آن دسترسی دارید
                            </p>

                            {/* ----------- items -------------- */}
                            <Row className={styles['items']}>
                                <Col md={4} className={styles['item-container']}>
                                    <p>سیستم آمارگیر آگهی</p>
                                    امکان تحلیل و بهینه‌سازی آگهی با استفاده از آمار دقیق.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>مدیریت رزومه‌های دریافتی</p>
                                    رزومه‌ها را در پنل شرکت خود مشاهده و آن‌ها را با پوشه‌ها دسته‌بندی کنید.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>تعیین وضعیت درخواست‌های همکاری</p>
                                     وضعیت درخواست متقاضی را از داخل جابینجا مدیریت کنید و به کارجو اطلاع دهید.
                                </Col>
                            </Row>
                            <Row className={styles['items']}>
                                <Col md={4} className={styles['item-container']}>
                                    <p>معرفی و تبلیغ برند کارفرمایی</p>
                                    فرهنگ سازمانی و محیط شرکت خود را از طریق گالری و نوشته به کارجویان نمایش دهید.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>جستجو در رزومه‌های دریافتی</p>
                                    در محتوای PDF، WORD و پروفایل متقاضیان به راحتی جستجوی پیشرفته انجام دهید.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>اضافه کردن همکاران به تیم استخدام</p>
                                    مسئولین استخدام و بررسی رزومه‌ها را به حساب شرکت اضافه کنید.
                                </Col>
                            </Row>
                            <Row className={styles['items']}>
                                <Col md={4} className={styles['item-container']}>
                                    <p>یادداشت گذاری بر روی رزومه‌ها</p>
                                    بر روی درخواست‌ها یادداشت بگذارید و با همکاران به گفتگو بپردازید.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>مدیریت رزومه‌های دریافتی</p>
                                    عکس‌های گرافیکی از آگهی برای انتشار در شبکه‌های اجتماعی تولید کنید.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>تعیین وضعیت درخواست‌های همکاری</p>
                                    تمامی فرصت‌های شغلی خود را با API جابینجا در وبسایتتان نمایش دهید.
                                </Col>
                            </Row>
                            <Row className={styles['items']}>
                                <Col md={4} className={styles['item-container']}>
                                    <p>به اشتراک گذاری درخواست‌های همکاری</p>
                                    رزومه متقاضی را با دریافت لینک یکتا با افراد خارج از حساب شرکت به اشتراک بگذارید.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>پشتیبانی درجه یک دریافت کنید</p>
                                    پشتیبانان جابینجا همواره از طریق تیکت، تماس تلفنی و چت آنلاین همراه شما هستند.
                                </Col>
                                <Col md={4} className={styles['item-container']}>
                                    <p>انتشار آگهی‌ کارآموزی و خارج تهران</p>
                                    آگهی‌های کارآموزی و یا خارج تهران را برای پویا شدن فضای اشتغال منتشر کنید.
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </main>

            </div>
        </DefaultLayout>
    )
}
