import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import DefaultLayout from '../layout/default-layout'

export default function Home() {
  return (
      <DefaultLayout headerImg='/headers/home-header.png'>
        <div className={styles.container}>
          <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
              this is main
          </main>
        </div>
      </DefaultLayout>
  )
}
