import Head from 'next/head'
import styles from '../styles/home.module.scss'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";
import Link from 'next/link'

export default function Home() {
  return (
      <DefaultLayout
          headerImg='/images/home/header.png'
          title={['PROPERTIES IN KINGSTON', '& SURROUNDING AREAS']} >
        <div>
          <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>

              {/* sub header */}
              <div className="sub-header">
                  <div className={"row m0 " + styles.header}>
                      <div className={"col-md-6 col-sm-12"}>
                          <img src="/images/home/google.png" className='justify-content-center'/>
                      </div>
                      <div className={"col-md-6 order-first order-md-last  d-flex justify-content-end"}>
                          <Navbar />
                      </div>
                  </div>
              </div>

              {/* list */}
              <div className='full-width'>
                  <div className='row m0'>
                      <div className={"col-md-3 col-sm-6 " + styles["list-container"]}>
                          <img src="/images/home/buy.jpg" alt=""/>
                          <div className={"d-flex full-height " + styles["blur-header"]}>
                              <p className='align-self-center'>BUY</p>
                          </div>
                      </div>
                      <div className={"col-md-3 col-sm-6 " + styles["list-container"]}>
                          <img src="/images/home/rent.jpg" alt=""/>
                          <div className={"d-flex full-height " + styles["blur-header"]}>
                              <p className='align-self-center'>RENT</p>
                          </div>
                      </div>
                      <div className={"col-md-3 col-sm-6 " + styles["list-container"]}>
                          <img src="/images/home/sell.jpg" alt=""/>
                          <div className={"d-flex full-height " + styles["blur-header"]}>
                              <p className='align-self-center'>SELL</p>
                          </div>
                      </div>
                      <div className={"col-md-3 col-sm-6 " + styles["list-container"]}>
                          <img src="/images/home/landlords.jpg" alt=""/>
                          <div className={"d-flex full-height " + styles["blur-header"]}>
                              <p className='align-self-center'>LANDLORDS</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* about */}
              <div className='full-width'>
                  <div className={"d-flex row m0 " + styles["about"]}>
                      <div className={"col-md-5 col-sm-12 " + styles['about-left-section']}>
                          <p>
                              <span className='orange-color'>
                                ABOUT
                                </span>
                              <br/>
                              CARRINGTONS
                          </p>
                          <p>About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.<br />
                          </p>
                          <p>
                              Volorem ossuntibus plam, si optatias es molores toreritat enest ipit, busam dolupturione alit
                          </p>
                          <Link href="/">
                              <a>
                                  Read More &raquo;
                              </a>
                          </Link>
                      </div>
                      <div className={"col-md-7 col-sm-0 " + styles["about-right-section"]}>
                          <img src="/images/home/about.jpg" />
                      </div>
                  </div>
              </div>
          </main>
        </div>
      </DefaultLayout>
  )
}
