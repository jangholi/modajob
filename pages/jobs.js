import React from "react";
import Head from 'next/head';
import {Row, Col, Button, Form} from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { HiViewList } from "react-icons/hi";
import DefaultLayout from '../layout/default-layout';
import styles from '../styles/jobs.module.scss';
import Accordion from '../components/accordion'
import {BsBuilding} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FaBorderStyle} from 'react-icons/fa';
import {BiTimeFive} from 'react-icons/bi';


export default function Jobs() {
    const isUrgent = true;

    return (
        <DefaultLayout>
            <div>

                <Head>
                    <title>جستجوی مشاغل</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>

                  {/* ----------- searchbox ------------ */}
                  <Row className={'align-items-center ' + styles['searchbox']}>
                      <Col md={3}>
                          <BiSearchAlt2 />
                          <span>عنوان شغلی، مهارت یا ...</span>
                      </Col>
                      <Col md={3} className={styles['search-border']}>
                          <ImLocation />
                          <span>همه استان ها</span>
                      </Col>
                      <Col md={3} className={styles['search-border']}>
                          <HiViewList />
                          <span>همه دسته‌بندی‌ها</span>
                      </Col>
                      <Col md={3} className='p-0'>
                          <Button  className={styles['search-btn']}>
                              ثبت آگهی شغلی
                          </Button>
                      </Col>
                  </Row>

                  {/* ------------- result ----------------- */}
                  <Row>
                      <Col md={3} className={'pr0'}>
                          <Col md={12} className={styles['filter']}>
                              {/*{filter.map((e) => (*/}
                              {/*    <Accordion id={e}>*/}
                              {/*        <p className={styles['accordion-title']}> دسته‌بندی شغلی </p>*/}
                              {/*        <div>description</div>*/}
                              {/*    </Accordion>*/}
                              {/*))}*/}
                              <Accordion id={1}>
                                  <p className={styles['accordion-title']}> دسته‌بندی شغلی </p>
                                  <div className={styles['accordion-description']}>
                                      <div>
                                          <Form.Group as={Row}>
                                              <Col sm={{ span: 12 }}>
                                                  <Form.Check label="کامپیوتر، فناوری اطلاعات و اینترنت" />
                                              </Col>
                                          </Form.Group>
                                          <Form.Group as={Row}>
                                              <Col sm={{ span: 12 }}>
                                                  <Form.Check label=" تولید و صنایع تبلیغات " />
                                              </Col>
                                          </Form.Group>
                                      </div>
                                  </div>
                              </Accordion>
                              <Accordion id={2}>
                                  <p className={styles['accordion-title']}> استان </p>
                                  <div className={styles['accordion-description']}>
                                      <div>
                                          <Form.Group as={Row} controlId="formHorizontalCheck">
                                              <Col sm={{ span: 12 }}>
                                                  <Form.Check label=" تهران " />
                                              </Col>
                                          </Form.Group>
                                          <Form.Group as={Row} controlId="formHorizontalCheck">
                                              <Col sm={{ span: 12 }}>
                                                  <Form.Check label=" خراسان رضوی " />
                                              </Col>
                                          </Form.Group>
                                      </div>
                                  </div>
                              </Accordion>
                          </Col>
                      </Col>
                      <Col md={9} className={'pl-0'}>
                          <Col md={12} className={'p-0 mb20 ' + styles['result']}>
                              <Row className={styles['sort-container']}>
                                  <Col className='d-flex align-items-center'>
                                      فرصت ‌شغلی فعال یافت شد:
                                      19,209
                                  </Col>
                                  <Col className='text-right'>
                                      مرتب سازی :
                                      <Form.Control as="select" className={styles['select-filter']}>
                                          <option>جدیدترین ها</option>
                                          <option>1</option>
                                          <option>2</option>
                                      </Form.Control>
                                  </Col>
                              </Row>
                          </Col>

                          {/* ---------- result ----------- */}
                          <Col md={12} className={'p20 mb20 ' + styles['result']}>
                                <Row>
                                    <Col md={9}>
                                          <a href="/"  className='pull-right full-height ml20'>
                                            <img
                                                width='50'
                                                src="https://cdn.zeplin.io/5fa5b675047dce4c526c7c31/assets/1c742acc-710a-4bd2-85b9-bf41d9b6094e.png"
                                            />
                                        </a>
                                          <h3 className={styles['title']}>
                                              استخدام برشکار زیگزال دوز
                                          </h3>
                                          <p className={'mt30 ' + styles['description']}>
                                              <BsBuilding className='ml6 mt_5' />
                                              توسعه فناوری پیشرفته دکاموند | Dekamond Tech
                                          </p>
                                          <p className={'d-flex justify-content-between ' + styles['description']}>
                                              <span>
                                                   <HiOutlineLocationMarker className='ml6 mt_5' />
                                                  تهران
                                              </span>
                                              <span>
                                                   <FaBorderStyle className='ml6 mt_5' />
                                                  استایلیست
                                              </span>
                                              <span className={styles['time']}>
                                                   <BiTimeFive className='ml6'  />
                                                  بیرون بر
                                              </span>
                                            </p>
                                    </Col>
                                    <Col md={3} className='d-flex align-items-center justify-content-center'>
                                        <Button className={styles['send-cv-btn']}>ارسال رزومه</Button>
                                    </Col>
                                </Row>
                          </Col>

                          <Col md={12} className={(isUrgent && styles['urgent']) + ' p20 mb20 ' + styles['result']}>
                              <Row>
                                  <Col md={9}>
                                      <a href="/"  className='pull-right full-height ml20'>
                                          <img
                                              width='50'
                                              src="https://cdn.zeplin.io/5fa5b675047dce4c526c7c31/assets/1c742acc-710a-4bd2-85b9-bf41d9b6094e.png"
                                          />
                                      </a>
                                      <h3 className={styles['title']}>
                                          استخدام برشکار زیگزال دوز
                                          {isUrgent &&
                                          <span className={styles['urgent']}>استخدام فوری</span>
                                          }
                                      </h3>
                                      <p className={'mt30 ' + styles['description']}>
                                          <BsBuilding className='ml6 mt_5' />
                                          توسعه فناوری پیشرفته دکاموند | Dekamond Tech
                                      </p>
                                      <p className={'d-flex justify-content-between ' + styles['description']}>
                                              <span>
                                                   <HiOutlineLocationMarker className='ml6 mt_5' />
                                                  تهران
                                              </span>
                                          <span>
                                                   <FaBorderStyle className='ml6 mt_5' />
                                                  استایلیست
                                              </span>
                                          <span className={styles['time']}>
                                                   <BiTimeFive className='ml6'  />
                                                  بیرون بر
                                              </span>
                                      </p>
                                  </Col>
                                  <Col md={3} className='d-flex align-items-center justify-content-center'>
                                      <Button className={styles['send-cv-btn']}>ارسال رزومه</Button>
                                  </Col>
                              </Row>
                          </Col>
                      </Col>
                  </Row>

                </main>

            </div>
        </DefaultLayout>
    )
}
