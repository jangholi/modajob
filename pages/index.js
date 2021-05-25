import Head from 'next/head'
import styles from '../styles/home.module.scss'
import DefaultLayout from '../layout/default-layout'
import React from "react";

export default function Home() {
  return (
      <DefaultLayout>
        <div>
          <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
              <p>h</p>
          </main>
        </div>
      </DefaultLayout>
  )
}
