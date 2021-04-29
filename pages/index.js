import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";

export default function Home() {
  return (
      <DefaultLayout headerImg='/headers/home-header.png'>
        <div className={styles.container}>
          <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>

              {/*add sub header*/}
              <div className={styles['sub-header']}>
                  <div className='row'>
                      <div className={"col-md-6"}>
                          <p>
                              left div
                          </p>
                      </div>
                      <div className={"col-md-6 d-flex justify-content-end"}>
                          <Navbar />
                      </div>
                  </div>
              </div>

              this is main
          </main>
        </div>
      </DefaultLayout>
  )
}
